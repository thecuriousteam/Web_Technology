// Import express
const express = require("express");
const dotenv = require("dotenv");

// Project - 1
// const DBConnection = require("./ExpressJS/MongoDB_CRUD/config/db"); // Import the DB connection file
// const userRoutes = require("./ExpressJS/MongoDB_CRUD/routes/userRoutes");
// dotenv.config(); // Load environment variables from .env file
// DBConnection();

// Project - 2
const authRoutes = require("./ExpressJS/MongoDB_AuthFlow/routes/authRoutes"); // Import the auth routes
const userRoutes = require("./ExpressJS/MongoDB_AuthFlow/routes/userRoutes"); // Import the user routes

const DBConnection = require("./ExpressJS/MongoDB_AuthFlow/config/db");
dotenv.config(); // Load environment variables from .env file

// importing db connection file
DBConnection();

// Create the Express application
const app = express();
app.use(express.json()); // This will ensure that req.body contains parsed JSON data

// // Middleware function
// function middleware(req, res, next) {
//   console.log("Middleware Executed Successfully");
//   next(); // Pass control to the next middleware or route handler
// }

// Define the route
app.get("/", (req, res) => {
  res.send("Hello Express!"); // Send response for the root route
});

// app.use("/api/v1/user", userRoutes);

app.use("/api/v1/auth", authRoutes); // Use the auth routes
app.use("/api/v1/user", userRoutes); // Use the user routes

// Server configuration
const PORT = 5001;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
