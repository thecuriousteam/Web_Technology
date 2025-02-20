let arr = [111, 333, 5555, 789, 2345, 346];

console.log(">>> Foreach Example");

// iterate using foreach
function element(arr) {
	return arr.forEach((ele, index) => {
		console.log(`Index: ${index}:, Element: ${ele}`);
	});
}
element(arr);

console.log(">>> Map Example");

// map used to create a new array by applying a function to each element of an existing array.
const mapExample = (arr) => {
	return arr.map((ele, index) => {
		if (arr[index] > 500) {
			console.log(`Index: ${index}:, Element: ${ele}`);
		}
	});
};
mapExample(arr);

console.log(">>> Filter Example");
// Filters Elements Based on Condition
const filterExample = (arr) => {
	return arr.filter((ele) => ele > 500);
};

const result = filterExample(arr);
console.log(result);

console.log(">>> Reduce Example");

const total = arr.reduce((total, num) => total + num, 0);
console.log(total);
