// Date() example

// Date Object Creation
const currentDate = new Date();
console.log("Current Date >>" + currentDate);

// Date Object For Specific Day (INT)
const specificDate = new Date(2025, 2, 12, 10, 30, 0);
console.log("Specific Date >>" + specificDate);

// Date Object For String
const specificDate_2 = new Date("2025-02-12");
console.log("Specific Date >>" + specificDate_2);

// getting specific date and time component

const year = new Date().getFullYear();
console.log("Specific Year >>" + year);

const month = new Date().getMonth();
console.log("Specific Month >>" + month);

const date = new Date().getDate();
console.log("Specific Date >>" + date);

const time = new Date().getTime();
console.log("Specific Time >>" + time);

const presentTime = Date.now();
console.log("Specific Present Time >>" + presentTime);

// conversion to string

const dateNew = new Date();
const dateString = dateNew.toString();
console.log("Converting to string >>" + dateString);
console.log("Converting to dateString >>" + dateNew.toDateString());
console.log("Converting to timestring >>" + dateNew.toTimeString());
console.log("Converting to UTCString >>" + dateNew.toUTCString());
console.log("Converting to ISOString >>" + dateNew.toISOString());
console.log(
	"Converting to Locale Date String >>" + dateNew.toLocaleDateString()
);
console.log(
	"Converting to Locale Time String >>" + dateNew.toLocaleTimeString()
);
