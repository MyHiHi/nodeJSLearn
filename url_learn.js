const peo = require('./src/greetings.js')
// peo.hello("哈儿")
// peo.welcome("MIkey ")
const url = require('url')
var r = url.format({
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com:8080',
    port: '8080',
    hostname: 'www.baidu.com',
    hash: '#level2',
    search: '?name=WangWei',
    query: { name: 'WangWei' },
    pathname: '/inedx.php',
    path: '/inedx.php?name=WangWei',
    href: 'https://www.baidu.com:8080/inedx.php?name=WangWei#level2' })
console.log(r)
console.log(url.parse(r))
console.log(url.resolve('http://www.baidu.com','api.html'))