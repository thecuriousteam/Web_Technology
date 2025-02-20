const errorHandler = (err, req, res, next) => {
	const error = err.stack;
	console.log(error);

	return res.status(err.status === 500).json({
		message: err.message || "Internal server error",
	});
};

module.exports = errorHandler;
