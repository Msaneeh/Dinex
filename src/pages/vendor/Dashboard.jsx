import React from "react";

function VendorDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Vendor Dashboard Administrative Control</h2>
      <div style={{ display: "flex", gap: "20px", marginTop: "15px" }}>
        <div
          style={{
            background: "#4ecdc4",
            padding: "20px",
            color: "white",
            borderRadius: "8px",
            flex: 1,
          }}
        >
          <h3>Active Orders</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>5</p>
        </div>
        <div
          style={{
            background: "#ff6b6b",
            padding: "20px",
            color: "white",
            borderRadius: "8px",
            flex: 1,
          }}
        >
          <h3>Today's Earnings</h3>
          <p style={{ fontSize: "24px", fontWeight: "bold" }}>$120.00</p>
        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;
