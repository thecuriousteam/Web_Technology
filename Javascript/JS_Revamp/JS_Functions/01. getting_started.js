// creating a basic function
function greetUser() {
	console.log("Hello User");
}

// calling function
greetUser();

// example
function add(a, b) {
	return a + b;
}

// if function returns the result we need to store in variable and use it
let res = add(10, 20);
console.log("The sum is: " + res);

// if we want to pass multiple arguments

function newAdd() {
	// i want to add it as we receive it
	let ans = 0;
	for (let i = 0; i < arguments.length; i++) {
		ans = ans + arguments[i];
	}
	return ans;
}

let val = newAdd(10, 20, 30, 50, 50);
console.log("The sum is: " + val);

// taking multiple arguments using spread

function spreadExample(...numbers) {
	let ans = 0;
	for (let i = 0; i < numbers.length; i++) {
		// adding the arguments which is passed to function
		ans = ans + numbers[i];
	}

	return ans;
}

let ans = spreadExample(10, 20, 30, 50);
console.log("The sum is: " + ans);
