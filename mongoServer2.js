var appy = require('./appy')
var http = require('http')
var express = require('express')
var app = express()
app.use(express.static('static'))
http.createServer(appy).listen(8060)

