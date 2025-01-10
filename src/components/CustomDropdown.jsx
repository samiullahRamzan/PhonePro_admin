import { useState } from "react";
import "../styles/CustomDropDown.css";
const CustomDropdown = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = ["pending", "approved", "rejected"];

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="dropdown">
      {/* Dropdown Header */}
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption}
        <span className={`arrow ${isOpen ? "open" : ""}`}>&#x25BC;</span>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`dropdown-item ${
                selectedOption === option ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
              <span className="arrow-right">&#x276F;</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
