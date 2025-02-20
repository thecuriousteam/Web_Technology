const people = [
	{ name: "John", age: 30, city: "New York" },
	{ name: "Alice", age: 25, city: "Los Angeles" },
	{ name: "Bob", age: 35, city: "Chicago" },
];

// iterating over array
for (let i = 0; i < people.length; i++) {
	// console.log(people[i]);

	// iterating over json objects

	for (let key in people[i]) {
		console.log(`${key}: ${people[i][key]}`);
	}

	console.log();
}
