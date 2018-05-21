var server   =  require('http')
var fs = require('fs')


// server.createServer((req,res)=>{
        
//         var pathName = req.url;
//         if (pathName=="/"){
//             pathName='/index.html'
//         }
//         fs.readFile('static'+pathName,(error,data)=>{
                
//                 res.writeHead(200,{"Content-Type":"text/html;charset='utf8'"});
//                 if (!error){
//                         res.write("<h1>欢迎</h1>")
//                         console.log(data+"****")
//                 }else{
//                     fs.readFile('static/404.html',(err,data)=>{
//                                 if (!err){
//                                     res.write(data)
//                                 }
//                     })
//                 }
                
//         })
//         // console.log(pathName)
//         // res.write("this is a server");
        
//         res.end();
// }).listen(8000)

// var path = require('path')
// var mime = require('./getMime')
// var url = require('url')
// server.createServer(function(req,res){
    
//     var pathName = url.parse(req.url).pathname
//     var base = 'static'
//     if (pathName=='/' || pathName=='/index'){
//         pathName = base+'/index.html'
//     }else{
//         pathName = base+pathName
//     }
//     var extPath = path.extname(pathName)

    
//     res.writeHead(200,{"Content-Type":mime.getMime(extPath)+";charset='utf8'"});
//     fs.readFile(pathName,(error,data)=>{
//             if (!error){
//                 res.write(data);
//                 res.end();
//             }else{
//                 fs.readFile(base+'/404.html',(error,data)=>{
//                             if (!error){
//                                 res.write(data);
//                                 res.end();
//                             }
//                 })
//             }
//     })
   
// }).listen(8000)

var url=require('url')
var server1 = require('./server1')
server.createServer((req,res)=>{
        server1.myserver(req,res,"static");
        
}).listen(8080);