const userService = require('../service/userService')
const validateUser = async (ctx,next)=>{
  const {username,password} = ctx.request.body
  if(!username){
    return ctx.app.emit('error','用户名不能为空！',ctx)
  }else if(!password){
    return ctx.app.emit('error','密码不能为空！',ctx)
  }
  const rows = await userService.getUserByName(username)
  if(rows.length>0){
    return ctx.app.emit('error','用户名已存在！',ctx)
  }
  await next()
}


module.exports = {
  validateUser
}