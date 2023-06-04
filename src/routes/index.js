
//导入其他路由
const productList = require('./production')

// 导出
module.exports = (app)=>{
    app.use('/productList', productList)
}
