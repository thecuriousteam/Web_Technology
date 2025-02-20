// higher order function that take another function as argument and call back with normal function
function operation(addCB, a, b) {
	let res = a + b;

	// call back function which takes another function as argument
	addCB(res);
}

const res = operation(
	// call back function
	function printRes(val) {
		console.log("The res is:", val);
	},
	10,
	20
);

// higher order function that take another function as argument and call back with arrow function
function newOperation(addCB, a, b) {
	let res = a + b;
	addCB(res);
}

let newRes = newOperation(
	// call back function with arrow function
	(val) => {
		console.log("The res is:", val);
	},
	10,
	23
);

// higher order function that returns another function

function newOperation1(a, b) {
	let res = a + b;

	// i just want to return the result
	return function () {
		console.log("The res is:", res);
	};
}

// calling parent function
const newres = newOperation1(10, 23);

// calling the function which is being returned by another function
newres();

// higher order function that returns another function using arrow functions
function newOperation2(a, b) {
	let res = a + b;

	// i just want to return the result
	return () => {
		console.log("The res is:", res);
	};
}

let newRes2 = newOperation2(19, 29987);
newRes2();
