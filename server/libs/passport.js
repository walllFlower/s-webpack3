const passport = require('koa-passport')
var LocalStrategy = require('passport-local').Strategy

const User = require('../model/user');

// 序列化ctx.login()触发
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ', user)
  done(null, user.id);
})
// 反序列化（请求时，session中存在"passport":{"user":"1"}触发）
passport.deserializeUser(async function(id, done) {
  console.log('deserializeUser: ', id)

  /**
   * 为什么不用findById:findById默认使用_id搜索，而这里作为session_id的是schema中的id
   */
  User.findOne({id: id}, function(err, user){
    done(err, user);
  })
})


// 提交数据(策略)
passport.use(new LocalStrategy({
  // usernameField: 'email',
  // passwordField: 'passwd'
}, function(username, password, done) {
  User.findOne({username: username}, function(err, user){

    //由特殊到一般的处理方式
    if(err) 
      return done(err);
    if(!user) 
      return done(null, false, {msg: 'user not exist'});
    if(user.password !== password) 
      return done(null, false, {msg: 'password error'});
    return done(null, user, {msg: 'success'});

    
    // if(user && user.password === password){
    //   done(null, user, {msg: 'success'})
    // }else if(user && user.password !== password){
    //   done(null, null,{msg: 'password wrong'})
    // }else {
    //   done(null, null, {msg: 'user not exist'})
    // }
  })
}))


module.exports = passport