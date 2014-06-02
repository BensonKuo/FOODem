//require models

var mongoose = require('mongoose');
var Food = mongoose.model('Food');





new FoodDonate({
		Foodname: req.body.name
		FoodPosition:
		FoodAvailable:
		FoodPosition:

		supply_id       : supply_index++,
	    supplier_name	: req.body.name,
	    tel				: req.body.tel,
	    email			: req.body.email,
	    item_name		: req.body.item_name,
	    catogory   		: req.body.catogory,
	    amount	   		: req.body.amount,
	    credit	   		: req.body.credit,
	    face       		: face,
	    delivery   		: delivery,
      	updated_at 		: Date.now()
  	}).save( function ( err, need, count ){
    	if( err ) return next( err );
    	console.log('upload supply successfully');
    	var redirect = '<html><meta http-equiv="refresh" content="3;url=/home" />'
		var flash = '<h1>上傳成功!</h1></html>';
		res.end(redirect+flash);
  	});