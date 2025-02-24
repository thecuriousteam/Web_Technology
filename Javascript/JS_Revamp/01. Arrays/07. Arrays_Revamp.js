const data = ["aaa", "bbb", "ccc", "ddd"];

// checking length of array
console.log(data.length);

// access
console.log(data[0]);

// add
data.push("111"); // end
data.unshift("222"); //beginning

// remove
data.pop(); //end
data.shift(); //beginning
console.log(data);

// array higher order functions
const newData = ["aaa", "bbb", "ccc", "ddd"];

// iterate
// foreach
newData.forEach((ele, index) =>
  console.log(`Element: ${ele}, index: ${index}`)
);

// map -> does operation and returns new array doesn't change exiisting array
const concat = newData.map((ele) => ele + " is Alphabet");
console.log(concat);

// filter
const aaa = newData.filter((ele) => ele === "aaa");
console.log(aaa);

// find
const item = "bbb";
const find = newData.find((ele) => ele === item);
console.log(find);

// findIndex
const eleIndex = newData.findIndex((ele) => ele === item);
console.log(eleIndex);

// reduce
const join = newData.reduce((prev, next) => prev.concat(next));
console.log(join);
