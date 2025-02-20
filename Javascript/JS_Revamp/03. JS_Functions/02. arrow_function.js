// arrow function

const greetUser = () => {
	console.log("Hello User");
};

// call arrow function
greetUser();

// arrow function with return type
const add = (a, b) => {
	return a + b;
};

console.log("The res is: " + add(20, 30));

// inline arrow function with one return statement
const newAdd = (a, b) => a + b;
console.log("The res is: " + newAdd(20, 30));

// arrow function that take multiple arguments (SPREAD)
const operation = (...numbers) => {
	let ans = 0;

	for (let i = 0; i < numbers.length; i++) {
		ans = ans + numbers[i];
	}
	return ans;
};

console.log("The res is: " + operation(10, 24, 56, 2456, 78));

// different types of arrow functions

// () => ({}) to return object directly
// () => {} when we need to pass multiple lines of statements

// () => ({}) to return object directly
const data = (name, email) => ({
	name: name,
	email: email,
});

const myData = data("Nandan", "test@gmail.com");

// it return the object directly
console.log(myData);

// Note
// arguments keyword will be not be useable in arrow function
// this points the current browser object window
// hoisting will be not applicable here, we can't use arrow function before declaration
