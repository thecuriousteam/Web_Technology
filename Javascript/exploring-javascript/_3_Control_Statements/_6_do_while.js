const numbers = [1, 2, 3, 4, 5];

let i = 0;
do {
	console.log("index: " + i + " value: " + numbers[i]);
	i++;
} while (i < numbers.length);

// output
// index: 0 value: 1
// index: 1 value: 2
// index: 2 value: 3
// index: 3 value: 4
// index: 4 value: 5
