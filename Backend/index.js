// first line of backend application
const express = require("express");
var app = express();

const Redis = require("ioredis");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5000;

// SYNTAX -> app.METHOD("route", (function) => {body})

// Note -> for the route what i should get the response (basically a callback function)

// Simple Route
app.get("/", (req, res) => {
	res.status(200).send("This is first backend code");
});

// route to specific page
app.get("/find-mentor", (req, res) => {
	res.status(200).send("I'm inside the find-mentor page");
});

// dynamic routing
app.get("/find-mentor/:id", (req, res) => {
	// dynamic routing can be handled using (req.params.<path parameters>)
	const mentorID = req.params.id;
	// sending what we get from the req to server
	res.status(200).send("Mentor ID is: " + mentorID);
});

// Middleware to parse JSON body (needed for POST/PUT requests)
app.use(express.json());
// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());

// All Route Code Mentioned
// require("./Routing_Concept/get_route_example")(app);
// require("./Routing_Concept/post_route_example")(app);
// require("./Routing_Concept/signin-signup-example")(app);
// // require("./Project/login-fullstack/server")(app);
// require("./Middleware/logging_middleware")(app);
// require("./Middleware/logging_morgan")(app);
// // require("./Middleware/authentication_middleware")(app);
// require("./Middleware/authentication_JWT")(app);
// require("./Middleware/authentication_JWT_ExtraFields")(app);
// // require("./Middleware/error_handling_middleware");
// require("./Middleware/error_handling_auth_middleware")(app);
// require("./Middleware/rate-limiter_api_calls")(app);

// MVC - Basic Example

// const router = require("./MVC-Basic/Router/user-route");
// app.use("/api", router);

// const userRouter = require("./MVC-Level2/routes/users");
// // if we are using this "/user" it means all user route rotes from /user
// app.use("/user", userRouter);

// const mentorRouter = require("./MVC-Level2/routes/MentorRoute");
// app.use("/mentor", mentorRouter);

// const menteeRouter = require("./MVC-Level2/routes/MenteeRoutes");
// app.use("/mentee", menteeRouter);

// const courseRouter = require("./MVC-Level2/routes/CourseRoute");
// app.use("/course", courseRouter);

// const iapUsers = require("./MVC-Level3/router/UserRoute");
// app.use("/iapusers", iapUsers);

const morgan_logs = require("morgan");
app.use(morgan_logs("combined"));

const todoRoutes = require("./TodoListMVC/router/TodoRoute");
app.use("/todo", todoRoutes);

// 5. Start the server
app.listen(
	port,
	// callback function
	() => {
		console.log(`Server is running on http://localhost:${port}`); // Log a message when the server starts
	}
);
