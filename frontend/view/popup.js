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
	document.getElementById("button").addEventListener('click', function() {
		chrome.tabs.create({url:this.getAttribute('href')}, function(tab) {
			chrome.runtime.sendMessage({cmd: "test"}, function(res){
				alert(res.sure)
			})
		});
	});
});
