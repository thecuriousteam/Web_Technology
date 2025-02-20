const numbers = [1, 2, 3, 4, 5];

// map() function
const doubleNumbers = numbers.map((number) => {
	return number * 2;
});

console.log(doubleNumbers); //[ 2, 4, 6, 8, 10 ]

// extracting specific properties from object
const users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Charlie" },
];

const userName = users.map((user) => user.name);
console.log(userName); //[ 'Alice', 'Bob', 'Charlie' ]

// using map() with index
const fruits = ["apple", "banana", "cherry"];

const labeledFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);

console.log(labeledFruits); //[ '1. apple ', '2. banana ', '3. cherry ' ]

// nested map() function
const arrays = [
	[1, 2],
	[3, 4],
	[5, 6],
];

const newarray = arrays.map((subarray) =>
	subarray.map((numbers) => {
		return numbers * 2;
	})
);

console.log(newarray); //[ [ 2, 4 ], [ 6, 8 ], [ 10, 12 ] ]

// converting data types
const stringNumbers = ["1", "2", "3", "4"];
const converted = stringNumbers.map((numbers) => parseInt(numbers, 10));
console.log(converted); //[ 1, 2, 3, 4 ]

// conditionally transferring array
const numbersarray = [1, 2, 3, 4, 5, 6];
const result = numbersarray.map((numbers) =>
	// checking condition using ternary operator
	numbers % 2 == 0 ? `${numbers}: Even` : `${numbers}: Odd`
);
console.log(result); //[ '1: Odd', '2: Even', '3: Odd', '4: Even', '5: Odd', '6: Even' ]
