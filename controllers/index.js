var fs = require('fs');
var Account = require('../models/account');

module.exports.index = function (req, res) {
  res.render('index', {title: 'Item Registration'});
}



module.exports.createitem = function (req, res) {
  Item.create(req.body, function (Item) {
    res.json(Item);
  });
}

module.exports.load = function (req, res) {
  Item.load(req.body, function (Item) {
    res.json(Item);
  });
}

module.exports.createAccount = function (req, res){
	Account.create(req.body, function (Account) {
	    res.json(Account);
	});
}

