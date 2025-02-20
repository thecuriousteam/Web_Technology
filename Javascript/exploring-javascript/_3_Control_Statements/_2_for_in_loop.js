// array type
const arrType = ["aaa", "bbb", "ccc", "ddd"];

for (let index in arrType) {
	console.log("Index:", index, "Value:", arrType[index]);
}

// objects type
const obj = {
	name: "abc",
	age: 25,
	email: "abc@gmail.com",
};

// iteration in objects
for (let key in obj) {
	console.log("Key: ", key, " Value: ", obj[key]);
}

//output
// Index: 0 Value: aaa
// Index: 1 Value: bbb
// Index: 2 Value: ccc
// Index: 3 Value: ddd
// Key:  name  Value:  abc
// Key:  age  Value:  25
// Key:  email  Value:  abc@gmail.com
