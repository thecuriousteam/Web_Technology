// shallow cloning
let user = { name: "John", age: 30, address: { city: "New York" } };

// shallow cloning using variable
console.log("Original Object: ");
console.log(user);
let userBackup = user;
console.log("Backup Object: ");
console.log(userBackup);

// shallow cloning using Object.assign(target, source)
let clonedUser1 = Object.assign({}, user);
console.log("Cloned User: ");
console.log(clonedUser1);

// shallow cloning using spread operator {...}
let clonedUser2 = { ...user };
console.log("Cloned User: ");
console.log(clonedUser2);

// modifying the nested object
// Note - Modification of data reflects in cloned object
user.address.city = "USA";
console.log(user);
console.log(userBackup);
console.log(clonedUser1);
console.log(clonedUser2);

// output
// Original Object:
// { name: 'John', age: 30, address: { city: 'New York' } }
// Backup Object:
// { name: 'John', age: 30, address: { city: 'New York' } }
// Cloned User:
// { name: 'John', age: 30, address: { city: 'New York' } }
// Cloned User:
// { name: 'John', age: 30, address: { city: 'New York' } }
// { name: 'John', age: 30, address: { city: 'USA' } }
// { name: 'John', age: 30, address: { city: 'USA' } }
// { name: 'John', age: 30, address: { city: 'USA' } }
// { name: 'John', age: 30, address: { city: 'USA' } }
