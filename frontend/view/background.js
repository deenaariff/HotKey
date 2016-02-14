window.addEventListener("storage", function(event) {


// delay
setTimeout(function() {

	// Trigers content.js (autofill)
	data_ = localStorage.getItem("data")
	data = localStorage.setItem("data_", data_)
	window.sendMessage("storage")

}, 1000);


});
