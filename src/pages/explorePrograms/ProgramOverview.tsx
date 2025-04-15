import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { FaArrowLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { AdminApis } from "../../apis/adminApi/adminApi";

import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProgramOverview = () => {
  const navigate = useNavigate();

     const location = useLocation();
      // Extract course name from URL params and id from location state
      // const { courseName } = useParams();
      // Access the id passed via stat
      const id = location.state?.id;
    // const [isLoading, setIsLoading] = useState(false);
    const [program, setProgram] = useState<any>([]);
    
        useEffect(() => {
            const fetchCourseData = async () => {
                try {
                    // setIsLoading(true);
                    const response = await AdminApis.getCourseById(id);
                    if (response?.data) {
                        const courseData = response.data;
                        
                        // Convert string dates to Date objects
                        const formattedData = {
                            ...courseData,
                            registration_start: courseData.registration_start ? new Date(courseData.registration_start) : null,
                            registartion_ends: courseData.registartion_ends ? new Date(courseData.registartion_ends) : null,
                            school_resumption: courseData.school_resumption ? new Date(courseData.school_resumption) : null,
                            scholarship: courseData.scholarship === "true" || courseData.scholarship === true
                        };
                        
                        setProgram(formattedData);
                        // setSchoolLogoImage(courseData.school_logo);
                        // setOverviewImage(courseData.overview);
                    }
                } catch (error) {
                    console.error('Error fetching course:', error);
                    toast.error("Failed to load course data");
                } finally {
                    // setIsLoading(false);
                }
            };
            
            if (id) {
                fetchCourseData();
            }
        }, [id]);
        console.log(program)
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
};

const handleApply = (id: string, courseName: string) => {
  // Format the course name for URL (replace spaces with hyphens, make lowercase)
  const formattedCourseName = courseName.replace(/\s+/g, '-').toLowerCase();
  // Navigate to the edit page with course name in URL and id in state
  navigate(`/application-summary/${formattedCourseName}`, { state: { id } });
};
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="">
        <div className="flex w-full justify-center ">
          <div className="max-w-[2000px] relative mx-auto lg:px-14 px-3 w-full">
            <div className="flex justify-center">
              <div className=" min-h-screen p-6 pt-[130px]">
                <h4 className="text-center text-primary text-[40px] font-bold pb-10">
                  Program Overview
                </h4>
                <div className="max-w-[1000px] relative mx-auto bg-white p-6 rounded-t-[31px] ">
                  {/* <div className="flex gap-2">
                    <img src="/images/psycho/badge.svg" alt="/" />
                    <h2 className="text-[36px] leading-[40px] max-w-[400px] font-semibold text-[#262626]">
                      Prepare a list of{" "}
                      <span className="text-primary">programs</span> that fits
                      you
                    </h2>
                  </div>
                  <div className="absolute top-0 right-0">
                    <img src="/images/psycho/flair.svg" alt="/" />
                  </div> */}

                  <div className="mb-6">
                    {/* Back Button */}
                    <button
                      onClick={handleBackClick}
                      className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
                    >
                      <FaArrowLeft className="mr-2" /> Back
                    </button>

                    {/* Card Container */}
                    <div className=" ">
                      {/* University Info */}
                      <div className="flex  gap-3">
                        <img
                          src={program?.school_logo} // Replace with actual logo
                          alt="University Logo"
                          className="w-12 h-12 object-contain"
                        />
                        <div>
                          <h2 className="text-[20px] font-bold text-primary">
                         {program?.university}
                          </h2>
                          <div className="flex gap-2 mt-2">
                            <img
                              src="/images/psycho/location.svg" // Replace with actual logo
                              alt="University Logo"
                              className=""
                            />
                            <p className="text-gray-500 text-sm">
                            {program?.city}, {program?.country} 

                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Degree Title */}
                      <h1 className="text-2xl font-bold mt-4 mb-7">
                        Bachelors of ScienceProgram type -{" "}
                        <span className="text-green-500">
                        {program?.course}
                        </span>
                      </h1>

                      {/* University Image */}
                      <div className="relative">
                        <img
                          src={program?.overview} // Replace with actual image
                          alt="University Building"
                          className="w-full  rounded-lg object-cover mt-4"
                        />

                        {/* Application Section */}
                        <div className="flex gap-2 lg:gap-6 absolute bg-white rounded-t -bottom-8  lg:bottom-3 right-0 lg:right-5 items-center  ">
                          <div className="flex items-center text-gray-600 text-sm">
                            <img
                              src="/images/explorePrograms/badgeblue.svg" // Replace with actual image
                              alt="badge"
                              className=""
                            />
                            <h4 className="text-[#292A2E] text-[12px]">
                              {" "}
                              <span className="font-semibold text-[14px]">
                                300+
                              </span>{" "}
                              Applied
                            </h4>
                          </div>
                          <div className="flex gap-3">
                            <img
                              src="/images/explorePrograms/wishlistOpen.svg" // Replace with actual image
                              alt="badge"
                              className=""
                            />
                          <button
                      onClick={() => handleApply(program.id, program.course)} 
                              // to="/application-summary"
                              className="bg-green-500 text-white lg:px-8 px-4 py-2 rounded-full hover:bg-green-600"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Decorative Ribbon */}
                      <div className="absolute lg:block hidden top-0 right-0">
                        <img
                          src="/images/psycho/flair.svg" // Replace with actual gradient ribbon image
                          alt="Decoration"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[1000px] relative bg-[#D7F5DC]/[20%] p-6 rounded-b-[31px]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
                    {/* Program Summary */}
                    <div className="md:col-span-2 bg-white relative p-6 rounded-lg shadow-md h-full flex flex-col">
                      <h2 className="text-primary text-[24px] font-semibold">
                        Program Summary
                      </h2>
                      <div className="border p-3 w-full mt-2 rounded-[10px] bg-white flex-1">
                        <p className="text-gray-700 text-sm leading-relaxed">
                       {program?.program_summary}
                        </p>
                      </div>
                    </div>

                    {/* Program Details */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div
                         
                          className="flex items-center gap-3  py-3"
                        >
                          {/* <span className="text-lg">{item.icon}</span> */}
                          <img src="/images/explorePrograms/yeardegree.svg" alt="/" />
                          <div>
                            <h4 className="text-[#000000] font-semibold text-[14px]">
                            {program?.program_years}
                            </h4>
                            <p className="text-[#979797] text-[12px]">
                            Program years
                            </p>
                          </div>
                        </div>

                        <div
                         className="flex items-center gap-3  py-3"
                       >
                         {/* <span className="text-lg">{item.icon}</span> */}
                         <img src="/images/explorePrograms/amountyear.svg" alt="/" />
                         <div>
                           <h4 className="text-[#000000] font-semibold text-[14px]">
                           {program?.tuition_fee}
                           </h4>
                           <p className="text-[#979797] text-[12px]">
                           Tuition fee
                           </p>
                         </div>
                       </div>

                       <div
                         className="flex items-center gap-3  py-3"
                       >
                         {/* <span className="text-lg">{item.icon}</span> */}
                         <img src= "/images/explorePrograms/language.svg" alt="/" />
                         <div>
                           <h4 className="text-[#000000] font-semibold text-[14px]">
                           {program?.language_type}
                           </h4>
                           <p className="text-[#979797] text-[12px]">
                           Language type
                           </p>
                         </div>
                       </div>

                       <div
                         className="flex items-center gap-3  py-3"
                       >
                         {/* <span className="text-lg">{item.icon}</span> */}
                         <img src="/images/explorePrograms/teachingtime.svg" alt="/" />
                         <div>
                           <h4 className="text-[#000000] font-semibold text-[14px]">
                           {program?.study_type}
                           </h4>
                           <p className="text-[#979797] text-[12px]">
                           Study type
                           </p>
                         </div>
                       </div>

                       <div
                         className="flex items-center gap-3  py-3"
                       >
                         {/* <span className="text-lg">{item.icon}</span> */}
                         <img src="/images/explorePrograms/percent.svg" alt="/" />
                         <div>
                           <h4 className="text-[#000000] font-semibold text-[14px]">
                           {program?.scholarship_information}
                           </h4>
                           <p className="text-[#979797] text-[12px]">
                           Scholarship
                           </p>
                         </div>
                       </div>
                    
                    </div>

                    <div className="md:col-span-2">
                      {/* Academic Requirement */}
                      <h2 className="text-primary text-[24px] font-semibold pb-2">
                        Academic Requirement
                      </h2>

                      <div className=" mb-5 ">
                        <div className="grid lg:grid-cols-12 gap-6 ">
                          <div className="flex-1 md:col-span-8 bg-white p-3 rounded-lg shadow">
                            <p className="text-gray-500 text-[14px]">
                              Minimum Level of Education Completed
                            </p>
                            <h3 className="text-[#292A2E] text-[24px] font-semibold">
{program?.minimum_education}
                            </h3>
                          </div>
                          <div className="flex-1 md:col-span-4 bg-white p-3 rounded-lg shadow">
                            <p className="text-gray-500 text-[14px]">
                              Minimum GPA
                            </p>
                            <h3 className="text-[#292A2E] text-[24px] font-semibold">
                            {program?.minimum_gpa}

                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Minimum Language Test Score */}
                      <div className=" ">
                        <h2 className="text-primary text-[24px] font-semibold pb-2">
                          Minimum Language Test Score
                        </h2>
                        <div className="grid grid-cols-4 gap-4 ">
                          {/* {[
                            { test: "IELTS", score: "6.5" },
                            { test: "TOEFL", score: "86.0" },
                            { test: "PTE", score: "63.0" },
                            { test: "DUOLINGO", score: "110.0" },
                          ].map((item, index) => ( */}
                            <div
                              className="bg-white shadow p-3 rounded-lg text-center"
                            >
                              <p className="text-gray-500 text-[14px]">
                              IELTS
                              </p>
                              <h3 className="text-[#292A2E] text-[24px] font-semibold">
                              {program?.ielts}

                              </h3>
                            </div>

                            <div
                              className="bg-white shadow p-3 rounded-lg text-center"
                            >
                              <p className="text-gray-500 text-[14px]">
                              TOEFL
                              </p>
                              <h3 className="text-[#292A2E] text-[24px] font-semibold">
                              {program?.toefl}

                              </h3>
                            </div>

                            <div
                              className="bg-white shadow p-3 rounded-lg text-center"
                            >
                              <p className="text-gray-500 text-[14px]">
                            PTE
                              </p>
                              <h3 className="text-[#292A2E] text-[24px] font-semibold">
                              {program?.pte}

                              </h3>
                            </div>
      <div
                              className="bg-white shadow p-3 rounded-lg text-center"
                            >
                              <p className="text-gray-500 text-[14px]">
                              DUOLINGO
                              </p>
                              <h3 className="text-[#292A2E] text-[24px] font-semibold">
                              {program?.duolingo}

                              </h3>
                            </div>
                      
                          {/* ))} */}
                        </div>
                      </div>
                    </div>

                    {/* Program Intake */}
                    <div className=" ">
                      <h2 className="text-primary text-[24px] font-semibold pb-2">
                        Program Intake
                      </h2>

                      {/* <h2 className="text-green-600 text-xl font-semibold">Program intake</h2> */}
                 {/* Program Dates and Fee Card */}
<div className="p-3 bg-white rounded-lg flex flex-col justify-between h-[250px] shadow">
  {/* Registration Start Date */}
  <div className="flex justify-between gap-3">
    <p className="text-[#979797] text-[12px]">
      Registration start:
    </p>
    <p className="font-semibold text-gray-700">
      {program?.registration_start ? new Date(program.registration_start).toLocaleDateString('en-GB', {
        day: 'numeric', 
        month: 'short', 
        year: 'numeric'
      }) : 'N/A'}
    </p>
  </div>

  {/* Registration End Date */}
  <div className="flex justify-between gap-3">
    <p className="text-[#979797] text-[12px]">
      Registration ends:
    </p>
    <p className="font-semibold text-gray-700">
      {program?.registartion_ends ? new Date(program.registartion_ends).toLocaleDateString('en-GB', {
        day: 'numeric', 
        month: 'short', 
        year: 'numeric'
      }) : 'N/A'}
    </p>
  </div>

  {/* School Resumption Date */}
  <div className="flex justify-between gap-3">
    <p className="text-[#979797] text-[12px]">
      School resumption:
    </p>
    <p className="font-semibold text-gray-700">
      {program?.school_resumption ? new Date(program.school_resumption).toLocaleDateString('en-GB', {
        day: 'numeric', 
        month: 'short', 
        year: 'numeric'
      }) : 'N/A'}
    </p>
  </div>

  {/* Processing Fee */}
  <div className="border border-primary flex justify-between items-center p-3 font-semibold rounded-lg">
    <h4 className="text-primary text-[12px]">
      Processing fee
    </h4>
    <h4 className="text-primary text-[20px]">
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
