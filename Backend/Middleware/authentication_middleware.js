const morgan = require("morgan");

module.exports = (app) => {
	app.use(morgan("common"));

	const authenticationMiddleware = (req, res, next) => {
		const authToken = req.headers["authorization"];

		if (authToken === "valid-token") {
			// move to next part
			next();
		} else {
			// break the logic
			res.status(401).send("unauthorized");
		}
	};

	app.get("/dashboard", authenticationMiddleware, (req, res) => {
		res.status(200).send("Dashboard Access Granted");
	});
};
