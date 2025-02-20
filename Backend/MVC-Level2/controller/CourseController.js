const courseData = require("../models/CoursesModel");
class Courses {
	// all functions which Courses logic contains
	static addCourse(course) {
		return courseData.push(course);
	}

	static getAllCourse() {
		return courseData;
	}

	static getCourseById(id) {
		const course = courseData.find((eachCourse) => eachCourse.id === id);
		return course;
	}

	static getCourseByTitle(titleInput) {
		const globalTitle = titleInput.toLowerCase();
		console.log(">>>>>>>>>>", globalTitle);
		const course = courseData.find(
			(eachCourse) => eachCourse.title.toLowerCase() === globalTitle
		);
		return course;
	}
}

module.exports = Courses;
