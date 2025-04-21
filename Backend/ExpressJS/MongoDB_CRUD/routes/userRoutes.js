const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserAgeLessThanInput,
} = require("../controller/userController");

router.post("/create-user", createUser);
router.get("/users", getAllUsers);
router.post("/users", getUserAgeLessThanInput);
router.put("/update-user/:userId", updateUser);
router.delete("/:userId", deleteUser);
router.get("/:userId", getUserById);

module.exports = router;
