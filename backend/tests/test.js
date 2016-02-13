var services = require('../mock-services.json');
var users = require('../mock-users.json'); 

var print = function (data) {

	for(var i = 0; i < users.length(); i++) {
		console.log(JSON.stringify(users[i]));
	}

	console.log("\n");

	for(var i = 0; i < services.length(); i++) {
		console.log(JSON.stringify(users[i]));
	}
};

var execute = function () {
	console.log("Started");
	print();
};

execute();