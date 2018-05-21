var http = require('http')
var url  = require('url')
var ejs = require('ejs')
var path = require('path')
http.createServer((req,res)=>{

    var urlpath = url.parse(req.url).pathname;
    var staticPath ="views"
    urlpath=(urlpath=="/")?"/index.ejs":urlpath;
    if (path.extname(urlpath)=="" ){
        urlpath+=".ejs";
    } 
    var contentType={"Content-Type":"text/html;charset='utf8'"}
    res.writeHead(200,contentType)
    ejs.renderFile(staticPath+urlpath,{msg:"我是后台数据","list":[11,22,33]},(err,data)=>{
                    res.writeHead(200,contentType)
                    res.end(err?"not found":data);
    })
    // console.log("&&&&"+(staticPath+urlpath))
    // switch(urlpath){
    //     case "/index.ejs": ejs.renderFile(staticPath+urlpath,{msg:"我是后台数据","list":[11,22,33]},(err,data)=>{
    //             res.writeHead(200,contentType)
    //             res.end(err?"not found":data);
    //     });
    //     default: res.end("error");

    // }
}).listen(8080)