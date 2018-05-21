var fs =  require('fs')
// async:
// fs.readFile('file.txt','utf-8',function(error,data){
//     if (error){
//         console.log("read file fails :",error);

//     }else{
//         console.log(data);
//     }
// })

// console.log("end")




// sync:
var data = fs.readFileSync('file.txt','utf8');
console.log(data);
console.log("end");

var pa = require('somePag')
pa.say()