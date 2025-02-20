const data = [1, 3, 5, 78, 900, 544];

// foreach() -> it iterates over the array but not return new array
data.forEach((value, index) => {
	console.log("Value: ", value, "Index: ", index);
});

data.forEach((value) => {
	console.log("Value: ", value + " is number");
});

// map() -> it iterates over the array but returns new array basically it will help in manipulation of array
const arr = data.map((value) => {
	return value * 2;
});

console.log("Manipulated Array", arr);
console.log("Original Array", data);

// find() -> returns undefined or the first element that satisfy the given condition
const findNumber = data.find((num) => num === 900);
console.log("Find", findNumber);

// findIndex() -> returns -1 or the first index that satisfy the given condition
const findIndexNum = data.findIndex((num) => num > 899);
console.log("findIndex", findIndexNum);

// include() -> return true if element preset and false if its not present
const findNum = data.includes(900, 0);
console.log("include", findNum);

// filter() - returns new array with filtered data
const filteredData = data.filter((num) => num % 2 === 0);
console.log("Filtered Data", filteredData);

// slice(startIndex, endIndex + 1)
const evenData = data.slice(0, 5).filter((num) => num % 2 === 0);
console.log("Even Data", evenData);

// spice(startIndex, DeleteCount)
const oddDataSplice = data.splice(0, 5).filter((num) => num % 2 !== 0);
console.log("Odd Data: ", oddDataSplice);

// reduce
const newData = [1, 3, 5, 78, 900, 544];
const total = newData.reduce((num, index) => {
	return num + index;
}, 0);
console.log("Total Data: ", total);
