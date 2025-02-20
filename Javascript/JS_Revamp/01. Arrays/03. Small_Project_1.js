const orders = [
	{ id: 1, product: "Laptop", price: 1000, quantity: 1 },
	{ id: 2, product: "Phone", price: 500, quantity: 2 },
	{ id: 3, product: "Tablet", price: 300, quantity: 3 },
	{ id: 4, product: "Headphones", price: 100, quantity: 4 },
];

// these are the products which i purchased, let's extract price in specific array

const array = orders.map((eachPrice) => eachPrice.price);
console.log("Prices Array: ", array);

// on this price let's give 10% discount
const discountPrice = array.map((eachPrice) => eachPrice * 0.9);
console.log("Discount Price 10% : ", discountPrice);

// let's filter based on price > 300
const above300 = discountPrice.filter((eachPrice) => eachPrice >= 300);
console.log("Gadget price above 300: ", above300);

// lets count all and check how much it is
const totalAmount = discountPrice.reduce(
	(presentVal, nextVal) => presentVal + nextVal,
	0
);

console.log("Total Price Of All Products: $" + totalAmount);
