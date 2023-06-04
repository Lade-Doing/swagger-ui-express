const express = require('express')
const app = new express()
//引入路由
const Routers = require('./src/routes/index')
const swaggerDoc = require('./src/swagger/swaggerDoc')
app.use(express.json())
app.use('/test',(req,res)=>{
    res.json({
        msg:'测试成功'
    })
})
//解决跨域问题：
app.all('*', function (req, res, next) {
    //设置跨域允许访问的类型
    res.header('Access-Control-Allow-Origin', '*');
    //设置前端带过来的访问请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type,token');
    //设置请求方法
    res.header('Access-Control-Allow-Methods', '*');
    //设置参数传递的类型？是form-data形式还是json格式？
    // res.header('Content-Type', 'application/json;charset=utf-8');
    // 因为我还要上传图片，所以不能只用json格式,所以干脆不限制，让浏览器自动判断就行了。
    // res.header('Content-Type', 'multipart/form-data');
    next();
});



Routers(app)
swaggerDoc(app)

app.listen(3000)