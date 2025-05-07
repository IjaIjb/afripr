import React, { useState, useRef, useEffect } from "react";

// Custom Select Component
const CustomSelect = ({ name, options, placeholder, value, onChange, required = false }:any) => {
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

const FinancialInfoForm = ({ userData, handleInputChange, onSubmit, onSkip, loading }:any) => {
  // Define options for select fields
  const fundingTypeOptions = [
    "Self-funding",
    "Family-sponsored",
    "Government-sponsored",
    "Organization-sponsored",
    "Other"
  ];
  
  const incomeRangeOptions = [
    "Less than $10,000",
    "$10,000 - $30,000",
    "$30,000 - $50,000",
    "$50,000 - $75,000",
    "$75,000 - $100,000",
    "Above $100,000",
    "Prefer not to say"
  ];
  
  const fundingPlanOptions = [
    "Personal Savings",
    "Family Support",
    "Scholarship",
    "Education Loan",
    "Employer Sponsorship",
    "Government Grant",
    "Mixed Sources",
    "Other"
  ];
  
  const loanWillingnessOptions = [
    "Yes",
    "No",
    "Maybe"
  ];

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Financial Information</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Self-financed or Sponsored?
          </label>
          <CustomSelect
            name="self_funding_or_sponsored"
            options={fundingTypeOptions}
            placeholder="Select an option"
            value={userData.self_funding_or_sponsored}
            onChange={handleInputChange}
            required={true}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Family Income Range
          </label>
          <CustomSelect
            name="annual_family_income_range"
            options={incomeRangeOptions}
            placeholder="Select Income Range"
            value={userData.annual_family_income_range}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Funding Plan (Loan, Scholarship, Parent)
          </label>
          <CustomSelect
            name="funding_plan"
            options={fundingPlanOptions}
            placeholder="Select Funding Plan"
            value={userData.funding_plan}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Willing to take a student loan?
          </label>
          <CustomSelect
            name="willing_to_take_loan"
            options={loanWillingnessOptions}
            placeholder="Select an option"
            value={userData.willing_to_take_loan}
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

export default FinancialInfoForm;