// combining data from multiple arrays
const ids = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

const combinedArray = ids.map((id, index) => ({
	ids: id,
	names: names[index],
}));

console.log(combinedArray);
// [
//   { ids: 1, names: 'Alice' },
//   { ids: 2, names: 'Bob' },
//   { ids: 3, names: 'Charlie' }
// ]

// splitting the string
const str = "hello";
const char_upper = str.split("").map((chars) => chars.toUpperCase());
const char_lower = str.split("").map((char) => char.toLowerCase());
console.log(char_upper);
console.log(char_lower);
// [ 'H', 'E', 'L', 'L', 'O' ]
// [ 'h', 'e', 'l', 'l', 'o' ]
