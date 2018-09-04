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
 * 登录 调用passport.authenticate策略验证 回调函数中返回status和body
 */
router.post('/login',async function(ctx, next){
    return passport.authenticate('local',
        function(err, user, info, status) {
            if(user){
                ctx.status = 200;
                ctx.body = {
                    info
                }
                return ctx.login(user)
            }else{
                ctx.status = 404;
                ctx.body = {
                    info
                }
            }
        })(ctx)
});

/**
 * 注册
 */
router.post('/register',async function(ctx, next){
    const username = ctx.request.body.username,
          password = ctx.request.body.password;

    const user = await User.findOne({username}); //用await立即返回查询结果

    if(user){
        ctx.status = 404;
        ctx.body = {
            msg:'username exist'
        }
    }else{
        let id = Math.ceil(Math.random() * 1E6);
        const user = new User({id, username, password});
        user.save(function(err, user){
            if(err) console.log(err);
        })
    
        ctx.status = 200;
        ctx.body = {
            msg:'success'
        }
    }

})

router.post('/api/form',async function(ctx, next){
    ctx.status = 200;
    ctx.body = {
        user: ctx.state.user
    };
})

router.get('/api/bridge',async function(ctx, next){
    ctx.status = 200;
    ctx.type = 'application/json';
    ctx.body = {
        msg:'bridge success'
    };
})

module.exports = router;