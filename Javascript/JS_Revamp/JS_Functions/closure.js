function outerFunction(outerVar) {
	return function innerFunction(innerVar) {
		console.log(
			`Accessing outervar: ${outerVar} also we can access innervar: ${innerVar} `
		);
	};
}

const newFunc = outerFunction("This is outer variable");

newFunc("This is inner function");
