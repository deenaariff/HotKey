var test = require('./test.json'); 

var print = function (data) {
	console.log("Loaded Rescource..");

	var collection1 = data[0][0];
	var collection2 = data[0][1];


	console.log("Loaded Collections..");

	//var users = collection1[0];
	//var services = collection1[1];


	// Print Users
	//for(var i = 0; i < users.length(); i++) {
		//console.log(JSON.stringify(users[0]));
	//}

	console.log("\n");

	// Print Services
	//for(var i = 0; i < services.length(); i++) {
		//console.log(JSON.stringify(users[0]));
	//}
};

var execute = function () {
	console.log("Started");
	print(test);
};

execute();