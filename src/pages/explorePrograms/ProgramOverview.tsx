import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { FaArrowLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { AdminApis } from "../../apis/adminApi/adminApi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProgramOverview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;
  const [program, setProgram] = useState<any>([]);
  
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await AdminApis.getCourseById(id);
        if (response?.data) {
          const courseData = response.data;
          
          const formattedData = {
            ...courseData,
            registration_start: courseData.registration_start ? new Date(courseData.registration_start) : null,
            registartion_ends: courseData.registartion_ends ? new Date(courseData.registartion_ends) : null,
            school_resumption: courseData.school_resumption ? new Date(courseData.school_resumption) : null,
            scholarship: courseData.scholarship === "true" || courseData.scholarship === true
          };
          
          setProgram(formattedData);
        }
      } catch (error) {
        console.error('Error fetching course:', error);
        toast.error("Failed to load course data");
      }
    };
    
    if (id) {
      fetchCourseData();
    }
  }, [id]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleApply = (id: string, courseName: string) => {
    const formattedCourseName = courseName.replace(/\s+/g, '-').toLowerCase();
    navigate(`/application-summary/${formattedCourseName}`, { state: { id } });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="w-full">
        <div className="flex w-full justify-center">
          <div className="max-w-[2000px] relative mx-auto px-3 sm:px-6 lg:px-14 w-full">
            <div className="flex justify-center">
              <div className="min-h-screen  sm:p-6 pt-[100px] sm:pt-[130px] w-full max-w-[1200px]">
                
                {/* Title */}
                <h4 className="text-center text-primary text-2xl sm:text-3xl lg:text-[40px] font-bold pb-6 sm:pb-10">
                  Program Overview
                </h4>
                
                {/* Main Content Card */}
                <div className="relative mx-auto bg-white p-4 sm:p-6 rounded-t-[20px] sm:rounded-t-[31px]">
                  <div className="mb-6">
                    
                    {/* Back Button */}
                    <button
                      onClick={handleBackClick}
                      className="flex items-center text-gray-600 hover:text-gray-900 mb-4 text-sm sm:text-base"
                    >
                      <FaArrowLeft className="mr-2 text-xs sm:text-sm" /> Back
                    </button>

                    {/* University Info Section */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex gap-3 mb-4">
                        <div className="flex-1">
                          <h2 className="text-lg sm:text-xl font-bold text-primary break-words">
                            {program?.university}
                          </h2>
                          <div className="flex gap-2 mt-2">
                            <img
                              src="/images/psycho/location.svg"
                              alt="Location"
                              className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                            />
                            <p className="text-gray-500 text-xs sm:text-sm">
                              {program?.city}, {program?.country}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Degree Title */}
                      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-7 break-words">
                        Bachelors of Science Program type -{" "}
                        <span className="text-green-500 block sm:inline mt-1 sm:mt-0">
                          {program?.course}
                        </span>
                      </h1>

                      {/* University Image with Action Buttons */}
                      <div className="relative">
                        <img
                          src={program?.overview}
                          alt="University Building"
                          className="w-full h-48 sm:h-64 lg:h-80 rounded-lg object-cover"
                        />

                        {/* Application Section - Repositioned for mobile */}
                        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-5 bg-white rounded-lg p-2 sm:p-3 shadow-lg">
                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
                            
                            {/* Applied Count */}
                            <div className="flex items-center text-gray-600 text-xs sm:text-sm">
                              <img
                                src="/images/explorePrograms/badgeblue.svg"
                                alt="badge"
                                className="w-4 h-4 sm:w-5 sm:h-5 mr-1"
                              />
                              <span className="text-[#292A2E] text-xs sm:text-sm">
                                <span className="font-semibold">300+</span> Applied
                              </span>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex gap-2 sm:gap-3 items-center">
                              <img
                                src="/images/explorePrograms/wishlistOpen.svg"
                                alt="wishlist"
                                className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80"
                              />
                              <button
                                onClick={() => handleApply(program.id, program.course)}
                                className="bg-green-500 text-white px-3 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm rounded-full hover:bg-green-600 transition-colors whitespace-nowrap"
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Ribbon - Hidden on small screens */}
                      <div className="absolute top-0 right-0 hidden lg:block">
                        <img
                          src="/images/psycho/flair.svg"
                          alt="Decoration"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="relative bg-[#D7F5DC]/[20%] p-4 sm:p-6 rounded-b-[20px] sm:rounded-b-[31px]">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    
                    {/* Program Summary - Full width on mobile */}
                    <div className="lg:col-span-2 bg-white relative p-4 sm:p-6 rounded-lg shadow-md">
                      <h2 className="text-primary text-lg sm:text-xl lg:text-[24px] font-semibold mb-3">
                        Program Summary
                      </h2>
                      <div className="border p-3 w-full rounded-[10px] bg-white">
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {program?.program_summary}
                        </p>
                      </div>
                    </div>

                    {/* Program Details */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                      <div className="space-y-3 sm:space-y-4">
                        
                        <div className="flex items-center gap-3 py-2">
                          <img src="/images/explorePrograms/yeardegree.svg" alt="Years" className="w-6 h-6 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <h4 className="text-[#000000] font-semibold text-sm truncate">
                              {program?.program_years}
                            </h4>
                            <p className="text-[#979797] text-xs">
                              Program years
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                          <img src="/images/explorePrograms/amountyear.svg" alt="Fee" className="w-6 h-6 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <h4 className="text-[#000000] font-semibold text-sm truncate">
                              {program?.tuition_fee}
                            </h4>
                            <p className="text-[#979797] text-xs">
                              Tuition fee
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                          <img src="/images/explorePrograms/language.svg" alt="Language" className="w-6 h-6 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <h4 className="text-[#000000] font-semibold text-sm truncate">
                              {program?.language_type}
                            </h4>
                            <p className="text-[#979797] text-xs">
                              Language type
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                          <img src="/images/explorePrograms/teachingtime.svg" alt="Study Type" className="w-6 h-6 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <h4 className="text-[#000000] font-semibold text-sm truncate">
                              {program?.study_type}
                            </h4>
                            <p className="text-[#979797] text-xs">
                              Study type
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                          <img src="/images/explorePrograms/percent.svg" alt="Scholarship" className="w-6 h-6 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <h4 className="text-[#000000] font-semibold text-sm truncate">
                              {program?.scholarship_information}
                            </h4>
                            <p className="text-[#979797] text-xs">
                              Scholarship
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Academic Requirements - Spans full width on mobile */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                      
                      {/* Academic Requirement Section */}
                      <div>
                        <h2 className="text-primary text-lg sm:text-xl lg:text-[24px] font-semibold pb-2 sm:pb-4">
                          Academic Requirement
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                          <div className="sm:col-span-2 bg-white p-3 sm:p-4 rounded-lg shadow">
                            <p className="text-gray-500 text-xs sm:text-sm mb-1">
                              Minimum Level of Education Completed
                            </p>
                            <h3 className="text-[#292A2E] text-lg sm:text-xl lg:text-[24px] font-semibold break-words">
                              {program?.minimum_education}
                            </h3>
                          </div>
                          <div className="bg-white p-3 sm:p-4 rounded-lg shadow">
                            <p className="text-gray-500 text-xs sm:text-sm mb-1">
                              {/* Minimum GPA */}
                            </p>
                            <h3 className="text-[#292A2E] text-lg sm:text-xl lg:text-[24px] font-semibold">
                              {program?.minimum_gpa}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Language Test Scores */}
                      <div>
                        <h2 className="text-primary text-lg sm:text-xl lg:text-[24px] font-semibold pb-2 sm:pb-4">
                          Minimum Language Test Score
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                          
                          <div className="bg-white shadow p-3 rounded-lg text-center">
                            <p className="text-gray-500 text-xs sm:text-sm mb-1">IELTS</p>
                            <h3 className="text-[#292A2E] text-lg sm:text-xl lg:text-[24px] font-semibold">
                              {program?.ielts || 'N/A'}
                            </h3>
                          </div>

                          <div className="bg-white shadow p-3 rounded-lg text-center">
                            <p className="text-gray-500 text-xs sm:text-sm mb-1">TOEFL</p>
                            <h3 className="text-[#292A2E] text-lg sm:text-xl lg:text-[24px] font-semibold">
                              {program?.toefl || 'N/A'}
                            </h3>
                          </div>

                          <div className="bg-white shadow p-3 rounded-lg text-center">
                            <p className="text-gray-500 text-xs sm:text-sm mb-1">PTE</p>
                            <h3 className="text-[#292A2E] text-lg sm:text-xl lg:text-[24px] font-semibold">
                              {program?.pte || 'N/A'}
                            </h3>
                          </div>

                          <div className="bg-white shadow p-3 rounded-lg text-center">
                            <p className="text-gray-500 text-xs sm:text-sm mb-1">DUOLINGO</p>
                            <h3 className="text-[#292A2E] text-lg sm:text-xl lg:text-[24px] font-semibold">
                              {program?.duolingo || 'N/A'}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program Intake */}
                    <div>
                      <h2 className="text-primary text-lg sm:text-xl lg:text-[24px] font-semibold pb-2 sm:pb-4">
                        Program Intake
                      </h2>

                      <div className="p-3 sm:p-4 bg-white rounded-lg flex flex-col justify-between min-h-[200px] sm:min-h-[250px] shadow space-y-3">
                        
                        <div className="flex justify-between gap-3">
                          <p className="text-[#979797] text-xs sm:text-sm">Registration start:</p>
                          <p className="font-semibold text-gray-700 text-xs sm:text-sm text-right">
                            {program?.registration_start ? new Date(program.registration_start).toLocaleDateString('en-GB', {
                              day: 'numeric', 
                              month: 'short', 
                              year: 'numeric'
                            }) : 'N/A'}
                          </p>
                        </div>

                        <div className="flex justify-between gap-3">
                          <p className="text-[#979797] text-xs sm:text-sm">Registration ends:</p>
                          <p className="font-semibold text-gray-700 text-xs sm:text-sm text-right">
                            {program?.registartion_ends ? new Date(program.registartion_ends).toLocaleDateString('en-GB', {
                              day: 'numeric', 
                              month: 'short', 
                              year: 'numeric'
                            }) : 'N/A'}
                          </p>
                        </div>

                        <div className="flex justify-between gap-3">
                          <p className="text-[#979797] text-xs sm:text-sm">School resumption:</p>
                          <p className="font-semibold text-gray-700 text-xs sm:text-sm text-right">
                            {program?.school_resumption ? new Date(program.school_resumption).toLocaleDateString('en-GB', {
                              day: 'numeric', 
                              month: 'short', 
                              year: 'numeric'
                            }) : 'N/A'}
                          </p>
                        </div>

                        <div className="border border-primary flex justify-between items-center p-3 font-semibold rounded-lg mt-auto">
                          <h4 className="text-primary text-xs sm:text-sm">Processing fee</h4>
                          <h4 className="text-primary text-sm sm:text-lg lg:text-[20px]">
                            {program?.processing_fee}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramOverview;