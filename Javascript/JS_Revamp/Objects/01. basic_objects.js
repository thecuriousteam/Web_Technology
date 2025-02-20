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

// logging
console.log(person);

// check property is present or not
console.log("Checking for property: ", "age" in person);

// checking type of object
console.log("Data type is: ", typeof person);

// accessing items of object - way 1
console.log("Full Name: ", person.firstname + " " + person.lastname);

// accessing items of object - way 2
console.log("Full Name: ", person["firstname"] + " " + person["lastname"]);

// adding new object
person["isJSDeveloper"] = true;
console.log("Adding new object: ", person);

// updating object
person["isProgrammer"] = "always true";
console.log("Updating object: ", person);

// delete object
delete person["lastname"];
console.log("Deleting object: ", person);

// looping on projects
for (let key in person) {
	console.log("Key: ", key, "Value: ", person[key]);
}

// printing keys
console.log("Keys: ", Object.keys(person));
console.log("Values: ", Object.values(person));
console.log("Items: ", Object.entries(person));
