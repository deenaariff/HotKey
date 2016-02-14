function clickHandler(e) {
    chrome.runtime.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function changeHostName(name) {
  document.getElementById('host').innerHTML=name;
}

function pingContent(tab) {
	chrome.runtime.sendMessage(tabs[0].id,{cmd: "test"}, function(res){
		alert(res.sure)
	});
}

$( document ).ready(function() {
	changeHostName("Ben Shukman");
	var name = "Ben Shukman";

	// AFTER GET RESPONSE
	function newdoc () {
		chrome.tabs.create({url:this.getAttribute('href')}, function(tab) {
			console.log("Sent");
		});
	};

	document.getElementById("button").addEventListener('click', function() {
		$.post("http://localhost:3000/storeData", name, function(data) {
  			newdoc();
		});
	});


});
