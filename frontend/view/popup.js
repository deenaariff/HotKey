function clickHandler(e) {
    chrome.runtime.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function changeHostName(name) {
  document.getElementById('host').innerHTML=name;
}

<<<<<<< HEAD
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
=======
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('host').innerHTML="Ben Shukman";
  document.getElementById("button").addEventListener('click', function() {
	//ajax here
    	//user local storage
    	localStorage.setItem("data", "sdfkljahdfakldsjhf");
	chrome.tabs.create({url:this.getAttribute('href')}, function() {
    	//the tab has loaded
    	});
  });
})
<<<<<<< HEAD

>>>>>>> 75b4a06af4a9e4cf52911fdbf26a3f07ee1cf7b0
=======
>>>>>>> 0aa2e590ee15f61ab47a86d3234bac57a918450a
