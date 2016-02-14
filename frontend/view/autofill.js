var port = chrome.runtime.connect({name: "autofill"});
port.onMessage.addListener(function(message, sender) {
	if(message.greeting == "hello") {
		alert(message.greeting);
		chrome.extension.getBackgroundPage().alert("hi");
	}
});


$( document ).ready(function(){
	alert("testing outside");
	chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
		alert("testing");
		sendResponse("response....");
	});
});
