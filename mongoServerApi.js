var mongodb = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/admin';

var http = require('http')
var url  = require('url')
const dbName = 'admin';
const tableName = 'user5'

module.exports.add = function(res){
    var express = require('express')
var app = express()
app.use(express.static('static'))
    mongodb.connect(mongoUrl,(err,client)=>{
        if (err){
            console.log("***********error*******")
            res.end("***********数据库连接失败*******")
            return ;
        }else{
            var db = client.db(dbName).collection(tableName)
            db.insertOne({'name':'Mppiky'},function(err,data){
                client.close();
                if (!err){
                    res.end("*******添加失败***********")
                    console.log("************ok***********")
                }else{
                    res.end("***********添加成功*******")
                    console.log("************fail***********")
                }
            })
        }
    })
}


module.exports.update = function(res){
    mongodb.connect(mongoUrl,(err,client)=>{
        if (err){
            console.log("***********error*******")
            res.end("***********数据库连接失败*******")
            return ;
        }else{
            var db = client.db(dbName).collection(tableName)
           
            db.update({'name':'Mppiky'},{$set:{'name':'Mike'}},(err,data)=>{
                client.close();
                if (!err){
                    res.end("***********更新成功*******")
                    console.log("************更新成功***********")
                }else{
                    res.end("***********更新失败*******")
                    console.log("************fail***********")
                }
            })
        }
    })
}



module.exports.delete = function(res,name){
    mongodb.connect(mongoUrl,(err,client)=>{
        if (err){
            console.log("***********error*******")
            res.end("***********数据库连接失败*******")
            return ;
        }else{
            var db = client.db(dbName).collection(tableName)
            db.deleteOne({'name':name},(err,data)=>{
                client.close();
                if (!err){
                    res.end("***********删除成功*******")
                    console.log("************删除成功***********")
                }else{
                    res.end("***********删除失败*******")
                    console.log("************fail***********")
                }
            })
        }
    })
}




var ejs=require('ejs')
module.exports.find = function(res){
    mongodb.connect(mongoUrl,(err,client)=>{
        if (err){
            console.log("***********error*******")
            res.end("***********数据库连接失败*******")
            return ;
        }else{
            var db = client.db(dbName).collection(tableName)
            var result = db.find({})
            result.toArray((err,data)=>{
                if (!err){
                    client.close();
                    console.log('查询ok')
                    ejs.renderFile('static/find.ejs',{'list':data},(err,data)=>{
                            if (err) {
                               
                                console.log(err)
                            }
                            else {
                                res.end(data)
                                console.log('查询成功')
                            }
                        
                    })
                }else{
                    res.end('查询失败')
                }
            })
            
        }
    })
}






