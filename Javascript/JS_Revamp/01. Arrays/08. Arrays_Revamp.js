const users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25, isActive: true },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30, isActive: false },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    age: 22,
    isActive: true,
  },
  {
    id: 4,
    name: "David",
    email: "david@example.com",
    age: 28,
    isActive: false,
  },
  { id: 5, name: "Eve", email: "eve@example.com", age: 35, isActive: true },
  { id: 6, name: "Frank", email: "frank@example.com", age: 19, isActive: true },
  {
    id: 7,
    name: "Grace",
    email: "grace@example.com",
    age: 40,
    isActive: false,
  },
  {
    id: 8,
    name: "Hannah",
    email: "hannah@example.com",
    age: 26,
    isActive: true,
  },
];

// console.log("Users: ", users);

// get the names from the list
const userNames = users.map((eachUser) => eachUser.name);
console.log("UserName List: ", userNames);

// map - get all users
const allUsers = users.map((eachUser) =>
  console.log(`Each User ${eachUser.id} `, eachUser)
);

// filter - get all users
const activeUsers = users.filter((eachUser) => eachUser.isActive);
console.log(activeUsers);

// filter by name
const input = "Bob";
const searchUser = users.filter((eachUser) => eachUser.name === input);
console.log(`User data name ${input} -`, searchUser);

// find user by email_id
const findUserByEmail = (email) =>
  users.find((eachUser) => eachUser.email === email);
console.log("Find User By Email - ", findUserByEmail("frank@example.com"));

// list users under 30
const usersUnder30 = users.filter((eachUser) => eachUser.age <= 30);
console.log("Users Under 30 - ", usersUnder30);

// average users age
const avgUserAge = users.reduce((totalAge, user) => totalAge + user.age, 0);
console.log("AVG Age of User: ", (avgUserAge / users.length).toFixed(0));

// sort users by age
const sortedUsers = [...users].sort(
  (previousAge, presentAge) => previousAge.age - presentAge.age
);
console.log("Sorted Users Data - ", sortedUsers);

// search user by name

const searchUserByName = (query) =>
  users.filter((eachUser) =>
    eachUser.name.toLowerCase().includes(query.toLowerCase())
  );

console.log("Searching User By Name: ", searchUserByName("bo"));

// delete user by id

const deleteUserById = (id) => users.filter((eachUser) => eachUser.id !== id);
console.log("Deleted User - ", deleteUserById(2));
