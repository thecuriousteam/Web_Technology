// way 1
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((num) => num * 2);
console.log(double);

// way 2
const newdouble = numbers.map((num, index) => {
	console.log("Position: " + index, "Value: " + num * 2);
	return num * 2;
});
console.log(newdouble);

// extracting the properties
const users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Charlie" },
];
const userdata = users.map((user, index) => {
	console.log(index, user.name);
});

// nested map() function
const arrays = [
	[1, 2],
	[3, 4],
	[5, 6],
];

const nestedDouble = arrays.map((subarray) =>
	subarray.map((value) => {
		return value * 2;
	})
);
console.log(nestedDouble);

// converting data types
const stringNumbers = ["1", "2", "3", "4"];
const newdata = stringNumbers.map((num) => parseInt(num, 10));
console.log(newdata);

// conditionally transferring array
const numbersarray = [1, 2, 3, 4, 5, 6, 100, 29, 12, 24, 400, 999];

// printing the number is odd if the number is odd and even if the number is even
const transferringarray = numbersarray.map((num) =>
	num % 2 === 0 ? `${num}:Even` : `${num}:Odd`
);
console.log(transferringarray);

// generating dynamic data using existing data
const employees = [
	{ name: "John", id: 85 },
	{ name: "Jane", id: 92 },
	{ name: "Jim", id: 76 },
];

const data = employees.map((emp) => ({
	name: emp.name,
	username: emp.name + emp.id,
	email: emp.name + "@curiousdevelopers.in",
	id: emp.id,
}));

console.log(data);

// combining data from multiple arrays
const ids = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];

const combineArray = ids.map((data, index) => ({
	id: data,
	name: names[index],
	username: names[index] + data,
}));

console.log(combineArray);

// splitting the string
const str = "hello";
const char_upper = str.split("").map((chars) => chars.toUpperCase());
const char_lower = str.split("").map((char) => char.toLowerCase());
console.log(char_upper);
console.log(char_lower);
