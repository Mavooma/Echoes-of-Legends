import React, { useState, useEffect } from "react";
import { getMusicLegends } from "../api"; // Assuming your API function is here
import SearchBar from "./SearchBar";
import "./MusicLegends.css"; // Import your CSS for styling

const MusicLegends = () => {
  const [legends, setLegends] = useState([]);
  const [filteredLegends, setFilteredLegends] = useState([]);

  useEffect(() => {
    const fetchLegends = async () => {
      const data = await getMusicLegends(); // Fetch legends data
      setLegends(data);
      setFilteredLegends(data); // Initially display all legends
    };
    fetchLegends();
  }, []);

  const handleSearch = (query) => {
    const filtered = legends.filter((legend) =>
      legend.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredLegends(filtered); // Update the filtered legends based on search
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="legends-list">
        {filteredLegends.map((legend) => (
          <div key={legend.id} className="legend-card">
            <img src={legend.image} alt={legend.name} />
            <h3>{legend.name}</h3>
            <p>{legend.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicLegends;
