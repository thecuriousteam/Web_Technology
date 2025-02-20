module.exports = (app) => {
	// const bodyParser = require("body-parser");

	// simple post method
	app.post("/user/create_user", (req, res) => {
		// when we are using post parameter we need to specify the body
		const { name, email, age } = req.body;
		// app.use(bodyParser.json());

		// when we are using POST method in response we need to send a specific format to server
		res.json({
			message: "User created successfully",
			user_details: { name, email, age },
			status: res.statusCode,
		});
	});

	// POST with Route Parameters
	app.post("/users/", (req, res) => {
		// route parameters
		let userID = req.params.id;

		console.log(userID);
		// userID = parseInt(userID, 10);

		// post body which i'm expecting
		const { action } = req.body;

		res.json({
			message: `Subscription ${action} fot the USERID ${userID}`,
		});
	});

	// POST with Query Parameters
	app.post("/users", (req, res) => {
		// query parameter
		const isActive = req.query;

		// req body
		const { userID, userName } = req.body;

		res.json({
			message: "user is active",
			isActive,
			user_details: {
				userID,
				userName,
			},
		});
	});

	// Simple Validation in a POST Request

	app.post("/users/login", (req, res) => {
		const { username, password } = req.body;

		if (!username || !password) {
			return res
				.status(400)
				.json({ message: "Username or Password is required" });
		}
		res.json({
			message: "login successful",
			details: {
				username,
				password,
			},
		});
	});
};
