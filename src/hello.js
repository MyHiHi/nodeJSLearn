var name;
// exports.setName=(name)=>{
//     this.name=name;
// }
// exports.hello = ()=>{
//     console.log("hello "+this.name);
// }

function hello(){
    var name;
    this.setName = (name)=>{
        this.name = name
    }
    this.sayHi=()=>{
        console.log("hi  "+this.name);
    }

}
// exports.hello=hello
module.exports=hello;