// creating object with constructor
const objExample = new Object();

// object properties
objExample.name = "abc";
objExample.age = "24";
objExample.id = "CEIAP024";

// object function
objExample.data = function () {
	console.log("Hello World");
};

// display
console.log(objExample);
objExample.data();

// object literal
const objEx2 = {};

// setting data
objEx2["POS1"] = "one";
objEx2["POS2"] = "two";
objEx2["POS3"] = "three";

// updating data
objEx2["POS1"] = "ONE";

// display
console.log(objEx2);

// getting data
console.log("Data at POS1: " + objEx2["POS1"]);

// checking the presence
console.log("POS2" in objEx2);

// delete data
delete objEx2["POS3"];

// final display
console.log(objEx2);

// output
{
//   name: 'abc',
//   age: '24',
//   id: 'CEIAP024',
//   data: [Function (anonymous)]
// }
// Hello World
// { POS1: 'ONE', POS2: 'two', POS3: 'three' }
// Data at POS1: ONE
// true
// { POS1: 'ONE', POS2: 'two' }
