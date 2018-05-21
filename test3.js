
var mongodb = require('mongodb')
var http =require('http')
var url =require('url')
var mongoUrl  ='mongodb://localhost:27017/admin';

var dbName = 'admin',tName = 'user5'
http.createServer((req,res)=>{
    var name= url.parse(req.url,true).query.name
       var pwd = url.parse(req.url,true).query.pwd
       console.log('name = '+name)
    update(res,name,pwd)
}).listen(8070)

function update(res,name,pwd){
    mongodb.connect(mongoUrl,(err,client)=>{
        if (err){
            console.log('*********',name,'******',pwd)
            console.log(err)
            res.end("<script>alert('fail')</script>")
            return ;
        }
            var db  = client.db(dbName).collection(tName)
            var msg = {'name':name,'pwd':pwd}
            db.insert(msg,(err,data)=>{
                if (err){
                    res.end("alert('charu失败')")
                    return ;
                }
                res.end("<script>alert('success')</script>")
            })
    })
}