import React, { useState } from "react";

import laptop from "./laptop.png";
import smartphone from "./smartphone.png";
import coffeeMaker from "./coffee-machine.png";
import headphone from "./headphones.png";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaDumpster } from "react-icons/fa";

// Sample product data with new working image URLs
const products = [
	{
		id: 1,
		name: "Laptop",
		price: 999.99,
		category: "Electronics",
		image: laptop, // Laptop image
	},
	{
		id: 2,
		name: "Smartphone",
		price: 599.99,
		category: "Electronics",
		image: smartphone, // Smartphone image
	},
	{
		id: 3,
		name: "Headphones",
		price: 199.99,
		category: "Accessories",
		image: headphone, // Headphones image
	},
	{
		id: 4,
		name: "Coffee Maker",
		price: 99.99,
		category: "Home Appliances",
		image: coffeeMaker, // Coffee Maker image
	},
];

const CuriousProducts = () => {
	// search functionality
	// filter functionality for product based on category amd for each one
	// add to cart and display
	// remove from the cart
	// total price

	// state variables
	const [cart, setCart] = useState([]);
	const [filter, setFilter] = useState("");
	const [search, setSearch] = useState("");

	// functionalities

	// combined filter based on category and search for item
	const filteredProduct = products
		.filter((eachProduct) => eachProduct.category.includes(filter))
		.filter((eachItem) =>
			eachItem.name.toLowerCase().includes(search.toLowerCase())
		);

	// add to cart functionality
	const addToCart = (product) => {
		setCart([...cart, product]);
	};

	// remove from cart
	const removeFromCart = (id) => {
		setCart(cart.filter((product_id) => product_id.id !== id));
	};

	// total price

	const totalPrice = cart.reduce(
		(totalPrice, item) => totalPrice + item.price,
		0
	);

	return (
		<div>
			<h1 className="justify-center items-center text-center font-mono text-3xl">
				Products Page
			</h1>

			<div>
				{/* search functionality */}
				<input
					type="text"
					placeholder="Search for product"
					className="border-2 w-full p-2 rounded-lg mt-5"
					// input
					value={search}
					onChange={() => setSearch(event.target.value)}
				/>

				<div className="flex flex-row-1 lg:flex-cols-4 mt-5 gap-2 flex-wrap">
					<button
						onClick={() => setFilter("")}
						className="w-[160px] mt-2 border-2 p-2 rounded-lg bg-purple-600 text-white font-mono shadow-sm hover:shadow-lg hover:font-bold">
						All
					</button>
					<button
						onClick={() => setFilter("Electronics")}
						className="w-[160px] mt-2 border-2 p-2 rounded-lg bg-purple-600 text-white font-mono shadow-sm hover:shadow-lg hover:font-bold">
						Electronics
					</button>
					<button
						onClick={() => setFilter("Accessories")}
						className="w-[160px] mt-2 border-2 p-2 rounded-lg bg-purple-600 text-white font-mono shadow-sm hover:shadow-lg hover:font-bold">
						Accessories
					</button>
					<button
						onClick={() => setFilter("Home Appliances")}
						className="w-[160px] mt-2 border-2 p-2 rounded-lg bg-purple-600 text-white font-mono shadow-sm hover:shadow-lg hover:font-bold">
						Home Appliances
					</button>
				</div>

				{/* display product grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-10 mb-10">
					{/* display the products {id, image, name, price, button } based on filtered product*/}
					{filteredProduct.map(({ id, name, price, image }) => (
						<div
							key={id}
							className="p-2 border-2 rounded-lg shadow-2 hover:border-2 hover:shadow-lg hover:shadow-purple-300">
							<img src={image} alt={name} className="m-2 w-[90px]" />
							<h2 className="font-bold font-mono m-2 text-xl">{name}</h2>
							<h3 className="m-2 text-lg">${price.toFixed(2)}</h3>
							<button
								onClick={() => addToCart({ id, name, price, image })}
								className="bg-purple-500 p-2 rounded-lg text-white font-bold font-mono m-2 ">
								Add to Cart
							</button>
						</div>
					))}
				</div>
			</div>

			{/* shopping cart */}
			<div>
				<h1 className="justify-center items-center text-center font-mono text-3xl">
					Shopping Cart
				</h1>
				{/* display cart data {id, name, price, remove button} */}

				<div>
					{cart.map(({ id, name, price, image }) => (
						<div key={id}>
							<div className="flex gap-2 p-2 justify-start items-center">
								<img src={image} className="w-[30px] h-[30px]" />
								<h2>{name}</h2>
								<p>${price}</p>
								<button
									onClick={() => removeFromCart(id)}
									className="bg-purple-500 p-2 rounded-lg text-white font-bold font-mono m-2">
									<FaDumpster />
								</button>
							</div>
						</div>
					))}
				</div>
				<div>
					<h2>Total Price: ${totalPrice}</h2>
				</div>
			</div>
		</div>
	);
};

export default CuriousProducts;
