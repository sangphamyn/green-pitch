import React from "react";

function SelectOption({ options, onChange, label, value, name }) {
  return (
    <div>
      <label for={label} className="block mb-2 font-bold text-gray-600">
        {label}
      </label>
      <div className="relative mb-2 flex items-center after:w-[8px] after:h-[8px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-4">
        <select
          onChange={onChange}
          className="text-black/70 shadow bg-white pl-3 pr-9 py-3 transition-all cursor-pointer border border-gray-300 rounded appearance-none outline-none focus:border-[#13357b]  w-64"
          value={value}
          name={name}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default SelectOption;
