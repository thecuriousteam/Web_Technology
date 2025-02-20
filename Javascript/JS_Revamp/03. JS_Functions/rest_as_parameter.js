// rest as a argument allows indefinite number of parameters to a function

function add(...num) {
	return num.reduce((total, nums) => total + nums, 0);
}

console.log(add(1, 2, 3, 4, 5, 6, 7));
