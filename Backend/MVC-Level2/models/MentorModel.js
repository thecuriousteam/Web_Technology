// declare an array (temp act as array)
const Mentors = [];

/*
  {
    "id": "",
    "name": "",
    "email": "",
    "expertise": [],
    "bio": "",
    "availability": {
      "days": [],
      "timeSlots": []
    },
    "rating": 0,
    "isActive": true,
    "createdAt": "",
    "updatedAt": ""
  }
*/

// creating a class for the schema
class MentorSchema {
	// these all the fields which are required
	constructor(data) {
		this.id = data.id || Date.now().toString();
		this.name = data.name || "Unknown User";
		this.email = data.email || "email@gmail.com";
		this.expertise = data.expertise || [];
		this.bio = data.bio || "";
		this.availability = data.availability || { days: [], timeslots: [] };
		this.rating = data.rating || 0;
		this.isActive = data.isActive || true;
		this.createdAt = new Date().toUTCString();
		this.updateAt = new Date().toUTCString();
	}

	// save the data to array
	save() {
		Mentors.push(this);
		return this;
	}

	static getAllMentor() {
		return Mentors;
	}

	static getMentorById(id) {
		// have find logic here
		return Mentors.find((mentor) => mentor.id === id);
	}
}

module.exports = MentorSchema;
