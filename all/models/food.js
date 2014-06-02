//fOOD SCHENA IN Mmodels/food.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var FoodSchema = new Schema({

	Foodname:{type: String, required: true},
	FoodPosition:{type: String, required: true},
	FoodAvailable:{type:String, required: true},
	FoodPosition:{type: String, required: true},

	created:{type:Date, default:Date.now}
});



var Food = mongoose.model('Food',FoodSchema);