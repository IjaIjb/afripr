import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import Navbar from '../../component/Navbar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminApis } from '../../apis/adminApi/adminApi';
import { useSelector } from 'react-redux';
import { UserApis } from '../../apis/userApi/userApi';

const AppSummary = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<any>([]);
  const onCloseModal = () => setOpen(false);
  const navigate = useNavigate();

  const userLoginData = useSelector((state:any) => state.data.login.value);
  
  React.useEffect(() => {
    if (userLoginData?.data?.id) {
      UserApis.getUserById(userLoginData.data.id)
        .then((response) => {
          if (response?.data) {
            setUserData(response?.data)
          }
        })
        .catch(function (error) {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userLoginData]);

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

                {/* Application Details Card */}
                <div className="relative bg-white rounded-t-[20px] sm:rounded-t-[31px] px-4 sm:px-6 lg:px-10 py-4 sm:py-6">
                  
                  {/* Back Button */}
                  <button
                    type="button"
                    onClick={handleBackClick}
                    className="flex items-center text-gray-600 mb-4 text-sm sm:text-base hover:text-gray-900 transition-colors"
                  >
                    <FaArrowLeft className="mr-2 text-xs sm:text-sm" />
                    <span>Back</span>
                  </button>

                  {/* Welcome Message */}
                  <h2 className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#292A2E] pt-3">
                    Hello! - <span className="text-primary break-words">{userData?.first_name}</span>
                  </h2>

                  <p className="text-xs sm:text-sm lg:text-[14px] text-[#494949] mt-3 leading-relaxed">
                    Welcome to our application, you are just a step away from exploring your dream program! We are excited to offer a diverse range of study opportunities designed to help you gain the knowledge, skills, and experience needed to excel in your chosen field. Whether you are looking to advance your career, specialize in a particular area, or engage in groundbreaking research, our programs provide the perfect platform for your academic and professional growth.
                    <br className="hidden sm:block" />
                    <span className="block mt-2 sm:inline sm:mt-0"> Kindly review the program details below before proceeding with your application.</span>
                  </p>

                  {/* Decorative Image - Hidden on small screens */}
                  <img
                    src="/images/psycho/flair.svg"
                    className="absolute top-0 right-0 hidden lg:block"
                    alt="decoration"
                  />
                </div>

                {/* Program Intake & Details */}
                <div className="bg-[#D7F5DC]/[20%] px-4 sm:px-6 lg:px-10 py-4 sm:py-6 rounded-b-[20px] sm:rounded-b-[31px]">
                  
                  {/* Course Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-green-500 mb-4 break-words">
                    {program?.course}
                  </h3>

                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                    
                    {/* Program Intake Section */}
                    <div className="flex flex-col">
                      <div className="bg-white flex flex-col p-4 sm:p-5 rounded-lg shadow-md h-full">
                        <div className="flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                          
                          {/* Registration Dates */}
                          <div className="flex justify-between items-start gap-2">
                            <h5 className="text-gray-500 text-xs sm:text-sm flex-shrink-0">Registration start:</h5>
                            <h5 className="font-semibold text-gray-700 text-xs sm:text-sm text-right">
                              {program?.registration_start ? new Date(program.registration_start).toLocaleDateString('en-GB', {
                                day: 'numeric', 
                                month: 'short', 
                                year: 'numeric'
                              }) : 'N/A'}
                            </h5>
                          </div>

                          <div className="flex justify-between items-start gap-2">
                            <h5 className="text-gray-500 text-xs sm:text-sm flex-shrink-0">Registration ends:</h5>
                            <h5 className="font-semibold text-gray-700 text-xs sm:text-sm text-right">
                              {program?.registartion_ends ? new Date(program.registartion_ends).toLocaleDateString('en-GB', {
                                day: 'numeric', 
                                month: 'short', 
                                year: 'numeric'
                              }) : 'N/A'}
                            </h5>
                          </div>

                          <div className="flex justify-between items-start gap-2">
                            <h5 className="text-gray-500 text-xs sm:text-sm flex-shrink-0">School resumption:</h5>
                            <h5 className="font-semibold text-gray-700 text-xs sm:text-sm text-right">
                              {program?.school_resumption ? new Date(program.school_resumption).toLocaleDateString('en-GB', {
                                day: 'numeric', 
                                month: 'short', 
                                year: 'numeric'
                              }) : 'N/A'}
                            </h5>
                          </div>

                          {/* Processing Fee */}
                          <div className="p-3 sm:p-4 border border-primary text-primary font-semibold text-center rounded-lg mt-auto">
                            <span className="text-xs sm:text-sm">Processing fee: </span>
                            <span className="text-sm sm:text-lg block sm:inline">
                              {program?.processing_fee}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Program Details Section */}
                    <div className="flex flex-col">
                      <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md flex-grow">
                        <div className="space-y-3 sm:space-y-4">
                          
                          {/* Program Years */}
                          <div className="flex items-center gap-3 py-2">
                            <img 
                              src="/images/explorePrograms/yeardegree.svg" 
                              alt="Years" 
                              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
                            />
                            <div className="min-w-0 flex-1">
                              <h4 className="text-[#000000] font-semibold text-sm break-words">
                                {program?.program_years}
                              </h4>
                              <p className="text-[#979797] text-xs">
                                Program years
                              </p>
                            </div>
                          </div>

                          {/* Tuition Fee */}
                          <div className="flex items-center gap-3 py-2">
                            <img 
                              src="/images/explorePrograms/amountyear.svg" 
                              alt="Fee" 
                              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
                            />
                            <div className="min-w-0 flex-1">
                              <h4 className="text-[#000000] font-semibold text-sm break-words">
                                {program?.tuition_fee}
                              </h4>
                              <p className="text-[#979797] text-xs">
                                Tuition fee
                              </p>
                            </div>
                          </div>

                          {/* Language Type */}
                          <div className="flex items-center gap-3 py-2">
                            <img 
                              src="/images/explorePrograms/language.svg" 
                              alt="Language" 
                              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
                            />
                            <div className="min-w-0 flex-1">
                              <h4 className="text-[#000000] font-semibold text-sm break-words">
                                {program?.language_type}
                              </h4>
                              <p className="text-[#979797] text-xs">
                                Language type
                              </p>
                            </div>
                          </div>

                          {/* Study Type */}
                          <div className="flex items-center gap-3 py-2">
                            <img 
                              src="/images/explorePrograms/teachingtime.svg" 
                              alt="Study Type" 
                              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
                            />
                            <div className="min-w-0 flex-1">
                              <h4 className="text-[#000000] font-semibold text-sm break-words">
                                {program?.study_type}
                              </h4>
                              <p className="text-[#979797] text-xs">
                                Study type
                              </p>
                            </div>
                          </div>

                          {/* Scholarship */}
                          <div className="flex items-center gap-3 py-2">
                            <img 
                              src="/images/explorePrograms/percent.svg" 
                              alt="Scholarship" 
                              className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" 
                            />
                            <div className="min-w-0 flex-1">
                              <h4 className="text-[#000000] font-semibold text-sm break-words">
                                {program?.scholarship_information}
                              </h4>
                              <p className="text-[#979797] text-xs">
                                Scholarship
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Proceed Button */}
                  <div className='flex justify-center px-4'>
                    {program?.program_type === "eca7deed-a594-4cab-9a74-768ad14717b9" && (
                      <Link 
                        to={`/degree-application-form/${encodeURIComponent(program?.course)}`} 
                        className="bg-green-500 text-white px-8 sm:px-12 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:bg-green-600 transition-colors w-full sm:w-auto text-center"
                      >
                        Proceed
                      </Link> 
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal - Already responsive */}
        <Modal open={open} onClose={onCloseModal} center>
          <div className="max-w-md w-full mx-auto body-font font-poppins p-4">
            <h2 className="text-center text-[#1DB459] font-bold text-xl sm:text-2xl lg:text-[26px]">
              Application Processing
            </h2>

            <p className="text-center text-[#838383] text-xs sm:text-sm lg:text-[14px] mt-4">
              By seeking assistance, you acknowledge and agree to the payment of
              a one-time <span className="font-bold">non-refundable application processing fee</span>
              {" "} of
            </p>
            
            <h2 className="text-center text-[#1DB459] font-bold text-xl sm:text-2xl lg:text-[26px] pb-4">
              $200
            </h2>
            
            <p className="text-[#838383] text-xs sm:text-sm lg:text-[14px] leading-relaxed">
              <span className="text-[#F04946]">DISCLAIMER:</span> Please be aware that any information provided will be used to verify your identity for future referencing and also for your Visa and Residence Permit processing.
            </p>
            
            <p className="text-[#838383] text-xs sm:text-sm lg:text-[14px] pt-2 leading-relaxed">
              Also note that AFRIPROEDU does not have the authority to grant admissions to students or influence any school's decision to accept them. Our role is to enhance your chances by carefully reviewing your documents to ensure they meet the eligibility criteria set by the school.
            </p>

            <div className="flex flex-col gap-3 mt-6 sm:mt-10 mb-4">
              <button
                onClick={onCloseModal}
                className="bg-[#1DB459] text-white w-full flex justify-center px-5 rounded-full py-3 text-sm sm:text-base hover:bg-green-600 transition-colors"
              >
                Yes Please
              </button>
              
              <Link
                to={"/study-in-lithuania/study-program"}
                className="bg-[#EEEEEE] text-gray-700 w-full flex justify-center px-5 rounded-full py-3 text-sm sm:text-base hover:bg-gray-300 transition-colors"
              >
                No, Thank you
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default AppSummary