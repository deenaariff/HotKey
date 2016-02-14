var port

function clickHandler(e) {
    chrome.runtime.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function changeHostName(name) {
  document.getElementById('host').innerHTML=name;
}

$( document ).ready(function() {
	changeHostName("Ben Shukman");
	$("#button").click(function() {
		chrome.tabs.create({url:this.getAttribute('href')}, function(tab){
			port = chrome.tabs.connect(tab.id)
			port.sendMessage({please:"send"});

		});
	});
});
