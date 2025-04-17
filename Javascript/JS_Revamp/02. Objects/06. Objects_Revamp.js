const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
  address: {
    city: "New York",
    zip: "10001",
  },
};

// add new property
user["phone"] = "1234567890";
console.log(user);

// update property
user["age"] = 24;
console.log(user);

// delete property
delete user.age;
console.log(user);

// access the property (optional chaining)
console.log(user?.address?.city);

// copy object to new object
const newUser = { ...user, isAdmin: true };
console.log(newUser);
