import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { FaSearch, FaFilter, FaRegBookmark } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AdminApis } from "../../apis/adminApi/adminApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExplorePrograms = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Programs");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const navigate = useNavigate();
  
  const [courses, setCourses] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [uniqueCountries, setUniqueCountries] = useState<number>(0);
  const [uniqueUniversities, setUniqueUniversities] = useState<number>(0);
  
  // Filter options
  const [selectedProgram, setSelectedProgram] = useState<string>("Programs");
  const [selectedRegion, setSelectedRegion] = useState<string>("Region");
  const [selectedCountry, setSelectedCountry] = useState<string>("Country");
  const [selectedBudget, setSelectedBudget] = useState<string>("$1,000+");
  
  useEffect(() => {
    fetchCourses();
  }, []);

  // Calculate stats whenever courses change
  useEffect(() => {
    calculateStats();
  }, [courses]);

  const calculateStats = () => {
    // Get unique countries
    const countries = new Set(courses.map((course:any) => course.country));
    setUniqueCountries(countries.size);
    
    // Get unique universities
    const universities = new Set(courses.map((course:any) => course.university));
    setUniqueUniversities(universities.size);
  };

  const fetchCourses = () => {
    setLoading(true);
    AdminApis.getCourses()
      .then((response) => {
        if (response?.data?.records) {
          setCourses(response.data.records);
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
  
  // Function to handle filter selection
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
  
  const handleApply = (id: string, courseName: string) => {
    // Format the course name for URL (replace spaces with hyphens, make lowercase)
    const formattedCourseName = courseName.replace(/\s+/g, '-').toLowerCase();
    // Navigate to the edit page with course name in URL and id in state
    navigate(`/program-overview/${formattedCourseName}`, { state: { id } });
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="pt-[100px] pb-16">
        <div className="max-w-[2000px] relative mx-auto lg:px-14 px-3">
          <h4 className="text-center text-primary text-2xl lg:text-[40px] font-bold pb-6">Explore Programs</h4>
          
          <div className="max-w-[1000px] relative mx-auto bg-white p-4 md:p-6 rounded-[31px] shadow">
            <div className="flex gap-2 mb-6">
              <img src="/images/psycho/badge.svg" alt="/" className="w-8 h-8" />
              <h2 className="text-[20px] lg:text-[36px] max-w-[250px] leading-[30px] lg:leading-[40px] lg:max-w-[400px] font-semibold text-[#262626]">
                Prepare a list of{" "}
                <span className="text-primary">programs</span> that fits you
              </h2>
            </div>
            
            {/* Desktop Search Bar */}
            <div className="lg:px-20 md:px-8 px-0">
              <div className="md:flex hidden w-full justify-between items-center bg-white border border-green-200 rounded-xl px-4 py-2 shadow-sm">
                {/* Programs */}
                <div className="flex items-center w-full gap-2 px-4 border-r">
                  <img
                    src="/images/explorePrograms/programdropdown.svg"
                    alt="Programs"
                  />
                  <select className="bg-transparent focus:outline-none text-gray-700">
                    <option>Programs</option>
                    <option>Bachelors</option>
                    <option>Masters</option>
                    <option>PhD</option>
                    <option>Diploma</option>
                  </select>
                </div>

                {/* Region */}
                <div className="flex items-center w-full gap-2 px-4 border-r">
                  <img
                    src="/images/explorePrograms/regiondropdown.svg"
                    alt="Region"
                  />
                  <select className="bg-transparent focus:outline-none text-gray-700">
                    <option>Region</option>
                    <option>Europe</option>
                    <option>Asia</option>
                  </select>
                </div>

                {/* Country */}
                <div className="flex items-center w-full gap-2 px-4 border-r">
                  <img
                    src="/images/explorePrograms/countrydropdown.svg"
                    alt="Country"
                  />
                  <select className="bg-transparent w-full focus:outline-none text-gray-700">
                    <option>Country</option>
                    {/* Country options */}
                  </select>
                </div>

                {/* Budget */}
                <div className="flex w-full items-center gap-2 px-4 border-r">
                  <img
                    src="/images/explorePrograms/budgetdropdown.svg"
                    alt="Budget"
                  />
                  <select className="bg-transparent focus:outline-none text-gray-700">
                    <option>$1,000+</option>
                  </select>
                </div>

                {/* Search Button */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="bg-green-500 cursor-pointer text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-green-600"
                >
                  <FaSearch />
                  Search
                </button>
              </div>
              
              {/* Mobile Search UI */}
              <div className="md:hidden block">
                {/* Selected Filter Display */}
                <div className="flex items-center justify-between mb-4">
                  <button 
                    onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                    className="flex items-center gap-2 bg-white border border-green-200 rounded-full px-4 py-2 text-gray-700"
                  >
                    <FaFilter size={14} />
                    <span className="text-sm font-medium">Filters</span>
                  </button>
                  
                  <button
                    onClick={() => setShowFilters(true)}
                    className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-green-600"
                  >
                    <FaSearch size={14} />
                    <span className="text-sm">Search</span>
                  </button>
                </div>
                
                {/* Filter chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer ${selectedProgram !== "Programs" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}`}>
                    {selectedProgram}
                  </div>
                  <div className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer ${selectedRegion !== "Region" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}`}>
                    {selectedRegion}
                  </div>
                  <div className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer ${selectedCountry !== "Country" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}`}>
                    {selectedCountry}
                  </div>
                  <div className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer ${selectedBudget !== "$1,000+" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-700"}`}>
                    {selectedBudget}
                  </div>
                </div>
                
                {/* Filter dropdown */}
                {showFilterDropdown && (
                  <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-800">Select filters</h3>
                      <button 
                        onClick={() => setShowFilterDropdown(false)}
                        className="text-gray-500"
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
                          <option>Programs</option>
                          <option>Bachelors</option>
                          <option>Masters</option>
                          <option>PhD</option>
                          <option>Diploma</option>
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
                          <option>Region</option>
                          <option>Europe</option>
                          <option>Asia</option>
                          <option>Africa</option>
                          <option>North America</option>
                          <option>South America</option>
                          <option>Australia</option>
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
                          <option>Country</option>
                          <option>Nigeria</option>
                          <option>Ghana</option>
                          <option>United Kingdom</option>
                          <option>United States</option>
                          <option>Canada</option>
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
                          <option>$1,000+</option>
                          <option>$5,000+</option>
                          <option>$10,000+</option>
                          <option>$20,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 px-2">
              <div className="flex gap-3 items-center">
                <h4 className="text-gray-500 text-sm">
                  <span className="font-semibold text-gray-700">{courses.length}</span> programs
                </h4>
                {uniqueUniversities > 0 && (
                  <h4 className="text-gray-500 text-sm">
                    <span className="font-semibold text-gray-700">{uniqueUniversities}</span> universities
                  </h4>
                )}
                {uniqueCountries > 0 && (
                  <h4 className="text-gray-500 text-sm">
                    <span className="font-semibold text-gray-700">{uniqueCountries}</span> countries
                  </h4>
                )}
              </div>
              
              {courses.length > 0 && (
                <div className="px-3 py-1 bg-[#D7F5DC] text-primary rounded-full text-sm">
                  {courses.length} results
                </div>
              )}
            </div>

            {/* Program Results - Desktop */}
            <div className="mt-4 lg:block hidden space-y-4">
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : courses.length > 0 ? (
                courses.map((program: any, index: any) => (
                  <div
                    key={index}
                    className="p-4 border border-[#D7F5DC] rounded-[21px] shadow-sm flex justify-between items-center"
                  >
                    <div>
                      <div className="flex gap-3">
                        <img src={program?.school_logo || "/images/psycho/school.svg"} className="w-12 h-12 object-contain" alt="/" />

                        <div>
                          <h3 className="text-[16px] font-bold text-primary">
                            {program?.course}
                          </h3>
                          <div className="flex pt-2 gap-6">
                            <div className="flex gap-2">
                              <img src="/images/psycho/uni.svg" alt="/" />
                              <p className="text-gray-700">
                                {program.university}
                              </p>
                            </div>
                            <div className="flex gap-2">
                              <img
                                src="/images/psycho/location.svg"
                                alt="/"
                              />
                              <p className="text-gray-500 whitespace-nowrap text-sm">
                                {program?.city}, {program?.country} 
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-6 mt-4">
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
                        <button className="p-2 rounded-full hover:bg-gray-100">
                          <FaRegBookmark className="text-green-600" />
                        </button>
                        <button
                          // to="/program-overview" 
                      onClick={() => handleApply(program.id, program.course)} 
                       className="flex items-center text-sm gap-1 border border-primary bg-primary rounded-full px-6 py-2 text-white hover:bg-green-700">
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500">No programs found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Program Results - Mobile */}
            <div className="mt-4 block lg:hidden space-y-4">
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                </div>
              ) : courses.length > 0 ? (
                courses.map((program: any, index: any) => (
                  <div
                    key={index}
                    className="p-4 border border-[#D7F5DC] rounded-[21px] shadow-sm"
                  >
                    {/* Score tag - if available */}
                    {program.score && (
                      <div className="flex justify-end mb-1">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Match: {program.score}%
                        </span>
                      </div>
                    )}
                    
                    {/* Course title */}
                    <h3 className="text-[16px] font-bold text-primary mb-2">
                      {program?.course}
                    </h3>
                    
                    {/* University info */}
                    <div className="flex items-start gap-3 mb-3">
                      <img 
                        src={program?.school_logo || "/images/psycho/school.svg"} 
                        className="w-10 h-10 object-contain mt-1" 
                        alt="University logo" 
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5">
                          <img src="/images/psycho/uni.svg" alt="University" className="w-4 h-4" />
                          <p className="text-gray-700 text-sm">
                            {program.university}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <img src="/images/psycho/location.svg" alt="Location" className="w-4 h-4" />
                          <p className="text-gray-500 text-sm">
                            {program?.city}, {program?.country}
                          </p>
                        </div>
                      </div>
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
                        <button className="p-2 rounded-full hover:bg-gray-100">
                          <FaRegBookmark className="text-green-600" />
                        </button>
                        <button
                          // to="/program-overview" 
                      onClick={() => handleApply(program.id, program.course)} 
                          className="flex items-center text-sm gap-1 bg-primary rounded-full px-5 py-2 text-white hover:bg-green-700"
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-center" autoClose={3000} />
    </div>
  );
};

export default ExplorePrograms;