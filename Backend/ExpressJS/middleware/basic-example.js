// Custom middleware
// Middleware function
function middleware(req, res, next) {
  console.log("Middleware Executed Successfully");
  next(); // Pass control to the next middleware or route handler
}
// Logging Middleware
function loggingMiddleware(req, res, next) {
  console.log(`${req.method} request made to ${req.url}`);
  next();
}

module.exports = { middleware, loggingMiddleware };
