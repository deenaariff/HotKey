<<<<<<< HEAD
var port = chrome.runtime.connect({name: "autofill"});
port.onMessage.addListener(function(message, sender) {
	if(message.greeting == "hello") {
		alert(message.greeting);
		chrome.extension.getBackgroundPage().alert("hi");
	}
});


$( document ).ready(function(){
	
	$.get("https://localhost:3000/getData", function(data){
  		alert("Data: " + data);
	});

=======
window.addEventListener("storage", function(event) {
	alert("HELLO STORAGE");
	//login with data here...
>>>>>>> 0aa2e590ee15f61ab47a86d3234bac57a918450a
});
