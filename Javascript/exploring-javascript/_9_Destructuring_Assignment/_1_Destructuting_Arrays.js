// array

// Basic Example
const numbers = [1, 2, 3, 4, 5, 6, 7];
const [first, second, third] = numbers;
console.log("First Value: " + first);
console.log("Second Value: " + second);
console.log("Third Value: " + third);

// Skipping Values
const [new_first, , new_third] = numbers;
console.log("First Value: " + new_first);
console.log("Third Value: " + new_third);

// Using Rest Operator
const [a_first, a_second, ...rest] = numbers;
console.log("First Value: " + a_first);
console.log("Second Value: " + a_second);
console.log("Rest Value: " + rest);


// output
// First Value: 1
// Second Value: 2
// Third Value: 3
// First Value: 1
// Third Value: 3
// First Value: 1
// Second Value: 2
// Rest Value: 3,4,5,6,7