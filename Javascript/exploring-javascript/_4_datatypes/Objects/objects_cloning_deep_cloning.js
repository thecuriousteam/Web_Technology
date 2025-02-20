// deep cloning
let user = { name: "John", age: 30, address: { city: "New York" } };

console.log("Original User");
console.log(user);

let deepClonedUser = JSON.parse(JSON.stringify(user));

console.log("Deep Cloned User");
console.log(deepClonedUser);

// modifying the user
user.address.city = "USA";
console.log("Original User After Modifying");
console.log(user);

console.log("Deep Cloned User After Modifying");
console.log(deepClonedUser);

// output
// Original User
// { name: 'John', age: 30, address: { city: 'New York' } }
// Deep Cloned User
// { name: 'John', age: 30, address: { city: 'New York' } }
// Original User After Modifying
// { name: 'John', age: 30, address: { city: 'USA' } }
// Deep Cloned User After Modifying
// { name: 'John', age: 30, address: { city: 'New York' } }
