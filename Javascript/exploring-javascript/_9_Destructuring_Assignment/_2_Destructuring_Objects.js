// objects
const person = {
	name: "John",
	age: 30,
	city: "New York",
};

// Basic Destructuring
const { name, age, city } = person;
console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);

// Assigning new value
const { name: newName, age: newAge, city: newCity = "USA" } = person;
// const { name: newName, age: newAge, newCity = "USA" } = person; => we can write like this also
console.log("New Name: " + newName);
console.log("New Age: " + newAge);
console.log("New City: " + newCity);

// default value
const { name: a_newName, age: a_newAge, a_newCity = "unknown" } = person;
console.log("New Name: " + a_newName);
console.log("New Age: " + a_newAge);
console.log("New City: " + a_newCity);

// rest operator
const { name: b_newName, ...rest } = person;
console.log("Name: " + b_newName);
console.log(rest);

// destructuring in nested object
const newPerson = {
	name: "John",
	age: 30,
	address: {
		city: "New York",
		zip: 10001,
	},
};

const {
	name,
	age,
	address: { city, zip },
} = newPerson;

console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);
console.log("Zip: " + zip);

// output
// Name: John
// Age: 30
// City: New York
// New Name: John
// New Age: 30
// New City: New York
// New Name: John
// New Age: 30
// New City: unknown
// Name: John
// { age: 30, city: 'New York' }
// Name: John
// Age: 30
// City: New York
// Zip: 10001
