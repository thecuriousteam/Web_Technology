// spread -> it is used to expand the elements of array and properties of object

// spread in functions
function data(a, b, c, d) {
	console.log("Value of a", a);
	console.log("Value of b", b);
	console.log("Value of c", c);
	console.log("Value of d", d);
}

const myArr = ["Apple", "Banana", "Cucumber", "Dragon Fruit"];
data(...myArr);

// spread in arrays
let newArr1 = ["Apple", "Banana", "Cucumber", "Dragon Fruit"];
let newArr2 = ["Grapes", "Watermelon"];
const fruits = [...newArr1, ...newArr2];
console.log(fruits);

// ways in using real world projects
let allFruits = [...newArr1, "Kiwi", ...newArr2, "Lemon"];
console.log(allFruits);

// spread in object
const dataNew = { name: "Nandan", age: 24 };
const personalData = { email: "test@gmail.com", phone: "+1234567890" };
const completeData = { ...dataNew, ...personalData };
console.log(completeData);
