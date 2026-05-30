import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#2d3436",
        padding: "15px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>DineX App</h2>
      <div>
        <span style={{ margin: "0 10px", cursor: "pointer" }}>Home</span>
        <span style={{ margin: "0 10px", cursor: "pointer" }}>Orders</span>
      </div>
    </nav>
  );
}

export default Navbar;
