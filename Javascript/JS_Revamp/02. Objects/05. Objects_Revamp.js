// object creation
const data = new Object();

// properties
data.firstName = "Nandan";
data.lastName = "G N";
data.fullName = data.firstName + " " + data.lastName;
data.phone = 1234567890;
data.logic = function () {
  return "Hello World";
};

// logging
console.log(data);

// accessing
console.log("Full Name: ", data.fullName);

// update
data.fullName = data.firstName + " " + data.lastName + " is a programmer";
console.log("Updated: ", data);

// delete object
delete data.logic;
console.log("Deleted: ", data);
