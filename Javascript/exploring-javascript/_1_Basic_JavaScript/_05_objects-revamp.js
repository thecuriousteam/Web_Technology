// object constructor function
const emp = function (empid, empname, empdomain) {
	this.Name = empname;
	this.Id = empid;
	this.Domain = empdomain;
	this.note = function () {
		console.log("Emp Name:", empname);
		console.log("Emp ID:", empid);
		console.log("Emp Domain:", empdomain);
	};
};

const p1 = new emp(7, "Nandan", "CEO");
p1.note();

// object literals

const empl = {
	empname: "Nandan",
	empid: "07",
	empdomain: "CEO",
	note: function () {
		console.log("Emp Name:", this.empname);
		console.log("Emp ID:", this.empid);
		console.log("Emp Domain:", this.empdomain);
	},
};

empl.note();

// Lexical scope is the ability for a function scope to access variables from the parent scope

const obj = {
	name: "Alice",
	greet: () => {
		console.log(this.name); // `this` is inherited from the outer scope
	},
};

obj.greet(); // Output: undefined (because `this` refers to the global object, not `obj`)
