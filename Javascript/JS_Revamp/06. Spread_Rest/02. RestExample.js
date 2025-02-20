// Rest => It allows in gathering indefinite elements into a single value
const double = (...numbers) => numbers.map((num) => num * 2);
console.log(double(10, 20, 30, 40, 50));

const doubleFunc = function (...numbers) {
	for (let i = 0; i < numbers.length; i++) {
		numbers[i] = numbers[i] * 2;
	}

	return numbers;
};
console.log(doubleFunc(10, 20, 30, 40, 50));

// destructuring scope
const number = [10, 20, 30, 40, 50];

// destructuring in array
const [first, second, ...restValue] = number;
console.log(first);
console.log(second);
console.log(restValue);

// real world example
const data = ["aaa", "bbb", "ccc", "ddd", "eee"];
const [...restNewValue] = data;
console.log(restNewValue);

// destructuring in object (VERY IMPORTANT)
const student = { name: "Alice", age: 22, grade: "A", city: "Boston" };
const { name, ...otherDetails } = student;
console.log("Name: ", name);
console.log("Student Data: ", otherDetails);
