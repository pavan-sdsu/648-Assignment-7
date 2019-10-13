/*eslint-env browser*/

//STEP 1
function clicked() {
	alert("I have been clicked");
}

//STEP 2
var btn1 = document.getElementById("btn");
btn1.onclick = function () {
	alert("I have been clicked");
}

//STEP 3
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", clicked);

//STEP 4
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", function (e) {
	alert("I have been clicked");	
})

//STEP 5
window.onload = function () {
	var btn4 = document.getElementById("btn4");
	btn4.addEventListener("click", function (e) {
		alert("I have been clicked");	
	})	
}
