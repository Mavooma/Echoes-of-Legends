import React, { useState } from "react";
import "./SearchBar.css"; // Ensure you have this for your custom styles

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // Pass the search query to the parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for legends..."
        value={query}
        onChange={handleChange}
        className="form-control"
      />
      <svg
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10.5" cy="10.5" r="7" />
        <line x1="21" y1="21" x2="15.5" y2="15.5" />
      </svg>
    </div>
  );
};

export default SearchBar;
