var test3;

function clickHandler(e) {
    chrome.runtime.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function changeHostName(name) {
  document.getElementById('host').innerHTML=name;
}

document.addEventListener('DOMContentLoaded', function () {
  // on load, pull the permission

  // if (Notification.permission !== "granted") {
  //   Notification.requestPermission();
  // }

  document.getElementById("button").addEventListener('click', function() {
    chrome.tabs.create({url:this.getAttribute('href')});
  });

  document.getElementById("button-wrapper").addEventListener('click', function(e) {
   

    //chrome.extension.getBackgroundPage().alert(); //console.log('foo');

    // url = "http://7a855198.ngrok.io/services/003";

    /*$.get(url, function(data) {

      chrome.extension.getBackgroundPage().alert("Load was performed." + data);
      changeHostName("Deen");
    }); */

  });

  document.getElementById('host').innerHTML="Ben Shukman";
})


// var options = {
//     templateType : "basic",
//     title: "Simple Notification",
//     message: "Just a text message and icon",
//     iconUrl: "url_to_small_icon" // add a URL to local directory icon
//   };
// chrome.notification.create("id", options, crCallback);

// function crCallback(notID) {
//   alert("Succesfully created " + notID + " notification");
// }    


// function myAlert(){
//     alert('hello world');
// }

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('click-me').addEventListener('click', myAlert);
// });
