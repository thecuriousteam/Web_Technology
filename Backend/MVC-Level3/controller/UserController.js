const { users, addUser } = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ivebidusbyguysa687a9huidicbnzx6789ichsiuabh";

class BusinessLogic {
	// get all users
	getAllUsers = (req, res) => {
		try {
			// this is how we iterate on array that contains JSON Objects
			const userData = users.map((user) => ({
				id: user.id,
				username: user.username,
				email: user.email,
				profile: user.profile,
				roles: user.roles,
			}));

			// check user data
			if (userData.length > 0) {
				res.status(200).json({
					status: res.statusCode,
					UserData: userData,
				});
			} else {
				res.status(404).json({
					status: res.statusCode,
					UserData: "User Data is empty",
				});
			}
		} catch (e) {
			res.status(500).json({
				message: "Server Error",
				error: e,
			});
		}
	};

	// get user by role
	getUserByRole = (req, res) => {
		try {
			console.log("Inside getUserByRole");
			// get query parameters from request query
			const query = req.query.roles;
			// console.log(">>>>>>>>>>>>>>> role query", query);

			if (query) {
				// in this way we find the particular thing which is existed as array inside array of json objects
				const userData = users.filter((user) => user.roles.includes(query));

				console.log(">>>>>>>>>>>>>>> role query", query);
				if (!userData) {
					return res.status(404).json({
						message: `No users found with role ${query}`,
					});
				} else {
					return res.status(200).json({
						// display the array data
						data: userData.map(
							// iterate on users array of json object to return that users data who is having those roles
							(userWithRole) => ({
								id: userWithRole.id,
								username: userWithRole.username,
								email: userWithRole.email,
								profile: userWithRole.profile,
								roles: userWithRole.roles,
							})
						),
					});
				}
			} else {
				res.status(400).json({
					message: "Bad Request",
				});
			}
		} catch (e) {
			res.status(500).json({
				message: "Server Error",
				error: e,
			});
		}
	};

	// add user
	addNewUser = (req, res, next) => {
		// JSON data from request body
		const { username, password, email, profile, roles } = req.body;

		if (!username || !password || !email || !profile || !roles) {
			// error handling middleware
			const error = new Error("Missing Required Fields");
			// error.status = 400;
			return next(error);
		}

		try {
			// add user logic
			// need to frame the payload to store the new json data inside array
			const newuser = addUser({
				username,
				password,
				email,
				profile,
				roles,
			});
			console.log(">>>>>>>>>>>>> newuser inside addUser", newuser);

			// send the response for adding user
			return res.status(201).json({
				message: "User added successfully",
				user: {
					id: newuser.id,
					username: newuser.username,
					email: newuser.email,
					password: newuser.password,
					profile: newuser.profile,
					roles: newuser.roles,
				},
			});
		} catch (e) {
			e.status = 400;
			next(e);
		}
	};

	// get profile
	getUserProfile = (req, res) => {
		const userId = req.userId;

		console.log(">>>>>>>>>>>>>>>>> userid", userId);
		const user = users.find((identifyUser) => identifyUser.id === userId);

		console.log(">>>>>>>>>>>>>>>>> user", user);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		res.status(200).json({
			message: "User profile fetched successfully",
			user: {
				id: user.id,
				username: user.username,
				email: user.email,
				profile: user.profile,
				roles: user.roles,
			},
		});
	};

	// login user also get the token
	loginUser = (req, res, next) => {
		const { username, password } = req.body;

		// check user passed all data in req body
		if (!username || !password) {
			// error handling middleware
			const error = new Error("Missing Required Fields");
			// error.status = 400;
			return next(error);
		}

		// check user is existed or not
		const user = users.find(
			(identifyUser) =>
				identifyUser.username === username && identifyUser.password === password
		);
		if (!user) {
			const error = new Error("Invalid username or password");
			// error.status = 401;
			return next(error);
		}

		// generate the token and send response
		const token = jwt.sign(
			// access toke with data
			{
				id: user.id,
				username: user.username,
				email: user.email,
				roles: user.roles,
			},

			// JWT Secret
			JWT_SECRET,

			// jwt expires duration
			{ expiresIn: "1h" }
		);

		console.log(">>>>>>>>>>>>>>>>>>> token from loginUser", token);

		res.status(200).json({
			message: "User Logged in successfully",
			user: {
				id: user.id,
				username: user.username,
				email: user.email,
				profile: user.profile,
				role: user.roles,
			},
			token,
		});
	};
}

module.exports = BusinessLogic;
