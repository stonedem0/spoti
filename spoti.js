const router = require('koa-router')();

const Koa = require('koa');
const app = new Koa();


router.get('/', async ctx => {
    ctx.body = 'Hello from test';
  })

  app.use(router.routes());

  
  app.listen(3000);