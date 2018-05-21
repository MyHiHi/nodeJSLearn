var url = require('url')
var fs = require('fs')
var path = require('path')
function getExtPath(extname){
        var r = fs.readFileSync('meme.json')
        return JSON.parse(r)[extname]
}
exports.myserver=(req,res,staticPath)=>{
        var urlPath = url.parse(req.url).pathname
        if (urlPath=="/" || urlPath == "/index"){
            urlPath = staticPath+'/index.html'
        }else{
            urlPath = staticPath+urlPath;
        }
        var extname = path.extname(urlPath)
        var contentType
        if(extname==""){
            urlPath+=".html";
             contentType={"Content-Type":"text/html;charset='utf8'"}
        }
        else contentType = {"Content-Type":getExtPath(extname)+";charset='utf8'"}
        fs.readFile(urlPath,(err,data)=>{
                if (!err){
                    res.writeHead(200,contentType);
                    // res.write(data);
                    res.end(data);
                }else{
                    fs.readFile(staticPath+'/404.html',(err,data)=>{
                                if (!err){
                                    res.writeHead(200,contentType);
                                    // res.write(data);
                                    res.end(data);
                                }
                    })
                }
        })

}