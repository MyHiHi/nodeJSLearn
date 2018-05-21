var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on("some",()=>{
    console.log("这是自定义事件");
});
// setInterval(()=>{
//     event.emit("some");
// },1000);
setTimeout(() => {
    event.emit('some');
}, 1000);

var hello =require('./hello.js');
console.log(hello);
var hello  = new hello()
hello.setName('米卡');
hello.sayHi();
// hello2 = require('./hello');
// // hello.setName("MIcky");
// hello2.hello();

var pa = require('somePag')
pa.say()