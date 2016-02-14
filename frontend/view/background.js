window.addEventListener("storage", function(event) {
//delay for a second?
var i = 0;
while (i < 100000) {
	i++;
}
data_ = localStorage.getItem("data")
data = localStorage.setItem("data_", data_)
//modify the storage slightly?
//and the contentjs will get triggered now!

});
