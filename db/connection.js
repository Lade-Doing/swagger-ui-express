const data = require('./config')
const mysql = require('mysql')

var db = mysql.createConnection(data)

db.connect( (err) => {
    if (err) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功')
    }
})

db.async = {} //创建一个空对象
db.async.all = (sql,params)=>{
    return new Promise((resolve,reject)=>{
        db.query(sql,params,(err,rows) => {
            resolve({err,rows})
        })
    })
}

module.exports={
    db
}