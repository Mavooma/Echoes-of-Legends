import React from "react";
import "font-awesome/css/font-awesome.min.css"; // Ensure Font Awesome is imported

const ThemeToggle = ({ toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-secondary theme-toggle"
      style={{ marginLeft: "10px" }}
    >
      <i className="fa fa-moon-o"></i> {/* Use the moon icon */}
    </button>
  );
};

export default ThemeToggle;
