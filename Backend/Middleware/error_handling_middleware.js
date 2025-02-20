module.exports = (err, req, res, next) => {
	console.error(err.stack); // Log the error stack trace for debugging
	// error handling middleware

	// determine the statuscode
	const statusCode = err.statusCode || 500;

	// determine the error message
	const errMessage = err.message || "Internal Server Error";

	// sending error message
	res.status(statusCode).json({
		success: false,
		message: errMessage,
		stack: err.stack,
	});
};
