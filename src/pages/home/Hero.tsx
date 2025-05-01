import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Custom Select Component
const CustomSelect = ({ label, icon, options, placeholder }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
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
    setSelectedOption(option);
    setIsOpen(false);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex gap-1 items-center">
        <img src={icon} alt={label} className="w-4 h-4" />
        <label className="lg:text-[20px] text-xs font-semibold text-primary">{label}</label>
      </div>
      
      {/* Custom Select Button */}
      <div 
        onClick={toggleDropdown}
        className="flex justify-between items-center w-[150px] mt-1 px-4 py-2 bg-gray-50 border rounded-lg cursor-pointer focus:outline-none hover:border-primary transition-colors"
      >
        <span className={`text-sm truncate ${!selectedOption ? 'text-gray-400' : 'text-gray-800'}`}>
          {selectedOption || placeholder}
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
              className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:text-white w-full hover:bg-primary/[60%] transition-colors"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Mobile version of Custom Select
const MobileCustomSelect = ({ label, icon, options, placeholder }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef:any = useRef(null);
  
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
    setSelectedOption(option);
    setIsOpen(false);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center gap-1 mb-1">
        <img src={icon} alt={label} className="w-4 h-4" />
        <span className="text-primary font-semibold text-xs">{label}</span>
      </div>
      
      {/* Custom Select Button */}
      <div 
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md cursor-pointer"
      >
        <span className={`text-xs truncate ${!selectedOption ? 'text-gray-400' : 'text-gray-700'}`}>
          {selectedOption || placeholder}
        </span>
        <svg 
          className={`h-4 w-4 fill-current text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
      
      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
          {options.map((option:any) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-3 py-1.5 text-xs text-gray-700 cursor-pointer hover:bg-green-50 transition-colors"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const filterOptions = {
    Program: {
      label: "Program",
      icon: "/images/home/programFilterHero.svg",
      options: ["Bachelors", "Masters", "PhD"],
    },
    Region: {
      label: "Region",
      icon: "/images/home/regionFilterHero.svg",
      options: ["Asia", "Europe", "North America", "Africa"],
    },
    Country: {
      label: "Country",
      icon: "/images/home/countryFilterHero.svg",
      options: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
      "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia",
      "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
      "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
      "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
      "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria",
      "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
      "Cayman Islands", "Central African Republic", "Chad", "Chile", "China",
      "Colombia", "Comoros", "Congo", "Costa Rica", "Côte d'Ivoire", "Croatia",
      "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
      "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
      "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
      "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada",
      "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
      "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
      "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
      "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
      "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
      "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives",
      "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco",
      "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
      "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
      "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
      "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
      "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
      "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
      "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
      "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
      "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname",
      "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
      "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
      "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
      "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
      "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],
    },
    Budget: {
      label: "Budget",
      icon: "/images/home/budgetFilterHero.svg",
      options: ["$1,000", "$2,000", "$3,000", "$4,000", "$5,000", "above $5,000"],
    },
  };

  return (
    <div>
      {/* Desktop Hero Section */}
      <div className="relative w-full hidden lg:block mt-[40px]">
        {/* Your existing desktop code */}
        <div className="relative flex justify-center w-full">
          <div className="w-full hidden absolute top-[130px] inset-0 md:flex justify-center">
            <img
              src="/images/herobg.png"
              className="w-full object-cover"
              alt="Background"
            />
          </div>
          <div className="w-full">
            <div className="relative w-full mb-0 flex flex-col">
              {/* Content */}
              <div className="relative flex justify-between items-center">
                <div>
                  {/* Header Section */}
                  <div>
                    <span className="bg-[#D7F5DC] text-center text-primary text-sm px-5 py-2 rounded-md font-semibold">
                      Let AfriProEdu
                    </span>
                    <div className="relative">
                      <h1 className="text-[48px] max-w-[456px] leading-[50px] font-bold text-[#333333] mt-4">
                        Make your study abroad dream a{" "}
                        <i className="text-primary">reality</i>
                      </h1>
                      <div className="absolute -top-4 left-[140px]">
                        <img
                          src="/images/home/curveLine.svg"
                          alt="Curve Line"
                          className="transform rotate-[4deg] origin-bottom-left"
                        />
                      </div>
                    </div>

                    <p className="text-gray-700 max-w-[489px] mt-10">
                      Simplified access to over 10,000 courses in over 3000
                      schools across 45 countries globally. Afrivina supports
                      aspiring students with resources to explore global
                      education.
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-row mt-6 gap-4">
                    <Link
                      to="/explore-programs"
                      className="bg-primary text-center uppercase hover:bg-green-700 text-white py-3 px-6 rounded-full font-medium"
                    >
                      Explore Programs
                    </Link>
                    <Link
                      to="/psychometric-test"
                      className="bg-[#D7F5DC] text-center hover:bg-gray-300 uppercase text-[#1DB459] border border-[#1DB459] py-3 px-6 rounded-full font-medium"
                    >
                      Psychometric Test
                    </Link>
                  </div>

                  {/* Get Assistance Section */}
                  <div className="mt-4">
                    <div className="flex gap-5">
                      <div className="flex items-center gap-2">
                        <img
                          src="/images/money.svg"
                          alt="Money"
                          className=""
                        />
                        <span className="text-[#494949] text-[14px]">
                          Get a study loan
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src="/images/agent.svg"
                          alt="Agent"
                          className=""
                        />
                        <span className="text-[#494949] text-[14px]">
                          Become an agent
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center mt-1 gap-2">
                      <img
                        src="/images/star.svg"
                        alt="Star"
                        className=""
                      />
                      <span className="text-[#494949] text-[14px]">
                        Become an agent
                      </span>
                    </div>
                  </div>
                </div>
                {/* Hero Image */}
                <div className="flex justify-center">
                  <img
                    src="/images/hero.svg"
                    alt="Student"
                    className=""
                  />
                </div>
              </div>

              {/* Search Filters - UPDATED with CustomSelect */}
              <div className="flex justify-center">
                <div className="absolute bottom-0 mt-10 px-4">
                  <div className="bg-white rounded-lg shadow-md p-6 flex gap-5 items-center justify-between max-w-5xl mx-auto">
                    <div className="flex justify-between">
                      {Object.entries(filterOptions).map(([key, { label, icon, options }]) => (
                        <div key={key} className="flex-1 mx-2">
                          <CustomSelect 
                            label={label} 
                            icon={icon} 
                            options={options} 
                            placeholder={`Select ${label.toLowerCase()}`}
                          />
                        </div>
                      ))}
                    </div>
                    {/* Search Button */}
                    <Link
                      to="/explore-programs"
                      className="bg-green-600 text-center hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium"
                    >
                      Search
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero Section - UPDATED with MobileCustomSelect */}
      <div className="block lg:hidden bg-white mt-[100px] min-h-screen relative">
        {/* Light green tag at top */}
        <div className="pt-4 pb-2 flex justify-center">
          <span className="bg-[#D7F5DC] text-center text-primary text-xs px-4 py-1.5 rounded-md font-semibold">
            Let AfriProEdu
          </span>
        </div>
        
        {/* Heading with curved text */}
        <div className="px-4 text-center">
          <div className="relative inline-block">
            <h1 className="relative text-[20px] font-bold md:max-w-[300px] max-w-[250px] text-[#333333] leading-tight">
              Make your study abroad dream a <span className="text-primary">reality</span>
              {/* Curve line next to "reality" */}
              <img 
                src="/images/home/curveLine.svg"
                alt=""
                className="absolute -top-5 -right-[35px] w-[100px] h-[100px] transform -rotate-[15deg]"
              />
            </h1>
          </div>
          
          {/* Description text */}
          <div className="flex justify-center">
            <p className="text-gray-700 text-xs mt-2 max-w-[600px] px-2">
              Simplified access to over 10,000 courses in over 3000 schools across 45 countries globally. 
              Afrivina supports aspiring students with resources to explore global education.
            </p>
          </div>
        </div>
        
        {/* Student Image with circular border and decorative elements */}
        <div className="relative mx-auto w-full flex justify-center mb-6">
          <div className="relative flex justify-center items-center">
            {/* Student image */}
            <img
              src="/images/hero.svg"
              alt="Student"
              className="h-auto relative z-10"
            />
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {/* Green "Explore Programs" button */}
          <Link
            to="/explore-programs"
            className="bg-primary text-white py-2 px-2 rounded-full font-semibold text-[10px] uppercase flex items-center justify-center gap-1 w-full"
          >
            Explore Programs
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          {/* Outlined "Psychometric Test" button */}
          <Link
            to="/psychometric-test"
            className="bg-white text-[#1DB459] border border-[#1DB459] py-0 px-2 rounded-full font-semibold text-[10px] uppercase flex items-center justify-center gap-1 w-full"
          >
            Psychometric Test
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="#1DB459" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        {/* Services Links */}
        <div className="px-6 mb-6">
          <div className="flex flex-wrap text-xs">
            <div className="flex items-center gap-1 mr-4 mb-1">
              <img
                src="/images/money.svg"
                alt=""
                className="w-4 h-4"
              />
              <span className="text-[#494949] text-xs">
                Get a study loan
              </span>
            </div>
            <div className="flex items-center gap-1 mb-1">
              <img
                src="/images/agent.svg"
                alt=""
                className="w-4 h-4"
              />
              <span className="text-[#494949] text-xs">
                Become an agent
              </span>
            </div>
            <div className="flex items-center gap-1 w-full mt-1">
              <img
                src="/images/star.svg"
                alt=""
                className="w-4 h-4"
              />
              <span className="text-[#494949] text-xs">
                Support 800+ courses and internships
              </span>
            </div>
          </div>
        </div>
        
        {/* Filter Section - UPDATED with MobileCustomSelect */}
        <div className="px-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            {/* Filter grid with 2 columns */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Program Filter */}
              <div>
                <MobileCustomSelect 
                  label="Program" 
                  icon="/images/home/programFilterHero.svg" 
                  options={filterOptions.Program.options} 
                  placeholder="Select Program"
                />
              </div>
              
              {/* Region Filter */}
              <div>
                <MobileCustomSelect 
                  label="Region" 
                  icon="/images/home/regionFilterHero.svg" 
                  options={filterOptions.Region.options} 
                  placeholder="Select Region"
                />
              </div>
              
              {/* Country Filter */}
              <div>
                <MobileCustomSelect 
                  label="Country" 
                  icon="/images/home/countryFilterHero.svg" 
                  options={filterOptions.Country.options} 
                  placeholder="Select Location"
                />
              </div>
              
              {/* Budget Filter */}
              <div>
                <MobileCustomSelect 
                  label="Budget" 
                  icon="/images/home/budgetFilterHero.svg" 
                  options={filterOptions.Budget.options} 
                  placeholder="Select Budget"
                />
              </div>
            </div>
            
            {/* Search Button */}
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full font-medium text-xs transition duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;




















