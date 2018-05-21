var fs = require('fs')
// console.log(1)
// fs.readFile('hello.js',(err,data)=>{
//         console.log(2)
// })
// console.log(3)

// function getInfo(callback){
//     fs.readFile('hello.js',(err,data)=>{
//         callback(data)
// })
// }

// console.log(getInfo((data)=>{
//         console.log(data.toString())
// }))


var events = require('events')
// console.log(events)
var event_emitter = new events.EventEmitter()

// event_emitter.on('parent',(data)=>{
//         console.log('parent接收到了广播: ',data);
//         console.log('child开始广播')
//         event_emitter.emit('child','broadcast info')
// })

// event_emitter.on('child',(data)=>{
//     console.log('child接收到了广播: ',data)
// })

// setTimeout(()=>{
//         console.log('开始广播')
//         event_emitter.emit('parent','广播信息')
    
// },2000)

get()
function get(){
    fs.readFile('hello.js',(err,data)=>{
        event_emitter.emit('part',data);
    })
}

event_emitter.on('part',(data)=>{
    console.log(data.toString())
})