// const user = {
// 	name: "Priya",
// 	eemail: "priya@example.com",
// };

// // destructuring objects with coming value and default value
// const { name, eemail, phone = "not provided" } = user;
// console.log(`My Name is ${name}, email is ${eemail}, phone is ${phone}`);

// destructing nested objects
const order = {
	orderId: 101,
	customer: {
		name: "Rahul Sharma",
		email: "rahul@example.com",
		address: "Mumbai, India",
	},
	product: {
		name: "iPhone 15",
		price: 80000,
		discount: 10,
	},
};

// destructing nested objects
const {
	customer: { name, email, address },

	// the label which is there we should not relabel it in object 
	product: { name: productName, price, discount },
} = order;

console.log(`Customer: ${name}, Email: ${email}`);
console.log(
	`Product: ${productName}, Price: ₹${price}, Discount: ${discount}%`
);
