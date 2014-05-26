var fs = require('fs');
var Account = require('../models/account');

module.exports.index = function (req, res) {
  res.render('index', {title: 'Item Registration'});
}

<<<<<<< HEAD



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
=======
module.exports.createAccount = function (req, res){
	Account.create(req.body, function (Account) {
	    res.json(Account);
	});
}
>>>>>>> 3b84a02b3e13dd86b3ef08f1caebfd59dfba9542
