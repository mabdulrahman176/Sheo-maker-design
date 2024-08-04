import React, { useState } from 'react';

const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
   
    <div className="relative w-full sm:w-56 ml-4 sm:ml-7">
      <button
        className="w-full bg-white border border-gray-300 font-bold rounded-full pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <span className="block truncate">{selectedOption}</span>
        <span className="flex items-center">
          <svg
            className={`h-5 w-5 text-gray-400 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-180'}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3A1 1 0 0110 12z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M10 8a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 10.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 8z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </span>
      </button>

      <div className={`absolute w-full bg-white shadow-lg z-10 border border-gray-300 transition-all duration-300 ${isOpen ? 'opacity-100 max-h-60 overflow-y-auto' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <ul className="py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none">
          {options.map((option) => (
            <li
              key={option}
              className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:text-indigo-500"
              onClick={() => handleOptionClick(option)}
            >
              <span className="block truncate">{option}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
   
  );
};

export default Dropdown;