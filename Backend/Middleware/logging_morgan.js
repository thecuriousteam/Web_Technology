// custom logger
const morgan = require("morgan");

module.exports = (app) => {
	// middleware to get the logs
	// app.use(morgan("dev"));

	// predefined different  formats
	// app.use(morgan("combined"));
	app.use(morgan("common"));
	// app.use(morgan("short"));
	// app.use(morgan("tiny"));
	// app.use(morgan("dev"));

	// before reaching to this endpoint
	app.get("/morgan-logger", (req, res) => {
		res.send("Hello World!, example morgan loggers");
	});

	app.post("/create-user", (req, res) => {
		const { username, password } = req.body;

		if (!username || !password) {
			return res.status(400).json({ message: "Bad Request" });
		}

		res.status(201).json({ message: "user created" });
	});
};
