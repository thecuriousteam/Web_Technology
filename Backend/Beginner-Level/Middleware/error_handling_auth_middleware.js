const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Redis = require("ioredis");
const morgan = require("morgan");

// error handling middleware
const errorHandler = require("./error_handling_middleware");

// Secret key for JWT signing and verification
// In production, store this securely (e.g., environment variables)
const JWT_SECRET = "6dT8CP5gDMat";
const redis = new Redis();

module.exports = (app) => {
	app.use(morgan("common"));
	app.use(errorHandler);

	// routes
	app.post("/community/signup", async (req, res, next) => {
		// requesting server i need these details
		const { name, email, username, password } = req.body;
		// checking user sending all the details to server
		if (!name || !email || !username || !password) {
			// to send to error handler middleware we need these fields (errorMessage, statusCode, return next(errorMessage))
			const error = "Please send all required fields";
			error.statusCode = 400;
			return next(error);
		}
		try {
			// check user is already registered
			const userCheck = await redis.get(`user:${username}`);
			if (userCheck) {
				const error = "User already registered";
				error.statusCode = 400;
				return next(error);
			}

			// generate hashPassword
			const hashPassword = await bcrypt.hash(password, 10);
			console.log(">>> Hash password", hashPassword);

			const user = {
				name,
				email,
				username,
				password: hashPassword,
			};

			// stringify the object because redis won't store as json
			const stringifyJSON = JSON.stringify(user);

			const redisStore = await redis.set(`user:${username}`, stringifyJSON);
			console.log(">>> User stored in database", redisStore);

			return res.status(200).json({ message: "User Signed up Successfully" });
		} catch (error) {
			next(error);
		}
	});

	// login route
	app.post("/community/signin", async (req, res, next) => {
		// check user send the username and password in request
		const { username, password } = req.body;
		// if user didn't send the username and password
		if (!username || !password) {
			const error = "Please send all required fields";
			error.statusCode = 400;
			return next(error);
		}
		// try catch block
		try {
			// check the hashed password
			const userData = await redis.get(`user:${username}`);
			console.log(">>> checking user existence", userData);
			if (!userData) {
				const error = "User not found, please register";
				error.statusCode = 400;
				return next(error);
			}

			// parsing json
			const user = JSON.parse(userData);
			console.log(">>> Parsed Users Data", user);

			// compare the hash password
			const comparePassword = await bcrypt.compare(password, user.password);
			console.log(">>> Compare Password Status", comparePassword);

			// check the password whether it is valid or not
			if (!comparePassword) {
				const error = "Invalid Password";
				error.statusCode = 403;
				return next(error);
			}

			// frame the username and other fields
			const payload = {
				name: user.name,
				email: user.email,
				username: user.username,
			};
			console.log(">>> payload details ", payload);

			// form the jwt token
			const tokenJWT = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
			console.log(">>> framed token ", tokenJWT);

			return res
				.status(200)
				.json({ message: "User logged in successfully", token: tokenJWT });
		} catch (error) {
			return next(error);
		}
	});

	const jwtVerify = (req, res, next) => {
		// get the token from header
		const tokenFromHeader = req.headers["authorization"];
		console.log(">>> Token from header ", tokenFromHeader);

		// split the token from barer and token
		const token = tokenFromHeader && tokenFromHeader.split(" ")[1];
		console.log(">>> Token after split ", token);

		// check token is found or not
		if (!token) {
			const error = "Token not found";
			error.statusCode = 403;
			return next(error);
		}

		// verify the token
		jwt.verify(token, JWT_SECRET, (err, user) => {
			if (err) {
				const error = "Token is invalid or expired";
				error.statusCode;
				return next(error);
			}

			// attach to userinfo to request object
			req.user = user;
			console.log(">>> request user ", user);
			next();
		});
	};

	app.get("/community/dashboard", jwtVerify, (req, res) => {
		res.status(200).json({
			message: `Hello ${req.user.username}, Welcome to the Inspiration App`,
		});
	});
};
