const bodyparser = require('koa-bodyparser')
const Koa = require('koa')
const app = new Koa()
const useRoutes = require('../router')

app.use(bodyparser())
useRoutes.call(app)

app.on('error',(err,ctx)=>{
  console.log(err);
  ctx.body = {
    errNo:1,
    errMsg:err,
    resultData:{}
  }
})

module.exports = app
