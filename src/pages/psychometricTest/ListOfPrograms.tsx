import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { FaFilter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Course {
  id: string;
  generic_course_name: string;
  updatable_course_title: string;
  school_name: string;
  country: string;
  duration: string;
  course_description: string;
  course_image_url: string;
  course_url: string;
  school_logo_url: string;
  skills_covered: string[];
  tags_associated: string[];
  start_date: string;
  is_active: boolean;
  created_at: string | null;
  updated_at: string | null;
}

interface PsychometricResult {
  status: boolean;
  message: string;
  data: {
    recommended_courses: Course[];
    tag_scores: Record<string, number>;
    top_tags: string[];
    user_id: string;
  };
}

const ListOfPrograms = () => {
  const location = useLocation();
  const [psychometricResult, setPsychometricResult] = useState<PsychometricResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);

  useEffect(() => {
    let result: PsychometricResult | null = null;

    try {
      // First check localStorage
      const savedResults = localStorage.getItem('psychometricResults');
      
      if (savedResults) {
        result = JSON.parse(savedResults);
        console.log("Retrieved psychometric results from localStorage:", result);
      } else if (location.state?.psychometricResult) {
        // If not in localStorage, try location state
        result = location.state.psychometricResult;
        console.log("Retrieved psychometric results from location state:", result);
        
        // Save to localStorage for future reference
        localStorage.setItem('psychometricResults', JSON.stringify(result));
      } else {
        console.log("No psychometric results found in localStorage or location state");
      }

      setPsychometricResult(result);
    } catch (error) {
      console.error("Error retrieving psychometric results:", error);
      toast.error("Error loading program recommendations");
    } finally {
      setLoading(false);
    }
  }, [location]);

  // Get recommended courses from the result
  const getRecommendedCourses = (): Course[] => {
    if (!psychometricResult?.data?.recommended_courses) {
      return [];
    }
    return psychometricResult.data.recommended_courses;
  };

  // Filter courses based on active tab
  const getFilteredCourses = (): Course[] => {
    const courses = getRecommendedCourses();
    
    if (activeTab === "All") {
      return courses;
    } else if (activeTab === "NGN Institutions") {
      return courses.filter(course => course.country === "Nigeria");
    } else if (activeTab === "African Institutions") {
      // Add logic to filter African institutions
      const africanCountries = ["Nigeria", "Ghana", "Kenya", "South Africa", "Egypt", "Morocco", "Tunisia", "Algeria"];
      return courses.filter(course => africanCountries.includes(course.country));
    } else if (activeTab === "Foreign Institutions") {
      // Any institution not in Nigeria is considered foreign in this example
      return courses.filter(course => course.country !== "Nigeria");
    }
    return courses;
  };

  // Calculate match score based on tags
  const calculateMatchScore = (course: Course): number => {
    if (!psychometricResult?.data?.tag_scores || !course.tags_associated) {
      return 0;
    }

    const tagScores = psychometricResult.data.tag_scores;
    const courseTags = course.tags_associated;
    
    // Calculate average score for tags associated with this course
    const totalScore = courseTags.reduce((sum, tag) => {
      return sum + (tagScores[tag] || 0);
    }, 0);
    
    return courseTags.length > 0 ? Math.round(totalScore / courseTags.length) : 0;
  };

  const filteredCourses = getFilteredCourses();

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

  // If no results found, show message
  if (!psychometricResult || !psychometricResult.data?.recommended_courses || psychometricResult.data.recommended_courses.length === 0) {
    return (
      <div>
        <Navbar />
        <div className="mt-[130px] flex justify-center items-center h-[60vh]">
          <div className="text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No Recommendations Found</h3>
              <p className="text-gray-600 mb-4">We couldn't find any program recommendations. Please try taking the test again.</p>
              <Link 
                to="/psychometric-test/programs" 
                className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700"
              >
                Take Test Again
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  console.log("Psychometric Result:", psychometricResult);
  console.log("Filtered Courses:", filteredCourses);

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

                  {/* Display user's top characteristics */}
                  {/* {psychometricResult.data.top_tags && psychometricResult.data.top_tags.length > 0 && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-blue-800 mb-2">Your Top Characteristics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {psychometricResult.data.top_tags.map((tag, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )} */}

                  <div className="mt-10 flex gap-4">
                    <Link to="/psychometric-test/programs" className="bg-green-600 text-center text-[14px] text-white py-2 md:w-fit w-full md:px-6 rounded-full hover:bg-green-700">
                      Take another test
                    </Link>
                    {/* <Link
                      to="/explore-programs" className="border text-[14px] border-green-600 text-center text-green-600 md:w-fit w-full py-2 md:px-4 rounded-full hover:bg-green-100">
                      Explore more courses
                    </Link> */}
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
                        {filteredCourses.length} {filteredCourses.length === 1 ? "result" : "results"}
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
                      {filteredCourses.length} {filteredCourses.length === 1 ? "result" : "results"}
                    </div>
                  </div>

                  {/* Desktop view */}
                  <div className="mt-4 lg:block hidden space-y-4">
                    {filteredCourses && filteredCourses.length > 0 ? (
                      filteredCourses.map((course, index) => (
                        <div
                          key={course.id}
                          className="p-4 border border-[#D7F5DC] rounded-[21px] shadow-sm flex justify-between items-center"
                        >
                          <div>
                            <div className="flex gap-3">
                              {course.school_logo_url ? (
                                <img 
                                  src={course.school_logo_url} 
                                  alt={course.school_name} 
                                  className="w-12 h-12 object-contain rounded"
                                />
                              ) : (
                                <img src="/images/psycho/school.svg" alt="School" className="w-12 h-12" />
                              )}

                              <div>
                                <h3 className="text-[16px] font-bold text-primary">
                                  {course.updatable_course_title || course.generic_course_name}
                                </h3>
                                <div className="flex pt-2 gap-6">
                                  <div className="flex gap-2">
                                    <img src="/images/psycho/uni.svg" alt="University" />
                                    <p className="text-gray-700">
                                      {course.school_name}
                                    </p>
                                  </div>
                                  <div className="flex gap-2">
                                    <img src="/images/psycho/location.svg" alt="Location" />
                                    <p className="text-gray-500 whitespace-nowrap text-sm">
                                      {course.country}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="flex gap-6 mt-4">
                              <p className="text-gray-500 text-sm">
                                {course.duration}
                              </p>
                              <p className="text-gray-500 text-sm">
                                Starting: {new Date(course.start_date).toLocaleDateString()}
                              </p>
                              {course.skills_covered && course.skills_covered.length > 0 && (
                                <p className="text-gray-500 text-sm">
                                  Skills: {course.skills_covered.slice(0, 2).join(", ")}
                                  {course.skills_covered.length > 2 && "..."}
                                </p>
                              )}
                            </div>
                            {course.course_description && (
                              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                {course.course_description}
                              </p>
                            )} */}
                          </div>
                          <div className="text-right">
                            <div className="flex items-center justify-end mb-2">
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                Match Score: {calculateMatchScore(course)}
                              </span>
                            </div>
                            {/* <div className="flex flex-col gap-2">
                              {course.course_url && (
                                <a 
                                  href={course.course_url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 text-sm hover:underline"
                                >
                                  View Details
                                </a>
                              )}
                              <button className="flex items-center gap-2 border border-primary rounded-full pl-2 py-2 pr-2 text-primary hover:text-green-700">
                                Add to wishlist
                                <img src="/images/psycho/wishlist.svg" alt="Wishlist" />
                              </button>
                            </div> */}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-500">No programs found matching your criteria.</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile view */}
                  <div className="mt-4 block lg:hidden space-y-4">
                    {filteredCourses && filteredCourses.length > 0 ? (
                      filteredCourses.map((course, index) => (
                        <div
                          key={course.id}
                          className="p-4 border border-[#D7F5DC] rounded-[21px] shadow-sm"
                        >
                          <div>
                            <h3 className="text-[16px] font-bold text-primary">
                              {course.updatable_course_title || course.generic_course_name}
                            </h3>
                            <div className="flex gap-3 mt-2">
                              {course.school_logo_url ? (
                                <img 
                                  src={course.school_logo_url} 
                                  alt={course.school_name} 
                                  className="w-10 h-10 object-contain rounded"
                                />
                              ) : (
                                <img src="/images/psycho/school.svg" alt="School" className="w-10 h-10" />
                              )}

                              <div>
                                <div className="lg:flex pt-2 gap-6">
                                  <div className="flex gap-2">
                                    <img src="/images/psycho/uni.svg" alt="University" />
                                    <p className="text-gray-700">
                                      {course.school_name}
                                    </p>
                                  </div>
                                  <div className="flex gap-2 mt-1">
                                    <img src="/images/psycho/location.svg" alt="Location" />
                                    <p className="text-gray-500 text-sm">
                                      {course.country}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="flex gap-6 mt-4">
                              <p className="text-gray-500 text-sm">
                                {course.duration}
                              </p>
                              <p className="text-gray-500 text-sm">
                                Start: {new Date(course.start_date).toLocaleDateString()}
                              </p>
                            </div>
                            {course.course_description && (
                              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                {course.course_description}
                              </p>
                            )} */}
                            <div className="flex items-center justify-between mt-3">
                              {/* <div>
                                {course.course_url && (
                                  <a 
                                    href={course.course_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 text-sm hover:underline block"
                                  >
                                    View Details
                                  </a>
                                )}
                              </div> */}
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                Score: {calculateMatchScore(course)}
                              </span>
                              {/* <button className="flex items-center gap-2 border border-primary rounded-full pl-2 py-2 pr-2 text-primary hover:text-green-700">
                                Add to wishlist
                                <img src="/images/psycho/wishlist.svg" alt="Wishlist" />
                              </button> */}
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