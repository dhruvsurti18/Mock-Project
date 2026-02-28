import React, { useEffect, useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

export default function App() {
  const [page, setPage] = useState("home");
  const [employees, setEmployees] = useState([]);
  const [editData, setEditData] = useState(null);

  const [department, ] = useState("");
  const [sort, ] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    return employees
      .filter(emp =>
        department ? emp.department === department : true
      )
      .sort((a, b) => {
        if (sort === "salary-asc") return a.salary - b.salary;
        if (sort === "salary-desc") return b.salary - a.salary;
        if (sort === "name") return a.name.localeCompare(b.name);
        return 0;
      });
  }, [employees, department, sort]);

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Home employees={employees} />}

      {page === "form" && (
        <EmployeeForm
          employees={employees}
          setEmployees={setEmployees}
          editData={editData}
          setEditData={setEditData}
          setPage={setPage}
        />
      )}

      {page === "view" && (
        <EmployeeTable
          employees={filteredEmployees}
          setEmployees={setEmployees}
          setEditData={setEditData}
          setPage={setPage}
          
        />
      )}
    </>
  );
}
