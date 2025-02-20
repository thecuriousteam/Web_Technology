import React, { useState } from "react";

const EmpData_List = () => {
	// variables
	const [empName, setEmpName] = useState("");
	const [empID, setEmpID] = useState("");
	const [empPhone, setEmpPhone] = useState("");

	// creating list to store as key, value pairs
	const [data, setData] = useState([]);

	// visibility
	const [showTable, setShowTable] = useState(false);

	// function to set the data
	const handleSetData = () => {
		// creating object to store as key, value pairs
		const employee = {
			name: empName,
			id: empID,
			phone: empPhone,
		};

		if (employee.name.trim() && employee.id.trim() && employee.phone.trim()) {
			// Adding the new employee to the list using destructuring
			setData([...data, employee]);

			// resetting employee data
			setEmpName("");
			setEmpID("");
			setEmpPhone("");
		}
	};

	const displayData = (
		<table className="border-2 border-separate shadow-lg rounded-lg">
			{/* creating table */}
			<thead>
				<tr className="border-2 text-white">
					<th className="border-2 p-2 rounded-lg bg-[#8800ff]">
						Employee Number
					</th>
					<th className="border-2 p-2 rounded-lg bg-[#8800ff]">Employee ID</th>
					<th className="border-2 p-2 rounded-lg bg-[#8800ff]">
						Employee Name
					</th>
					<th className="border-2 p-2 rounded-lg bg-[#8800ff]">
						Employee Phone
					</th>
				</tr>
			</thead>
			<tbody>
				{data.map((key, index) => (
					<tr key={index} className="rounded-lg text-center">
						<td className="border-2 p-3 hover:bg-gray-100 rounded-lg">
							{index + 1}
						</td>
						<td className="border-2 p-3 hover:bg-gray-100 rounded-lg">
							{key.name}
						</td>
						<td className="border-2 p-3 hover:bg-gray-100 rounded-lg">
							{key.phone}
						</td>
						<td className="border-2 p-3 hover:bg-gray-100 rounded-lg">
							{key.id}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);

	return (
		<div>
			<div>
				<h1 className="text-xl font-mono text-center font-bold">
					CBS Employee Data
				</h1>
				{/* ID */}
				<div className="flex m-5 p-2 gap-2 justify-center items-center">
					<div className="w-[100px]">
						<h1>Enter ID: </h1>
					</div>
					<div>
						{/* input filed */}
						<input
							type="text"
							value={empID}
							onChange={(event) => setEmpID(event.target.value)}
							placeholder="Enter ID..."
							className="border-2 border-black rounded-lg p-2"
						/>
					</div>
				</div>

				{/* Name filed */}
				<div className="flex m-5 p-2 gap-2 justify-center items-center">
					<div className="w-[100px]">
						<h1>Enter Name: </h1>
					</div>
					<div>
						{/* input filed */}
						<input
							type="text"
							value={empName}
							onChange={(event) => setEmpName(event.target.value)}
							placeholder="Enter Name..."
							className="border-2 border-black rounded-lg p-2"
						/>
					</div>
				</div>

				{/* Phone */}
				<div className="flex m-5 p-2 gap-2 justify-center items-center">
					<div className="w-[100px]">
						<h1>Enter Phone: </h1>
					</div>
					<div>
						{/* input filed */}
						<input
							type="text"
							value={empPhone}
							onChange={(event) => setEmpPhone(event.target.value)}
							placeholder="Enter Phone..."
							className="border-2 border-black rounded-lg p-2"
						/>
					</div>
				</div>

				{/* buttons */}
				<div className="flex m-5 p-2 gap-2 justify-center items-center">
					{/* button to add employee*/}
					<div>
						<button
							onClick={handleSetData}
							className="p-2 bg-[#8800ff] text-white rounded-xl font-bold w-full shadow-lg">
							Add Employee
						</button>
					</div>

					{/* button to show table */}
					<div>
						<button
							onClick={() => setShowTable(!showTable)}
							className="p-2 bg-[#8800ff] text-white rounded-xl font-bold w-full shadow-lg">
							Show Data
						</button>
					</div>
				</div>

				{/* show table */}
				<div className="flex m-5 p-2 gap-2 justify-center items-center">
					{showTable && displayData}
				</div>
			</div>
		</div>
	);
};

export default EmpData_List;
