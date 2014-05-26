var fs = require('fs');
var Account = require('../models/account');

module.exports.index = function (req, res) {
  res.render('index', {title: 'Item Registration'});
}

module.exports.createAccount = function (req, res){
	Account.create(req.body, function (Account) {
	    res.json(Account);
	});
}
