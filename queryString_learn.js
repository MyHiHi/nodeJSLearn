const string  = require("querystring")
var object = {'name':'小敏',subjects:['nodejs','linux','go'],form:'小花'}
const fun = (r)=>{
    console.log(r)
}
var r1 = string.stringify(object,',',":");
fun(r1)
var r2 = string.parse(r1,',',':')
fun(r2)
// console.log(typeof("ddd"))