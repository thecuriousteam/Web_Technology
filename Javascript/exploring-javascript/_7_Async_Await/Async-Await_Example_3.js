// creating async function
async function add(a, b) {
	return a + b;
}

// .then() usage to decide what should need to be done once the async function returned promise
add(100, 200).then((result) => console.log(result));

// async function with await keyword

// async function returning promise
async function addOP(a, b) {
	return a + b;
}

async function calladdOP() {
	// await pauses the execution until promise is resolved
	const result = await addOP(100, 200);
	console.log(result);
}

calladdOP();
