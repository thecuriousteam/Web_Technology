let user = {
	name: "John",
	age: 30,
	isAdmin: true,
};

// iterating
for (let keyData in user) {
	console.log("key: " + keyData + " value: " + user[keyData]);
}

// output
// key: name value: John
// key: age value: 30
// key: isAdmin value: true
