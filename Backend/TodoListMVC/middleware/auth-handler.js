// auth middleware
const authMiddlewareTodo = (req, res, next) => {
	// we are expecting authorization in header
	const token = req.headers["authorization"];

	// check whether token is valid or not
	if (!token || token !== "Bearer valid-token") {
		return res.status(401).json({ error: "Unauthorized access" });
	}
	next();
};

module.exports = authMiddlewareTodo;
