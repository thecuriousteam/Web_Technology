//A function declaration defines a named function using the function keyword.
// It is hoisted to the top of its scope, which means it can be called before it appears in the code.

function add(a, b) {
	return a + b;
}

const result = add(10, 20);

console.log(result);
