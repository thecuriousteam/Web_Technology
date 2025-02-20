// generating dynamic data using existing data
const employees = [
	{ name: "John", id: 85 },
	{ name: "Jane", id: 92 },
	{ name: "Jim", id: 76 },
];

const employeeData = employees.map((eachdata) => ({
	Employee_Name: eachdata.name.toUpperCase(),
	Employee_ID: eachdata.id + "IAP",
	Employee_Email: eachdata.name.toLowerCase() + "@curiousdevelopers.in",
}));

console.log(employeeData);
// [
//   {
//     Employee_Name: 'JOHN',
//     Employee_ID: '85IAP',
//     Employee_Email: 'john@curiousdevelopers.in'
//   },
//   {
//     Employee_Name: 'JANE',
//     Employee_ID: '92IAP',
//     Employee_Email: 'jane@curiousdevelopers.in'
//   },
//   {
//     Employee_Name: 'JIM',
//     Employee_ID: '76IAP',
//     Employee_Email: 'jim@curiousdevelopers.in'
//   }
// ]

// complex object transformations
/*
1. Making name to upper case
2. printing score
3. adding new field grade
*/
const students = [
	{ name: "John", score: 85 },
	{ name: "Jane", score: 92 },
	{ name: "Jim", score: 76 },
];

const processedData = students.map((student) => ({
	name: student.name.toUpperCase(),
	score: student.score,
	grade: student.score >= 80 ? "A Grade" : "B Grade",
}));

console.log(processedData);
// [
//   { name: 'JOHN', score: 85, grade: 'A Grade' },
//   { name: 'JANE', score: 92, grade: 'A Grade' },
//   { name: 'JIM', score: 76, grade: 'B Grade' }
// ]
