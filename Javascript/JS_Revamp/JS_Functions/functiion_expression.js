// A function expression creates a function and assigns it to a variable.
// Unlike function declarations, function expressions are not hoisted.

// way - 1
const sum = function add(a, b) {
	return a + b;
};

console.log(sum(10, 20));

// way - 2
const sayHello = function (name) {
	return `Hello ${name}`;
};

console.log(sayHello("Nandan"));
