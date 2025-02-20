let arr = [1, 2, 3, 4, 5];

// Returns the number of elements in the array.
console.log(arr.length);

// Adds one or more elements to the end of an array and returns the new length of the array.
let newarr = arr.push(20);
console.log(newarr);

// Removes the last element from an array and returns that element.
console.log(arr.pop());
console.log(arr);

// Removes the first element from an array and returns that element
arr.shift();
console.log(arr);

// Adds one or more elements to the beginning of an array and returns the new length of the array.
arr.unshift(1);
console.log(arr);

// Merges two or more arrays.

let arr1 = [1, 2, 3, 4];
let arr2 = [11, 22, 33, 44];

let concatArr = arr1.concat(arr2);
console.log(concatArr);

// Joins all elements of an array into a string.
let joinedArr = arr.join(", ");
console.log(joinedArr);

// Extracts a section of an array and returns it as a new array.

let slicedArr = arr.slice(0, 3);
console.log(slicedArr);

// Adds and/or removes elements from an array.
arr.splice(0, 1, "a", "b");
console.log(arr);

// Executes a provided function once for each array element.
arr.forEach((eachItem) => console.log(eachItem));

let newArr = [1, 2, 3, 4, 5];
// Creates a new array with the results of calling a provided function on every element in the calling array.
let mappedARR = newArr.map((eachItem) => eachItem * 2);
console.log(mappedARR);

// Creates a new array with all elements that pass the test implemented by the provided function.
let filtered = arr.filter((element) => typeof element === "number");
console.log(filtered); // [1, 2, 4, 5]

// Executes a reducer function on each element of the array, resulting in a single output value.
let sum = arr.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0
);
console.log(sum); // 12 (Note: "a" and "b" are ignored since they are not numbers)

// Returns the value of the first element that satisfies the provided testing function.
let found = arr.find((element) => element > 3);
console.log(found); // 4

// Returns the index of the first element that satisfies the provided testing function.
let index = arr.findIndex((element) => element > 3);
console.log(index); // 4

// Determines whether an array includes a certain value among its entries.
console.log(arr.includes(2)); // true

//output
// 5
// 6
// 20
// [ 1, 2, 3, 4, 5 ]
// [ 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
// [
//    1,  2,  3,  4,
//   11, 22, 33, 44
// ]
// 1, 2, 3, 4, 5
// [ 1, 2, 3 ]
// [ 'a', 'b', 2, 3, 4, 5 ]
// a
// b
// 2
// 3
// 4
// 5
// [ 2, 4, 6, 8, 10 ]
// [ 2, 3, 4, 5 ]
// 0ab2345
// 4
// 4
// true
