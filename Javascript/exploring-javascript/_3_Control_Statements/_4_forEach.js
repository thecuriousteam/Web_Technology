// forEach

/*
array.forEach(function(element, index, array) {
    // code block to be executed
});
*/
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
	console.log(number);
});

numbers.forEach(function (index, value, array) {
	console.log("index: " + index + " value: " + value + " array: " + array);
});

//output
/*
1
2
3
4
5
index: 1 value: 0 array: 1,2,3,4,5
index: 2 value: 1 array: 1,2,3,4,5
index: 3 value: 2 array: 1,2,3,4,5
index: 4 value: 3 array: 1,2,3,4,5
index: 5 value: 4 array: 1,2,3,4,5
*/
