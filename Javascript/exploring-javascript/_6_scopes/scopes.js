// global scope
var globalVar = "I'm global";

function displayGlobalVar() {
	console.log(globalVar); // Accessible here
}

displayGlobalVar(); // Logs: I'm global
console.log(globalVar); // Accessible here too

// local scope
function localScopeExample() {
	var localVar = "I'm local";
	console.log(localVar); // Accessible here
}

localScopeExample(); // Logs: I'm local
// console.log(localVar); // ReferenceError: localVar is not defined

// block scope
if (true) {
	let blockScopedVar = "I'm block-scoped";
	console.log(blockScopedVar); // Accessible here
}

// console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined

// Lexical scope
function outerFunction() {
	var outerVar = "I'm outer";

	function innerFunction() {
		console.log(outerVar); // Accesses variable from the outer scope
	}

	innerFunction();
}

outerFunction(); // Logs: I'm outer

// module scope
// module.js
// const moduleScopedVar = "I'm in a module";
// export const exportedVar = "I'm exported";

// // main.js
// import { exportedVar } from './module.js';
// console.log(exportedVar); // Accessible here
// console.log(moduleScopedVar); // ReferenceError: moduleScopedVar is not defined

//scope chain
var globalVar2 = "I'm global";

function outer() {
	var outerVar = "I'm outer";

	function inner() {
		var innerVar = "I'm inner";
		console.log(innerVar); // Logs: I'm inner
		console.log(outerVar); // Logs: I'm outer
		console.log(globalVar2); // Logs: I'm global
	}

	inner();
}

outer();
