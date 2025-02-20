let a = -20;

if (a > 0) {
	console.log("The number " + a + " positive number");

	if (a % 2 == 0) {
		console.log("The number " + a + " even number");
	} else if (a % 2 != 0) {
		console.log("The number " + a + " odd number");
	} else {
		console.log("The number " + a + " is invalid");
	}
} else if (a < 0) {
	console.log("The number " + a + " negative number");

	if (a % 2 == 0) {
		console.log("The number " + a + " even number");
	} else if (a % 2 != 0) {
		console.log("The number " + a + " odd number");
	} else {
		console.log("The number " + a + " is invalid");
	}
} else if (a === 0) {
	console.log("The number " + a + " is equal to zero");
}

//output
// The number -1 negative number
// The number -1 odd number
// The number -20 negative number
// The number -20 even number

// The number 0 is equal to zero