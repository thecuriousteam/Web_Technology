import React from "react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaList, FaTable } from "react-icons/fa6";

const OrgData = () => {
	const [user, setUser] = useState({
		empID: "",
		empName: "",
		projectName: "",
		projectCode: "",
	});

	const [data, setData] = useState([]);

	// function to take input from user and update to the object key value pairs
	const handleSettingUser = (event) => {
		const { name, value } = event.target;
		setUser((prevUser) => ({ ...prevUser, [name]: value }));
	};

	// function to add the multiple objects into the array
	const handleSettingData = () => {
		if (
			user.empID.trim() &&
			user.empName.trim() &&
			user.projectCode.trim() &&
			user.projectName.trim()
		) {
			// adding data to the array
			setData((prevUser) => [...prevUser, user]);

			// resetting state once it we add user
			setUser({
				empID: "",
				empName: "",
				projectName: "",
				projectCode: "",
			});
		}
	};

	// LIST VIEW -> took help
	const ListView = (
		<div className="w-[700px] max-h-[400px] overflow-y-scroll p-4 border mt-2 rounded-lg">
			<ol className="list-decimal pl-5">
				{data.map((eachUser, index) => (
					<li key={index} className="mb-4">
						<span className="font-bold">Employee No: {index + 1}</span>
						<ul className="ml-5 list-disc">
							<li>Employee ID: {eachUser.empID}</li>
							<li>Employee Name: {eachUser.empName}</li>
							<li>Project Code: {eachUser.projectCode}</li>
							<li>Project Name: {eachUser.projectName}</li>
						</ul>
					</li>
				))}
			</ol>
		</div>
	);

	// TABLE VIEW
	const TableView = (
		<div className="w-[700px]">
			<table className="p-2 gap-2 border-2 border-separate w-[700px] rounded-lg">
				<thead>
					<tr>
						<th className="p-2 border-2 m-2 gap-2 bg-[#8800ff] font-bold text-white">
							Sel No
						</th>
						<th className="p-2 border-2 m-2 gap-2 bg-[#8800ff] font-bold text-white">
							Emp ID
						</th>
						<th className="p-2 border-2 m-2 gap-2 bg-[#8800ff] font-bold text-white">
							Emp Name
						</th>
						<th className="p-2 border-2 m-2 gap-2 bg-[#8800ff] font-bold text-white">
							Project Code
						</th>
						<th className="p-2 border-2 m-2 gap-2 bg-[#8800ff] font-bold text-white">
							Project Name
						</th>
					</tr>
				</thead>

				<tbody>
					{/* list iterate */}

					{data.map((eachUser, index) => (
						<tr key={index} className="text-center">
							<td className="p-2 border-2 m-2 rounded-lg">{index + 1}</td>
							<td className="p-2 border-2 m-2 rounded-lg">{eachUser.empID}</td>
							<td className="p-2 border-2 m-2 rounded-lg">
								{eachUser.empName}
							</td>
							<td className="p-2 border-2 m-2 rounded-lg">
								{eachUser.projectName}
							</td>
							<td className="p-2 border-2 m-2 rounded-lg">
								{eachUser.projectCode}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);

	// state variables to set the view
	const [tableView, setTableView] = useState(false);
	const [listView, setListView] = useState(false);

	return (
		<div className="flex justify-center items-center w-full">
			<div>
				<div className="flex justify-center items-center p-5 text-[20px] font-thin font-mono">
					<h1>Curious Business Solutions Data</h1>
				</div>

				{/* employee id */}
				<div className="flex gap-2 p-2 text-[18px] font-mono text-pretty">
					<div className="w-[50%] p-2">
						<h1>Enter Your Employee ID</h1>
					</div>
					<input
						type="text"
						name="empID"
						value={user.empID}
						onChange={handleSettingUser}
						placeholder="Enter Employee ID..."
						className=" w-[300px]  rounded-lg border-2 border-black p-2"
					/>
				</div>

				{/* employee name */}
				<div className="flex gap-2 p-2 text-[18px] font-mono text-pretty">
					<div className="w-[50%] p-2">
						<h1>Enter Your Employee Name</h1>
					</div>
					<input
						type="text"
						name="empName"
						value={user.empName}
						onChange={handleSettingUser}
						placeholder="Enter Employee Name..."
						className=" w-[300px]  rounded-lg border-2 border-black p-2"
					/>
				</div>

				{/* project name */}
				<div className="flex gap-2 p-2 text-[18px] font-mono text-pretty">
					<div className="w-[50%] p-2">
						<h1>Enter Your Project Name</h1>
					</div>
					<input
						type="text"
						name="projectName"
						value={user.projectName}
						onChange={handleSettingUser}
						placeholder="Enter Project Name..."
						className=" w-[300px]  rounded-lg border-2 border-black p-2"
					/>
				</div>

				{/* project code */}
				<div className="flex gap-2 p-2 text-[18px] font-mono text-pretty">
					<div className="w-[50%] p-2">
						<h1>Enter Your Project Code</h1>
					</div>
					<input
						type="text"
						name="projectCode"
						value={user.projectCode}
						onChange={handleSettingUser}
						placeholder="Enter Project Code..."
						className=" w-[300px]  rounded-lg border-2 border-black p-2"
					/>
				</div>

				{/* button to add user */}
				<div className="flex justify-center mt-5 items-center w-[600px]">
					<div className="flex">
						<button
							onClick={handleSettingData}
							className="flex p-2 m-2 gap-2 justify-center items-center text-[16px] bg-[#8800ff] text-white rounded-xl hover:shadow-lg shadow-[#8800ff] shadow-2xl font-bold font-mono w-[150px]">
							<FaCheckCircle /> Submit
						</button>
					</div>

					<div className="flex">
						<button
							onClick={() => setTableView(!tableView)}
							className="flex p-2 m-2 gap-2 justify-center items-center text-[16px] bg-[#8800ff] text-white rounded-xl hover:shadow-lg shadow-[#8800ff] shadow-2xl font-bold font-mono w-[150px]">
							<FaTable /> Table View
						</button>
					</div>

					<div className="flex">
						<button
							onClick={() => setListView(!listView)}
							className="flex p-2 m-2 gap-2 justify-center items-center text-[16px] bg-[#8800ff] text-white rounded-xl hover:shadow-lg shadow-[#8800ff] shadow-2xl font-bold font-mono w-[150px]">
							<FaList /> List View
						</button>
					</div>
				</div>

				{/* Show Data */}
				<div className="w-[700px]">
					<div>{tableView && TableView}</div>
					<div>{listView && ListView}</div>
				</div>
			</div>
		</div>
	);
};

export default OrgData;
