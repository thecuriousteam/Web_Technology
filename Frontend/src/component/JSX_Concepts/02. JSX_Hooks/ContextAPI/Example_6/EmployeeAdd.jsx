import React, { useContext, useState } from "react";
import { EmployeeContext } from "./ExployeeContext";

const EmployeeAdd = () => {
  const { addEmployeeRecord } = useContext(EmployeeContext);

  const [employeeList, setEmployeeList] = useState({
    name: "",
    designation: "",
  });

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (employeeList.name.trim() && employeeList.designation.trim()) {
      addEmployeeRecord(employeeList);
      setEmployeeList({ name: "", designation: "" });
    }
  };

  return (
    <div className="p-5">
      <div>
        <h1>Employee Onboarding</h1>

        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            placeholder="Enter Employee Name: "
            value={employeeList.name}
            onChange={(event) =>
              setEmployeeList({ ...employeeList, name: event.target.value })
            }
          />
        </div>

        <div>
          <label>Designation</label>
          <select
            value={employeeList.designation}
            onChange={(event) =>
              setEmployeeList({
                ...employeeList,
                designation: event.target.value,
              })
            }
          >
            <option value="">Select An Option</option>

            <option value="intern">Intern</option>
            <option value="ceo">CEO</option>
            <option value="cfo">CFO</option>
            <option value="full-stack-developer">Fullstack Developer</option>
            <option value="qa-tester">QA Tester</option>
          </select>
        </div>
        <div>
          <button onClick={handleOnSubmit}>Add Employee</button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAdd;
