// ASYNC Functions Return Promises!!!

// ASYNC => AWAIT
const fetchNumber = async () => {
	return 25;
};

const data = await fetchNumber().then((number) => number * number);

console.log(data);


const operation = async (number) => {
	return number + number;
};

const add = async () => {
	const result = await operation(100);
	console.log(result);
};
add();
