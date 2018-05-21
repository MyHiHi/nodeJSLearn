var fs = require('fs')
// var r = fs.createReadStream('test.js')
// var co=0;

// r.on('data',function(chunk){
//         co++;
//         console.log(chunk.length)
// })
// r.on('end',function(){
//     console.log("*******"+co)
// })

var readStream = fs.createReadStream('hello.js')
var writeStream = fs.createWriteStream('test.js')
for (var r=0;r<4;r++){
    readStream.pipe(writeStream)
}
console.log('ok')




