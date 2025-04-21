// business logic
const User = require("../model/User");

const createUserProfile = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // get the userId from token
   
    const { userId } = req.user;
    // check if user entered all details
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All Fields Required" });
    }

    // check profile exist or not
    const isExist = await User.findOne({ email });
    if (!isExist) {
      return res.status(400).json({ message: "User Profile Not Exist" });
    }

    // creating user profile
    const userProfile = new User({
      userId,
      name,
      email,
      password,
      role,
    });

    // create a profile
    await userProfile.save();
    res.status(201).json({
      message: "User Profile Created Successfully",
      userProfile: userProfile,
    });
  } catch (error) {
    console.log("Error in Creating User Profile >>", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createUserProfile };
