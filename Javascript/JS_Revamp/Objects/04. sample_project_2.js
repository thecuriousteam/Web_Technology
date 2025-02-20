const orders = [
	{ id: 1, customer: "Rahul", amount: 450 },
	{ id: 2, customer: "Sneha", amount: 1200 },
	{ id: 3, customer: "Amit", amount: 750 },
	{ id: 4, customer: "Priya", amount: 300 },
	{ id: 5, customer: "Vikas", amount: 1800 },
];

// we wil be having project, let's apply 18% GST
const GSTPrice = orders.map((eachAmount) => ({
	...eachAmount,
	// let's create a new property to add GST amount
	GSTPrice: eachAmount.amount + eachAmount.amount * 0.18,
}));

console.log("Product with additional GST 18%: ", GSTPrice);

// shipping cost above 500 is free and below that is add 60rs
const ShippingCost = GSTPrice.map((eachAmount) => {
	if (eachAmount.GSTPrice < 500) {
		return { ...eachAmount, ShippingCost: eachAmount.GSTPrice + 60 };
	} else {
		return { ...eachAmount, ShippingCost: 0 };
	}
});

console.log("Product which is lessthan 500, add 60RS+: ", ShippingCost);

// filter premium shipping items
const premiumCost = ShippingCost.filter(
	(eachAmount) => eachAmount.ShippingCost === 0
);
console.log("Premium Shipping Products:", premiumCost);

// total revenue for the organization
const totalRevenue = GSTPrice.reduce(
	(total, eachAmount) => total + eachAmount.GSTPrice,
	0
);

console.log("Total revenue for the organization:", totalRevenue);