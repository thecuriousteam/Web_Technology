// A callback function is a function that is passed as an argument to another function and is executed later when needed.

function a(b) {
	console.log("Hello World");
	b();
}

function b() {
	console.log("Hello Javascript, This is callback function");
}

a(b);

// real world example
const foodProcessing = (orderFood, successCallBack, failureCallBack) => {
	console.log("Hello User, We have received your order", orderFood);
	const intervalId = setInterval(() => {
		console.log(`Your Order ${orderFood} is being processed, Please Wait...`);
	}, 1000);

	setTimeout(() => {
		let itemsAvailable = ["Idly", "Dosa", "Lemon rice", "Pulao", "Poha"];

		if (itemsAvailable.includes(orderFood)) {
			clearInterval(intervalId);
			successCallBack(`Your order ${orderFood} is ready`);
		} else {
			clearInterval(intervalId);
			failureCallBack(`Your order ${orderFood} is not available`);
		}
	}, 8000);
};

const successCallBack = (message) => {
	console.log("Your Food is prepared, Message: " + message);
};

const failureCallBack = (message) => {
	console.log("Your Food is not available, Message: " + message);
};

// foodProcessing("Poha", successCallBack, failureCallBack);

// Advanced Call Back function
const advancedFoodProcessing = (food, paymentStatus) => {
	console.log("Hello User, We have received your order", food);

	// in every interval it will show this message
	let intervalId = setInterval(() => {
		console.log(
			`{Order Item: ${food}, message: "Processing Order, Please Wait...}`
		);
	}, 1000);

	setTimeout(() => {
		console.log(`{message: You are being redirected to payment}`);
		clearInterval(intervalId);
		paymentStatus(food, initiateCooking);
	}, 2000);
};

const paymentStatus = (food, initiateCooking) => {
	console.log(`Your Payment for order ${food} is processing`);

	setTimeout(() => {
		console.log(`Your Payment for order ${food} has been Successful`);
		initiateCooking(food, initiateDeliveryPartner);
	}, 3000);
};

const initiateCooking = (food, initiateDeliveryPartner) => {
	console.log(`Your order ${food} is getting ready`);
	setTimeout(() => {
		console.log(`Your order ${food} is prepared and initiated for delivery`);
		initiateDeliveryPartner(food);
	}, 4000);
};

const initiateDeliveryPartner = (food) => {
	console.log(`Delivery Partner Picked your order ${food}`);

	const intervalId = setInterval(() => {
		console.log("Delivery Partner arriving to your place...");
	}, 1000);

	setTimeout(() => {
		console.log(`Your Order ${food} Delivered Successfully`);
		clearInterval(intervalId);
	}, 1000);
};

advancedFoodProcessing("Poha", paymentStatus);
