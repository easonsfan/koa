const userService = require('../service/userService')
class UserController{
  async getUserList(ctx,next){
    const userList = await userService.getUserList()
    ctx.body = {
      errNo:0,
      errMsg:'',
      resultData:userList.sort((a,b)=>a.id-b.id)
    }
  }
  async getUserById(ctx,next){
    const res = await userService.getUserById(ctx.params.id)
    ctx.body = {
      errNo:0,
      errMsg:'',
      resultData:res
    }
  }
  // async getUserByName(ctx,next){
  //   const res = await userService.getUserByName(ctx.params.name)
  //   ctx.body = {
  //     errNo:0,
  //     errMsg:'',
  //     resultData:res
  //   }
  // }
  async addUser(ctx,next){
    const {username,password} = ctx.request.body
    const res = await userService.addUser(username,password)
    ctx.body = {
      errNo:0,
      errMsg:'',
      resultData:res
    }
  }
  async deleteUser(ctx,next){
    const { id } = ctx.request.body
    const rows = await userService.getUserById(id)
    if(rows.length==0){
      ctx.body = {
        errNo:0,
        errMsg:'用户不存在或已删除！',
        resultData:{}
      }
    }else{
      await userService.deleteUser(id)
      ctx.body = {
        errNo:0,
        errMsg:'',
        resultData:rows
      }
    }
    
  }
}

module.exports = new UserController()