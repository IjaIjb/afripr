import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../component/Navbar";
import { FaSearch, FaFilter, FaRegBookmark } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { AdminApis } from "../../apis/adminApi/adminApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

// Custom Select Component (styled to match original design)
const CustomSelect = ({ icon, options, placeholder, value, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
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
  
  const handleSelect = (option: any) => {
    onChange(option.value || option);
    setIsOpen(false);
  };
  
  return (
    <div className="flex items-center w-full gap-2 px-4 border-r relative" ref={dropdownRef}>
      <img src={icon} alt="Filter" className="w-5 h-5" />
      <div className="w-full relative">
        <div
          onClick={toggleDropdown}
          className="flex justify-between items-center bg-transparent focus:outline-none text-gray-700 w-full cursor-pointer py-2"
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
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto top-full left-0">
            {/* Clear selection option */}
            <div
              onClick={() => handleSelect("")}
              className="px-4 py-2 text-sm text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors border-b"
            >
              Clear selection
            </div>
            {options.map((option: any) => (
              <div
                key={option.value || option}
                onClick={() => handleSelect(option)}
                className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50 transition-colors"
              >
                {option.label || option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Mobile version of Custom Select
const MobileCustomSelect = ({ label, icon, options, placeholder, value, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef: any = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event: any) => {
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
  
  const handleSelect = (option: any) => {
    onChange(option);
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
        <span className={`text-xs truncate ${!value ? 'text-gray-400' : 'text-gray-700'}`}>
          {value || placeholder}
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
          {/* Clear selection option */}
          <div
            onClick={() => handleSelect("")}
            className="px-3 py-1.5 text-xs text-gray-500 cursor-pointer hover:bg-gray-100 transition-colors border-b"
          >
            Clear selection
          </div>
          {options.map((option: any) => (
            <div
              key={option.value || option}
              onClick={() => handleSelect(option.value || option)}
              className="px-3 py-1.5 text-xs text-gray-700 cursor-pointer hover:bg-green-50 transition-colors"
            >
              {option.label || option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ExplorePrograms = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
   const userLoginData = useSelector((state:any) => state.data.login.value);
    console.log(userLoginData);
  // Data states
  const [courses, setCourses] = useState<any>([]);
  const [filteredCourses, setFilteredCourses] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [programTypes, setProgramTypes] = useState<any>([]);
  
  // Filter states
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  
  // Derived data for dropdowns
  const [uniqueCountries, setUniqueCountries] = useState<string[]>([]);
  const [uniqueRegions, setUniqueRegions] = useState<string[]>([]);
  const [budgetRanges] = useState<string[]>([
    "Under €5,000",
    "€5,000 - €10,000", 
    "€10,000 - €15,000",
    "€15,000 - €20,000",
    "Over €20,000"
  ]);

  // Parse URL parameters and set initial filter values
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    
    const program = urlParams.get('selectedProgram');
    const region = urlParams.get('selectedRegion');
    const country = urlParams.get('selectedCountry');
    const budget = urlParams.get('selectedBudget');

    if (program) setSelectedProgram(program);
    if (region) setSelectedRegion(region);
    if (country) setSelectedCountry(country);
    if (budget) setSelectedBudget(budget);
  }, [location.search]);

  // Fetch program types
  const fetchProgramTypes = async (): Promise<void> => {
    try {
      const response = await AdminApis.getProgramType();
      if (response?.data?.records) {
        setProgramTypes(response.data.records);
      }
    } catch (error) {
      console.error("Error fetching program types:", error);
      toast.error("Failed to load program types");
    }
  };

  // Fetch courses
  const fetchCourses = () => {
    setLoading(true);
    AdminApis.getCourses()
      .then((response) => {
        if (response?.data?.records) {
          setCourses(response.data.records);
          setFilteredCourses(response.data.records);
          extractUniqueValues(response.data.records);
        }
      })
      .catch(function (error) {
        toast.error("Failed to load courses");
        console.error("Error fetching courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Extract unique values for dropdowns
  const extractUniqueValues = (courseData: any[]) => {
    // Extract unique countries
    const countries = Array.from(new Set(courseData.map(course => course.country))).filter(Boolean);
    setUniqueCountries(countries);
    
    // Create regions based on countries (you can customize this mapping)
    const regionMapping: {[key: string]: string} = {
      'Finland': 'Europe',
      'Germany': 'Europe',
      'France': 'Europe',
      'Spain': 'Europe',
      'Italy': 'Europe',
      'Netherlands': 'Europe',
      'Sweden': 'Europe',
      'Norway': 'Europe',
      'Denmark': 'Europe',
      'USA': 'North America',
      'Canada': 'North America',
      'Australia': 'Oceania',
      'New Zealand': 'Oceania',
      'Japan': 'Asia',
      'South Korea': 'Asia',
      'Singapore': 'Asia',
      'China': 'Asia',
      'India': 'Asia'
    };
    
    const regions = Array.from(new Set(countries.map(country => regionMapping[country] || 'Other')));
    setUniqueRegions(regions);
  };

  // Filter courses based on selected criteria
  const filterCourses = () => {
    let filtered = [...courses];

    // Filter by program type
    if (selectedProgram) {
      filtered = filtered.filter(course => course.program_type === selectedProgram);
    }

    // Filter by country
    if (selectedCountry) {
      filtered = filtered.filter(course => course.country === selectedCountry);
    }

    // Filter by region
    if (selectedRegion) {
      const regionMapping: {[key: string]: string} = {
        'Finland': 'Europe',
        'Germany': 'Europe',
        'France': 'Europe',
        'Spain': 'Europe',
        'Italy': 'Europe',
        'Netherlands': 'Europe',
        'Sweden': 'Europe',
        'Norway': 'Europe',
        'Denmark': 'Europe',
        'USA': 'North America',
        'Canada': 'North America',
        'Australia': 'Oceania',
        'New Zealand': 'Oceania',
        'Japan': 'Asia',
        'South Korea': 'Asia',
        'Singapore': 'Asia',
        'China': 'Asia',
        'India': 'Asia'
      };
      
      filtered = filtered.filter(course => {
        const courseRegion = regionMapping[course.country] || 'Other';
        return courseRegion === selectedRegion;
      });
    }

    // Filter by budget
    if (selectedBudget) {
      filtered = filtered.filter(course => {
        const fee = parseInt(course.tuition_fee.replace(/[^\d]/g, '')) || 0;
        
        switch(selectedBudget) {
          case "Under €5,000":
            return fee < 5000;
          case "€5,000 - €10,000":
            return fee >= 5000 && fee <= 10000;
          case "€10,000 - €15,000":
            return fee >= 10000 && fee <= 15000;
          case "€15,000 - €20,000":
            return fee >= 15000 && fee <= 20000;
          case "Over €20,000":
            return fee > 20000;
          default:
            return true;
        }
      });
    }

    setFilteredCourses(filtered);
  };

  // Apply filters whenever filter values change
  useEffect(() => {
    filterCourses();
  }, [selectedProgram, selectedCountry, selectedRegion, selectedBudget, courses]);

  // Initialize data
  useEffect(() => {
    fetchProgramTypes();
    fetchCourses();
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (selectedProgram) params.append('selectedProgram', selectedProgram);
    if (selectedRegion) params.append('selectedRegion', selectedRegion);
    if (selectedCountry) params.append('selectedCountry', selectedCountry);
    if (selectedBudget) params.append('selectedBudget', selectedBudget);
    
    const newUrl = `/explore-programs${params.toString() ? `?${params.toString()}` : ''}`;
    
    // Only update URL if it's different from current
    if (window.location.pathname + window.location.search !== newUrl) {
      window.history.replaceState({}, '', newUrl);
    }
  }, [selectedProgram, selectedRegion, selectedCountry, selectedBudget]);

  // Handle filter selection
  const handleFilterSelect = (filter: string, value: string) => {
    switch(filter) {
      case "program":
        setSelectedProgram(value);
        break;
      case "region":
        setSelectedRegion(value);
        break;
      case "country":
        setSelectedCountry(value);
        break;
      case "budget":
        setSelectedBudget(value);
        break;
      default:
        break;
    }
    setShowFilterDropdown(false);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedProgram("");
    setSelectedRegion("");
    setSelectedCountry("");
    setSelectedBudget("");
  };

  // Handle apply navigation
  const handleApply = (id: string, courseName: string) => {
  // Check if user is logged in
  if (!userLoginData || !userLoginData.token || !userLoginData.id) {
    // User is not logged in, show toast and redirect to sign-in page after delay
    toast.info("Please sign in to apply for programs");
    setTimeout(() => {
      navigate('/sign-in');
    }, 1500); // Wait 1.5 seconds for toast to be visible
    return;
  }
  
  // User is logged in, proceed with application
    const formattedCourseName = courseName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/program-overview/${formattedCourseName}`, { state: { id } });
  };

  // Get display text for filter
  const getFilterDisplayText = (filterType: string, value: string) => {
    if (!value) return filterType;
    
    switch(filterType) {
      case "Programs":
        const programType = programTypes.find((type: any) => type.id === value);
        return programType ? programType.program_type.toUpperCase() : value;
      default:
        return value;
    }
  };

  // Prepare filter options for CustomSelect components
  const programOptions = programTypes.map((type: any) => ({
    value: type.id,
    label: type.program_type.toUpperCase()
  }));

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-[80px] sm:pt-[100px] pb-8 sm:pb-16">
        <div className="max-w-[2000px] relative mx-auto px-3 sm:px-6 lg:px-14">
          
          {/* Title */}
          <h4 className="text-center text-primary text-2xl sm:text-3xl lg:text-[40px] font-bold pb-4 sm:pb-6">
            Explore Programs
          </h4>
          
          <div className="max-w-[1200px] relative mx-auto bg-white p-4 sm:p-6 rounded-[20px] sm:rounded-[31px] shadow">
            
            {/* Header Section */}
            <div className="flex gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img src="/images/psycho/badge.svg" alt="/" className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl lg:text-[36px] max-w-[200px] sm:max-w-[250px] leading-6 sm:leading-[30px] lg:leading-[40px] lg:max-w-[400px] font-semibold text-[#262626]">
                Prepare a list of{" "}
                <span className="text-primary">programs</span> that fits you
              </h2>
            </div>
            
            {/* Desktop Search Bar - Maintaining Original UI */}
            <div className="hidden lg:block px-0 lg:px-20">
              <div className="flex w-full justify-between items-center bg-white border border-green-200 rounded-xl px-4 py-2 shadow-sm">
                
                {/* Programs */}
                <CustomSelect 
                  icon="/images/explorePrograms/programdropdown.svg"
                  options={programOptions}
                  placeholder="Programs"
                  value={getFilterDisplayText("Programs", selectedProgram)}
                  onChange={(value: string) => setSelectedProgram(value)}
                />

                {/* Region */}
                <CustomSelect 
                  icon="/images/explorePrograms/regiondropdown.svg"
                  options={uniqueRegions}
                  placeholder="Region"
                  value={selectedRegion}
                  onChange={(value: string) => setSelectedRegion(value)}
                />

                {/* Country */}
                <CustomSelect 
                  icon="/images/explorePrograms/countrydropdown.svg"
                  options={uniqueCountries}
                  placeholder="Country"
                  value={selectedCountry}
                  onChange={(value: string) => setSelectedCountry(value)}
                />

                {/* Budget */}
                <CustomSelect 
                  icon="/images/explorePrograms/budgetdropdown.svg"
                  options={budgetRanges}
                  placeholder="Budget"
                  value={selectedBudget}
                  onChange={(value: string) => setSelectedBudget(value)}
                />

                {/* Search Button */}
                <button
                  onClick={() => filterCourses()}
                  className="bg-green-500 cursor-pointer text-white px-4 lg:px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors whitespace-nowrap"
                >
                  <FaSearch className="text-sm" />
                  <span className="hidden lg:block">Search</span>
                </button>
              </div>
            </div>
              
            {/* Mobile Search UI */}
            <div className="block lg:hidden">
              {/* Filter Toggle and Search */}
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-2 text-gray-700 hover:border-green-400 transition-colors"
                >
                  <FaFilter size={14} />
                  <span className="text-sm font-medium">Filters</span>
                </button>
                
                <div className="flex gap-2">
                  {(selectedProgram || selectedRegion || selectedCountry || selectedBudget) && (
                    <button
                      onClick={clearFilters}
                      className="bg-gray-100 text-gray-600 px-3 py-2 rounded-full text-xs hover:bg-gray-200 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    onClick={() => filterCourses()}
                    className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors"
                  >
                    <FaSearch size={14} />
                    <span className="text-sm">Search</span>
                  </button>
                </div>
              </div>
              
              {/* Filter chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                  selectedProgram ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"
                }`}>
                  {getFilterDisplayText("Programs", selectedProgram) || "Programs"}
                </div>
                <div className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                  selectedRegion ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"
                }`}>
                  {selectedRegion || "Region"}
                </div>
                <div className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                  selectedCountry ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"
                }`}>
                  {selectedCountry || "Country"}
                </div>
                <div className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                  selectedBudget ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"
                }`}>
                  {selectedBudget || "Budget"}
                </div>
              </div>
              
              {/* Filter dropdown with original select styling */}
              {showFilterDropdown && (
                <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-800">Select filters</h3>
                    <button 
                      onClick={() => setShowFilterDropdown(false)}
                      className="text-gray-500 hover:text-gray-700 text-lg"
                    >
                      ✕
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Program filter */}
                    <div>
                      <label className="text-xs font-medium text-gray-600 block mb-1">Program</label>
                      <select 
                        className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500" 
                        value={selectedProgram}
                        onChange={(e) => handleFilterSelect("program", e.target.value)}
                      >
                        <option value="">Select Program Type</option>
                        {programTypes.map((type: any) => (
                          <option key={type.id} value={type.id}>
                            {type.program_type.toUpperCase()}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Region filter */}
                    <div>
                      <label className="text-xs font-medium text-gray-600 block mb-1">Region</label>
                      <select 
                        className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                        value={selectedRegion}
                        onChange={(e) => handleFilterSelect("region", e.target.value)}
                      >
                        <option value="">Select Region</option>
                        {uniqueRegions.map((region: string) => (
                          <option key={region} value={region}>{region}</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Country filter */}
                    <div>
                      <label className="text-xs font-medium text-gray-600 block mb-1">Country</label>
                      <select 
                        className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                        value={selectedCountry}
                        onChange={(e) => handleFilterSelect("country", e.target.value)}
                      >
                        <option value="">Select Country</option>
                        {uniqueCountries.map((country: string) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Budget filter */}
                    <div>
                      <label className="text-xs font-medium text-gray-600 block mb-1">Budget</label>
                      <select 
                        className="w-full border border-gray-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                        value={selectedBudget}
                        onChange={(e) => handleFilterSelect("budget", e.target.value)}
                      >
                        <option value="">Select Budget Range</option>
                        {budgetRanges.map((budget: string) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Filter Results Section */}
            {showFilters && (
              <div className="mt-5 bg-white p-4 rounded-lg border border-gray-100">
                <h3 className="text-green-600 font-semibold mb-3">
                  Filter results
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    "Institutions",
                    "Course",
                    "Intake year",
                    "Intake month",
                    "Application deadline",
                    "Programs start date",
                    "Programme category",
                    "Tuition fee",
                  ].map((filter) => (
                    <select
                      key={filter}
                      className="border border-green-200 p-2 rounded-full w-full focus:outline-none text-gray-700 text-sm"
                    >
                      <option>{filter}</option>
                    </select>
                  ))}
                </div>
              </div>
            )}

            {/* Results counts */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-gray-100 pt-3 px-2 gap-2">
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
                <h4 className="text-gray-500 text-sm">
                  <span className="font-semibold text-gray-700">{filteredCourses.length}</span> programs
                </h4>
                {uniqueCountries.length > 0 && (
                  <h4 className="text-gray-500 text-sm">
                    <span className="font-semibold text-gray-700">{Array.from(new Set(filteredCourses.map((course: any) => course.country))).length}</span> countries
                  </h4>
                )}
              </div>
              
              {filteredCourses.length > 0 && (
                <div className="px-3 py-1 bg-[#D7F5DC] text-primary rounded-full text-sm">
                  {filteredCourses.length} results
                </div>
              )}
            </div>

            {/* Program Results - Desktop */}
            <div className="mt-4 hidden lg:block space-y-4">
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : filteredCourses.length > 0 ? (
                filteredCourses.map((program: any, index: any) => (
                  <div
                    key={index}
                    className="p-4 border border-[#D7F5DC] rounded-[21px] shadow-sm flex justify-between items-center hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <div className="flex gap-3">
                        <div>
                          <h3 className="text-[16px] font-bold text-primary mb-2">
                            {program?.course}
                          </h3>
                          <div className="flex gap-2 mb-3">
                            <img src="/images/psycho/location.svg" alt="/" className="w-4 h-4 mt-0.5" />
                            <p className="text-gray-500 text-sm">
                              {program?.city}, {program?.country} 
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <p className="text-gray-500 text-sm">
                          {program?.program_years}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {program?.study_type}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {program?.language_type}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[12px] text-[#494949]">Yearly</p>
                      <p className="text-lg font-semibold">{program?.tuition_fee}</p>
                      <div className="flex gap-2 items-center justify-end mt-2">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                          <FaRegBookmark className="text-green-600" />
                        </button>
                        <button
                          onClick={() => handleApply(program.id, program.course)} 
                          className="flex items-center text-sm gap-1 border border-primary bg-primary rounded-full px-6 py-2 text-white hover:bg-green-700 transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No programs found matching your criteria.</p>
                  <button 
                    onClick={clearFilters}
                    className="mt-2 text-primary hover:underline"
                  >
                    Clear filters to see all programs
                  </button>
                </div>
              )}
            </div>

            {/* Program Results - Mobile */}
            <div className="mt-4 block lg:hidden space-y-4">
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                </div>
              ) : filteredCourses.length > 0 ? (
                filteredCourses.map((program: any, index: any) => (
                  <div
                    key={index}
                    className="p-4 border border-[#D7F5DC] rounded-[21px] shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Course title */}
                    <h3 className="text-[16px] font-bold text-primary mb-2">
                      {program?.course}
                    </h3>
                    
                    {/* Location */}
                    <div className="flex items-center gap-2 mb-3">
                      <img src="/images/psycho/location.svg" alt="Location" className="w-4 h-4" />
                      <p className="text-gray-500 text-sm">
                        {program?.city}, {program?.country}
                      </p>
                    </div>
                    
                    {/* Program details */}
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <p className="text-gray-500 text-xs">
                          {program?.program_years || "Duration"}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <p className="text-gray-500 text-xs">
                          {program?.study_type || "Type"}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2 text-center">
                        <p className="text-gray-500 text-xs">
                          {program?.language_type || "Language"}
                        </p>
                      </div>
                    </div>
                    
                    {/* Fee and actions */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500">Yearly Tuition</p>
                        <p className="text-lg font-semibold text-gray-800">{program?.tuition_fee}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                          <FaRegBookmark className="text-green-600" />
                        </button>
                        <button
                          onClick={() => handleApply(program.id, program.course)} 
                          className="flex items-center text-sm gap-1 bg-primary rounded-full px-5 py-2 text-white hover:bg-green-700 transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-2">No programs found matching your criteria.</p>
                  <button 
                    onClick={clearFilters}
                    className="text-primary hover:underline text-sm"
                  >
                    Clear filters to see all programs
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ExplorePrograms;