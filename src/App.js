import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/public/Landing";
import StudentDashboard from "./pages/student/Dashboard";
import VendorDashboard from "./pages/vendor/Dashboard";
import "./styles/global.css"; // Make sure your updated styles are imported!

function App() {
  const [currentView, setCurrentView] = useState("public");

  return (
    <div style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      {/* Brand Navigation */}
      <nav className="navbar" style={styles.navbar}>
        <div style={styles.brandContainer}>
          <span style={styles.icon}>🍴</span>
          <span className="navbar-brand" style={styles.brandText}>
            DineX Platform
          </span>
        </div>
      </nav>

      <div className="dashboard-container" style={styles.container}>
        {/* Switcher Buttons */}
        <div className="switcher-track" style={styles.switcherTrack}>
          <button
            className={`switch-card ${currentView === "public" ? "active" : ""}`}
            onClick={() => setCurrentView("public")}
            style={
              currentView === "public"
                ? { ...styles.card, ...styles.activeCard }
                : styles.card
            }
          >
            <div style={styles.cardContent}>
              <span style={styles.cardIcon}>🌐</span>
              <span style={styles.cardText}>Public View</span>
            </div>
            {/* Attractive Background Graphic */}
            <div style={styles.cardGraphicPublic}></div>
          </button>

          <button
            className={`switch-card ${currentView === "student" ? "active" : ""}`}
            onClick={() => setCurrentView("student")}
            style={
              currentView === "student"
                ? { ...styles.card, ...styles.activeCard }
                : styles.card
            }
          >
            <div style={styles.cardContent}>
              <span style={styles.cardIcon}>🎓</span>
              <span style={styles.cardText}>Student Dashboard</span>
            </div>
            <div style={styles.cardGraphicStudent}></div>
          </button>

          <button
            className={`switch-card ${currentView === "vendor" ? "active" : ""}`}
            onClick={() => setCurrentView("vendor")}
            style={
              currentView === "vendor"
                ? { ...styles.card, ...styles.activeCard }
                : styles.card
            }
          >
            <div style={styles.cardContent}>
              <span style={styles.cardIcon}>🏪</span>
              <span style={styles.cardText}>Vendor Dashboard</span>
            </div>
            <div style={styles.cardGraphicVendor}></div>
          </button>
        </div>

        {/* Dynamic Panel Display */}
        <main className="main-content-panel" style={styles.contentPanel}>
          {currentView === "public" && <Landing />}
          {currentView === "student" && <StudentDashboard />}
          {currentView === "vendor" && <VendorDashboard />}
        </main>
      </div>
    </div>
  );
}

// Attractive Inline Styles
const styles = {
  navbar: {
    backgroundColor: "#0f172a",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    marginBottom: "2.5rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  brandText: {
    color: "#ffffff",
    fontSize: "1.5rem",
    fontWeight: "700",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#f59e0b",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1.5rem",
  },
  switcherTrack: {
    display: "flex",
    gap: "20px", // Space between dashboards
    justifyContent: "center",
    marginBottom: "3rem",
  },
  card: {
    flex: 1,
    height: "150px",
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "12px", // Approx 10px radius
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.2s, box-shadow 0.2s",
    display: "flex",
    alignItems: "center",
    padding: "20px",
  },
  activeCard: {
    backgroundColor: "#f59e0b",
    borderColor: "#f59e0b",
    color: "#ffffff",
    boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.3)",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    zIndex: 2,
  },
  cardText: {
    fontSize: "1.2rem",
    fontWeight: "600",
  },
  cardIcon: {
    fontSize: "1.5rem",
  },
  // Attractive Background Graphics for Cards
  cardGraphicPublic: {
    position: "absolute",
    bottom: "-20px",
    right: "-20px",
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(255,255,255,0.1)", // Subtle skyline or map graphic here
    borderRadius: "50%",
    zIndex: 1,
  },
  cardGraphicStudent: {
    position: "absolute",
    bottom: "-20px",
    right: "-20px",
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(255,255,255,0.1)", // Subtle graduation cap or book graphic here
    borderRadius: "50%",
    zIndex: 1,
  },
  cardGraphicVendor: {
    position: "absolute",
    bottom: "-20px",
    right: "-20px",
    width: "100px",
    height: "100px",
    backgroundColor: "rgba(255,255,255,0.1)", // Subtle shop/stall graphic here
    borderRadius: "50%",
    zIndex: 1,
  },
  contentPanel: {
    backgroundColor: "#ffffff",
    borderRadius: "12px", // Approx 10px radius
    padding: "3rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e2e8f0",
  },
};

export default App;
