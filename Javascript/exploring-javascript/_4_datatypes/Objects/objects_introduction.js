// object creation using literals
// const car = { type: "Fiat", model: "500", color: "white" };

// object creation using constructors
const car = new Object();

// adding properties
car.type = "Fiat";
car.model = "500";
car.color = "white";

// printing object
console.log(car);
console.log(typeof car);

// accessing the object properties
console.log(car.type);
console.log(car["type"]);

// modifying the object
car["type"] = "TATA";
console.log(car);

// we can also write the above code like this

const newCar = {
	type: "TATA",
	model: 2024,
	color: "white",

	// object function
	display: function () {
		return this.type + " " + this.model + " " + this.color;
	},
};

// accessing properties
const carData = newCar.display();
console.log(carData);

// output
// { type: 'Fiat', model: '500', color: 'white' }
// object
// Fiat
// Fiat
// { type: 'TATA', model: '500', color: 'white' }
// TATA 2024 white