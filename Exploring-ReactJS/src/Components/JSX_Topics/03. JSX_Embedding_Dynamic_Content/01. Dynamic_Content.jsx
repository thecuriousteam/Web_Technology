import React from "react";

// embedding dynamic content
const EDCExample = () => {
	// embedding string, function and classname
	const name = "Nandan";
	const score = (a, b) => a * b;
	const specialClass = "iap-header";

	return (
		<section>
			{/* rendering expression */}
			<p>2 + 2 = {2 + 2}</p>

			{/* rendering variable value */}
			<p>{name}</p>

			{/* rendering array */}
			<p>My data: {["aa", "bb", "cc"]}</p>

			{/* rendering function value */}
			<p>My Score is: {score(10, 10)}</p>

			{/* rendering class */}
			<p className={specialClass}>This is special class</p>
		</section>
	);
};

// tasks
const Greetings = () => {
	const name = "Nandan";
	const serverTime = new Date().toLocaleDateString();
	return (
		<div>
			<p>Hello, {name}</p>
			<p>Your Server Time: {serverTime}</p>
		</div>
	);
};

const ProductInfo = () => {
	const name = "laptop";
	const price = "80000";
	const availability = "In Stock";

	return (
		<div>
			<p>
				Name: {name}
				Price: {price}
				Availability: {availability}
			</p>
		</div>
	);
};

const DynamicContent = () => {
	return (
		<div>
			DynamicContent
			{/* <EDCExample /> */}
			{/* <Greetings /> */}
			<ProductInfo />
		</div>
	);
};

export default DynamicContent;
