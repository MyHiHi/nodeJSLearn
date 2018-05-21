var http = require('http')
var url  = require('url')
var ejs = require('ejs')
var path = require('path')
var mongoApi = require('./mongoServerApi')

 module.exports=(req,res)=>{
    
 
    var urlpath = url.parse(req.url).pathname;
    var dirName = urlpath.replace('/','')
    var personName = url.parse(req.url,true).query.name
    var staticPath ="views"
    urlpath=(urlpath=="/")?"/index.ejs":urlpath;
    if (path.extname(urlpath)=="" ){
        urlpath+=".ejs";
    } 
    var contentType={"Content-Type":"text/html;charset='utf8'"}
    res.writeHead(200,contentType)
    ejs.renderFile(staticPath+urlpath,{},(err,data)=>{
        console.log(staticPath+urlpath)
                    res.writeHead(200,contentType)
                    // console.log(dirName)
                  if(dirName=='add'){
                            mongoApi.add(res)
                    }else if(dirName=='update'){
                        mongoApi.update(res)
                    } else if(dirName=='delete'){
                                mongoApi.delete(res,personName)
                    } else if (dirName=='find'){
                        mongoApi.find(res)
                    }else if (!err){
                        res.end(data)
                    }else {
                        res.end('not found')
                    }
    })
}