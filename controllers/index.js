var fs = require('fs');
var Account = require('../models/account');
var Donate = require('../models/donate');




module.exports.createitem = function (req, res) {
  Donate.create(req.body, function (donate) {
    res.json(donate;
  });
}

module.exports.load = function (req, res) {
  Donate.load(req.body, function (donate) {
    res.json(donate);
  });
}



module.exports.index = function (req, res) {
  res.render('index', {title: 'Item Registration'});
}


module.exports.createAccount = function (req, res){
	Account.create(req.body, function (Account) {
	    res.json(Account);
	});
}

