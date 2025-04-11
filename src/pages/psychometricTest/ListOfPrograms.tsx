import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { FaRegBookmark, FaFilter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Program {
  program: {
    id: string;
    course: string;
    university: string;
    city: string;
    country: string;
    program_years: string;
    tuition_fee: string;
    language_type: string;
    study_type: string;
    scholarship: string;
    scholarship_information: string;
    school_logo: string;
    program_summary: string;
    [key: string]: any; // For other properties
  };
  score: number;
}

const ListOfPrograms = () => {
  const location = useLocation();
  const [programResults, setProgramResults] = useState<Program[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);

  useEffect(() => {
    // Try to get program results from multiple sources
    let results: Program[] = [];

    try {
      // First check localStorage
      const savedResults = localStorage.getItem('psychometricResults');
      
      if (savedResults) {
        results = JSON.parse(savedResults);
        console.log("Retrieved program results from localStorage:", results);
      } else if (location.state?.programResults) {
        // If not in localStorage, try location state
        results = location.state.programResults;
        console.log("Retrieved program results from location state:", results);
        
        // Save to localStorage for future reference
        localStorage.setItem('psychometricResults', JSON.stringify(results));
      } else {
        console.log("No program results found in localStorage or location state");
      }

      setProgramResults(results);
    } catch (error) {
      console.error("Error retrieving program results:", error);
      toast.error("Error loading program recommendations");
    } finally {
      setLoading(false);
    }
  }, [location]);

  // Clear results handler - for testing
  const clearResults = () => {
    localStorage.removeItem('psychometricResults');
    setProgramResults([]);
    toast.info("Program results cleared");
  };

  // Filter programs based on active tab
  const getFilteredPrograms = () => {
    if (activeTab === "All") {
      return programResults;
    } else if (activeTab === "NGN Institutions") {
      return programResults.filter(item => item.program.country === "Nigeria");
    } else if (activeTab === "African Institutions") {
      // Add logic to filter African institutions
      // This is a simplified example; you'd need a more comprehensive list of African countries
      const africanCountries = ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt"];
      return programResults.filter(item => africanCountries.includes(item.program.country));
    } else if (activeTab === "Foreign Institutions") {
      // Any institution not in Nigeria is considered foreign in this example
      return programResults.filter(item => item.program.country !== "Nigeria");
    }
    return programResults;
  };

  const filteredPrograms = getFilteredPrograms();

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="mt-[130px] flex justify-center items-center h-[60vh]">
          <div className="text-center">
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            </div>
            <p className="mt-2">Loading your program recommendations...</p>
          </div>
        </div>
      </div>
    );
  }

  console.log(programResults);

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="">
        <div className="flex w-full justify-center m lg:pt-[150px] pt-[115px]">
          <div className="max-w-[2000px] relative mx-auto lg:px-14 px-3 w-full">
            <div className="">
              <div className=" min-h-screen md:p-6 ">
                <div className="max-w-[1000px] relative mx-auto bg-white md:p-6 p-4 rounded-[31px] shadow">
                  <div className="flex gap-2">
                    <img src="/images/psycho/badge.svg" alt="/" />
                    <h2 className="text-[20px] lg:text-[36px] leading-[30px] lg:leading-[40px] max-w-[474px] font-semibold text-[#262626]">
                      Here are list of{" "}
                      <span className="text-primary">programs</span> that align
                      with your interest
                    </h2>
                  </div>
                  <div className="absolute lg:block hidden top-0 right-0">
                    <img src="/images/psycho/flair.svg" alt="/" />
                  </div>

                  <div className="mt-10 flex gap-4">
                    <Link to="/psychometric-test/programs" className="bg-green-600 text-center text-[14px] text-white py-2 md:w-fit w-full md:px-6 rounded-full hover:bg-green-700">
                      Take another test
                    </Link>
                    <Link
                      to="/explore-programs" className="border text-[14px] border-green-600 text-center text-green-600 md:w-fit w-full py-2 md:px-4 rounded-full hover:bg-green-100">
                      Explore more courses
                    </Link>
                  </div>

                  {/* Desktop tabs */}
                  <div className="mt-6 border-t py-2 lg:flex items-center justify-between gap-6 text-gray-600">
                    <div className="lg:flex md:gap-6 gap-3 md:text-[16px] text-[12px] items-center hidden">
                      <span 
                        className={`${activeTab === "All" ? "text-green-600 border-b-2 border-green-600" : ""} pb-1 cursor-pointer`}
                        onClick={() => setActiveTab("All")}
                      >
                        All
                      </span>
                      <span 
                        className={`${activeTab === "NGN Institutions" ? "text-green-600 border-b-2 border-green-600" : ""} pb-1 cursor-pointer`}
                        onClick={() => setActiveTab("NGN Institutions")}
                      >
                        NGN Institutions
                      </span>
                      <span 
                        className={`${activeTab === "African Institutions" ? "text-green-600 border-b-2 border-green-600" : ""} pb-1 cursor-pointer`}
                        onClick={() => setActiveTab("African Institutions")}
                      >
                        African Institutions
                      </span>
                      <span 
                        className={`${activeTab === "Foreign Institutions" ? "text-green-600 border-b-2 border-green-600" : ""} pb-1 cursor-pointer`}
                        onClick={() => setActiveTab("Foreign Institutions")}
                      >
                        Foreign Institutions
                      </span>
                    </div>
                    
                    {/* Mobile filter */}
                    <div className="lg:hidden flex justify-between w-full items-center mb-2 relative">
                      <button 
                        onClick={() => setShowFilterMenu(!showFilterMenu)}
                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-gray-700 text-sm"
                      >
                        <FaFilter size={12} />
                        <span>{activeTab}</span>
                      </button>
                      
                      <div className="w-fit rounded-full px-3 py-1.5 bg-[#D7F5DC] text-primary text-sm">
                        {filteredPrograms.length} {filteredPrograms.length === 1 ? "result" : "results"}
                      </div>
                      
                      {/* Filter dropdown */}
                      {showFilterMenu && (
                        <div className="absolute top-10 left-0 z-10 bg-white rounded-xl shadow-lg w-60 p-2 border">
                          <div className="flex flex-col text-[14px]">
                            <button 
                              className={`px-3 py-2 rounded-lg text-left ${activeTab === "All" ? "bg-green-50 text-green-600 font-medium" : ""}`}
                              onClick={() => {
                                setActiveTab("All");
                                setShowFilterMenu(false);
                              }}
                            >
                              All
                            </button>
                            <button 
                              className={`px-3 py-2 rounded-lg text-left ${activeTab === "NGN Institutions" ? "bg-green-50 text-green-600 font-medium" : ""}`}
                              onClick={() => {
                                setActiveTab("NGN Institutions");
                                setShowFilterMenu(false);
                              }}
                            >
                              NGN Institutions
                            </button>
                            <button 
                              className={`px-3 py-2 rounded-lg text-left ${activeTab === "African Institutions" ? "bg-green-50 text-green-600 font-medium" : ""}`}
                              onClick={() => {
                                setActiveTab("African Institutions");
                                setShowFilterMenu(false);
                              }}
                            >
                              African Institutions
                            </button>
                            <button 
                              className={`px-3 py-2 rounded-lg text-left ${activeTab === "Foreign Institutions" ? "bg-green-50 text-green-600 font-medium" : ""}`}
                              onClick={() => {
                                setActiveTab("Foreign Institutions");
                                setShowFilterMenu(false);
                              }}
                            >
                              Foreign Institutions
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="lg:block hidden w-fit rounded-full px-3 py-2 bg-[#D7F5DC] text-primary text-sm">
                      {filteredPrograms.length} {filteredPrograms.length === 1 ? "result" : "results"}
                    </div>
                  </div>

                  {/* Desktop view */}
                  <div className="mt-4 lg:block hidden space-y-4">
                    {filteredPrograms && filteredPrograms.length > 0 ? (
                      filteredPrograms.map((item, index) => (
                        <div
                          key={index}
                          className="p-4 border border-[#D7F5DC] rounded-[21px] shadow-sm flex justify-between items-center"
                        >
                          <div>
                            <div className="flex gap-3">
                              {item.program.school_logo ? (
                                <img 
                                  src={item.program.school_logo} 
                                  alt={item.program.university} 
                                  className="w-12 h-12 object-contain"
                                />
                              ) : (
                                <img src="/images/psycho/school.svg" alt="School" />
                              )}

                              <div>
                                <h3 className="text-[16px] font-bold text-primary">
                                  {item.program.course}
                                </h3>
                                <div className="flex pt-2 gap-6">
                                  <div className="flex gap-2">
                                    <img src="/images/psycho/uni.svg" alt="University" />
                                    <p className="text-gray-700">
                                      {item.program.university}
                                    </p>
                                  </div>
                                  <div className="flex gap-2">
                                    <img src="/images/psycho/location.svg" alt="Location" />
                                    <p className="text-gray-500 whitespace-nowrap text-sm">
                                      {item.program.city}, {item.program.country}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-6 mt-4">
                              <p className="text-gray-500 text-sm">
                                {item.program.program_years}
                              </p>
                              <p className="text-gray-500 text-sm">
                                {item.program.scholarship === "true" ? "Scholarship Available" : "No Scholarship"}
                              </p>
                              <p className="text-gray-500 text-sm">
                                {item.program.language_type}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end mb-2">
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                Match Score: {item.score}
                              </span>
                            </div>
                            <p className="text-[12px] text-[#494949]">Yearly</p>
                            <p className="text-lg font-semibold">{item.program.tuition_fee}</p>
                            <button className="flex items-center gap-2 border border-primary rounded-full pl-2 py-2 pr-2 text-primary mt-2 hover:text-green-700">
                              Add to wishlist
                              <img src="/images/psycho/wishlist.svg" alt="Wishlist" />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-500">No programs found matching your criteria.</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile view - Keeping original layout with minor spacing adjustments */}
                  <div className="mt-4 block lg:hidden space-y-4">
                    {filteredPrograms && filteredPrograms.length > 0 ? (
                      filteredPrograms.map((item, index) => (
                        <div
                          key={index}
                          className="p-4 border border-[#D7F5DC] rounded-[21px] shadow-sm"
                        >
                          <div>
                            <h3 className="text-[16px] font-bold text-primary">
                              {item.program.course}
                            </h3>
                            <div className="flex gap-3 mt-2">
                              {item.program.school_logo ? (
                                <img 
                                  src={item.program.school_logo} 
                                  alt={item.program.university} 
                                  className="w-10 h-10 object-contain"
                                />
                              ) : (
                                <img src="/images/psycho/school.svg" alt="School" className="w-10 h-10" />
                              )}

                              <div>
                                <div className="lg:flex pt-2 gap-6">
                                  <div className="flex gap-2">
                                    <img src="/images/psycho/uni.svg" alt="University" />
                                    <p className="text-gray-700">
                                      {item.program.university}
                                    </p>
                                  </div>
                                  <div className="flex gap-2 mt-1">
                                    <img src="/images/psycho/location.svg" alt="Location" />
                                    <p className="text-gray-500 text-sm">
                                      {item.program.city}, {item.program.country}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-6 mt-4">
                              <p className="text-gray-500 text-sm">
                                {item.program.program_years}
                              </p>
                              <p className="text-gray-500 text-sm">
                                {item.program.scholarship === "true" ? "Scholarship" : "No Scholarship"}
                              </p>
                              <p className="text-gray-500 text-sm">
                                {item.program.language_type}
                              </p>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                              <div>
                                <p className="text-[12px] text-[#494949]">Yearly</p>
                                <p className="text-lg font-semibold">{item.program.tuition_fee}</p>
                              </div>
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                Score: {item.score}
                              </span>
                              <button className="flex items-center gap-2 border border-primary rounded-full pl-2 py-2 pr-2 text-primary hover:text-green-700">
                                Add to wishlist
                                <img src="/images/psycho/wishlist.svg" alt="Wishlist" />
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
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ListOfPrograms;