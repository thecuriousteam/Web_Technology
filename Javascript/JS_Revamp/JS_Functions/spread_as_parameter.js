const add = (a, b, c) => {
	return a + b + c;
};

const number = [1, 2, 3, 4];

// spread as argument allows to expand the array and pass it to a function
console.log(...number);
console.log(add(...number));
