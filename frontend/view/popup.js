function clickHandler(e) {
    chrome.runtime.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}



document.addEventListener('DOMContentLoaded', function () {
    // if (Notification.permission !== "granted") {
    //   Notification.requestPermission();
    // }

    document.getElementById('host').innerHTML="Ben Shukman";

    document.getElementById('click-me').addEventListener('click', function() {
      console.log("yes");
    });
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
