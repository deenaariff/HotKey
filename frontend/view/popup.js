var test3;
var myNotificationID = null;

function clickHandler(e) {
    chrome.runtime.sendMessage({directive: "popup-click"}, function(response) {
        this.close(); // close the popup when the background finishes processing request
    });
}

function changeHostName(name) {
  document.getElementById('host').innerHTML=name;
}

function checkURL(url) {
  if (url.split(".com")[0] == "https://www.netflix") {
    return true;
  } else {
    return false;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // on load, pull the permission

            // Notification.requestPermission();
  //          if (Notification.permission !== "granted") {
    
  // }

 

  document.getElementById("button").addEventListener('click', function() {
    var formReady = false;

    // check if current tab open is already netflix
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      if(checkURL(tabs[0].url) == true) {
        // if it is, rewrite current tab to login
        // insert rewrite code here (ask deen how to do this)
      } else {
        // if it isn't, force new tab to open login webpage

        /*
          // listener for new tab finish loading (and then you can fill out form)
          chrome.tabs.onUpdated.addListener(function(tabId, info) {
            if (info.status == "complete") {
              var port = chrome.runtime.connect({name: "autofill"});

              chrome.runtime.onConnect.addListener(function(port) {
                port.postMessage({greeting: "hello"});
              });
            }
          });
        */
          // chrome.notifications.create("test notification", {
          //   type:    "basic",
          //   title:   "REMINDER",
          //   message: "It's time to go to this super-cool site !\nProceed ?",
          //   contextMessage: "It's about time...",
          //   buttons: [{
          //       title: "Yes, get me there",

          //     }, {
          //       title: "Get out of my way",

          //     }]
          //   }, function(id) {
          //     alert("hi");
          //     myNotificationID = id;
          // });


          // force to new tab:
          chrome.tabs.create({url:document.getElementById("button").getAttribute('href')});

          // fill out script code:

          // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          //   chrome.tabs.postMessage(tabs[0].id, {autofill: "true"}, function(res){
          //     chrome.extension.getBackgroundPage().getElementsByName("email").val("HELLO FROM SCRIPT");;
          //   })
          // });

          // $("#email").val("moo");
          // chrome.tabs.executeScript(function() {
          //   // fill out the form
          //   document.getElementById("email").value="moo"
          // });
          // formReady = true;
      }
    
    // original new tab creation code
    // document.getElementById("button").addEventListener('click', function() {
      // chrome.tabs.create({url:this.getAttribute('href')});
    // });
      
    });

    // execute a script within the tab environment
    if(formReady == true) {
      $("#email").val("moo");
    }
   

  });

  document.getElementById("button-wrapper").addEventListener('click', function(e) {
   

    //chrome.extension.getBackgroundPage().alert(); //console.log('foo');

    url = "http://fc85217d.ngrok.io";
    // url = "http://7a855198.ngrok.io/services/003";

    // $.get(url, function(data) {

    //   chrome.extension.getBackgroundPage().alert("Load was performed." + data);
      // changeHostName("Deen");
    }); 

  document.getElementById('host').innerHTML="Gandalf";
  document.getElementById('host2').innerHTML="Bilbo";

});

// netflix form info
// email -> <input class="ui-text-input" name="email"
// password -> <input class="ui-text-input" name="password"
// remember me -> <input type="checkbox" class="login-input-remember-me" name="rememberMeCheckbox"


// $( document ).ready(function() {
// 	changeHostName("Ben Shukman");
// 	document.getElementById("button").addEventListener('click', function() {
// 		chrome.tabs.create({url:this.getAttribute('href')}, function(tab) {
// 			chrome.runtime.sendMessage({cmd: "test"}, function(res){
// 				alert(res.sure)
// 			})
// 		});
// 	});
// });