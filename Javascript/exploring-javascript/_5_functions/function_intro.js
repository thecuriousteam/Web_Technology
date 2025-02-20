// function declaration
function functionName() {
	// function body
	return "inside function";
}

// function call
console.log("calling function " + functionName());

// output
// calling function inside function

// function expression
const varData = function (a, b) {
	// function body

	var c = a + b;
	return "inside function expression " + c;
};

// calling function expression -> we need to call the function and pass the parameter directly to the variable which we used to create a function
console.log("calling function expression: " + varData(10, 20));

// output
// calling function expression: inside function expression 30

// arrow function

const varNewData = (a, b) => {
	var c = a + b;
	return "inside arrow function " + c;
};

// calling arrow function -> Arrow function is similar to function expression but the difference is we won't use function keyword and we use arrow also we need to call the function and pass the parameter directly to the variable which we used to create a function
console.log("calling arrow function: " + varNewData(10, 20));

// output
// calling arrow function: inside arrow function 30

// Anonymous Functions

const varNewData2 = setTimeout(function () {
	console.log("This message is pinged after " + "1000ms");
}, 1000);

// calling anonymous function

console.log("Calling anonymous function: " + varNewData2);

// Anonymous Functions Assigned to a variable
const add = function (a, b) {
	return a + b;
};

console.log("Add Operation: " + add(10, 20));

// output
// Add Operation: 30

// Anonymous Functions Assigned by passing as an argument
function newAdd(a, b) {
	return a + b;
}

setTimeout(function () {
	console.log("Adding Anonymous Function: " + newAdd(10, 20));
}, 2000);

//newAdd() function calls once the 2s finished
// Here, the anonymous function is used as a callback for setTimeout and will be executed after 2 seconds.

// output
// Adding Anonymous Function: 30

// Immediately Invoked Function Expression(IIFE)
(function () {
	// function body
	console.log("inside IIFE function");
})();

// output
// inside IIFE function

// example 2
(function (a, b) {
	var c = a + b;
	console.log("add operation using IIFE " + c);
})(10, 20);

// output
// add operation using IIFE 30

var result = (function () {
	var a = 20;
	var b = 20;
	var c = a + b;
	return "advanced example for add operation using IIFE " + c;
})();

// the IIFE calculates the sum of x and y and returns the result. The returned value is then assigned to the variable result
console.log(result);

// output
// advanced example for add operation using IIFE 40

// methods
const person = {
	name: "ABC",
	age: "24",

	// method
	greet: function ass() {
		return "Hello, " + this.name + " Welcome to team";
	},
};

// calling object functions/method
console.log(person.greet());

// output
// Hello, ABC welcome to team

// constructor function
function constructorFunction(name, age) {
	this.name = name;
	this.age = age;

	console.log("Name: " + name + " Age: " + age);
}

// object creation
const p1 = new constructorFunction("AAA", "24");

// output
// Name: AAA Age: 24

// function parameters and arguments
// name and age are parameters
const greeting = (name, age) => {
	return console.log("Name: " + name + " Age: " + age);
};

// arguments we passed
greeting("AAA", 24);

// output
// Name: AAA Age: 24

// default parameter
const data = (name = "guest") => {
	return console.log("Name: " + name);
};

// we can also write above code like this
// function greet(name = "Guest") {
//   console.log("Hello, " + name);
// }

// greet(); // Output: Hello, Guest

data();
data("Nandan");

// output
// Name: guest;
// Name: Nandan;

// Rest and Spread Operator

// rest example
const restExample = (...numbers) => {
	return numbers.reduce((total, num) => total + num, 0);
};

console.log("The total sum is: " + restExample(1, 2, 3, 5, 6));

//output
// The total sum is: 17

// same version
// function sum(...numbers) {
//   return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // Output: 10

// spread example
const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1, 5, 6, 7];
console.log(arr2);

// output
// [
//   1, 2, 3, 4,
//   5, 6,
// ]

// closures

// outer function
function outerFunction() {
	let outerFunctionVar = "I'am from outer function variable";

	// inner function
	function innerFunction() {
		// access to the outer function data\
		let innerFunctionVar = "I'am from inner function variable";
		console.log(innerFunctionVar);
		console.log(outerFunctionVar);
	}

	return innerFunction;
}

const myfuction = outerFunction();

myfuction();

// output
// I'am from inner function variable
// I'am from outer function variable
