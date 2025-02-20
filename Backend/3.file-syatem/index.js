const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "JSON_Data");

console.log(dataFolder);

// check if "JSON_Data is there or not"
if (!fs.existsSync(dataFolder)) {
	// creates the new directory
	fs.mkdirSync(dataFolder);
	console.log(__dirname, "Directory Created Successfully");
}

// go inside the directory and create a file
const filePath = path.join(dataFolder, "example.data");
// write inside the path single line
fs.writeFileSync(filePath, "Hello from nodejs");
console.log("File created Successfully");

// read the file
const data = fs.readFileSync(filePath, "utf8");
console.log(`inside file: ${path.basename(filePath)} Data:`, data);

// adding new lines for existing file
fs.appendFileSync(filePath, "\n This is Node Js Tutorials");
console.log("After appending new data to file", data);

// creating JSON file and adding data to that

const jsonFilePath = path.join(dataFolder, "books.json");
const book = {
	title: "Ego is the Enemy",
	author: "Ryan Holiday",
};

// Covert JavaScript object into JSON string
const dataJSON = JSON.stringify(book);

// Covert JSON string into object
// const dataObject = JSON.parse(dataJSON);
fs.writeFileSync(jsonFilePath, dataJSON);
console.log("Creating JSON file", jsonFilePath);

// reading file
const bookData = fs.readFileSync(jsonFilePath, "utf8");
console.log("Reading JSON file", bookData);

// convert JSON String into object
const obj = JSON.parse(bookData);
console.log(typeof obj);
