// Basic variable assignment
const foo = ["one", "two", "three"];

// Destructuring - it is used to unpack or extract specific data and assign back to another variable for specific task
const [a, b, c, d] = foo;
console.log("a", a);
console.log("b", b);
console.log("c", c);

console.log("d", d); // gives undefined if there is no data

// swapping
let aa = 10;
let bb = 20;
[aa, bb] = [bb, aa];
console.log("value of aa", aa);
console.log("value of bb", bb);

// array swapping
const arr = [1, 2, 3, 4, 5, 6, 7];
[arr[1], arr[2]] = [arr[2], arr[1]];

console.log("value of arr[1]", arr[1]);
console.log("value of arr[2]", arr[2]);
console.log("After swapping", arr);
