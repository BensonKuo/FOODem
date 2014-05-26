var fs = require('fs');
//var Item = require('../models/item');

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