import { useEffect, useState } from "react";
import { EmployeeContext } from "./ExployeeContext";

export const EmployeeProvider = ({ children }) => {
  const [employeeList, setEmployeeList] = useState([]);
  const [employeeFilter, setEmployeeFilter] = useState("");

  // decide which functionaslity that needs to be used globally
  // add emplopyee
  const addEmployeeRecord = (employee) => {
    setEmployeeList([
      ...employeeList,
      { ...employee, id: Date.now(), createdAt: new Date().toLocaleString() },
    ]);

    // console.log("Inside Provider AddEmployee >>>", employeeList);
  };

  useEffect(() => {
    // logging employee details when the state is updated
    console.log({ UpdatedEmployee_State: employeeList });
  }, [employeeList]);

  // remove employee
  const removeEmployee = (employeeId) => {
    setEmployeeList(
      employeeList.filter((employee) => employee.id !== employeeId)
    );
    // console.log("Inside Provider RemoveEmployee >>>", employeeList);
  };

  // filter and search
  // const filteredEmployee = (employeeDesignation) => {
  //   setEmployeeFilter(
  //     employeeList.filter((eachEmployee) =>
  //       eachEmployee.designation
  //         .toLowerCase()
  //         .includes(employeeDesignation.toLowerCase())
  //     )
  //   );
  // };

  const filterEmployeeRecord = (employeeDesignation) => {
    setEmployeeFilter(employeeDesignation);
  };

  return (
    <EmployeeContext.Provider
      value={{
        addEmployeeRecord,
        removeEmployee,
        filterEmployeeRecord,
        setEmployeeList,
        employeeFilter,
        employeeList,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
