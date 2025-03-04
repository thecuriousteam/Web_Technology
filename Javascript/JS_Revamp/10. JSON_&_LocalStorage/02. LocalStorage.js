const jsonData =
  '{"name": "John", "age": 30, "city": "New York","skills": ["JavaScript", "React", "Node.js"]}';
// console.log("JSON Data: ", jsonData);

// setting data in localStorage (key, value) pair
localStorage.setItem("johnData", jsonData);

// get item
const afterExtract = localStorage.getItem("johnData");
console.log(afterExtract);

// get all keys
const keys = localStorage.key(0);
console.log(keys);

// access perticular item

// reterive the stored data
const storedUserData = JSON.parse(localStorage.getItem("johnData"));
console.log("JSON Data", storedUserData);

// accessing the properties with (.) properties
const accessSkiils = storedUserData.skills;
console.log(accessSkiils);

// clearing local storage
localStorage.clear();
