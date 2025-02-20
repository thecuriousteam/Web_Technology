// arrow function
const add = (a, b) => {
	console.log("The Value of a: " + a);
	console.log("The Value of b: " + b);
	return a + b;
};

const result = add(10, 20);
console.log("The result is: " + result);

// Arrow function in more simple way
// When an arrow function is having only one return value then we can use below syntax
const newAdd = (a, b) => a + b;
const newResult = newAdd(100, 200);
console.log("The result is: " + newResult);

const productValue = (number) => number * number;
console.log("The result is: " + productValue(5));

// output
// The Value of a: 10
// The Value of b: 20
// The result is: 30
// The result is: 300
// The result is: 25
