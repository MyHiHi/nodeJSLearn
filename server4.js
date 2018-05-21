var model = require('./model/model')
var url = require('url')
var fs = require('fs')
var path = require('path')
var http = require('http')
http.createServer((req,res)=>{
        var pathname = url.parse(req.url).pathname.replace('/','')
        try{
            res.writeHead(200,{"Content-Type":"text/html;charset='utf8'"})
            console.log('******',pathname)
            model[pathname](req,res)
        }catch(err){
            model['home'](req,res)

        }

}).listen(8080)