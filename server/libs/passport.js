const passport = require('koa-passport')
var LocalStrategy = require('passport-local').Strategy

const User = require('../model/user');

// 序列化:将环境中的user.id序列化到session中，即sessionID，同时它将作为凭证存储在用户cookie中
// 在passport验证通过之后的回调函数中 通过ctx.login()调用
passport.serializeUser(function(user, done) {
  console.log('serializeUser: ', user.id)
  done(null, user.id);
})

// 反序列化:在用户稍后请求接口时调用，将请求中的sessionID上传，从数据库中查询user并存储与req.user中
passport.deserializeUser(async function(id, done) {
  console.log('deserializeUser: ', id)
  /**
   * 为什么不用findById:findById默认使用_id搜索，而这里作为session_id的是schema中的id
   */
  User.findOne({id: id}, function(err, user){
    done(err, user);
  })
})


// 提交数据(策略) 再登录接口中通过passport.authenticate('local',function(){})调用
passport.use(new LocalStrategy({
  // usernameField: 'email', 对应的值是body当中上传的参数
  // passwordField: 'passwd'
}, function(username, password, done) {
  User.findOne({username: username}, function(err, user){

    //由特殊到一般的处理方式
    if(err) return done(err);
    if(!user) 
      return done(null, false, {msg: 'user not exist'});
    if(user.password !== password) 
      return done(null, false, {msg: 'password error'});
    return done(null, user, {msg: 'success'});

  })
}))


module.exports = passport