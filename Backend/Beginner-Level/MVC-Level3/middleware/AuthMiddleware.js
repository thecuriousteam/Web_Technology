const jwt = require("jsonwebtoken");
const JWT_SECRET = "ivebidusbyguysa687a9huidicbnzx6789ichsiuabh";

module.exports = (req, res, next) => {
	// decoding access token
	const { authorization } = req.headers;

	// check token validations
	if (!authorization || !authorization.startsWith("Bearer ")) {
		const error = new Error("Unauthorized: Bearer token");
		error.status = 401;
		return next(error);
	}

	const split = authorization.split(" ")[1];
	console.log(">>>>>>>>>>>>>>>>>>>>>> splited token", split);

	// decode and check token
	try {
		const decode = jwt.verify(split, JWT_SECRET);

		console.log(">>>>>>>>>>>>>>>>>>>>>> decode token", decode);

		// get the required data from token
		req.userId = decode.id;
		req.userRoles = decode.roles;
		next();
	} catch (e) {
		const error = new Error("Unauthorized: Invalid token");
		error.status = 401;
		next(error);
	}
};
