let str = "Hello, world!";

// checking the length
console.log(str.length);

// returning the char from the string
console.log(str.charAt(5));

// concatenating the string
console.log(str.concat(", World"));

// checking the presence
console.log(str.includes("World!"));

// Returns the index of the first occurrence of a specified value, or -1 if not found.
console.log(str.indexOf("Hello"));

// Returns the index of the last occurrence of a specified value, or -1 if not found
console.log(str.lastIndexOf("World"));
console.log(str.lastIndexOf("world!"));

// Replaces a specified value with another value in a string.
console.log(str.replace("world!", "everyone!"));

// Extracts a section of a string and returns it as a new string.
console.log(str.slice(0, 7));

// Splits a string into an array of substrings.
console.log(str.split(","));

//  Converts the string to lowercase and uppercase
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Removes whitespace from both ends of a string.
let data = "   Hello, world!   ";
console.log(data.trim());

// extracting the specific part of the string
console.log(str.substring(0, 7));

// padstart and padend
// method pads a string from the start or from the end
let num1 = "5";
let str1 = num1.padStart(4, "x");
let str2 = num1.padEnd(4, "x");
console.log(str1);
console.log(str2);

//output
// 13
// ,
// Hello, world!, World
// false
// 0
// -1
// 7
// Hello, everyone!
// Hello,
// [ 'Hello', ' world!' ]
// hello, world!
// HELLO, WORLD!
// Hello, world!
// Hello,
// xxx5
// 5xxx
