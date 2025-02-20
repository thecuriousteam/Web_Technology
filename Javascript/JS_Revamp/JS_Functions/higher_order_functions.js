// Functions that take other functions as arguments or return them as values.

function add(a, b) {
	return a + b;
}

function math_operations(operation, a, b) {
	return add(a, b);
}

console.log(math_operations(add, 10, 20));
