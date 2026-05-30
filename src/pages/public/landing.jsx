import React from "react";

const Landing = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Explore and Enjoy DineX</h1>
      <p style={styles.description}>
        Discover a variety of dining options with attractive offers.
      </p>

      {/* Updated Attractive and Larger Explore Button */}
      <button style={styles.exploreButton}>
        Explore Menus & Offers <span style={styles.arrow}>→</span>
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#0f172a",
    fontWeight: "700",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.2rem",
    color: "#475569",
    marginBottom: "20px",
  },
  exploreButton: {
    backgroundColor: "#00a1ff", // Attractive blue
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "15px 30px", // Space between text and edges
    fontSize: "1.3rem", // Increased size
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px", // Space between text and arrow
    transition: "background-color 0.2s",
    boxShadow: "0 4px 6px rgba(0, 161, 255, 0.3)",
  },
  arrow: {
    fontSize: "1.3rem",
  },
};

export default Landing;
