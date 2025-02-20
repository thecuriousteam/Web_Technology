const data = [
	1000,
	"Hello",
	true,
	null,
	undefined,
	{ name: "John" },
	[1, 2, 3],
	function () {
		console.log("Function");
	},
];

for (let i = 0; i < data.length; i++) {
	console.log(`The datatype = ${typeof data[i]}, Value = ${data[i]}`);
}

const arrType = ["aaa", "bbb", "ccc", "ddd"];

for (let i = 0; i < arrType.length; i++) {
	console.log("index:", i, " Value: ", arrType[i]);
}


// example
function randomInt(count) {
	for (let i = 0; i < count; i++) {
		return Math.floor(Math.random() * (999 - 0) - 0);
	}
}

const people = ["John", "max", "peter", "larry", "david", "alice"];
for (let i = 0; i < people.length; i++) {
	console.log("Employee: " + people[i] + randomInt(i));
}

//output
// The datatype = number, Value = 1000
// The datatype = string, Value = Hello
// The datatype = boolean, Value = true
// The datatype = object, Value = null
// The datatype = undefined, Value = undefined
// The datatype = object, Value = [object Object]
// The datatype = object, Value = 1,2,3
// The datatype = function, Value = function () {
// 		console.log("Function");
// 	}
// index: 0  Value:  aaa
// index: 1  Value:  bbb
// index: 2  Value:  ccc
// index: 3  Value:  ddd
// Employee: Johnundefined
// Employee: max766
// Employee: peter283
// Employee: larry266
// Employee: david423
// Employee: alice412
