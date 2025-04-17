const express = require("express");
const router = express.Router();

// mentee controller usage
const mentee = require("../controller/MenteeController");

router.post("/add-mentee", (req, res) => {
	const menteeData = mentee.addMentees(req.body);
	res.status(201).json({
		status: 201,
		message: "Mentor Added successfully",
		Data: menteeData,
	});
});

// Mentee Routes
router.get("/all-mentee", (req, res) => {
	const menteeData = mentee.getAllMentees();
	if (menteeData) {
		res.status(200).json({
			status: 200,
			message: "Mentee Data Fetched Successfully",
			Data: menteeData,
		});
	} else {
		res.status(404).json({
			status: 404,
			message: "No Data Found",
			Data: menteeData,
		});
	}
});

router.get("/:id", (req, res) => {
	const id = req.params.id;
	console.log(id);
	const fetchedMentee = mentee.getMenteeById(id);
	if (fetchedMentee) {
		res.status(200).json({
			status: 200,
			message: "Mentee Data Fetched Successfully",
			Data: fetchedMentee,
		});
	} else {
		res.status(404).json({
			status: 404,
			message: "Mentee id not found",
			Data: fetchedMentee,
		});
	}
});

module.exports = router;
