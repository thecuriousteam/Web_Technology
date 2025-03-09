import React, { useContext } from "react";
import { EmployeeContext } from "./ExployeeContext";

const EmployeeFilter = () => {
  const { filterEmployeeRecord } = useContext(EmployeeContext);
  return (
    <div className="p-5">
      <div>
        <label>Search By Name:</label>
        <input
          type="text"
          onChange={(event) => filterEmployeeRecord(event.target.value)}
          placeholder="Employee Name Here"
        />
      </div>
      <div>
        <h1>Search Mentor Based On Designation</h1>
        <select onChange={(event) => filterEmployeeRecord(event.target.value)}>
          <option value="">Select An Option</option>

          <option value="intern">Intern</option>
          <option value="ceo">CEO</option>
          <option value="cfo">CFO</option>
          <option value="full-stack-developer">Fullstack Developer</option>
          <option value="qa-tester">QA Tester</option>
        </select>
      </div>
    </div>
  );
};

export default EmployeeFilter;
