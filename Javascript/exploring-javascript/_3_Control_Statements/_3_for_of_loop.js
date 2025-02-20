const numbers = [100, 200, 300, 400, 500];

// using for..of for the iteration
function forOfExample(numbers) {

  // for..of logic
	for (let index of numbers) {
		console.log(index);
	}
}

forOfExample(numbers);

// way one iterate
function iterate(numbers) {
	console.log(numbers);
}
numbers.forEach(iterate);

// way two iterate
for (let index in numbers) {
	console.log(index, numbers[index]);
}

// way three iterate
for (let index = 0; index < numbers.length; index++) {
	console.log(index, numbers[index]);
}