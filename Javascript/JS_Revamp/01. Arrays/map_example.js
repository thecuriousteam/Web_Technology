let users = [
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
	{ name: "Charlie", age: 35 },
];

const userData = users.map((eachUser) => eachUser.name);
console.log(userData);

// lets find for bob in users
const getUser = (users, name) => {
	let found = users.find((user) => user.name === name);

	if (found) {
		console.log(found.name, "exist");
	} else {
		console.log(found.name, "not exist");
	}
};

getUser(users, "Bob");

// lets filter by age
const ageFilter = (data) => {
	const found = data.find((eachUser) => eachUser.age > 27);
	console.log(">>> users data: ", found.name);
};

ageFilter(users);
