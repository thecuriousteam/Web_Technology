const Redis = require("ioredis");
const bcrypt = require("bcrypt");

const redis = new Redis();

module.exports = (app) => {
	if (redis.status === "connecting") {
		console.log("Redis is connecting STATUS:", redis.status);
	}

	// signup -> async(), await() function
	app.post(
		"/iap/signup",
		// async, await call back function
		async (req, res) => {
			try {
				const { username, password } = req.body;
				if (!username || !password) {
					return res
						.status(400)
						.json({ message: "Please enter all fields (username, password)" });
				}

				// check if user is there in redis
				const existingUser = await redis.get(`user:${username}`);
				console.log("User Existence Check >>>", existingUser);
				if (existingUser) {
					return res
						.status(400)
						.json({ message: "User already exist in database" });
				}

				// if user is not existing
				// convert the password to hashed password
				const hashedPassword = await bcrypt.hash(password, 10);
				// store username and password as key and value pairs in database
				await redis.set(`user:${username}`, hashedPassword);
				return res
					.status(201)
					.json({ message: `user ${username}, created successfully` });
			} catch (error) {
				console.log("Error Status >>> ", error);
				return res.status(500).json({ message: "internal server error" });
			}
		}
	);

	// login
	app.post("/iap/login", async (req, res) => {
		try {
			/*
      1. if(username & password not entered)
      1.1 return 400 bad request
      2. fetching username from redis
      2.2 return 400 bad request if not existed
      3. compare the hashed password using bcrypt.compare(password, storedPassword)
      3.3 return 401 unauthorized
      4. return successful message
      */
			const { username, password } = req.body;
			if (!username || !password) {
				return res
					.status(400)
					.json({ message: "Please enter all fields (username, password)" });
			}

			const storedHash = await redis.get(`user:${username}`);
			console.log("Checking user is exists or not >>>", storedHash);
			if (!storedHash) {
				return res
					.status(404)
					.json({ message: `User ${username} not existed in database` });
			}

			const authCompare = await bcrypt.compare(password, storedHash);
			if (!authCompare) {
				return res
					.status(401)
					.json({ message: `${res.statusCode} Unauthorized` });
			}

			return res
				.status(201)
				.json({ message: `user ${username} login successfully` });
		} catch (error) {
			console.log("Error Status >>> ", error);
			return res.status(500).json({ message: "internal server error" });
		}
	});
};
