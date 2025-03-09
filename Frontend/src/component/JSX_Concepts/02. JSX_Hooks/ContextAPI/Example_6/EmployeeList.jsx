import React, { useContext } from "react";
import { EmployeeContext } from "./ExployeeContext";

const EmployeeList = () => {
  const { employeeList, removeEmployee, employeeFilter } =
    useContext(EmployeeContext);

  console.log("Employee List: ", employeeList);

  const filterEmployeeRecord = employeeList.filter(
    (employee) =>
      employee.name.toLowerCase().includes(employeeFilter) ||
      employee.designation.toLowerCase().includes(employeeFilter)
  );

  return (
    <div className="p-5">
      <div>
        <h1>Employee List</h1>
        <div>
          {filterEmployeeRecord.map((employee) => (
            <div key={employee.id}>
              <h2>
                <strong>Employee ID:</strong>
                {employee.id}
              </h2>
              <h2>
                <strong>Employee Name:</strong>
                {employee.name}
              </h2>
              <h2>
                <strong>Employee Designation:</strong>
                {employee.designation}
              </h2>
              <h2>
                <strong>Employee Data Creation:</strong>
                {employee.createdAt}
              </h2>

              <button onClick={() => removeEmployee(employee.id)}>
                Delete Employee
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
