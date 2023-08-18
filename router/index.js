const fs = require('fs')

function useRoutes(){
  fs.promises.readdir(__dirname).then(files=>{
    files.forEach(file=>{
      if(!file.includes('index')){
        const router = require('./'+file)
        this.use(router.routes())
        this.use(router.allowedMethods())
      }
    })
  })
}

module.exports = useRoutes
