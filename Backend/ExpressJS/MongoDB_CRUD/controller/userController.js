const User = require("../model/User"); //userSchema

const createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userProfile = await User.findOne({ email });
    console.log("User Existed", userProfile);
    if (userProfile) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      name,
      email,
      age,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Internal Server Error", error.message);
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ message: "Users fetched successfully", user });
  } catch (error) {
    console.error("Internal Server Error", error.message);
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  const userProfile = await User.findById(userId);
  if (!userProfile) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "User fetched successfully", userProfile });
};

const updateUser = async (req, res) => {
  const { name, email, age } = req.body;
  const { userId } = req.params;

  console.log("User ID", userId);
  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }

  const updateUser = await User.findOneAndUpdate(
    // _id -> this field is _id of mongodb collection
    { _id: userId },
    { name, email, age },
    { new: true, runValidators: true }
  );
  console.log("Updated User", updateUser);
  if (!updateUser) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({
    message: "User updated successfully",
    updateUser,
  });
};

const deleteUser = async (req, res) => {
  // find userId from params and delete user
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({ message: "User ID is required" });
  }
  const userProfile = await User.findOneAndDelete({ _id: userId });
  if (!userProfile) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({
    message: "User deleted successfully",
    User,
  });
};

const getUserAgeLessThanInput = async (req, res) => {
  const { age } = req.body;
  console.log("User Age", age);
  if (!age) {
    return res.status(400).json({ message: "User age is required" });
  }

  const userProfile = await User.find({ age: { $lt: age } });
  console.log(`User Profile Lessthan ${age}`, userProfile);

  if (!userProfile || userProfile.length === 0) {
    return res
      .status(404)
      .json({ message: "No users found with age less than provided age" });
  }

  res.status(200).json({
    message: `Users with age less than ${age} fetched successfully`,
    userProfile,
  });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserAgeLessThanInput,
};
