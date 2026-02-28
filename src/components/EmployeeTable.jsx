  import React from "react";

export default function EmployeeTable({
  employees,
  setEmployees,
  setEditData,
  setPage,
}) {

  const handleDelete = (id) => {
    const updated = employees.filter(emp => emp.id !== id);
    setEmployees(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      </div>

      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="4" align="center">No employees found</td>
            </tr>
          ) : (
            employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>
                  <button onClick={() => {
                    setEditData(emp);
                    setPage("form");
                  }}>
                    Edit
                  </button>

                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
