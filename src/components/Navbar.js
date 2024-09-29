import React from "react";
import ThemeToggle from "./ThemeToggle"; // Import the ThemeToggle component
import "./Navbar.css"; // Import custom CSS

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#home">
        Music Legends
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#legends">
              Legends
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <ThemeToggle toggleTheme={toggleTheme} />{" "}
            {/* Theme toggle button */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
