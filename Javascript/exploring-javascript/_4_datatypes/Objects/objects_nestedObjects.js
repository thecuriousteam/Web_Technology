// object creation and initialization
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

// printing each object properties
console.log(person.name);
console.log(person.age);

// printing each object properties of nested object
console.log(person.myCars.car1);

// printing complete object properties
console.log(person);

// output
// abc
// 28
// Range Rover Autobiography
// {
//   name: 'abc',
//   age: 28,
//   myCars: {
//     car1: 'Range Rover Autobiography',
//     car2: 'Tesla',
//     car3: 'Hyundai i20'
// }
