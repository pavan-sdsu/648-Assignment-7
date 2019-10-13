//STEP 1
function halfNumber(n) {
	return n / 2;
}
window.console.log("Half of " + 5 + " is " + halfNumber(5) + ".");

//STEP 2
function squareNumber(n) {
	return n * n;
}
window.console.log("The result of squaring the number " + 3 + " is " + squareNumber(3) + ".");

//STEP 3
function percentOf(a, b) {
	return (a / b) * 100;
}
window.console.log(2 + " is " + percentOf(2, 4) + "% of " + 4 + ".");

//STEP 4
function findModulus(a, b) {
	return (a % b);
}
window.console.log(findModulus(10, 4) + " is the modulus of " + 4 + " and " + 10 + ".");

//STEP 5
function sum(args) {
	var sum = 0;
	for (let i = 0; i < args.length; i++) {
		sum += args[i];
	}
	window.console.log("The sum of numbers " + args + " is " + sum + ".");
	return sum;
}

var arr = prompt("Enter numbers seperated by comma(,).");
arr = arr.split(",");
for (var i = 0; i < arr.length; i++) {
	arr[i] = Number(arr[i]);
}
sum(arr);