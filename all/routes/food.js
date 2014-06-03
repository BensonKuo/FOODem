//require models

var mongoose = require('mongoose');
var Food = mongoose.model('Food');


//要執行的function寫這理
//新增一筆DB資料
new FoodDonate({
		
		Name	: req.body.Name,
	    Position: req.body.Position,
	    Deadline: req.body.Deadline,
	    Description:req.body.Description,	    
	    created 		: Date.now()
  	}).save( function ( err, need, count ){
    	if( err ) return next( err );
    	console.log('upload supply successfully');
    	var redirect = '<html><meta http-equiv="refresh" content="3;url=/home" />'
		var flash = '<h1>上傳成功!</h1></html>';
		res.end(redirect+flash);
  	});