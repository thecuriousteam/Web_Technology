const express = require("express");
const router = express.Router();
const { createUserProfile } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/createprofile", authMiddleware, createUserProfile);

module.exports = router;
