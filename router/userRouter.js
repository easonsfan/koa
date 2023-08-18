const userRouter = require('koa-router')()
const { validateUser } = require('../middleware/validateUser.js')
const { getUserList,getUserById,addUser,deleteUser } = require('../controller/userController')
userRouter.get('/',(ctx, next)=>{
  ctx.body = 'hello'
})
userRouter.get('/getUserList', getUserList)
userRouter.get('/getUser/:id', getUserById)
userRouter.post('/addUser', validateUser,addUser)
userRouter.post('/deleteUser', deleteUser)

module.exports = userRouter
