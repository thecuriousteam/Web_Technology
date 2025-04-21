// Import express
const express = require("express");
const dotenv = require("dotenv");
const DBConnection = require("./ExpressJS/MongoDB_CRUD/config/db"); // Import the DB connection file

dotenv.config(); // Load environment variables from .env file
DBConnection();

// importing db connection file

// Create the Express application
const app = express();
app.use(express.json()); // This will ensure that req.body contains parsed JSON data

// // Middleware function
// function middleware(req, res, next) {
//   console.log("Middleware Executed Successfully");
//   next(); // Pass control to the next middleware or route handler
// }

// Apply the middleware globally to all routes

// Define the route
app.get("/", (req, res) => {
  res.send("Hello Express!"); // Send response for the root route
});

// Server configuration
const PORT = 5001;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
