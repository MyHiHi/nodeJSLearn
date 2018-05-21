var fs =require('fs')
// fs.readFile('package.json',function(err,data){
//     if (!err){
//         console.log(data.toString());
//     }
// })

// fs.stat('upload',function(error){
//     if (error){
//             fs.mkdir('upload')
//     }else{
//         console.log('fails')
//     }
// })

// var arr=[]
// fs.readdir('../MY COde',function(error,files){
//     if (!error){
//        (function getFile(i){
//                 if (i==files.length){  
//                     console.log("目录是 ",arr);
//                     return ;
//                 }
//                 fs.stat(files[i],function(error,stats){
//                     if (!error && stats.isDirectory()){
//                         arr.push(files[i]);
//                         console.log(files[i]);
                       
//                     }
                    
//                 })
//                 getFile(i+1);
//        })(0)
       
//     }
// })

// for (var r=0;r<4;r++){
//     // setTimeout(() => {
//     //     (function (r){
//     //         arr.push(r)
//     //     })(r)
//     // }, 100);
//     arr.push(r)
// }
// console.log(arr)

var readStream = fs.createReadStream('hello.js')
var writeStream = fs.createWriteStream('test.js')

str= ""
var con=0;
readStream.on('data',function(chunk){
        str +=chunk;
        writeStream.write(str,'utf8')
        for (var r=0;r<100;r++){
            writeStream.write(chunk,'utf8');
        }
        writeStream.end()
        writeStream.on('finish',()=>{
            console.log("写入完成")
        })
        con++;
})

readStream.on('end',function(){
        console.log(str)
       console.log(con)
})


readStream.on('error',function(){
    console.log('read Fails')
})

// fs.unlink('test.txt')

var r = fs.createReadStream('test.js')
var co=0;

r.on('data',function(chunk){
        co++;
})
r.on('end',function(){
    console.log("*******"+co)
})



var fs =require('fs')
// fs.readFile('package.json',function(err,data){
//     if (!err){
//         console.log(data.toString());
//     }
// })

// fs.stat('upload',function(error){
//     if (error){
//             fs.mkdir('upload')
//     }else{
//         console.log('fails')
//     }
// })

// var arr=[]
// fs.readdir('../MY COde',function(error,files){
//     if (!error){
//        (function getFile(i){
//                 if (i==files.length){  
//                     console.log("目录是 ",arr);
//                     return ;
//                 }
//                 fs.stat(files[i],function(error,stats){
//                     if (!error && stats.isDirectory()){
//                         arr.push(files[i]);
//                         console.log(files[i]);
                       
//                     }
                    
//                 })
//                 getFile(i+1);
//        })(0)
       
//     }
// })

// for (var r=0;r<4;r++){
//     // setTimeout(() => {
//     //     (function (r){
//     //         arr.push(r)
//     //     })(r)
//     // }, 100);
//     arr.push(r)
// }
// console.log(arr)

var readStream = fs.createReadStream('hello.js')
var writeStream = fs.createWriteStream('test.js')

str= ""
var con=0;
readStream.on('data',function(chunk){
        str +=chunk;
        writeStream.write(str,'utf8')
        for (var r=0;r<100;r++){
            writeStream.write(chunk,'utf8');
        }
        writeStream.end()
        writeStream.on('finish',()=>{
            console.log("写入完成")
        })
        con++;
})

readStream.on('end',function(){
        console.log(str)
       console.log(con)
})


readStream.on('error',function(){
    console.log('read Fails')
})

// fs.unlink('test.txt')

var r = fs.createReadStream('test.js')
var co=0;

r.on('data',function(chunk){
        co++;
})
r.on('end',function(){
    console.log("*******"+co)
})



var fs =require('fs')
// fs.readFile('package.json',function(err,data){
//     if (!err){
//         console.log(data.toString());
//     }
// })

// fs.stat('upload',function(error){
//     if (error){
//             fs.mkdir('upload')
//     }else{
//         console.log('fails')
//     }
// })

// var arr=[]
// fs.readdir('../MY COde',function(error,files){
//     if (!error){
//        (function getFile(i){
//                 if (i==files.length){  
//                     console.log("目录是 ",arr);
//                     return ;
//                 }
//                 fs.stat(files[i],function(error,stats){
//                     if (!error && stats.isDirectory()){
//                         arr.push(files[i]);
//                         console.log(files[i]);
                       
//                     }
                    
//                 })
//                 getFile(i+1);
//        })(0)
       
//     }
// })

// for (var r=0;r<4;r++){
//     // setTimeout(() => {
//     //     (function (r){
//     //         arr.push(r)
//     //     })(r)
//     // }, 100);
//     arr.push(r)
// }
// console.log(arr)

var readStream = fs.createReadStream('hello.js')
var writeStream = fs.createWriteStream('test.js')

str= ""
var con=0;
readStream.on('data',function(chunk){
        str +=chunk;
        writeStream.write(str,'utf8')
        for (var r=0;r<100;r++){
            writeStream.write(chunk,'utf8');
        }
        writeStream.end()
        writeStream.on('finish',()=>{
            console.log("写入完成")
        })
        con++;
})

readStream.on('end',function(){
        console.log(str)
       console.log(con)
})


readStream.on('error',function(){
    console.log('read Fails')
})

// fs.unlink('test.txt')

var r = fs.createReadStream('test.js')
var co=0;

r.on('data',function(chunk){
        co++;
})
r.on('end',function(){
    console.log("*******"+co)
})



var fs =require('fs')
// fs.readFile('package.json',function(err,data){
//     if (!err){
//         console.log(data.toString());
//     }
// })

// fs.stat('upload',function(error){
//     if (error){
//             fs.mkdir('upload')
//     }else{
//         console.log('fails')
//     }
// })

// var arr=[]
// fs.readdir('../MY COde',function(error,files){
//     if (!error){
//        (function getFile(i){
//                 if (i==files.length){  
//                     console.log("目录是 ",arr);
//                     return ;
//                 }
//                 fs.stat(files[i],function(error,stats){
//                     if (!error && stats.isDirectory()){
//                         arr.push(files[i]);
//                         console.log(files[i]);
                       
//                     }
                    
//                 })
//                 getFile(i+1);
//        })(0)
       
//     }
// })

// for (var r=0;r<4;r++){
//     // setTimeout(() => {
//     //     (function (r){
//     //         arr.push(r)
//     //     })(r)
//     // }, 100);
//     arr.push(r)
// }
// console.log(arr)

var readStream = fs.createReadStream('hello.js')
var writeStream = fs.createWriteStream('test.js')

str= ""
var con=0;
readStream.on('data',function(chunk){
        str +=chunk;
        writeStream.write(str,'utf8')
        for (var r=0;r<100;r++){
            writeStream.write(chunk,'utf8');
        }
        writeStream.end()
        writeStream.on('finish',()=>{
            console.log("写入完成")
        })
        con++;
})

readStream.on('end',function(){
        console.log(str)
       console.log(con)
})


readStream.on('error',function(){
    console.log('read Fails')
})

// fs.unlink('test.txt')

var r = fs.createReadStream('test.js')
var co=0;

r.on('data',function(chunk){
        co++;
})
r.on('end',function(){
    console.log("*******"+co)
})



