//Router 處理request

var express = require('express');
var controllers = require('./controllers');
var app = express();

var host = '127.0.0.1';
var port = 3000;


//routing 決定用什麼方法request

app
.use(express.static(__dirname + '/all'))
.use(express.methodOverride());

app
.set('view engine', 'ejs')
.use(express.bodyParser())
.get('/', controllers.index)
.post('/accounts', controllers.createAccount)
.post('/donatedata',controllers.createitem)
.listen(port, host);
