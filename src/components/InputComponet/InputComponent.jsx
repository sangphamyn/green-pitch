import React from 'react';

const InputComponent = ({ label, type, value, onChange, placeholder, name, icon }) => {
    return (
        <div className="mb-4">
            <div className="div">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
                    {label}
                </label>
                <input
                    type={type}
                    id={label}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    name={name}
                    className="appearance-none border-b border-[#e5e7eb] outline-none w-full py-2 text-gray-700 leading-tight"
                />
            </div>
        </div>
    );
};

export default InputComponent;
