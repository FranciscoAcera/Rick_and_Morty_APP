import React from "react";
import style from "./CustomDropdown.module.css";

const CustomDropdown = ({ options, onChange, selectedValue }) => {
  const handleOptionSelect = (value) => {
    onChange(value);
  };

  return (
    <div className={style.dropdown}>
      <div className={style.selectedOption}>
        <div className={style.optionText}>
          {selectedValue
            ? options.find((option) => option.value === selectedValue)?.label
            : "Select an option"}
        </div>
      </div>
      <div className={style.dropdownContent}>
        {options.map((option) => (
          <div
            key={option.value}
            className={style.dropdownOption}
            onClick={() => handleOptionSelect(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;