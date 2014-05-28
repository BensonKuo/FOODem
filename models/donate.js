var fs = require('fs');
var itemsFilePathname = __dirname + '/donatedata.json';



//從json讀到動態牆  改成food
module.exports.load = function (food, callback) {
  fs.readFile(itemsFilePathname, 'utf8', function (err, data) {
    var foods = []
    if (!err) {
      foods = JSON.parse(data);
    }
    callback(foods);
  });
}


//新贈到json  改成food
module.exports.create = function (food, callback) {
  fs.readFile(itemsFilePathname, 'utf8', function (err, data) {
    var foods = []
    if (!err) {
      foods = JSON.parse(data);
    }
    
    food.id = foods.length;
    foods.splice(0,0,food);
    for (var i =0; i<foods.length; i++){
      foods[i].id = i;
    }
    console.log('create success');
    fs.writeFile(itemsFilePathname, JSON.stringify(foods), function (err) {
      if (err) { throw err; }

      callback(food);
    });
  });
}