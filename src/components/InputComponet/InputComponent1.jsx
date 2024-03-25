import React from "react";

const InputComponent = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
  icon,
  className,
  padding
}) => {
  return (
    <div className={className}>
      <label for={label} className="block mb-2 font-bold text-gray-600">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        id={label}
        name={name}
        value={value}
        placeholder={placeholder ?? label}
        className="border border-gray-300 outline-none shadow p-3 w-full rounded focus:border-[#13357b] transition-all"
      />
    </div>
  );
};

export default InputComponent;
