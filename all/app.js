//mongoose setup
require('./db');

var express = require('express');
var routes = require('./routes');
var food = require('./routes/food.js'); //不知道要不要改?
var http = require('http');
var path = require('path');


var app = express();

app.get('/', routes.index);

//get all food
app.get('/foods', food.list );

//create a food
app.post('/foods',food.create);

//show a food
app.get('/foods/:id', food.show);

//update a food
app.post('/foods/:id', food.update);

//delete a food
app.delete('/foods/:id', food.destroy);