// Sample data for products with real image URLs (using proper Unsplash links)
const products = [
	{
		id: 1,
		name: "Dell Laptop",
		price: 999.99,
		image:
			"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8bGFwdG9wfGVufDB8fHx8fDE2Mjc4MzM1Nzg&ixlib=rb-1.2.1&q=80&w=400",
		description: "High performance laptop with a great screen",
	},
	{
		id: 2,
		name: "Samsung Smartphone",
		price: 499.99,
		image:
			"https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "Sleek smartphone with excellent camera quality",
	},
	{
		id: 3,
		name: "JBL Headphones",
		price: 199.99,
		image:
			"https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		description: "Noise-cancelling headphones with superb sound quality",
	},
];
// we have 3 products that needs to be displayed in 3 div's side by side

import React from "react";

// this is the child component that recives the props to render in UI
const ProductSpecification = ({ id, name, price, image, description }) => {
	return (
		<div>
			<div className="flex justify-center items-center p-2 mb-2">
				<img
					src={image}
					alt={name}
					className="w-[200px] h-[250px] border-2 border-black p-2 rounded-lg"
				/>
			</div>
			<div className="justify-center items-center flex flex-col h-[200px]">
				<h1 className="text-center">#{id}</h1>
				<h2 className="text-center text-[18px]">{name}</h2>
				<h2 className="text-center text-pretty font-mono">Price $ {price}</h2>
				<h2>{description}</h2>

				<button className="mt-2 mb-2 bg-orange-300 p-2 rounded-md">
					Buy Now
				</button>
			</div>
		</div>
	);
};

const ProductsComponentUI = () => {
	return (
		<div className="flex">
			{/* parent div */}
			{products.map((eachProduct) => (
				<div
					key={eachProduct.id}
					className="p-5 bg-gray-50 w-screen border-2 hover:border-2 hover:shadow-2 hover:shadow-lg">
					{/* Display all specification by passing props to child component */}
					<ProductSpecification
						id={eachProduct.id}
						name={eachProduct.name}
						price={eachProduct.price}
						image={eachProduct.image}
						description={eachProduct.description}
					/>
				</div>
			))}
		</div>
	);
};

export default ProductsComponentUI;
