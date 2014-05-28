var fs = require('fs');
var accountsFilePathname = __dirname + '/accounts.json';

module.exports.create = function (account, callback){
	fs.readFile(accountsFilePathname, 'utf8', function (err, data){
		var accounts = [];
		if (!err && data.length) {
		      accounts = JSON.parse(data);
	    }		  
		accounts.splice(0,0,account);
		    for (var i = 0;i < accounts.length;i++){
					        accounts[i].id = i;				    
			}
		console.log('create success');
		fs.writeFile(accountsFilePathname, JSON.stringify(accounts), function(err){
			if(err){ throw err; }
			callback(account);
		});
	});
}
