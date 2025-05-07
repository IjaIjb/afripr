import React, { useState, useRef, useEffect } from "react";

// Custom Select Component
const CustomSelect = ({ name, options, placeholder, value, onChange }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef:any = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelect = (option:any) => {
    // Create a synthetic event object to match the onChange interface
    const syntheticEvent = {
      target: {
        name: name,
        value: option
      }
    };
    onChange(syntheticEvent);
    setIsOpen(false);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Custom Select Button */}
      <div 
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full mt-1 px-4 py-3 bg-white border border-[#D7F5DC] shadow-sm rounded-lg cursor-pointer focus:outline-none hover:border-primary transition-colors"
      >
        <span className={`text-sm truncate ${!value ? 'text-gray-400' : 'text-gray-800'}`}>
          {value || placeholder}
        </span>
        <svg 
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option:any) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:text-white w-full hover:bg-[#1DB459]/[60%] transition-colors"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const UniversityPreferenceForm = ({ userData, handleInputChange, onSubmit, onSkip, loading }:any) => {
  // Define options for select fields
  const countryOptions = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Netherlands",
    "Sweden",
    "Switzerland",
    "Japan",
    "Other"
  ];
  
  const languageOptions = [
    "English",
    "French",
    "German",
    "Spanish",
    "Other"
  ];
  
  const studyModeOptions = [
    "On-Campus",
    "Online",
    "Hybrid"
  ];
  
  const yesNoOptions = [
    "Yes",
    "No"
  ];

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">University Preferences</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country of Interest
          </label>
          <CustomSelect
            name="country_of_interest"
            options={countryOptions}
            placeholder="Select Country"
            value={userData.country_of_interest}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Region
          </label>
          <input
            type="text"
            name="preferred_region"
            value={userData.preferred_region}
            onChange={handleInputChange}
            placeholder="e.g., California, Ontario, London"
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Language of Instruction
          </label>
          <CustomSelect
            name="preferred_language"
            options={languageOptions}
            placeholder="Select Language"
            value={userData.preferred_language}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget (Approximate in USD)
          </label>
          <input
            type="text"
            name="budget"
            value={userData.budget}
            onChange={handleInputChange}
            placeholder="e.g., 20000"
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Study Mode
          </label>
          <CustomSelect
            name="preferred_study_mode"
            options={studyModeOptions}
            placeholder="Select Mode"
            value={userData.preferred_study_mode}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Previous Visa Rejection?
          </label>
          <CustomSelect
            name="previous_visa_rejection"
            options={yesNoOptions}
            placeholder="Select an option"
            value={userData.previous_visa_rejection}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            type="button"
            onClick={onSkip}
            className="px-6 md:px-10 border border-[#1DB459] text-[#1DB459] py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            Skip
          </button>
          <button
            type="submit"
            className="px-6 md:px-10 bg-[#1DB459] text-white py-3 rounded-full hover:bg-green-700 transition-colors"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UniversityPreferenceForm;