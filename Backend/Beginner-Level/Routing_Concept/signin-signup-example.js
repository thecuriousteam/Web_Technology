module.exports = (app) => {
	const bodyParser = require("body-parser");
	app.use(bodyParser.json());

	const users = [];

	console.log("Users added >>>>> ", users);

	// routes here
	// signup
	app.post("/signup", (req, res) => {
		// required details for signup
		const { username, email, password } = req.body;

		if (!username || !email || !password) {
			return res
				.status(401)
				.json({ message: "All fields required for signup" });
		}

		// when trying check wither user is present or not use find method
		const checkUserExist = users.find((user) => user.email === email);
		if (checkUserExist) {
			return res.status(401).json({ message: `User ${email} already exists` });
		}

		// we are encoding the password and storing in database
		let encodedPassword = btoa(password);
		const newUser = { username, email, encodedPassword };
		users.push(newUser);

		res.json({
			message: `User ${username}, Successfully registered`,
			details: {
				username,
				email,
				encodedPassword,
			},
		});
		// console.log("User registration:", users);
	});

	// login route
	app.post("/login", (req, res) => {
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({ message: "All fields required for login" });
		}

		// check user is there or not
		const checkUserData = users.find((user) => user.username === username);
		if (!checkUserData) {
			return res.status(401).json({ error: "User not existed" });
		}

		// console.log("User Data in ARRAY", users);

		// console.log("Entered password", password);
		// console.log("Stored Password", checkUserData.encodedPassword);

		let comparePassword = btoa(password);

		if (checkUserData.encodedPassword === comparePassword) {
			return res.status(200).json({
				message: "User Authentication Successful",
				response: {
					username: checkUserData.username,
					email: checkUserData.email,
					password: checkUserData.password,
				},
				status: res.statusCode,
			});
		} else {
			return res.status(401).json({ error: "Invalid credentials" });
		}
	});
};
