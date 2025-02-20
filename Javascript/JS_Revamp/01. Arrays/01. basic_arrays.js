const data = ["aaa", "bbb", "ccc", "ddd"];

// logging
console.log("Array data: " + data);

// accessing individual element
console.log("Access element: ", data[1]);

// modify element
data[1] = "Modified Data: bbb";
console.log("Access element: ", data);

// add element from beginning and end

// push()
data.push("Added at end: eee");
console.log("After push(): ", data);

// add element from beginning
// unshift()
data.unshift("Added from beginning: 000");
console.log("After unshift(): ", data);


// remove element from beginning and end
// pop()
data.pop();
console.log("After pop(): ", data);

// shift()
data.shift();
console.log("After shift(): ", data);

// length() of array
console.log("Length of array: ", data.length);

// find index of element
console.log("Find index of element", data.indexOf("aaa"));

// reverse an array
const reversedArray = data.reverse();
console.log("Reversed array: ", reversedArray);
