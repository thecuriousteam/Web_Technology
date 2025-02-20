// Function to be executed
function greet() {
	console.log("Hello, world!");
}

// Execute the greet function after 2 seconds (1000 milliseconds)
setTimeout(greet, 1000);

function add(a, b) {
	console.log(a + b);
}

setTimeout(add, 2000, 10, 20);

const newAdd = (a, b) => {
	console.log(a + b);
};

setTimeout(newAdd, 3000, 200, 300);

const displayName = (user) => {
	console.log("Hello User! " + user);
};

setTimeout(displayName, 3000, "Nandan");

// output
// Hello, world!
// 30
// 500
// Hello User! Nandan

const fetchData = () => {
	console.log("Fetching data...");

	setTimeout(() => {
		console.log("Loading");
	}, 3000);

	setTimeout(() => {
		console.log("Data Fetched Successfully!");
		console.log("Here is data [1,2,3,4,5,6,7]");
	}, 5000);
};

fetchData();
