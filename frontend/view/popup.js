function clickHandler(e) {
    chrome.runtime.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function changeHostName(name) {
  document.getElementById('host').innerHTML=name;
}

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
