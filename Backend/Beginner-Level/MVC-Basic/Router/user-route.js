// routes/userRoutes.js
const express = require("express");
const userController = require("../Controller/user-controller");
const router = express.Router();

// routes
router.get("/users", userController.getAllUsers);
router.post("/users", userController.addUsers);
router.get("/users/:id", userController.getUserById);

module.exports = router;
