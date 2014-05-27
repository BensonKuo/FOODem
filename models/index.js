var fs = require('fs');
var itemsFilePathname = __dirname + '/items.json';



//從json讀到動態牆
module.exports.load = function (item, callback) {
  fs.readFile(itemsFilePathname, 'utf8', function (err, data) {
    var items = []
    if (!err) {
      items = JSON.parse(data);
    }
    callback(items);
  });
}


//新贈到json
module.exports.create = function (item, callback) {
  fs.readFile(itemsFilePathname, 'utf8', function (err, data) {
    var items = []
    if (!err) {
      items = JSON.parse(data);
    }
    
    item.id = items.length;
    items.splice(0,0,item);
    for (var i =0; i<items.length; i++){
      items[i].id = i;
    }
    console.log('create success');
    fs.writeFile(itemsFilePathname, JSON.stringify(items), function (err) {
      if (err) { throw err; }

      callback(item);
    });
  });
}