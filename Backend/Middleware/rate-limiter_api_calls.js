const rateLimiter = require("express-rate-limit");

const genericRL = rateLimiter({
	windowMs: 15 * 60 * 1000,
	max: 100,
	message: {
		status: 429,
		message: "Too many requests, Please try again later",
	},
});

const strictRL = rateLimiter({
	windowMs: 15 * 60 * 1000,
	max: 5,
	message: {
		status: 429,
		message: "Too many login attempts, Please try again after 15 minutes",
	},
});

module.exports = (app) => {
	// using custom middleware function to achieve some functionality
	app.use(genericRL);

	// public routes
	app.get("/home", genericRL, (req, res) => {
		res.status(200).json({
			status: 200,
			message: "Fetched home page successfully",
		});
	});

	let count = 0;

	// strict routes
	app.post("/home/login", strictRL, (req, res) => {
		const { username, password } = req.body;

		count = count + 1;

		res.status(200).json({
			status: 200,
			details: {
				Username: username,
				Password: password,
				HitNumber: count,
			},
			message: "Fetched login page successfully",
		});
	});
};
