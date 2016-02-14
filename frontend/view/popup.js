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

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('host').innerHTML="Ben Shukman";
  document.getElementById("button").addEventListener('click', function() {

  		var service_id = "000"
  		var user_id = "000"

		$.get( 'https://localhost:5000/service/' + service_id + '/' + user_id, 
			function(JSONobject) {
				// Will triger "storage" event
				localStorage.setItem("data", JSONobject);
				chrome.tabs.create({url:this.getAttribute('href')}, function() {
			});
		});
  });
});
