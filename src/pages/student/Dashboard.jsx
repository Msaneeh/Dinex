import React from "react";

function StudentDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Portal Dashboard</h2>
      <p>Browse nearby campus kitchens below:</p>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <h3>Campus Central Cafeteria</h3>
        <p>Status: Open | Delivery Time: 15 mins</p>
      </div>
    </div>
  );
}

export default StudentDashboard;
