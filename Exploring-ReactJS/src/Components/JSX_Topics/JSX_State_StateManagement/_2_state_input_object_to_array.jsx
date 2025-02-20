import React, { useState } from "react";

const AddBasket = () => {
	// state to take items
	// single object
	const [item, setItem] = useState({ itemName: "", itemQuantity: "" });

	// array of objects
	const [cart, setCart] = useState([]);

	// handling adding to object and adding to array
	const handleObjectAdd = (event) => {
		// taking input name and value
		const { name, value } = event.target;

		// adding into object
		setItem((prevItem) => ({
			// keep previous object
			...prevItem,

			// dynamically add the itemName and itemQuantity
			[name]: value,
		}));

		console.log(">>>>>>> After adding into the object:", item);
	};

	const handleAddToArray = () => {
		if (item.itemName.trim() && item.itemQuantity.trim()) {
			setCart((prevObject) => [...prevObject, item]);

			// clear the input
			setItem({
				itemName: "",
				itemQuantity: "",
			});
		}
	};

	// rendering the cart list directly
	const handleViewCart = () => {
		console.log(">>>>>>>>>>>>>> Inside array: ", cart);
		return (
			<ol>
				{cart.map((cartItem, index) => (
					<li key={index}>
						{cartItem.itemName} - {cartItem.itemQuantity}
					</li>
				))}
			</ol>
		);
	};

	return (
		<div>
			<div>
				<h1>Enter Items To Basket: </h1>
				<input
					type="text"
					name="itemName"
					value={item.itemName}
					onChange={handleObjectAdd}
					placeholder="Add item now..."
				/>
			</div>

			<div>
				<h1>Enter the quantity of {item.itemName}</h1>
				<input
					type="text"
					name="itemQuantity"
					value={item.itemQuantity}
					onChange={handleObjectAdd}
					placeholder="Quantity of item"
				/>
			</div>

			<div>
				<button onClick={handleAddToArray}>Add Cart</button>

				<div>
					<h2>Cart Items: </h2>
					{handleViewCart()}
				</div>
			</div>
		</div>
	);
};

const ObjectInput_Array = () => {
	return (
		<div>
			<div>
				<AddBasket />
			</div>
		</div>
	);
};

export default ObjectInput_Array;
