import React from "react";

export default function Navbar({ setPage }) {
  return (
    <nav className="nav">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("form")}>Input Form</button>
      <button onClick={() => setPage("view")}>View Inputs</button>
    </nav>
  );
}
