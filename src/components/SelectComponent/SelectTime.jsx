import React from "react";

function SelectOption({ options, onChange, name, value }) {
  return (
    <select
      onChange={onChange}
      className="px-2 outline-none appearance-none bg-transparent cursor-pointer hover:text-green-700 transition"
      name={name}
      value={value}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SelectOption;
