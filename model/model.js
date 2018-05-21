
var ejs = require('ejs')

module.exports={
    login:(req="",res="")=>{
        console.log('7777777login')
        ejs.renderFile('./views/login.ejs',(err,data)=>{
            if (!err){
                res.end(data) 
            }else{
                console.log("EE")
            }
        })
        
    },
    register:(req="",res="")=>{
        res.end('register')
    },
    home:(req="",res="")=>{
        res.end('home')
    }
}