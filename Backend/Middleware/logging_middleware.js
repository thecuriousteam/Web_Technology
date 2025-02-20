module.exports = (app) => {
	// logging middleware
	app.use((req, res, next) => {
		console.log(`Logging Middleware: Method ${req.method} URL ${req.url}`);
		next();
	});

	app.get("/logging-middleware", (req, res) => {
		res.send("Hello World");
	});
};
