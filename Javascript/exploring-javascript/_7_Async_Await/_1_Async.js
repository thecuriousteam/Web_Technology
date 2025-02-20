// creating an async function
async function add(a, b) {
	return a + b;
}

// calling the async function
add(10, 20).then((result) => console.log("The sum is: " + result));

/*

1. add(10, 20) - This function takes two arguments, 10 and 20, presumably to add them together asynchronously.
2. .then() -  The .then() method is used to specify what should happen once the promise returned by add(10, 20) is resolved. When the promise resolves, the then() method executes the provided callback function.
3. (result) => console.log("The sum is: " + result) - his is the callback function passed to .then(). It takes one parameter, result, which represents the resolved value of the promise returned by add(10, 20) and Inside this callback function, console.log("The sum is: " + result) is called to log the sum to the console
*/

// output
// The sum is: 30
