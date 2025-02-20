// example for && operator
let num = 2;

if (num % 2 == 0 && num >= 0) {
	console.log(`The number ${num} is a even positive number`);
} else if (num % 2 != 0 && num >= 0) {
	console.log(`The number ${num} is a odd positive number`);
} else {
	console.log(`The number ${num} is invalid`);
}

// example for || operator

let isLogin = null;

if (isLogin === true || isLogin === false) {
	console.log("You are logged in");
} else {
	console.log("You are not logged in");
}
