import React, { useState } from "react";
import "./SearchableDropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchableDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState("Select Experiment Type");
  const items = Array(10).fill("Knowledge Bank Q&A Chatbot");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedValue}
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <input
            type="search"
            className="dropdown-search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="dropdown-list">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setSelectedValue(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchableDropdown;
