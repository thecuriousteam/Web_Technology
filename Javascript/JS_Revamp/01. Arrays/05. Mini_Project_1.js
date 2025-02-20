const products = [
	{ id: 1, name: "Laptop", price: 999.99, category: "Electronics" },
	{ id: 2, name: "Smartphone", price: 499.99, category: "Electronics" },
	{ id: 3, name: "Headphones", price: 199.99, category: "Accessories" },
	{ id: 4, name: "Coffee Maker", price: 89.99, category: "Home Appliances" },
];

// search functionality
const SearchProduct = (item) => {
	return products.filter((product) =>
		product.name.toLowerCase().includes(item.toLowerCase())
	);
};

const smartphone = SearchProduct("smartphone");
console.log(smartphone);

// filter based on price and category

// category
const filterByCategory = (category) => {
	return products.filter(
		(product) => product.category.toLowerCase() === category.toLowerCase()
	);
};
console.log(filterByCategory("Electronics"));

// price
const filterByPrice = (price) => {
	return products.filter((product) => product.price >= price);
};

console.log(filterByPrice(900));

//sort ascending
const ProductSort = () => {
	return products.sort((prevProd, nextProd) => prevProd.price - nextProd.price);
};

console.log("Sort: ", ProductSort().sort());

// combine search, filter and sort
const output = (item) => {
	console.log("Item is : ", item);
	return products
		.filter((product) =>
			product.name.toLowerCase().includes(item.name.toLowerCase())
		)
		.filter((product) => product.category === item.category);
};

console.log(
	"Combine Logic: ",
	output({ name: "Laptop", category: "Electronics" })
);