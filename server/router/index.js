const router = require('koa-router')();
const passport = require('../libs/passport.js');

const User = require('../model/user');

// router.all('/login',async function(ctx, next){
//     ctx.redirect('/login.html');
// });

router.use('/api/*', (ctx, next) => {
    if(ctx.isAuthenticated()) {
      next()
    } else {
     ctx.status = 401
     ctx.body = {
       msg: 'auth fail'
     }
   }
 });

/**
 * 登录
 */
router.post('/login',async function(ctx, next){
    return passport.authenticate('local',
        function(err, user, info, status) {
            ctx.body = {err, info, status}
            if(user){
                return ctx.login(user)
            }
        })(ctx)
});

/**
 * 注册
 */
router.post('/register',async function(ctx, next){
    const username = ctx.request.body.username,
          password = ctx.request.body.password;

    let id = Math.ceil(Math.random() * 1E6);
    const user = new User({id, username, password});
    user.save(function(err, user){
        if(err) console.log(err);
        else console.log('存储成功!')
    })

    ctx.response.status = 200;
    ctx.response.body = {
        msg:'注册成功'
    }
})

router.post('/api/form',async function(ctx, next){

    ctx.status = 200;
    ctx.body = {
        user: ctx.request.user
    };
})

module.exports = router;