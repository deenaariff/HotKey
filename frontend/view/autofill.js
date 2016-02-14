window.addEventListener("storage", function(event() {
	alert("HELLO STORAGE");

	/* DATA SCHEMA
		{
		  "login_page": "wolfram.com/login", 
		  "logout_page": "wolfram.com/logout", 
		  "password": "onetorulethemall", 
		  "username": "sarumanrules"
		}
	*/

	var login_page;
	var logout_page
	var passowrd;
	var username
	var data

	function parseData() {
		data = JSON.parse(data);
		login_page = data.login_page;
		logout_page = data.logout_page;
		username = data.username;
		password = data.password;
	}

	function setData (callback) {
		data = localStorage.getItem("data")
		callback();
	}

	function tests (callback) { 
		setData(parseData());

		console.log("Login: " + login_page);
		console.log("Logout: " + logout_page);
		console.log("Password: " + password);
		console.log("Username: " + username);

		callback();
	};

	tests(console.log("Tests Completed"));

});
