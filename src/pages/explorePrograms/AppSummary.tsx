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

const AppSummary = () => {
  const [open, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);
      const navigate = useNavigate();
  
        const userLoginData = useSelector((state:any) => state.data.login.value);
      console.log(userLoginData)
        const username = userLoginData?.username?.split("@")[0] || "";
      
      console.log(username)
           const location = useLocation();
            // Extract course name from URL params and id from location state
            // const { courseName } = useParams();
            // Access the id passed via stat
            const id = location.state?.id;
            
                const [program, setProgram] = useState<any>([]);
                    // const [isLoading, setIsLoading] = useState(false);
                
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
  return (
    <div className="bg-gray-50">
    <Navbar />
    <div className="">
      <div className="flex w-full justify-center ">
        <div className="max-w-[2000px] relative mx-auto lg:px-14 px-3 w-full">
          <div className="flex justify-center">
            <div className=" min-h-screen p-6 pt-[130px]">
              <h4 className="text-center text-primary text-[40px] font-bold pb-10">Program Overview</h4>
           {/* Application Details Card */}
      <div className="max-w-4xl mx-auto relative bg-white rounded-t-[31px] px-10 py-6">
        <button
          type="button"
          onClick={handleBackClick}
          className="flex items-center text-gray-600 mb-4"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back</span>
        </button>

        <h2 className="text-[24px] font-bold text-[#292A2E] pt-3">
          Hello! - <span className="text-primary">{username}</span>
        </h2>

        <p className="text-[14px] text-[#494949] max-w-[674px] mt-3 leading-relaxed">
        Welcome to our application, you are just a step away from exploring your dream program! We are excited to offer a diverse range of study opportunities designed to help you gain the knowledge, skills, and experience needed to excel in your chosen field. Whether you are looking to advance your career, specialize in a particular area, or engage in groundbreaking research, our programs provide the perfect platform for your academic and professional growth.
        Kindly review the program details below before proceeding with your application.
        </p>

        <img
          src="/images/psycho/flair.svg"
          className="absolute top-0 right-0"
          alt="location"
        />
      </div>

      {/* Program Intake & Details */}
      <div className="max-w-4xl mx-auto  bg-[#D7F5DC]/[20%] px-10 py-6 rounded-b-[31px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Program Intake */}
  <div className="flex flex-col">
    {/* Title and Location (Outside .bg-white) */}
    <h3 className="text-[20px] font-semibold text-green-500">
   {program?.university}
    </h3>
    <div className="flex items-center gap-2 mt-2">
      <img src="/images/psycho/location.svg" alt="location" />
      <p className="text-[12px] text-[#494949]">
      {program?.city}, {program?.country} 

      </p>
    </div>

    {/* Content inside bg-white */}
    <div className="bg-white flex flex-col p-4 rounded-lg shadow-md mt-3 h-full">
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between">
          <h5 className="text-gray-500">Registration start:</h5>
          <h5 className="font-semibold text-gray-700">    {program?.registration_start ? new Date(program.registration_start).toLocaleDateString('en-GB', {
        day: 'numeric', 
        month: 'short', 
        year: 'numeric'
      }) : 'N/A'}</h5>
        </div>
        <div className="flex justify-between">
          <h5 className="text-gray-500">Registration ends:</h5>
          <h5 className="font-semibold text-gray-700">   {program?.registartion_ends ? new Date(program.registartion_ends).toLocaleDateString('en-GB', {
        day: 'numeric', 
        month: 'short', 
        year: 'numeric'
      }) : 'N/A'}</h5>
        </div>
        <div className="flex justify-between">
          <h5 className="text-gray-500">School resumption:</h5>
          <h5 className="font-semibold text-gray-700">   {program?.school_resumption ? new Date(program.school_resumption).toLocaleDateString('en-GB', {
        day: 'numeric', 
        month: 'short', 
        year: 'numeric'
      }) : 'N/A'}</h5>
        </div>
        <div className="p-3 border border-primary text-primary font-semibold text-center rounded-lg mt-3">
        Processing fee: <span className="text-lg">      {program?.processing_fee}
        </span>
      </div>
      </div>
    
    </div>
  </div>

  {/* Program Details */}
  <div className="flex flex-col">
    {/* Title and Location (Outside .bg-white) */}
    <h3 className="text-[20px] font-semibold text-green-500">
      Microbiology and Biochemistry
    </h3>
    <div className="flex items-center gap-2 mt-2">
      <img src="/images/explorePrograms/courseSummary.svg" alt="location" />
      <p className="text-[12px] text-[#494949]">Bachelor of Science</p>
    </div>

    {/* Content inside bg-white */}
    <div className="bg-white p-4 rounded-lg shadow-md mt-3 flex-grow">
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
  </div>
</div>


      </div>

      <div className='flex justify-center'>
   <button onClick={() => setOpen(true)} className="bg-green-500 text-white px-12 py-2 rounded-full hover:bg-green-600">
          Proceed
          </button>
      </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
          <div className="md:max-w-md  body-font font-poppins">
            <h2 className="text-center text-[#1DB459] font-bold md:text-[26px] text-[22px]">
             Application Processing
            </h2>

            <p className="text-center text-[#838383] md:text-[14px] text-[12px]">
              By seeking assistance, you acknowledge and agree to the payment of
              a one-time <span className="font-bold">non-refundable application processing fee</span>
              {" "} of
            </p>
            <h2 className="text-center text-[#1DB459] font-bold md:text-[26px] text-[22px] pb-4">
              {" "}
              $200
            </h2>
            <p className=" text-[#838383] md:text-[14px] text-[12px]">
              <span className="text-[#F04946]">DISCLAIMER:</span> Please be aware that any information provided will be used to verify your identity for future referencing and also for your Visa and Residence Permit processing.
            </p>
            <p className="text-[#838383] md:text-[14px] text-[12px] pt-2">
            Also note that AFRIPROEDU does not have the authority to grant admissions to students or influence any school's decision to accept them.Our role is to enhance your chances by carefully reviewing your documents to ensure they meet the eligibility criteria set by the school.
            </p>

            <div className="flex justify-center mt-10 mb-4">
              <button
                onClick={onCloseModal}
                className="bg-[#1DB459] text-white  md:w-[300px] w-full flex justify-center px-5 rounded-full py-3"
              >
                Yes Please
              </button>{" "}
            </div>
            <div className="flex justify-center mt-10 mb-4">
              <Link
                to={"/study-in-lithuania/study-program"}
                className="bg-[#EEEEEE]   md:w-[300px] w-full flex justify-center px-5 rounded-full py-3"
              >
                No, Thank you
              </Link>{" "}
            </div>
          </div>
        </Modal>

    </div>
  </div>
  )
}

export default AppSummary