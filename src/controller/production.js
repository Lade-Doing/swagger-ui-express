const DBproduction = require('../model/DBproduction')

//查询所有记录
findAll=(req,res)=>{
    try{
        DBproduction.findAll().then(result=>{
            res.send(result)
        })
    }
    catch(e){
        res.send(e)
    }
}

//查询一条记录
findById=(req,res)=>{
    try{
        const data = req.query.id
        DBproduction.findById(data).then(result=>{
            res.send(result)
        })
    }
    catch(e){
        res.send(e)
    }
}

//增加一条记录
create = (req,res)=>{
    try{
        const data = req.body
        DBproduction.create(data).then(result=>{
            res.send(result)
        })
    }
    catch(e){
        res.send(e)
    }
}

module.exports = {
    findAll,
    findById,
    create
}