let len = prompt("enter the size of array: ");

let arr = [];

for (let i = 0; i <= len; i++) {
	arr[i] = prompt("enter the value to insert inside array: ");
	// update logic
}

let input = prompt("Do you want to update arr say Yes/No: ").toLowerCase();

alert("Your arr before update: " + arr);
console.log("Your arr before update: " + arr);

if (input === "yes") {
	let updateIndex = prompt("Enter the index you want to update: ");
	let updateNumber = prompt("Enter the value which you want to add: ");
	for (let i = 0; i <= arr.length; i++) {
		if (i <= updateIndex) {
			console.log("index is not present");
		} else {
			arr[updateIndex] = updateNumber;
		}
	}

	// arr[updateIndex] = updateNumber;

	alert("Your arr after update: " + arr);
	console.log("Your arr after update: " + arr);
} else {
	alert("Thank you");
}
