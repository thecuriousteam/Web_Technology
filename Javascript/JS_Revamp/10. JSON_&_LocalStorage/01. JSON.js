const jsonData =
  '{"name": "John", "age": 30, "city": "New York","skills": ["JavaScript", "React", "Node.js"]}';
console.log("JSON Data: ", jsonData);

const parsedData = JSON.parse(jsonData); //JSON to Javascript Object
console.log("Info: ", "type: ", typeof parsedData, "Data: ", parsedData);

const jsonConData = JSON.stringify(parsedData); // Javascript Object to JSON
console.log("JSON Data", jsonConData);

// Accessing JSON Data
const infoData =
  '{"name": "John", "age": 30, "city": "New York","skills": ["JavaScript", "React", "Node.js"]}';
console.log("JSON Data: ", jsonData);
const data = JSON.parse(infoData); // we need to parse JSON and access the properties
console.log("Accessing Skiils: ", data.skills);
