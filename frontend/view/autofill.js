$( document ).ready(function(){
	alert("testing outside");
	chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
		alert("testing");
		sendResponse("response....");
	});
});

