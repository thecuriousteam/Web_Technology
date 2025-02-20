// initializing array
// var data = new Array(); //way 1
var data = []; // way 2

// adding element

// adding elements to array
data.push("aaa", "bbbb", "ccc");
console.log(">>> after pushing into array ", data);

// adding from beginning
data.unshift("AAA");
console.log(">>> after pushing into array from beginning ", data);

// splice -> Removing and Adding Elements Anywhere
data.splice(0, 1, "111", "333");
console.log(">>> after removing selected data into array ", data);

// removing element from array

// remove from beginning
data.shift();
console.log(">>> after removing data from beginning from array ", data);

// removes last element
data.pop();
console.log(">>> after popping into array ", data);

// searching & finding element
const findData = data.indexOf("333");
console.log(
	">>> finding element by passing the one which needs to be finded",
	findData
);

// find the element by passing the finding element
const findData1 = data.includes("333");
console.log(">>> finding element by passing the finding element", findData1);

// find the element which satisfy the given condition using find()
const findData2 = data.find((element) => element === "aaa");
console.log(
	">>> finding element based on the condition",
	"Element: ",
	findData2
);

// find the element which satisfy the given condition using findIndex()
const findElement = data.findIndex((element) => element === "bbbb");
console.log(
	">>> finding element based on the condition",
	"Pos: ",
	findElement,
	" element: ",
	data[findElement]
);

// join 2 arrays
const newData = [111, 222, 333, 444];

const joinedData = data.join(newData);
console.log(">>> after joining 2 arrays", joinedData);
