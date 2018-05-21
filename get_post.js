var http = require('http')
var url  = require('url')
var ejs = require('ejs')
var fs = require('fs')
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
    
    var method =req.method.toLowerCase()
    var query ;
    if (method=='get'){
        query= url.parse(req.url,true).query
            console.log("^^^555^^^",query)
    }
            
    else{
        query=""
        req.on('data',(chunk)=>{
            query+=chunk
    })
    req.on('end',(err,data)=>{
            if (!err){
                query = query.toString()
                // fs.writeFileSync('login.txt',query)
                fs.appendFileSync('login.txt',query)
            }
    })
    }
    
    var ans={
        query:query,
        method:method
    }
    ejs.renderFile(staticPath+urlpath,ans,(err,data)=>{
        console.log("*****",staticPath+urlpath)
                    res.writeHead(200,contentType)
                 
                    res.end(err?"not found":data);
    })
}).listen(8080)
