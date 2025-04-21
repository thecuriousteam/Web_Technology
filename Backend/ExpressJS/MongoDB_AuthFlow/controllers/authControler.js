// register user, login user
const jwtToken = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../model/User");

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  // check if user entered all details
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All Filelds Required" });
  }

  // check if email is already registered
  const user = await User.findOne({ email });
  console.log("User >>> ", user);
  if (user) {
    return res.status(400).json({ message: "User Already Registered" });
  }

  // hash password creation
  const hashedPassword = await bcrypt.hash(password, 10);

  const userProfile = new User({
    name,
    email,
    password: hashedPassword,
    role,
  });

  await userProfile.save();
  // generate a jwtToken
  const accessToken = jwtToken.sign(
    {
      userId: userProfile._id,
      role: userProfile.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  console.log("Access Token >>", accessToken);

  res.status(201).json({
    message: "User Registered Successfully",
    accessToken,
    User: {
      id: userProfile._id,
      name: userProfile.name,
      email: userProfile.email,
      role: userProfile.role,
      createdAt: userProfile.createdAt,
    },
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // check if user entered all details
  if (!email || !password) {
    return res.status(400).json({ message: "All Filelds Required" });
  }

  // check if email is existed in DB
  const isExisted = await User.findOne({ email });
  if (!isExisted) {
    return res.status(400).json({ message: "User Not Found Need Signup" });
  }

  const comparePassword = await bcrypt.compare(password, isExisted.password);
  console.log("Compare Password >>", comparePassword);
  if (!comparePassword) {
    return res.status(400).json({ message: "Invalid Password" });
  }

  // create token and send it
  const accessToken = jwtToken.sign(
    {
      userId: isExisted._id,
      role: isExisted.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  console.log("Access Token in Login >>", accessToken);

  res.status(200).json({
    message: "User Login Successfully",
    accessToken,
    User: {
      id: isExisted._id,
      name: isExisted.name,
      email: isExisted.email,
      role: isExisted.role,
      createdAt: isExisted.createdAt,
    },
  });
};

module.exports = { registerUser, loginUser };
