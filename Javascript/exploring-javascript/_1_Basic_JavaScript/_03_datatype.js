/*
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object
*/

let name = "Curious Developers Community"; //string
let count = 25000; //int
let isProduct = true; //boolean

// object
const fullName = { firstName: "Curious", lastName: "Community" };

// array
const arr = ["aaa", "bbb", "ccc"];

// date
const today = new Date("2023-12-27");

console.log(
	"String type - ",
	name,
	"\nint type - ",
	count,
	"\nboolean type - ",
	isProduct,
	"\nobject type - ",
	fullName,
	"\narray type - ",
	arr,
	"\ndate type - ",
	today
);

// special datatype

// using function as datatype
const data = function (a, b) {
	return a + b;
};

const result = data(10, 20);
console.log("Example Special Datatype => function as datatype: " + result);

// using function as datatype without function name
const info = function (name, age) {
	const response = "My Name is " + name + " My age is: " + age;
	return response;
};

const output = info("Nandan", "25");
console.log(output);

// object type
const operation = {
	add: function (a, b) {
		return a + b;
	},
	sub: function (a, b) {
		return a - b;
	},
};

const addOperationResult = operation.add(10, 20);
const subOperationResult = operation.sub(10, 20);
console.log("add: ", addOperationResult, "sub: ", subOperationResult);

/*
Output
=============================================================
String type -  Curious Developers Community 
int type -  25000 
boolean type -  true 
object type -  { firstName: 'Curious', lastName: 'Community' } 
array type -  [ 'aaa', 'bbb', 'ccc' ] 
date type -  2023-12-27T00:00:00.000Z
Example Special Datatype => function as datatype: 30
My Name is Nandan My age is: 25
add:  30 sub:  -10
*/
