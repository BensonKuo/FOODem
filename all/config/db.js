//Database configs in db.js

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');


//Error handler
mongoose.connection.on('error', function (err){
	console.log(err)
});


//connection established
mongoose.connection.once('open',function(){
	console.log('database connected!')
});


//require models schema
require('./models/food');