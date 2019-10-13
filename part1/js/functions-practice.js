//STEP 1
function halfNumber(n) {
	const half = n / 2;
	window.console.log("Half of " + n + " is " + half + ".");
	return half;
}

//STEP 2
function squareNumber(n) {
	const square = n * n;
	window.console.log("The result of squaring the number " + n + " is " + square + ".");
	return square;
}

//STEP 3
function percentOf(a, b) {
	const percent = (a / b) * 100;
	window.console.log(a + " is " + percent + " of " + b + ".");
	return percent;
}

//STEP 4
function findModulus(a, b) {
	const mod = a % b;
	window.console.log(mod + " is the modulus of " + a + " and " + b + ".");
	return mod;
}

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