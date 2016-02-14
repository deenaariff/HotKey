var port = chrome.runtime.connect({name: "autofill"});
port.onMessage.addListener(function(message, sender) {
	if(message.greeting == "hello") {
		alert(message.greeting);
		chrome.extension.getBackgroundPage().alert("hi");
	}
});



// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
// 		console.log(sender.tab ?
// 			"content script:" + sender.tab.url : "from the ext")
// 		if(request.autofill == "true") {
// 			document.getElementsByName("email").val("HELLO FROM SCRIPT");
// 			sendResponse({ack: "goodbye"})
// 			chrome.extension.getBackgroundPage().alert(response.ack);
// 			console.log(response.ack);
// 			alert("hi");
// 		}
// 	}
// );
