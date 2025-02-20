async function add(a, b) {
	return a + b;
}

async function callAdd() {
	// await the result to complete add function
	try {
		const result = await add(10, 20);
		console.log("The sum is: " + result);
	} catch (error) {
		console.log("Error: " + error);
	}
}

// calling the function that use await
callAdd();
