// as we describe the routes we need initialize express for the server

// these steps are very important
const express = require("express");
const router = express.Router();

// describe all routes (this is without MVC Pattern)
// router.get("/", (req, res) => {
// 	console.log("Server Responds Well");
// here we communicate with controller to get the users data or the information, inorder to follow MVC Pattern
// 	res.send({ status: "Server is working" });
// });

// describe all routes (this is with MVC Pattern)
// to use controller we need to import it first
const controller = require("../controller/UserController");

// syntax routervariable.HTTP_Method("routes", controller_properties)
router.get("/", controller.get);

module.exports = router;
