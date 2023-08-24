const promisePool = require('../database')
class UserService{
  async getUserList(){
    const sql = 'SELECT u.id id, u.name name From user as u'
    const [rows] = await promisePool.execute(sql)
    return rows
  }
  async getUserById(id){
    const sql = 'SELECT u.id id, u.name name From user as u WHERE id = ' + id
    const [rows] = await promisePool.execute(sql)
    return rows
  }
  async getUserByName(name){
    try{
      const sql = `SELECT u.id id, u.name name From user as u WHERE u.name = '${name}'`
      const [rows] = await promisePool.execute(sql)
      return rows
    }catch(error){
      throw error
    }
    
  }
  async addUser(name,password){
    const sql1 = `INSERT INTO user (name,password) VALUES ('${name}','${password}')`
    const [res] = await promisePool.execute(sql1)
    const sql2 = 'SELECT u.id id, u.name name From user as u WHERE id = ' + res.insertId
    const [rows] = await promisePool.execute(sql2)
    return rows
  }
  async updateUser(id,name,password){
    const sql = `UPDATE user set name='${name}',password='${password||''}' WHERE id=${id}` 
    const [res] = await promisePool.execute(sql)
    if(res.affectedRows>0){
      const rows = await this.getUserById(id)
      return rows
    }
  }
  async deleteUser(id){
    const sql = 'DELETE FROM user WHERE id = ' + id 
    const [res] = await promisePool.execute(sql)
    return res
  }
}

module.exports = new UserService()