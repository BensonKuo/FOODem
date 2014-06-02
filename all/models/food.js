//fOOD SCHENA IN Mmodels/food.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var FoodSchema = new Schema({

	Name:{type: String, required: true},
	Place:{type: String, required: true},
	Deadline:{type:String, required: true},
	Description:{type: String, required: true},

	created:{type:Date, default:Date.now}
});


//把schema轉為model
var Food = mongoose.model('Food',FoodSchema);