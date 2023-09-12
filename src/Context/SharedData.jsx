import { createContext } from "react";
import { useState, useEffect } from "react";

const context = createContext();
const SharedData = (props) => {
  const [departments, setDepartments] = useState([]);
  const [departmentNames, setDepartmentNames] = useState([]);

  useEffect(() => {
    getDepartments();
  }, []);

  const getDepartments = async () => {
    try {
      const response = await fetch(
        "https://localhost:7015/api/Department/getadepartments"
      );
      if (response.ok) {
        const data = await response.json();
        setDepartments(data.departments);
        retrieveDepartmentNames(data.departments);
        console.log(data.departments);
      } else {
        console.error("Error fetching departments:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const retrieveDepartmentNames = (array) => {
    let arr = [];
    array.map((data, index) => {
      arr.push(data.departmentName);
    });

    setDepartmentNames(arr);
  };

  const sharedData = {
    departments: departments,
    departmentNames: departmentNames,
  };

  return (
    <>
      <context.Provider value={sharedData}>{props.children}</context.Provider>
    </>
  );
};

export { SharedData, context };
