// class MentorController {
// 	static getAllMentors(req, res) {
// 		res.send({
// 			status: 200,
// 			message: "Get All Mentors Fetched Successfully",
// 		});
// 	}
// }

// let's call the mentor model

const Mentor = require("../models/MentorModel");

function addMentor(data) {
	// in model as it is a class we need to create a new object
	const mentor = new Mentor(data);
	return mentor.save();
}

function getAllMentors() {
	return Mentor.getAllMentor();
}

function getMentorById(id) {
	return Mentor.getMentorById(id);
}

module.exports = { addMentor, getAllMentors, getMentorById };
