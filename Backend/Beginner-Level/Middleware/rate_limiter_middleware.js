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
