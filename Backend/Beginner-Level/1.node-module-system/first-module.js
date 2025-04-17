function add(a, b) {
	return a + b;
}

function sub(a, b) {
	return a - b;
}

function wrapperCheck() {
	console.log(" First Module.js", __dirname);
	console.log("  First Module.js", __filename);
}

// we can export the module like below syntax
module.exports = { add, sub, wrapperCheck };
