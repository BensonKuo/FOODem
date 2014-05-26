var fs = require('fs');
//var Item = require('../models/item');

module.exports.index = function (req, res) {
  res.render('index', {title: 'Item Registration'});
}
