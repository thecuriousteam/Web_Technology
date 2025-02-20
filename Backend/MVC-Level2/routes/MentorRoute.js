const express = require("express");
const router = express.Router();

const {
	addMentor,
	getAllMentors,
	getMentorById,
} = require("../controller/MentorController");
// const mentorController = require("../controller/MentorController");
// router.get("/all-mentors", ,entorController.getAllMentors);

// routes

// add mentor
router.post("/add-mentor", (req, res) => {
	const mentor = addMentor(req.body);
	res.status(201).json({
		status: 201,
		message: "Mentor Added successfully",
		Data: mentor,
	});
});

// get all mentors
router.get("/all-mentors", (req, res) => {
	const mentors = getAllMentors();
	res.status(200).json({
		status: 200,
		message: "Mentor Data Fetched Successfully",
		Data: mentors,
	});
});

// get mentor by id
router.get("/:id", (req, res) => {
	const mentor = getMentorById(req.params.id);

	if (mentor) {
		res.status(200).json({
			status: 200,
			message: "Mentor Data Fetched Successfully",
			Data: mentor,
		});
	} else {
		res.status(404).json({
			status: 404,
			message: "Mentor Not Found",
			Data: mentor,
		});
	}
});

module.exports = router;


pm2 start ecosystem.config.js