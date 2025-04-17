const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Redis = require("ioredis");
const morgan = require("morgan");

// Secret key for JWT signing and verification
// In production, store this securely (e.g., environment variables)
const JWT_SECRET = "6dT8CP5gDMat";
const redis = new Redis();

module.exports = (app) => {
	app.use(morgan("common"));

	app.post("/dashboard/signup", async (req, res) => {
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({ message: "All finds are required" });
		}

		// check user is already registered
		const checkUser = await redis.get(`user:${username}`);

		console.log("Checking user...", checkUser);
		if (checkUser) {
			return res.status(400).json({ message: "user already registered" });
		}

		// if not registered
		try {
			// hash password generator
			const hashedPassword = await bcrypt.hash(password, 10);
			console.log("Testing hashedPassword: ", hashedPassword);

			// store inside redis
			const user = await redis.set(`user:${username}`, hashedPassword);

			console.log("Testing user added or not: ", user);

			return res.status(201).json({ message: "user added successfully" });
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: "internal server error" });
		}
	});

	app.post("/dashboard/signin", async (req, res) => {
		const { username, password } = req.body;

		// check user gave username and password in request body
		if (!username || !password) {
			return res.status(400).json({ message: "All finds required" });
		}

		// check is user is registered or not registered
		const checkUser = await redis.get(`user:${username}`);
		console.log(">>> Checking user existence:", checkUser);

		if (!checkUser) {
			return res.status(400).json({ message: "User not found" });
		}

		try {
			// compare the password and hashed password
			const compare = await bcrypt.compare(password, checkUser);
			console.log(">>> Compare status: ", compare);

			if (!compare) {
				return res
					.status(401)
					.json({ message: "Invalid password unauthorized" });
			}

			// generate jwt token (JWT Code) for authentication
			const payload = { username: username };
			console.log(">>> JSON Payload", payload);

			// signin jwt token
			const token = await jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

			console.log("Signin Token: ", token);
			res.status(200).json({ message: "Login successful", token: token });
		} catch (error) {
			console.log(">>> Error message: ", error);
			return res.status(500).json({ message: "internal server error" });
		}
	});

	// jwt authentication middleware
	const authentication = (req, res, next) => {
		// get the token from header
		const tokenHeader = req.headers["authorization"];

		console.log("auth header >>>", tokenHeader);
		const token = tokenHeader && tokenHeader.split(" ")[1]; //bearer token

		console.log("Bearer Token in middleware", token);

		// check token is there or not
		if (!token) {
			return res.status(403).json({ message: "Token not found" });
		}

		// verify the token
		jwt.verify(
			token,
			JWT_SECRET,

			// a call back function to verify token is valid or expired token
			(err, user) => {
				if (err) {
					return res.status(403).json({ message: "Invalid or expired token" });
				}

				// attach user info to req
				req.user = user;
				next();
			}
		);
	};

	// protected routes
	app.get("/dashboard/home", authentication, (req, res) => {
		res.status(200).json({
			// decoding jwt to get the username
			message: `Hello ${req.user.username}, Welcome to Inspiration App`,
		});
	});
};
