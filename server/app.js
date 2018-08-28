const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser')();
const static = require('koa-static');
const logger = require('koa-logger')();
const session = require('koa-session')

//token验证有关
// const jwt = require('jsonwebtoken')
// const jwtKoa = require('koa-jwt')
// const key = require('./key.js').key;

// const errorHandler = require('./middlewares/errorHandler');

const passport = require('./libs/passport.js');
const app = new Koa();

const router = require('./router'); //路由

/* 注意中间件的顺序 */
app.use(logger);

app.use(bodyParser); //解析post请求体

app.keys = ['123456'];
app.use(session({
    cookie: {secure: false, maxAge:86400000},
  }, app));

app.use(passport.initialize())
app.use(passport.session())

app.use(static(path.join(__dirname, '../dist/')));  //静态资源

// app.use(jwtKoa({secret: key}).unless({
//     path:/\/api\/login/
// }));

app.use(router.routes()); //开启router中间件

app.listen(3001);