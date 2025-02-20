const products = [
	{ id: 1, name: "Laptop", price: 80000 },
	{ id: 2, name: "Phone", price: 50000 },
	{ id: 3, name: "Tablet", price: 30000 },
];

// to this json array i want to add another filed called sale price field
const festivalSales = products.map((eachProduct) => ({
	...eachProduct,
	salesDiscount: eachProduct.price * 0.9,
})); //----------------------------------------> Logic needs to remember

console.log(festivalSales);

const savedAmount = festivalSales.map((eachProduct) => ({
	...eachProduct,
	// foreach product we need add new field called saved amount
	savedAmount: eachProduct.price - eachProduct.salesDiscount,
}));

console.log(savedAmount);

// lets filter the product which is greater than 30000
const productAbove30 = festivalSales.filter(
	(eachProduct) => eachProduct.salesDiscount >= 30000
);

console.log(productAbove30);

// total cost
const totalCost = festivalSales
	.map((priceArray) => priceArray.salesDiscount)
	.reduce((presetVal, nextVal) => presetVal + nextVal);
console.log("Total Cost Of All Products: " + totalCost);
