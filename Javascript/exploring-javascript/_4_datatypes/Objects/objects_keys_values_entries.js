const person = {
	name: "abc",
	age: 28,

	// nested objects
	myCars: {
		car1: "Range Rover Autobiography",
		car2: "Tesla",
		car3: "Hyundai i20",
	},
};

// iterating over the object

//  Objects.keys()
let keysData = Object.keys(person);
console.log("Displaying keys data " + keysData);

// Object.values(person);
let valuesData = Object.values(person);
console.log("Displaying values data " + valuesData);
console.log("Displaying nested values data " + Object.values(person));

// Object.entries()
let entriesData = Object.entries(person);
console.log("Displaying entries data " + entriesData);
