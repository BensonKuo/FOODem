//mongoose setup
require('./db');

var express = require('express');
var routes = require('./routes');
var food = require('./routes/food'); //不知道要不要改?
var http = require('http');
var path = require('path');


var app = express();

app.get('/', routes.index);

//get all food
app.get('/users', );

//create a food
