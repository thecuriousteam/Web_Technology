// Simulating a database with nested JSON
const users = [
	{
		id: 1,
		username: "john_doe",
		password: "password123",
		email: "john.doe@example.com",
		profile: {
			fullName: "John Doe",
			bio: "Software Developer at Example Inc.",
			location: "San Francisco, CA",
		},
		roles: ["user"],
	},
	{
		id: 2,
		username: "jane_smith",
		password: "securepass",
		email: "jane.smith@example.com",
		profile: {
			fullName: "Jane Smith",
			bio: "Product Manager at Example Inc.",
			location: "New York, NY",
		},
		roles: ["admin", "user"],
	},
];

// add user logic
const addUser = (newUser) => {
	// check user is already existed or not
	const existingUser = users.find((user) => user.username === newUser.username);
	if (existingUser) {
		throw new Error(`User ${newUser.username} already exists`);
	}

	// if user is not existed then push to users array
	// check the id and
	// This logic is used to assign a new id for a new user. If there are users in the users array,
	const id = users.length > 0 ? users[users.length - 1].id + 1 : 1;

	// push the users to array
	// keep id, destructured newuser data, roles
	const user = { id, ...newUser, roles: [newUser.roles || "user"] };
	users.push(user);
	return user;
};

module.exports = { users, addUser };
