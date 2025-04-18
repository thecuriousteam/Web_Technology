// Import express
const express = require("express");

// Create the Express application
const app = express();
app.use(express.json()); // This will ensure that req.body contains parsed JSON data

// // Middleware function
// function middleware(req, res, next) {
//   console.log("Middleware Executed Successfully");
//   next(); // Pass control to the next middleware or route handler
// }

const {
  middleware,
  loggingMiddleware,
} = require("./ExpressJS/middleware/basic-example");

// Apply the middleware globally to all routes
app.use(middleware);
app.use(loggingMiddleware);

// Define the route
app.get("/", (req, res) => {
  res.send("Hello Express!"); // Send response for the root route
});

require("./ExpressJS/http-methods/get-example")(app);
require("./ExpressJS/http-methods/post-example")(app);
require("./ExpressJS/http-methods/put-example")(app);
require("./ExpressJS/http-methods/patch-example")(app);
require("./ExpressJS/http-methods/delete-example")(app);
// Server configuration
const PORT = 5001;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
