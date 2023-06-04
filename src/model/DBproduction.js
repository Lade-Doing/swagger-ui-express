const { db } = require('../../db/connection.js')

//查询所有记录：
function findAll(){
    return new Promise((resolve,reject)=>{
        db.async.all('SELECT * FROM Production')
        .then(res=>{
            resolve(res)
        })
        .catch(err=>reject(err))
    })
}
//查询一条记录
function findById(id){
    return new Promise((resolve,reject)=>{
        db.async.all('SELECT * FROM Production WHERE id = ?',[id])
        .then(res=>{
            resolve(res)
        })
        .catch(err=>reject(err))
    })
}
//添加一条记录
function create(data){
    return new Promise((resolve,reject)=>{
        db.async.all('INSERT INTO Production SET ?',data)
        .then(res=>{
            resolve(res)
            console.log('插入成功')
        })
        .catch(err=>{
            reject(err)
        })
    })
}
module.exports = {
    findAll,
    findById,
    create
}