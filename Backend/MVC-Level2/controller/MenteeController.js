// Major Business Logic
const eachMentee = require("../models/MenteeModel");
class Mentee {
	static getAllMentees() {
		return eachMentee;
	}

	static addMentees(data) {
		return eachMentee.push(data);
	}

	static getMenteeById(id) {
		return eachMentee.find((men) => men.id === id);
	}
}

module.exports = Mentee;
