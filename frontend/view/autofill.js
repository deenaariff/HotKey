console.log("hello");
chrome.runtime.onMessage.addListener(function(e) {
	alert(e)
});

