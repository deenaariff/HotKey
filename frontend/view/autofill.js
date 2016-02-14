$( document ).ready(function(){
	
	$.get("https://localhost:3000/getData", function(data){
  		alert("Data: " + data);
	});

});

