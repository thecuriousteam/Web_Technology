// object creation and adding properties
const verification = {
	username: "nandangn",
	password: "test123",
	id: "CDC234",
	salary: "2.5CR",

	// userValidation object function
	userValidation: function (uname, upassword) {
		if (this.username === uname && this.password === upassword) {
			return console.log("User Authentication Success");
		} else if (this.username != uname || this.password != upassword) {
			return console.log("User Authentication Not Success");
		} else {
			return console.log("User Authentication Not Success");
		}
	},
};

const emp1 = verification.userValidation("nandangn", "test123");
console.log(emp1);

// output
// User Authentication Success
