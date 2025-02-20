// object creation
const person = {
	firstname: "Nandan",
	lastname: "G N",
	age: "24",
	location: ["Bharat", "Karnataka"],
	isProgrammer: true,
	fullname: function () {
		return this.firstname + " " + this.lastname;
	},
};

// cloning object

// way 1 (Shallow Copy)
const newPerson = Object.assign({}, person);
console.log("cloning Object Way - 1: ", newPerson);

// way 2 (Shallow Copy) using spread
const newPerson2 = { ...person };
console.log("cloning Object Way - 2: ", newPerson2);

// way 3 (Deep Copy) -> first parse json and concert it to string
const newPerson3 = JSON.parse(JSON.stringify(person));
console.log("cloning Object Way - 3: ", newPerson3);

// optional chaining (?.)
console.log(
	"Check for property exist (Optional Chaining): ",
	person?.fullname()
);

// Object to JSON(Stringify)
const JSONData = JSON.stringify(person);
console.log("OBJECT to JSON: ", JSONData);

// JSON to Object conversion (parse)
const JSONObject = JSON.parse(JSONData);
console.log("JSON to OBJECT: ", JSONObject);
