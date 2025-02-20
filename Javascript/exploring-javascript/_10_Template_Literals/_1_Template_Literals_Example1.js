const { BiBookBookmark } = require("react-icons/bi");

const user = "ABC";

// template literals
const greeting = `Hello World! ${user}`;
// console.log(greeting);

// multiline string
const message = `This is a message
that spans multiple
lines without any issues.`;

// console.log(message);

// embedding expressions
const x = 10;
const y = 20;

const result = `The sum of ${x} and ${y} is ${x + y}.`;

console.log(result); // Outputs: "The sum of 10 and 20 is 30."
