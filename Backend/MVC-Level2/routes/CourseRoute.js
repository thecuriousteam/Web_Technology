const express = require("express");
const router = express.Router();

const course = require("../controller/CourseController");

// all routes
router.get("/get-courses", (req, res) => {
	const courses = course.getAllCourse();
	if (courses) {
		res.status(200).json({
			status: res.statusCode,
			data: courses,
		});
	} else {
		res.status(404).json({
			status: res.statusCode,
			data: [],
		});
	}
});

// add course
router.post("/add-course", (req, res) => {
	const courses = course.addCourse(req.body);
	if (courses) {
		res.status(201).json({
			status: res.statusCode,
			message: "Course Added successfully",
			data: course.getAllCourse(),
		});
	} else {
		res.status(400).json({
			status: res.statusCode,
			data: "bad request",
		});
	}
});

// get course by id

router.get(":id", (req, res) => {
	const id = req.params.id;

	console.log(">>>>>>>>>>>>> id", id);
	const coursedata = course.getCourseById(id);

	if (coursedata) {
		res.status(200).json({
			status: res.statusCode,
			message: coursedata,
		});
	} else {
		res.status(400).json({
			status: res.statusCode,
			message: "Something went wrong",
		});
	}
});

// get course by title
router.get("/", (req, res) => {
	const { title } = req.query;
	console.log(">>>>>>>>> title", title);

	if (title) {
		const coursedata = course.getCourseByTitle(title);

		if (coursedata) {
			res.status(200).json({
				status: res.statusCode,
				message: coursedata,
			});
		} else {
			res.status(404).json({
				status: res.statusCode,
				message: "Course not found",
			});
		}
	} else {
		res.status(400).json({
			status: res.statusCode,
			message: "Bad Request",
		});
	}
});

module.exports = router;
