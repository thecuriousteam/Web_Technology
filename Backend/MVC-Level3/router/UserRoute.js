const express = require("express");
const router = express.Router();

const BusinessLogic = require("../controller/UserController");
const userBusinessLogic = new BusinessLogic();

const authentication = require("../middleware/AuthMiddleware");

// routes
router.get("/all-users", userBusinessLogic.getAllUsers);
router.get("/fetch-users", userBusinessLogic.getUserByRole);
router.post("/add-user", userBusinessLogic.addNewUser);
router.post("/login-user", userBusinessLogic.loginUser);
router.post("/get-profile", authentication, userBusinessLogic.getUserProfile);

module.exports = router;
