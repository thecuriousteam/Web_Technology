// check tokken authenticity

const jwtToken = require("jsonwebtoken");
const User = require("../model/User");

const authMiddleware = async (req, res, next) => {
  // get the token from header\

  const accessToken = req.header("Authorization").replace("Bearer ", "");

  console.log("Token Fron Header >>:", accessToken);

  // check if token is present
  if (!accessToken) {
    return res.status(401).json({ message: "Access Denied" });
  }

  // verify the access token
  try {
    // decode the token
    const decodedToken = jwtToken.verify(accessToken, process.env.JWT_SECRET);
    console.log("Decoded Token >>", decodedToken);

    // assign the token to all requests of user
    req.user = decodedToken;
    next(); // call the next middleware or route handler
  } catch (error) {
    console.log("Error in Token Verification >>", error.message);
    return res
      .status(401)
      .json({ message: "Invalid Token", error: error.message });
  }
};

module.exports = authMiddleware;
