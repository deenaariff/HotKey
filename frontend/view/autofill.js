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

});
