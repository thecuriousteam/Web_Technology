const alpha = ["aaa", "bbb", "ccc", "ddd", "eee"];

// all looping in same place

// using for loop
for (let al = 0; al < alpha.length; al++) {
	console.log("Char: ", alpha[al]);
}

// using while loop
let ch = 0;
while (ch < alpha.length) {
	console.log("Char: ", alpha[ch]);
	ch++;
}

// for in
let key = "ccc";
for (key in alpha) {
	console.log("Character: ", alpha[key]);
}

// for of
let data = 0;
for (data of alpha) {
	console.log("Data: ", data);
}

// foreach
alpha.forEach((value) => console.log("Value: ", value));
