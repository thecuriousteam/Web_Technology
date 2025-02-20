const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Redis = require("ioredis");
const morgan = require("morgan");

// Secret key for JWT signing and verification
// In production, store this securely (e.g., environment variables)
const JWT_SECRET = "6dT8CP5gDMat";
const redis = new Redis();

// docs

/*
- Initialize the morgan to get the logs
- post route for signup
  - create a variables (name, email, username, password) to request user to pass this information
  - check whether passed all these information in post body
  - check user existed in database or not
  - generate the hashedpassword and store in redis as key:value pair
  - create a dummy user and store all the information  (name, email, username, password)
  - store the data in redis 
  - send response that the data is stored in redis
- post route for signin

*/

module.exports = (app) => {
	app.use(morgan("common"));

	// signup route
	app.post("/iap/user/signup", async (req, res) => {
		const { name, email, username, password } = req.body;

		// check user entered all these fields
		if (!name || !email || !username || !password) {
			return res.status(400).json({
				message: `${res.statusCode}, bad request, All fields required`,
			});
		}
		const isRegistered = await redis.get(`user:${username}`);
		console.log(">>> isRegistered: ", isRegistered);
		if (isRegistered) {
			return res.status(400).json({
				message: `${res.statusCode}, bad request, user already registered`,
			});
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		console.log(">>> hashedPassword: ", hashedPassword);
		const user = {
			name,
			email,
			username,
			password: hashedPassword,
		};
		console.log(">>> users data", user);
		const storedData = await redis.set(
			`user:${username}`,
			JSON.stringify(user)
		);
		console.log(">>> Stored data in redis", storedData);
		console.log("User added successfully");

		return res.status(200).json({ message: "Data Added Successfully" });
	});

	app.post("/iap/user/signin", async (req, res) => {
		const { username, password } = req.body;
		// check user entered all these fields
		if (!username || !password) {
			return res.status(400).json({
				message: `${res.statusCode}, bad request, All fields required`,
			});
		}
		// check user is there in database
		const storedData = await redis.get(`user:${username}`);
		console.log(">>> storedData", storedData);
		if (!storedData) {
			return res.status(400).json({
				message: `${res.statusCode}, bad request, user need to register`,
			});
		}
		// we need to parse the json
		const user = await JSON.parse(storedData);
		// compare password
		const comparePassword = await bcrypt.compare(password, user.password);
		console.log(">>> Password Compare", comparePassword);
		if (!comparePassword) {
			return res.status(403).json({ message: "user is unauthorized" });
		}

		// jwt authentication
		const tokenPayload = {
			name: user.name,
			email: user.email,
			username: user.username,
		};
		const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "1h" });
		console.log(">>> token", token);

		return res.status(200).json({
			message: "user logged in successfully",
			details: {
				name: user.name,
				email: user.email,
				username: user.username,
				token: token,
			},
		});
	});

	// authentication middleware
	const JWT_authentication = (req, res, next) => {
		const authToken = req.headers["authorization"];
		console.log(">>> token in middleware ", authToken);

		// split the token in header
		const splitToken = authToken && authToken.split(" ")[1];
		console.log(">>> token in splitted token ", splitToken);

		// check token is valid or not
		if (!splitToken) {
			return res
				.status(403)
				.json({ message: "token not found or invalid token" });
		}

		const compareToken = jwt.verify(splitToken, JWT_SECRET, (err, user) => {
			if (err) {
				res.status(403).json({ message: "token not found or invalid token" });
			}

			// attach user info to req user
			req.user = user;
			next();
		});
	};

	app.get("/iap/user/dashboard", JWT_authentication, (req, res) => {
		console.log("Authentication successful");
		res.status(200).json({
			message: `Hello ${req.user.username}, Welcome to inspiration app`,
		});
	});
};
