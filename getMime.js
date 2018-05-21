
var fs = require('fs')
exports.getMime=(extname)=>{
        switch(extname){
            case '.html': return 'text/html';
            case '.js': return 'text/javascript';
            case '.css': return 'text/css';
            default: return 'text/html';
        }

        // var data  = fs.readFileSync('./mime.json')
        // var Mimes = JSON.parse(data.toString())
        // return Mimes[extname] || 'text/html';
}