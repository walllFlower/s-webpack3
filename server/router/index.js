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

router.post('/login',async function(ctx, next){
    return passport.authenticate('local',
        function(err, user, info, status) {
            ctx.body = {user, err, info, status}
            return ctx.login({id: 1, username: 'admin', password: '123456'})
        })(ctx)
});

router.post('/api/form',async function(ctx, next){
    User.find(function(err,users){
        console.log(users);
    })

    ctx.status = 200;
    ctx.body = 'pass out';
})

module.exports = router;