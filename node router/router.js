var http = require('http')
var url = require('url')

var model={}
model.get={}
model.post={}
var app = (req,res)=>{
    var pathName = url.parse(req.url).pathname
    var path1 = pathName.replace('/','')
    if (!pathName.endsWith('/')) pathName+='/';
   
    console.log("******", model[path1][pathName])
    if (model[path1][pathName]){
       
            model[path1][pathName](req,res);
    }else{
        res.end('not found')
    }
}
app.get = (args,callback)=>{
    if (!args.startsWith('/')) args ='/'+args;
    if (!args.endsWith('/')) args+='/';
    model['get'][args]=callback
}
app.post = (args,callback)=>{
    if (!args.startsWith('/')) args ='/'+args;
    if (!args.endsWith('/')) args+='/';
    model['post'][args]=callback
}

http.createServer(app).listen(8080)
app.get('login',(req,res)=>{
        res.end('login')
})
app.get('register',(req,res)=>{
    res.end('register')
})