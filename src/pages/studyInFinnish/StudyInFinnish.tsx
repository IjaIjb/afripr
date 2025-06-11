import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
// @ts-ignore
import Carousel from 'react-grid-carousel'
import girlbg from "../../assets/finnish/girl.svg";
import salarybg from "../../assets/finnish/salary-bg.svg";
import { useSelector } from "react-redux";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";



function StudyInFinnish() {
  const [isLogin, setIsLogin] = useState(false);

  const userLoginData = useSelector((state:any) => state.data.login.value);
//   const userLoginData = useSelector((state) => state.data.login.value);
console.log(userLoginData)
  React.useEffect(() => {
    if (!userLoginData.token) {
      setIsLogin(false)
    }

    // console?.log(userLoginData)

    if (userLoginData.token) {
      setIsLogin(true)
    }

  }, []);

  const CustomLeftArrow = () => <div className="custom-arrow left">{"<"}</div>;
  const CustomRightArrow = () => <div className="custom-arrow right">{">"}</div>;
  
  return (
    <>
      <Navbar />
      {/* <!-- Start block --> */}
      <section className="bg-gradient-to-b from-[#D5FEDB] to-[#FBFBFB] pt-16" >
        <div className="lg:px-14 Px-3 justify-center md:grid md:grid-cols-2 max-w-[2000px] mx-auto items-center gap-4 md:py-10 p-6">
        <div className="block md:hidden mt-6  w-full">
            <div className=" bg-white border-1 border-[#C4C4C4] p-3  rounded-xl shadow ">
              <img src="/images/finnish/Student V3.jpg" alt="voc-school" className="" />
             
            </div>
          </div>
          <div className="pt-10">
            <h3 className="md:text-[52px] text-[30px] font-[700] md:leading-[60px] leading-10">Finnish Language Program </h3>
         <p className="my-5 font-normal max-w-[480px] text-gray-500 md:text-[20px]  text-[16px] ">
                Learning the Finnish language gives you access to FREE education in Finland for a LIFETIME.

                </p>
                {isLogin ? 
                <NavLink
                to="/contact-us">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#01963C] to-[#158FD3] py-[16px] px-[40px]  text-sm font-medium text-white rounded-[40px] "
              >
                Get Started
              </button>
              </NavLink> : 
                <NavLink to={"/contact-us"} className="">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#01963C] to-[#158FD3] py-[16px] px-[40px]  text-sm font-medium text-white rounded-[40px] "
                >
                  Get Started
                </button>
              </NavLink>}

             
          </div>
          <div className="md:block hidden my-6 w-full">
            <div className=" bg-white border-1 border-[#C4C4C4] p-3  rounded-xl shadow ">
              <img src="/images/finnish/Student V3.jpg" alt="voc-school" className="" />
             
            </div>
          </div>

        </div>
      </section>
      {/* <!-- End block --> */}
      <div className="flex justify-center mb-10">
      <iframe className="w-[70vw] md:hidden block h-full aspect-video " src="https://www.youtube.com/embed/UXOA5W_ndYo?si=9rxKdG_nb7MxbYC5"></iframe>
      <iframe className="w-[60vw] hidden md:block h-full aspect-video " src="https://www.youtube.com/embed/UXOA5W_ndYo?si=9rxKdG_nb7MxbYC5"></iframe>
      </div>
      {/* <!-- Start block --> */}
      <section className="bg-[#F7F6FB] md:pt-[40px] pt-[20px] body-font font-poppins md:mt-0">
        <div className="Flex-col justify-center items-center">
          <h1 className="text-center lg:text-[32px] text-[22px] font-bold">This is our language package </h1>
          {/* <h1 className="text-center text-[#14B266] lg:text-[32px] text-[22px] font-bold">Finnish Language</h1> */}
        </div>
        <div className="grid  justify-center max-w-[2000px] px-3 lg:px-14 pt-16 pb-8 mx-auto gap-5">
 <div className="flex justify-center">
  <div className="flex flex-col">
    <div className="bg-[#14B266] text-white text-center rounded-t-[10px] py-[10px]">
      <h3 className="lg:text-[16px] text-[14px] font-bold">EASYGOEDU</h3>
      <p className="lg:text-[14px] text-[12px]">9 months online language program</p>
    </div>
    <div className="bg-white flex-grow pt-[29px] lg:pl-[38px] pl-[20px] pr-[18px] pb-[20px] rounded-b-[15px] flex flex-col">
      <h3 className="lg:text-[15px] text-[13px] font-bold">Amount: 5,500€ (5 Installment of 1,100€ per month)</h3>
      <h3 className="lg:text-[15px] text-[13px] font-bold mt-5">Processing fee: 200€ ( ONE TIME PAYMENT)</h3>
      <ul className="space-y-5 text-[#000000] list-disc list-outside mt-5 lg:text-[14px] text-[12px] pl-4 flex-grow">
        <li>Learn the Finnish language online for 9  months.</li>
        <li className="mt-5">Get support to apply to various vocational schools in Finland at their available study periods.</li>
        <li className="mt-5">This program helps you gain a language certificate that enables you to study for free in vocational schools in Finland.</li>
      </ul>
      <div className="mt-auto flex justify-end ">
        <NavLink to='/easygoedu-with-afriproedu'>
          <button className="bg-[#1DB459] text-white rounded-[10px] text-[14px] py-[14px] px-[50px]">Learn More</button>
        </NavLink>
      </div>
    </div>
  </div>
  </div>
  {/* <div className="flex flex-col">
    <div className="bg-[#14B266] text-white text-center rounded-t-[10px] py-[10px]">
      <h3 className="lg:text-[16px] text-[14px] font-bold">CAREEREDU</h3>
      <p className="lg:text-[14px] text-[12px]">9 months online language program</p>
    </div>
    <div className="bg-white flex-grow pt-[29px] lg:pl-[38px] pl-[20px] pr-[18px] pb-[20px] rounded-b-[15px] flex flex-col">
      <h3 className="lg:text-[15px] text-[13px] font-bold">Amount: 9000€ (5 Installment of 1,800€ per month) </h3>
      <h3 className="lg:text-[15px] text-[13px] font-bold mt-5">Processing fee: 200€ ( ONE TIME PAYMENT) </h3>
     <ul className="space-y-3 text-[#000000] list-disc list-outside mt-5 lg:text-[14px] text-[12px] pl-4 flex-grow">
     <li><b>Vocational Pathway</b>: Learn the Finnish language online for 9 months while obtaining a Certificate in Further Vocational Qualification Education (FVQE). This pathway allows you to apply for studies at vocational schools, Universities of Applied Sciences, or universities in Finland and anywhere in Europe.</li>
     <li><b>Online Classes</b>: 100% online, taught in English, and conducted twice a week.</li>
     <li><b>Program Duration</b>: Program Duration.</li>
     <li><b>Study Options</b>: You can study for free in Finnish or study in English with paid tuition, but benefit from reduced study duration (6-12 months instead of the standard length).</li>
       
       </ul>
      <div className="mt-auto flex justify-end ">
        <NavLink to='/career-edu-with-afriproedu'>
          <button className="bg-[#1DB459] text-white rounded-[10px] text-[14px] py-[14px] px-[50px]">Learn More</button>
        </NavLink>
      </div>
    </div>
  </div> */}


  {/* <div className="flex flex-col">
    <div className="bg-[#14B266] text-white text-center rounded-t-[10px] py-[10px]">

     <div className="flex justify-center items-center text-center gap-1"> <h3 className="lg:text-[16px] text-[14px] font-bold">EDUDIRECT</h3></div>
      <p className="lg:text-[14px] text-[12px]">9 months online language program</p>
    </div>
    <div className="bg-white flex-grow pt-[29px] lg:pl-[38px] pl-[20px] pr-[18px] pb-[20px] rounded-b-[15px] flex flex-col">
  
      <h3 className="lg:text-[15px] text-[13px] font-bold">Service charge: 10,500€ (4 Installment of 2,625€ per month)</h3>
      <h3 className="lg:text-[15px] text-[13px] font-bold mt-3">Processing fee: 100€  ( ONE TIME PAYMENT)</h3>
     
    <ul className="space-y-2 text-[#000000] list-disc list-outside mt-5 lg:text-[14px] text-[12px] pl-4 flex-grow">
        <li><b>Direct Admission</b>: Study at one of our two partner Universities of Applied Sciences with no prior knowledge or qualifications required—no IELTS, exams, tests, or transcripts needed.        </li>
        <li><b>Online Classes</b>: 100% online, taught in English, and conducted twice a week </li>
        <li><b>Program Duration</b>: 9 months (October 2024 - May 2025), leading to direct admission in June 2025 for studies in Finland starting in August 2025.        </li>
        <li><b>Tuition Discount</b>: 30% off your first-year tuition fees, with a possible reduction of €1,500-€2,000</li>
        <li><b>Program Cost</b>: €10,500, payable in 4 installments. Register before October 1st for a €500 discount on the first installment.        </li>
        <li><b>Available Programs</b>: Business, Nursing, Physiotherapy, Hospitality Management, IT/Tech.        </li>
        <li><b> Family Inclusion</b>: Option to relocate with your family.</li>
     </ul>
      <div className="mt-auto flex justify-end ">
        <NavLink to='/edudirect-with-afriproedu'>
          <button className="bg-[#1DB459] text-white rounded-[10px] text-[14px] py-[14px] px-[50px]">Learn More</button>
        </NavLink>
      </div>
    </div>
  </div> */}

 
</div>

        {/* <div className="max-w-[2000px] px-8 lg:pl-14 lg:pr-28  pb-8 mx-auto">
          <p className="text-center lg:text-[15px] text-[13px]">BOTH pathways enable you to live and study in Finland for FREE from high school or vocational to a degree in the university, masters and PHD. for FREE. </p>
          <p className="text-center lg:text-[15px] text-[13px] mt-4">With <span className="text-[#14B266] font-bold">ASAPEDUGO</span>, you cannot work until 4 months program is completed and get accepted to study full time in Finland, but with <span className="text-[#14B266] font-bold">EASYGOEDU</span>, you can work immediately when you arrive in Finland.</p>
        </div> */}
      </section>
      {/* <!-- End block --> */}

   {/* <!-- Start block --> */}
   <section className="bg-[#F7F7FF] body-font font-poppins md:pt-10 pt-6  pb-10">
        <div className="mx-auto text-center mt-6">
          <h1 className="hidden md:block text-[#000000] text-3xl  px-6 font-bold">
            Vocational Programs Offered
          </h1>
          <h1 className="block md:hidden text-[#000000] text-2xl px-6 font-bold">
            Vocational Programs
            <br /> Offered
          </h1>
        </div>
        <div className=" md:block hidden px-6  pt-6">
          <Carousel cols={5} rows={1} hideArrow={false} gap={2} loop>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img1.svg" alt="friends" />
                  </div>

                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] flex justify-center rounded-md mt-3 w-[65%]">
                      <p  className="text-center text-white py-2">
                       <a target="_blank" href="https://www.franklin.edu/career-guide/computer-network-support-specialists/what-do-it-specialists-do#:~:text=IT%20Specialists%20analyze%2C%20test%2C%20troubleshoot,and%20other%20data%20communications%20networks.">
                        IT / Computer <br />
                        Specialist
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img2.svg" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                      <a target="_blank" href="https://www.indeed.com/career-advice/finding-a-job/what-is-a-practical-nurse#:~:text=A%20practical%20nurse%2C%20or%20licensed,to%20practice%20as%20an%20LPN." > 
                       Practical Nurse{" "}
                       </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img3.svg" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                       <a target="_blank" href="https://www.jobsandskills.wa.gov.au/jobs-and-careers/occupations/mechanical-fitter#:~:text=Mechanical%20fitters%20fit%20and%20assemble,and%20equipment%20to%20operational%20standards.">
                        Mechanical Fitter
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  {/* <div className=''> */}
                  <img src="/images/finnish/vocal-img4.svg" alt="friends" />
                  {/* </div> */}
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[90%]">
                      <p className="text-center text-white py-2">
                      {/* <a target="_blank" href="">  */}
                         Restaurant & <br />
                        Catering Services
                        {/* </a> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img5.svg" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                     <a target="_blank" href="https://www.investopedia.com/terms/f/facility-operations.asp">   Site Facilities <br />
                        Operative
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img6.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                       <a target="_blank" href="https://www.indeed.com/career-advice/finding-a-job/what-is-a-machinist#:~:text=Machinists%20are%20tradespeople%20or%20trained,or%20create%20new%20parts%20entirely."> Machinist
                       </a>
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img7.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                      {/* <a target="_blank" href="">  */}
                         Plate Welder
                      {/* </a> */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img8.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                      <a target="_blank" href="https://www.linkedin.com/pulse/what-makes-good-agricultural-entrepreneur-adama-j-adama"> 
                         Entrepreneurship in Agriculture
                      </a> 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img9.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                      <a target="_blank" href="https://www.indeed.com/hire/job-description/truck-driver#:~:text=Truck%20Driver%20Job%20Description%3A%20Top%20Duties%20and%20Qualifications&text=A%20Truck%20Driver%2C%20or%20Transporter,and%20delivery%20at%20their%20destination."> 
                         Truck driving
                      </a>
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img10.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                       <a target="_blank" href="https://en.wikipedia.org/wiki/Early_childhood_education">
                         Early Childhood Education
                         </a>
                         </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img11.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                       <a target="_blank" href="https://alinahomecare.com/be-amazing/role-of-a-care-assistant/#:~:text=A%20Care%20Assistant%20provides%20care,daily%20tasks%20and%20providing%20companionship.">
                         Care Assistance
                         </a>
                         </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="block md:hidden px-6  pt-6">
          <Carousel className="react-grid-carousel-arrow" cols={2} rows={1} gap={3}  hideArrow={false}
  arrowLeft={<CustomLeftArrow />}
  arrowRight={<CustomRightArrow />} loop>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img1.svg" alt="friends" />
                  </div>

                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] flex justify-center rounded-md mt-3 w-[65%]">
                      <p className="text-center text-white py-2">
                        IT / Computer <br />
                        Specialist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img2.svg" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                        Practical Nurse{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img3.svg" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                        Mechanical Fitter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  {/* <div className=''> */}
                  <img src="/images/finnish/vocal-img4.svg" alt="friends" />
                  {/* </div> */}
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[90%]">
                      <p className="text-center text-white py-2">
                        Restaurant & <br />
                        Catering Services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img5.svg" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                        Site Facilities <br />
                        Operative
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img6.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">Machinist</p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img7.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                        Plate Welder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img8.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                        Entrepreneurship in Agriculture
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img9.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                        Truck driving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img10.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                        Early Childhood Education
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="flex justify-center">
                <div className="">
                  <div className="">
                    <img src="/images/finnish/vocal-img11.png" alt="friends" />
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-[#1DB459] rounded-md mt-3 w-[70%]">
                      <p className="text-center text-white py-2">
                        Care Assistance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className=" body-font font-poppins">
        <div
          style={{
            backgroundImage: `url(${salarybg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="  lg:px-14 md:pt-20 pb-24   relative"
        >
          <div className="mx-auto max-w-[2000px] text-center mb-8  p-6">
            <h2 className=" md:text-3xl text-2xl tracking-tight font-extrabold text-white ">
              Salary of <span className="text-[#48B774]">Vocational </span>
            </h2>
            <h2 className=" md:text-3xl text-2xl tracking-tight font-extrabold text-[#48B774] ">
              Programs <span className="text-white">we offer</span>
            </h2>
          </div>

          <div className="hidden md:block">
            <div className="space-y-8 lg:grid lg:grid-cols-5 xl:gap-4  lg:space-y-0 lg:py-6 p-6">
              <div className="flex flex-col   max-w-[2000px]   rounded-lg border border-[#ffffff] shadow ">
                <div className="pl-4 py-5 px-4 text-[#ffffff]">
                  <div className="border border-[#ffffff] rounded-md p-1 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42.96"
                      height="48"
                      viewBox="0 0 48 48"
                    >
                      <mask id="ipSChefHat0">
                        <g
                          fill="none"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                        >
                          <path fill="#fff" d="M12 34h24v8H12z" />
                          <path d="M29 34V20m-7 14v-8m-10-1v9h24v-9s5-3 5-8s-4-7-9-7c0-2-3-6-8-6s-8 4-8 6c-4 0-9 2-9 7s5 8 5 8Z" />
                        </g>
                      </mask>
                      <path
                        fill="white"
                        d="M0 0h48v48H0z"
                        mask="url(#ipSChefHat0)"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Restaurant &</h3>
                  <h3 className="text-lg font-bold">Catering Services</h3>
                  <ul className="list-disc list-inside text-xs">
                    <li>Restaurant Industry</li>
                    <li>Customer Service</li>
                    <li>Catering Service</li>
                    <li>Gastronomy</li>
                  </ul>

                  <p className="text-xs mt-4">
                    A person working as a Waiter / Waitress in Finland typically
                    earns around 1,420 EUR per month. Salaries range from 740
                    EUR (lowest) to 2,170 EUR (highest). This is the average
                    monthly salary including housing, transport, and other
                    benefits.
                  </p>
                </div>
              </div>
              <div className="flex flex-col  max-w-[2000px] rounded-lg border border-[#ffffff] shadow mt-4 lg:mt-0">
                <div className="pl-4 py-5 px-4 text-[#ffffff]">
                  <div className="border border-[#ffffff] rounded-md p-1 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39.18"
                      height="41"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="white"
                        d="M10.156 4L10 4.813l-1 5.625V14h.094a7.032 7.032 0 0 0 3 4.813C8.527 20.343 6 23.883 6 28h2a7.988 7.988 0 0 1 3-6.25v.656l.281.313l4 4l.719.687l.719-.687l4-4l.281-.313v-.656A7.988 7.988 0 0 1 24 28h2c0-4.117-2.527-7.656-6.094-9.188a7.032 7.032 0 0 0 3-4.812H23v-3.563l-1-5.624L21.844 4zm1.688 2h8.312L21 10.781V12H11v-1.219zM15 7v1h-1v2h1v1h2v-1h1V8h-1V7zm-3.906 7h9.812A5.001 5.001 0 0 1 16 18a5.001 5.001 0 0 1-4.906-4zM16 20a8.05 8.05 0 0 1 3 .563v1l-3 3l-3-3v-1A8.05 8.05 0 0 1 16 20z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Practical Nurse</h3>
                  <h5 className="text-xs">Nursing</h5>

                  <p className="text-xs mt-4">
                    Salary range after graduation: an average 2200€ per month
                    and the possibility to earn more if you take extra shifts
                  </p>
                </div>
              </div>

              <div className="flex flex-col max-w-[2000px] rounded-lg border border-[#ffffff] shadow mt-4 lg:mt-0">
                <div className="pl-4 py-5 px-4 text-[#ffffff]">
                  <div className="border border-[#ffffff] rounded-md p-1 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.78"
                      height="38"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M21 16v-3c0-1.11-.89-2-2-2h-6V8h2V2H9v6h2v3H5c-1.11 0-2 .89-2 2v3H1v6h6v-6H5v-3h6v3H9v6h6v-6h-2v-3h6v3h-2v6h6v-6h-2M11 4h2v2h-2V4M5 20H3v-2h2v2m8 0h-2v-2h2v2m8 0h-2v-2h2v2Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Site Facilities</h3>
                  <h3 className="text-lg font-bold">Operative</h3>

                  <ul className="list-disc list-inside text-xs">
                    <li>Property Maintenance</li>
                    <li>Domestic Services</li>
                    <li>Facilities Services </li>
                  </ul>

                  <p className="text-xs mt-4">
                    A person working in Cleaning and Property Services in
                    Finland typically earns around 1,700 EUR per month. Salaries
                    range from 1,220 EUR (lowest average) to 2,580 EUR (highest
                    average, the actual maximum salary is higher). This is the
                    average monthly salary including housing, transport, and
                    other benefits. Salaries vary drastically between different
                    Cleaning and Property Services careers
                  </p>
                </div>
              </div>

              <div className="flex flex-col max-w-[2000px]  rounded-lg border border-[#ffffff] shadow mt-4 lg:mt-0">
                <div className="pl-4 py-5 px-4 text-[#ffffff]">
                  <div className="border border-[#ffffff] rounded-md p-1 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="39.38"
                      height="44"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M1.05 21v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9.05 14q1.925 0 3.525.45t2.875 1.1q.75.375 1.175 1.1t.425 1.55V21h-16Zm2-2h12v-.8q0-.275-.138-.5t-.362-.35q-.9-.45-2.313-.9T9.05 16q-1.775 0-3.188.45t-2.312.9q-.225.125-.362.35t-.138.5v.8Zm6-6q-1.65 0-2.825-1.175T5.05 9H4.8q-.225 0-.362-.138T4.3 8.5q0-.225.138-.363T4.8 8h.25q0-1.125.55-2.025T7.05 4.55v.95q0 .225.138.363T7.55 6q.225 0 .363-.138T8.05 5.5V4.15q.225-.075.475-.113T9.05 4q.275 0 .525.038t.475.112V5.5q0 .225.138.363T10.55 6q.225 0 .363-.138t.137-.362v-.95q.9.525 1.45 1.425T13.05 8h.25q.225 0 .363.138t.137.362q0 .225-.138.363T13.3 9h-.25q0 1.65-1.175 2.825T9.05 13Zm0-2q.825 0 1.413-.588T11.05 9h-4q0 .825.588 1.413T9.05 11Zm7.5 4l-.15-.75q-.15-.05-.287-.113t-.263-.187l-.7.25l-.5-.9l.55-.5v-.6l-.55-.5l.5-.9l.7.25q.1-.1.25-.175t.3-.125l.15-.75h1l.15.75q.15.05.3.125t.25.175l.7-.25l.5.9l-.55.5v.6l.55.5l-.5.9l-.7-.25q-.125.125-.263.188t-.287.112l-.15.75h-1Zm.5-1.75q.3 0 .525-.225t.225-.525q0-.3-.225-.525t-.525-.225q-.3 0-.525.225t-.225.525q0 .3.225.525t.525.225Zm1.8-3.25l-.2-1.05q-.225-.075-.412-.188T17.9 8.5l-1.05.35l-.7-1.2l.85-.75q-.05-.125-.05-.2v-.4q0-.075.05-.2l-.85-.75l.7-1.2l1.05.35q.15-.15.338-.263t.412-.187l.2-1.05h1.4l.2 1.05q.225.075.413.188t.337.262l1.05-.35l.7 1.2l-.85.75q.05.125.05.2v.4q0 .075-.05.2l.85.75l-.7 1.2l-1.05-.35q-.15.15-.337.263t-.413.187l-.2 1.05h-1.4Zm.7-2.25q.525 0 .888-.363T20.8 6.5q0-.525-.363-.888t-.887-.362q-.525 0-.888.363T18.3 6.5q0 .525.363.888t.887.362ZM3.05 19h12h-12Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Mechanical Fitter,</h3>
                  <h3 className="text-lg font-bold">Machinist, Plate-</h3>
                  <h3 className="text-lg font-bold">Welder</h3>
                  <ul className="list-disc list-inside text-xs">
                    <li>Mechanical Engineering</li>
                    <li>Production Engineering</li>
                    <li>Fabrication</li>
                    <li>Installation</li>
                  </ul>

                  <p className="text-xs mt-4">
                    A person working as a Mechanical Engineer in Finland
                    typically earns around 3,500 EUR per month. Salaries range
                    from 2,100 EUR (lowest) to 6,690 EUR (highest). This is the
                    average monthly salary including housing, transport, and
                    other benefits. Mechanical Engineer salaries vary
                    drastically based on experience, skills, gender, or location
                  </p>
                </div>
              </div>

              <div className="flex flex-col max-w-[2000px]  rounded-lg border border-[#ffffff] shadow mt-4 lg:mt-0">
                <div className="pl-4 py-5 px-4 text-[#ffffff]">
                  <div className="border border-[#ffffff] rounded-md p-1 inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="38"
                      viewBox="-2 -3.5 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M1 .565h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1zm0 11v2h2v-2H1zm9-8h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm2 11h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">IT & Computer </h3>
                  <h3 className="text-lg font-bold">Specialist</h3>
                  <ul className="list-disc list-inside text-xs">
                    <li>Software Engineer</li>
                    <li>Hardware Repair</li>
                  </ul>

                  <p className="text-xs mt-4">
                    A person working as an IT Specialist or computer operator in
                    Finland typically earns around 3,807 EUR per month. Salaries
                    range from 3,807 EUR (lowest) to 5,402 EUR (highest). This
                    is the average monthly salary including housing, transport,
                    and other benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="block md:hidden px-6">
            <Carousel cols={2} rows={1} gap={20} loop>
              <Carousel.Item>
                <div className="flex flex-col   max-w-lg    rounded-lg border border-[#ffffff] shadow ">
                  <div className="pl-4 py-5 px-4 text-[#ffffff]">
                    <div className="border border-[#ffffff] rounded-md p-1 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42.96"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <mask id="ipSChefHat0">
                          <g
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                          >
                            <path fill="#fff" d="M12 34h24v8H12z" />
                            <path d="M29 34V20m-7 14v-8m-10-1v9h24v-9s5-3 5-8s-4-7-9-7c0-2-3-6-8-6s-8 4-8 6c-4 0-9 2-9 7s5 8 5 8Z" />
                          </g>
                        </mask>
                        <path
                          fill="white"
                          d="M0 0h48v48H0z"
                          mask="url(#ipSChefHat0)"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">Restaurant &</h3>
                    <h3 className="text-lg font-bold">Catering Services</h3>
                    <ul className="list-disc list-inside text-xs">
                      <li>Restaurant Industry</li>
                      <li>Customer Service</li>
                      <li>Catering Service</li>
                      <li>Gastronomy</li>
                    </ul>

                    <p className="text-xs mt-4">
                      A person working as a Waiter / Waitress in Finland
                      typically earns around 1,420 EUR per month. Salaries range
                      from 740 EUR (lowest) to 2,170 EUR (highest). This is the
                      average monthly salary including housing, transport, and
                      other benefits.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="flex flex-col   max-w-lg  rounded-lg border border-[#ffffff] shadow">
                  <div className="pl-4 py-5 px-4 text-[#ffffff]">
                    <div className="border border-[#ffffff] rounded-md p-1 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="39.18"
                        height="41"
                        viewBox="0 0 32 32"
                      >
                        <path
                          fill="white"
                          d="M10.156 4L10 4.813l-1 5.625V14h.094a7.032 7.032 0 0 0 3 4.813C8.527 20.343 6 23.883 6 28h2a7.988 7.988 0 0 1 3-6.25v.656l.281.313l4 4l.719.687l.719-.687l4-4l.281-.313v-.656A7.988 7.988 0 0 1 24 28h2c0-4.117-2.527-7.656-6.094-9.188a7.032 7.032 0 0 0 3-4.812H23v-3.563l-1-5.624L21.844 4zm1.688 2h8.312L21 10.781V12H11v-1.219zM15 7v1h-1v2h1v1h2v-1h1V8h-1V7zm-3.906 7h9.812A5.001 5.001 0 0 1 16 18a5.001 5.001 0 0 1-4.906-4zM16 20a8.05 8.05 0 0 1 3 .563v1l-3 3l-3-3v-1A8.05 8.05 0 0 1 16 20z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">Practical Nurse</h3>
                    <h5 className="text-xs">Nursing</h5>

                    <p className="text-xs mt-4">
                      Salary range after graduation: 3000 - 4500 EUR/month,
                      depends on overtime work, night shifts, and weekends
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="flex flex-col max-w-lg  rounded-lg border border-[#ffffff] shadow">
                  <div className="pl-4 py-5 px-4 text-[#ffffff]">
                    <div className="border border-[#ffffff] rounded-md p-1 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34.78"
                        height="38"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M21 16v-3c0-1.11-.89-2-2-2h-6V8h2V2H9v6h2v3H5c-1.11 0-2 .89-2 2v3H1v6h6v-6H5v-3h6v3H9v6h6v-6h-2v-3h6v3h-2v6h6v-6h-2M11 4h2v2h-2V4M5 20H3v-2h2v2m8 0h-2v-2h2v2m8 0h-2v-2h2v2Z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">Site Facilities</h3>
                    <h3 className="text-lg font-bold">Operative</h3>

                    <ul className="list-disc list-inside text-xs">
                      <li>Property Maintenance</li>
                      <li>Domestic Services</li>
                      <li>Facilities Services </li>
                    </ul>

                    <p className="text-xs mt-4">
                      A person working in Cleaning and Property Services in
                      Finland typically earns around 1,700 EUR per month.
                      Salaries range from 1,220 EUR (lowest average) to 2,580
                      EUR (highest average, the actual maximum salary is
                      higher). This is the average monthly salary including
                      housing, transport, and other benefits. Salaries vary
                      drastically between different Cleaning and Property
                      Services careers
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="flex flex-col max-w-lg   rounded-lg border border-[#ffffff] shadow">
                  <div className="pl-4 py-5 px-4 text-[#ffffff]">
                    <div className="border border-[#ffffff] rounded-md p-1 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="39.38"
                        height="44"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M1.05 21v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9.05 14q1.925 0 3.525.45t2.875 1.1q.75.375 1.175 1.1t.425 1.55V21h-16Zm2-2h12v-.8q0-.275-.138-.5t-.362-.35q-.9-.45-2.313-.9T9.05 16q-1.775 0-3.188.45t-2.312.9q-.225.125-.362.35t-.138.5v.8Zm6-6q-1.65 0-2.825-1.175T5.05 9H4.8q-.225 0-.362-.138T4.3 8.5q0-.225.138-.363T4.8 8h.25q0-1.125.55-2.025T7.05 4.55v.95q0 .225.138.363T7.55 6q.225 0 .363-.138T8.05 5.5V4.15q.225-.075.475-.113T9.05 4q.275 0 .525.038t.475.112V5.5q0 .225.138.363T10.55 6q.225 0 .363-.138t.137-.362v-.95q.9.525 1.45 1.425T13.05 8h.25q.225 0 .363.138t.137.362q0 .225-.138.363T13.3 9h-.25q0 1.65-1.175 2.825T9.05 13Zm0-2q.825 0 1.413-.588T11.05 9h-4q0 .825.588 1.413T9.05 11Zm7.5 4l-.15-.75q-.15-.05-.287-.113t-.263-.187l-.7.25l-.5-.9l.55-.5v-.6l-.55-.5l.5-.9l.7.25q.1-.1.25-.175t.3-.125l.15-.75h1l.15.75q.15.05.3.125t.25.175l.7-.25l.5.9l-.55.5v.6l.55.5l-.5.9l-.7-.25q-.125.125-.263.188t-.287.112l-.15.75h-1Zm.5-1.75q.3 0 .525-.225t.225-.525q0-.3-.225-.525t-.525-.225q-.3 0-.525.225t-.225.525q0 .3.225.525t.525.225Zm1.8-3.25l-.2-1.05q-.225-.075-.412-.188T17.9 8.5l-1.05.35l-.7-1.2l.85-.75q-.05-.125-.05-.2v-.4q0-.075.05-.2l-.85-.75l.7-1.2l1.05.35q.15-.15.338-.263t.412-.187l.2-1.05h1.4l.2 1.05q.225.075.413.188t.337.262l1.05-.35l.7 1.2l-.85.75q.05.125.05.2v.4q0 .075-.05.2l.85.75l-.7 1.2l-1.05-.35q-.15.15-.337.263t-.413.187l-.2 1.05h-1.4Zm.7-2.25q.525 0 .888-.363T20.8 6.5q0-.525-.363-.888t-.887-.362q-.525 0-.888.363T18.3 6.5q0 .525.363.888t.887.362ZM3.05 19h12h-12Z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">Mechanical Fitter,</h3>
                    <h3 className="text-lg font-bold">Machinist, Plate-</h3>
                    <h3 className="text-lg font-bold">Welder</h3>
                    <ul className="list-disc list-inside text-xs">
                      <li>Mechanical Engineering</li>
                      <li>Production Engineering</li>
                      <li>Fabrication</li>
                      <li>Installation</li>
                    </ul>

                    <p className="text-xs mt-4">
                      A person working as a Mechanical Engineer in Finland
                      typically earns around 3,500 EUR per month. Salaries range
                      from 2,100 EUR (lowest) to 6,690 EUR (highest). This is
                      the average monthly salary including housing, transport,
                      and other benefits. Mechanical Engineer salaries vary
                      drastically based on experience, skills, gender, or
                      location
                    </p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="flex flex-col max-w-lg   rounded-lg border border-[#ffffff] shadow">
                  <div className="pl-4 py-5 px-4 text-[#ffffff]">
                    <div className="border border-[#ffffff] rounded-md p-1 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="38"
                        viewBox="-2 -3.5 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M1 .565h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1zm0 11v2h2v-2H1zm9-8h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm2 11h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">IT & Computer </h3>
                    <h3 className="text-lg font-bold">Specialist</h3>
                    <ul className="list-disc list-inside text-xs">
                      <li>Software Engineer</li>
                      <li>Hardware Repair</li>
                    </ul>

                    <p className="text-xs mt-4">
                      A person working as an IT Specialist or computer operator
                      in Finland typically earns around 3,807 EUR per month.
                      Salaries range from 3,807 EUR (lowest) to 5,402 EUR
                      (highest). This is the average monthly salary including
                      housing, transport, and other benefits.
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>
      {/* <!-- Start block --> */}
      <section className="bg-[#D7F5DC] body-font font-poppins pb-10">
        <div className="grid max-w-[2000px] px-8 lg:px-14 pt-4  mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl text-2xl text-[#000000] font-semibold md:leading-10  md:text-3xl xl:text-4xl">
              Master Finnish language 
            </h1>
            <h1 className="max-w-2xl text-2xl text-[#000000] font-semibold md:leading-10  md:text-3xl xl:text-4xl">
              {/* High School and  */}
              to Study for
            </h1>
            <h1 className="max-w-2xl mb-4 text-2xl text-[#000000] font-semibold md:leading-10 md:text-3xl xl:text-4xl">
             Free in Finland
            </h1>
            <div className="hidden md:block">
              <p className=" max-w-2xl mb-6 mt-6 font-medium text-[#000000] lg:mb-8 text-sm ">
                A student will learn the basics of the Finnish language and will
                <br />
                be tested in that time to prepare for the B1.1. level
              </p>
              <p className="max-w-2xl mb-6 mt-6 font-medium text-[#000000] lg:mb-8 text-sm">
                The focus of our language programs is to help the <br />
                students pass the level B1.1. language test which is a<br />
                requirement to come to study in Finland.
              </p>
            </div>

          </div>


          <div className=" lg:mt-0 lg:col-span-5  w-full border border-[#1DB459] rounded-[15px] p-4">
            <div>
              <img src="/images/finnish/Map.svg" alt="friends" />
            </div>
            <div className="md:mt-2 mt-5">
              <div className="flex justify-end pr-20">
                <div className="flex space-x-2">
                  <img src="/images/finnish/map1.svg" alt="friends" />
                  <p className="mt-2 text-xs font-semibold text-white">Vocational Schools </p>
                </div>
              </div>
              {/* <div className="flex justify-end mt-3 pr-[120px]">
                <div className="flex space-x-2">
                  <img src="/images/finnish/map2.svg" alt="friends" />
                  <p className="mt-2 text-xs font-semibold text-white">High Schools </p>
                </div>
              </div> */}
            </div>

          </div>

          <div className="md:hidden block">
            <p className=" max-w-2xl mt-3 font-medium text-[#000000]  text-sm ">
              A student will learn the basics of the Finnish language and will
              be tested in that time to prepare for the B1.1. level
            </p>
            <p className="max-w-2xl mt-4 font-medium text-[#000000]  text-sm">
              The focus of our language programs is to help the <br />
              students pass the level B1.1. language test which is a<br />
              requirement to come to study in Finland.
            </p>
          </div>

        </div>
        {/* <div className="hidden md:block ">
          <div className="flex justify-end pr-20">
            <div className="flex space-x-2">
              <img src="/images/finnish/map1.svg" alt="friends" />
              <p className="mt-2 text-xs font-semibold">Vocational Schools </p>
            </div>
          </div>
          <div className="flex justify-end mt-3 pr-28">
            <div className="flex space-x-2">
              <img src="/images/finnish/map2.svg" alt="friends" />
              <p className="mt-2 text-xs font-semibold">High Schools </p>
            </div>
          </div>
        </div> */}
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-white ">
        <div
          // style={{
          //   backgroundImage: `url(${bg})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          // }}
          className=" py-8 px-4 mx-auto max-w-[2000px] lg:py-10 lg:px-6">
          <div className="mx-auto max-w-screen-md lg:text-center mb-8 p-6">
            {/* <h2 className=" md:text-3xl text-2xl tracking-tight font-extrabold text-gray-900 ">
              ENG-FIN in 5 EASY STEPS
            </h2> */}
            <h2 className=" md:text-3xl text-2xl tracking-tight font-extrabold text-gray-900 ">
              Learn Finnish language to study in Finland in 5 easy steps
            </h2>

          </div>

          <div className="hidden md:block space-y-8 lg:grid lg:grid-cols-5 sm:gap-6 xl:gap-10 lg:space-y-0 p-6">
            {/* <!-- Pricing Card --> */}
            <div>
              <div className="w-[30px] h-[30px] rounded-full border-4 border-[#1DB459] flex justify-center items-center mx-auto">
                <p className="text-[#1DB459] text-sm">1</p>
              </div>
              <div className="  mx-auto max-w-lg  text-gray-900 bg-white rounded-lg border border-[#1DB459] shadow ">
                <div className="h-[64px] bg-[#1DB459] rounded-lg pt-2 pb-1">
                  <h3 className=" text-sm font-semibold text-white text-center">
                    REGISTER WITH US
                  </h3>
                </div>

                {/* <div className="pl-5 h-[270px] pr-3 pt-4">
                  <ul className="space-y-1 text-[#838383] list-disc list-outside pl-4">
                    <li className=' text-sm'>In the English language</li>
                    <li className='pt-5 text-sm'>Used to assess the potential student’s language skill level</li>
                  </ul>
                </div> */}
              </div>
            </div>

            {/* <!-- Pricing Card --> */}
            <div>
              <div className="w-[30px] h-[30px] rounded-full border-4 border-[#1DB459] flex justify-center items-center mx-auto">
                <p className="text-[#1DB459] text-sm">2</p>
              </div>
              <div className="flex flex-col  mx-auto max-w-lg  text-gray-900 bg-white rounded-lg border border-[#1DB459] shadow ">
                <div className="bg-[#1DB459] rounded-lg pt-2">
                  <h3 className="mb-4 text-sm font-semibold text-white text-center">
                    LANGUAGE
                    EDUCATION BEGINS
                  </h3>
                </div>

                {/* <div className="pl-5 h-[270px] pr-3 pt-4">
                  <ul className="space-y-1 text-[#838383] list-disc list-outside pl-4">
                    <li className=' text-sm'>Online language course begins</li>
                    <li className='pt-5 text-sm'>Native Finnish teachers</li>
                    <li className='pt-5 text-sm'>Duration is 10 months</li>
                    <li className='pt-5 text-sm'>4−5 lessons in a week</li>
                  </ul>

                </div> */}
              </div>
            </div>

            {/* <!-- Pricing Card --> */}
            <div>
              <div className="w-[30px] h-[30px] rounded-full border-4 border-[#1DB459] flex justify-center items-center mx-auto">
                <p className="text-[#1DB459] text-sm">3</p>
              </div>
              <div className="flex flex-col  mx-auto max-w-lg  text-gray-900 bg-white rounded-lg border border-[#1DB459] shadow ">
                <div className="bg-[#1DB459] rounded-lg pt-2">
                  <h3 className="mb-4 text-sm font-semibold text-white text-center">
                  REACH<br />
                    B1.1. LEVEL

                  </h3>
                </div>

                {/* <div className="pl-5 h-[270px] pr-3 pt-4">
                  <ul className="space-y-1 text-[#838383] list-disc list-outside pl-4">
                    <li className=' text-sm'>Students are able to apply into schools after reaching level</li>
                    <li className='pt-5 text-sm'>Students attend school webinars to learn about different
                      school options</li>

                  </ul>

                </div> */}
              </div>
            </div>


            {/* <!-- Pricing Card --> */}
            <div>
              <div className="w-[30px] h-[30px] rounded-full border-4 border-[#1DB459] flex justify-center items-center mx-auto">
                <p className="text-[#1DB459] text-sm">4</p>
              </div>
              <div className="flex flex-col  mx-auto max-w-lg  text-gray-900 bg-white rounded-lg border border-[#1DB459] shadow ">
                <div className="bg-[#1DB459] rounded-lg pt-2">
                  <h3 className="mb-4 text-sm font-semibold text-white text-center">
                  APPLY <br />
                    FOR SCHOOLS
                  </h3>
                </div>

                {/* <div className="pl-5 h-[270px] pr-3 pt-4">
                  <ul className="space-y-1 text-[#838383] list-disc list-outside pl-4">
                   <li className='pt-5 text-sm'>The deadline for applications is 21.3.</li>
                    <li className='pt-5 text-sm'>Schools decide who gets accepted as a student</li>
                  </ul>
                </div> */}
              </div>
            </div>

            {/* <!-- Pricing Card --> */}
            <div>
              <div className="w-[30px] h-[30px] rounded-full border-4 border-[#1DB459] flex justify-center items-center mx-auto">
                <p className="text-[#1DB459] text-sm">5</p>
              </div>
              <div className="flex flex-col  mx-auto max-w-lg  text-gray-900 bg-white rounded-lg border border-[#1DB459] shadow ">
                <div className="bg-[#1DB459] rounded-lg pt-2">
                  <h3 className="mb-4 text-sm font-semibold text-white text-center">
                    TRAVEL TO <br />
                    FINLAND
                  </h3>
                </div>

                {/* <div className="pl-5 h-[270px] pr-3 pt-4">
                  <ul className="space-y-1 text-[#838383] list-disc list-outside pl-4">
                    <li className=' text-sm'>Education in Finland is free</li>
                    <li className='pt-5 text-sm'>Living in Finland requires PoF (Proof of Fund) for{" "}<NavLink to="https://migri.fi/en/income-requirement-for-students" target="_blank">
                      <span className="text-[#1DB459] underline underline-offset-2">MIGRI.</span></NavLink></li>
                    <li className='pt-5 text-sm'> VISA process can begin when accepted into a school</li>
                  </ul>

                </div> */}
              </div>
            </div>

          </div>

          <div className="block md:hidden ">
            <Carousel cols={2} rows={1} gap={20} loop >
              <Carousel.Item>
                {/* <!-- Pricing Card --> */}
                <div className="">
                  <div className="w-[30px] h-[30px] rounded-full border-4 border-[#1DB459] flex justify-center items-center mx-auto">
                    <p className="text-[#1DB459] text-sm">1</p>
                  </div>
                  <div className="  mx-auto  text-gray-900 bg-white rounded-lg border border-[#1DB459] shadow ">
                    <div className="bg-[#1DB459] rounded-lg pt-2 pb-1">
                      <h3 className="mb-4 text-sm font-semibold text-white text-center">
                        REGISTER WITH US
                      </h3>
                    </div>

                    {/* <div className="pl-5 pb-10 pr-3 pt-4">
                      <ul className="space-y-1 text-[#838383] list-disc list-outside pl-4">
                        <li className=' text-sm'>In the English language</li>
                        <li className='pt-5 text-sm'>Used to assess the potential student’s language skill level</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                {/* <!-- Pricing Card --> */}
                <div className="">
                  <div className="w-[30px] h-[30px] rounded-full border-4 border-[#1DB459] flex justify-center items-center mx-auto">
                    <p className="text-[#1DB459] text-sm">2</p>
                  </div>
                  <div className="flex flex-col  max-w-sm  text-gray-900 bg-white rounded-lg border border-[#1DB459] shadow ">
                    <div className="bg-[#1DB459] rounded-lg pt-2">
                      <h3 className="mb-4 text-sm font-semibold text-white text-center">
                        LANGUAGE
                        EDUCATION BEGINS
                      </h3>
                    </div>

                    {/* <div className="pl-5 pb-10 pr-3 pt-4">
                      <ul className="space-y-1 text-[#838383] list-disc list-outside pl-4">
                        <li className=' text-sm'>Online language course begins</li>
                        <li className='pt-5 text-sm'>Native Finnish teachers</li>
                        <li className='pt-5 text-sm'>Duration is 10 months</li>
                        <li className='pt-5 text-sm'>4−5 lessons in a week</li>
                      </ul>

                    </div> */}
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                {/* <!-- Pricing Card --> */}
                <div>
                  <div className="w-[30px] h-[30px] rounded-full border-4 border-[#1DB459] flex justify-center items-center mx-auto">
                    <p className="text-[#1DB459] text-sm">3</p>
                  </div>
                  <div className="mx-auto text-gray-900 bg-white rounded-lg border border-[#1DB459] shadow ">
                    <div className="bg-[#1DB459] rounded-lg pt-2">
                      <h3 className=" text-sm font-semibold text-white text-center">
                        REACHING<br />
                        B1.1. LEVEL

                      </h3>
                    </div>

                    {/* <div className="pl-5 pb-10 pr-3 pt-2">
                      <ul className="space-y-1 text-[#838383] list-disc list-outside pl-4">
                        <li className=' text-sm'>Students are able to apply into schools after reaching level</li>
                        <li className='pt-5 text-sm'>Students attend school webinars to learn about different
                          school options</li>
                      </ul>
                    </div> */}
                  </div>
                </div>

              </Carousel.Item>
              <Carousel.Item>
                {/* <!-- Pricing Card --> */}
                <div>
                  <div className="w-[30px] h-[30px] rounded-full border-4 border-[#1DB459] flex justify-center items-center mx-auto">
                    <p className="text-[#1DB459] text-sm">4</p>
                  </div>
                  <div className="mx-auto text-gray-900 bg-white rounded-lg border border-[#1DB459] shadow ">
                    <div className="bg-[#1DB459] rounded-lg pt-2">
                      <h3 className="text-sm font-semibold text-white text-center">
                        APPLYING <br />
                        FOR SCHOOLS
                      </h3>
                    </div>

                    {/* <div className="pl-5 pb-10 pr-3 pt-2">
                      <ul className="space-y-1 text-[#838383] list-disc list-outside pl-4">
                       <li className='pt-5 text-sm'>The deadline for applications is 21.3.</li>
                        <li className='pt-5 text-sm'>Schools decide who gets accepted as a student</li>
                      </ul>
                    </div> */}
                  </div>
                </div>

              </Carousel.Item>
              <Carousel.Item>
                {/* <!-- Pricing Card --> */}
                <div>
                  <div className="w-[30px] h-[30px] rounded-full border-4 border-[#1DB459] flex justify-center items-center mx-auto">
                    <p className="text-[#1DB459] text-sm">5</p>
                  </div>
                  <div className="mx-auto text-gray-900 bg-white rounded-lg border border-[#1DB459] shadow ">
                    <div className="bg-[#1DB459] rounded-lg pt-2">
                      <h3 className=" text-sm font-semibold text-white text-center">
                        TRAVEL TO <br />
                        FINLAND
                      </h3>
                    </div>

                    {/* <div className="pl-5 pb-10 pr-3 pt-2">
                      <ul className="space-y-1 text-[#838383] list-disc list-outside pl-4">
                        <li className=' text-sm'>Education in Finland is free</li>
                        <li className='pt-5 text-sm'>Living in Finland requires PoF (Proof of Fund) for{" "}<NavLink to="https://migri.fi/en/income-requirement-for-students" target="_blank">
                          <span className="text-[#1DB459] underline underline-offset-2">MIGRI.</span></NavLink></li>
                        <li className='pt-5 text-sm'> VISA process can begin when accepted into a school</li>
                      </ul>

                    </div> */}
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>

          </div>

        </div>
      </section>
      {/* <!-- End block --> */}

   
    {/* <!-- Start block --> */}
    <section className=" pb-5 body-font font-poppins lg:px-14 px-8 ">
    <h2 className="text-center md:text-3xl pb-3 text-2xl tracking-tight font-semibold text-gray-900 ">
    <span className="text-[#1DB459]">Benefits </span>of the language program
          </h2>
        <div
         
          className="md:flex justify-center gap-5 md:gap-5 lg:gap-0  pt-6 md:pb-24 pb-20  relative"
        >
          <div className="flex flex-col gap-5 lg:gap-7">
          <div className="px-6 h-[120px] flex justify-center items-center text-center  rounded-[10px] border-[#C24C9A] border-[1px] bg-[#F6E4F0]">
                {/* <div className=" "> */}
                <div className="flex justify-center text-center">
                
                  {/* </div> */}
                  <div>
                    <p className="font-normal  text-sm max-w-[250px] text-[#000000]">
                    Finnish language training to level A2.2 - B1.1
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 h-[120px] flex justify-center items-center text-center  rounded-[10px] border-[#0174B3] border-[1px] bg-[#D9EAF4]">
                {/* <div className=" "> */}
                <div className="flex justify-center text-center">
                
                  {/* </div> */}
                  <div>
                    <p className="font-normal  text-sm max-w-[250px] text-[#000000]">
                    Language training from no experience to intermediate level
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 h-[120px] flex justify-center items-center text-center  rounded-[10px] border-[#1DB35A] border-[1px] bg-[#EEFFF5]">
                {/* <div className=" "> */}
                <div className="flex justify-center text-center">
                
                  {/* </div> */}
                  <div>
                    <p className="font-normal  text-sm max-w-[250px] text-[#000000]">
                    Weekly online live lessons
                    </p>
                  </div>
                </div>
              </div>
            {/* <div className="md:w-6/12 mr-auto place-self-center  lg:mb-56">
              <div className="hidden md:block mx-auto mt-14">
                <h1 className="text-white text-[30px] font-semibold px-6 leading-10">Registration Information <br />for Finnish Language Program</h1>
              </div>
              <div className="block md:hidden   ">
                <h1 className="text-white text-[26px] font-semibold">Registration Information for<br /> Finnish Language Program</h1>
              </div>
              <div className="grid  md:px-6">
                <div className="flex-col md:mt-10 mt-8">
                  <h5 className="text-white mt-[8px] md:text-[18px] text-[14px] font-medium">Benefits : </h5>
                  <h5 className="text-white mt-[12px] md:text-[15px] text-[13px] font-light">Access to our expert language teachers</h5>
                  <h5 className="text-white mt-[12px] md:text-[15px] text-[13px] font-light">Access to our Finnish Language certificate</h5>
                  <h5 className="text-white mt-[12px] md:text-[15px] text-[13px] font-light">Access to apply to our partner schools in Finland</h5>
                  <h5 className="text-white mt-[12px] md:text-[15px] text-[13px] font-light">Access to our language materials</h5>
                  <h5 className="text-white mt-[12px] md:text-[15px] text-[13px] font-light">Access to our learning portals and entire language learning journey.</h5>
                  <h5 className="text-white mt-[12px] md:text-[15px] text-[13px] font-light">Access to our visa and documentation processing and support</h5>
                  <h5 className="text-white mt-[12px] md:text-[15px] text-[13px] font-light">Access to get support to apply for apartments and some basic supports needed on or before arrival to Finland</h5>
                </div>
              </div>
            </div> */}
          </div>
          <div className="md:w-[480px] hidden lg:block  md:-mt-6 ">
              <img src="/images/finnish/benefitsLanguage.png" alt="Assessment Criteria" />
            </div>

            <div className="flex flex-col gap-5 lg:gap-7 md:mt-0 mt-5">
          <div className="px-6 h-[120px] flex justify-center items-center text-center  rounded-[10px] border-[#0174B3] border-[1px] bg-[#D9EAF4]">
                {/* <div className=" "> */}
                <div className="flex justify-center text-center">
                
                  {/* </div> */}
                  <div>
                    <p className="font-normal  text-sm max-w-[230px] text-[#000000]">
                    Teacher Chat sessions
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 h-[120px] flex justify-center items-center text-center rounded-[10px] border-[#1DB35A] border-[1px] bg-[#EEFFF5]">
                {/* <div className=" "> */}
                <div className="flex justify-center text-center">
                
                  {/* </div> */}
                  <div>
                    <p className="font-normal  text-sm max-w-[250px] text-[#000000]">
                    Abundant self-study training materials
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 h-[115px] flex justify-center items-center text-center rounded-[10px] border-[#F38120] border-[1px] bg-[#FDEBDD]">
    <div>
        <p className="font-normal text-sm max-w-[225px] text-[#000000]">
        Access to once a month 45 minutes speaking practise with a Finnish citizen 

        </p>
    </div>
</div>

          </div>
          {/* <div className="hidden md:block mx-auto text-center ">
            <h1 className="text-white text-3xl px-6">Assessment Criteria During Interview</h1>
          </div> */}
          {/* <div className="block md:hidden mx-auto text-center ">
            <h1 className="text-white text-2xl px-6">Assessment Criteria <br />During Interview</h1>
          </div> */}
          {/* <div className="flex justify-center md:mt-20 mt-10 px-8">
            <img src="/images/finnish/pg-bg.svg" alt="friends" />

          </div> */}
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="md:mb-10 body-font font-poppins ">
        <div className="mx-auto max-w-screen-md lg:text-center  p-6">
          <h2 className=" md:text-3xl text-2xl tracking-tight font-extrabold text-gray-900 ">
            The  <span className="text-[#1DB459]">Language Program Levels</span>
          </h2>
          {/* <h2 className="md:text-3xl text-2xl tracking-tight font-extrabold text-gray-900 ">
            By Finest Future
          </h2> */}

        </div>
        <div className="hidden md:block mx-auto max-w-screen-md lg:text-center mb-8  lg:px-20 px-6">
          <p className=" text-base text-[#838383]">
            Any student can participate in our Finnish Language Program<br /> as long as they are interested in:
          </p>
        </div>
        <div

          className="  lg:px-16 mx-auto justify-center items-center  flex flex-col lg:flex-row lg:space-x-10 "
        >
          <div className="place-self-center px-8 flex justify-center">

            <img src="/images/finnish/finboy.svg" alt="hero" className="w-[80%]" />
          </div>
          <div className="md:hidden block mx-auto max-w-screen-md lg:text-center px-6 pt-4">
            <p className=" text-sm text-[#1DB459] font-medium">
              Any student can participate in our Finnish Language Program as long as they are interested in:
            </p>
          </div>
          <div className="mt-5 pb-16">


            <ul className="max-w-lg space-y-4 text-[#000000]  text-[18px] list-inside font-medium mx-8">
             <div className="flex items-center space-x-2">
             <div className="bg-[#D7F5DC] rounded-md w-[35px] h-[35px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1db459"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
            
              <li>
                Learning a New Language
              </li>
              </div>
              {/* <li>
                Pursuing a High School in Finland
              </li> */}
                <div className="flex items-center space-x-2">
             <div className="bg-[#D7F5DC] rounded-md w-[49px] h-[35px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1db459"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
              <li>
                Pursuing a Vocational School in Finland
              </li>
              </div>
              {/* <li>
                4 days/week 75 min per lesson.
              </li>
              <li>
                Programme is 40 weeks and the aimed level of language is B1.1
              </li>
              <li>
                Aimed for students applying to vocational schools in Finland. No English skills required.
              </li> */}
              {/* <li>
                Programme is 40 weeks and the aimed level of language is B1.1
              </li> */}
              {/* <li>
                Learning 4 times per week, 75 minutes per lesson
              </li> */}
              {/* <li>
                Possibility to use teacher assistants
              </li> */}
            </ul>
          </div>
          <div className="hidden md:block ">
            <div className="place-self-center  px-8 flex justify-center">
              <img src="/images/finnish/fingirl.svg" alt="hero" className="w-[80%]" />
            </div>
          </div>

          <div className="block md:hidden bg-[#D7F5DC]">
            <div className="place-self-center mt-3 px-8 flex justify-center">
              <img src="/images/finnish/fingirl.svg" alt="hero" className="w-[80%]" />
            </div>
            <div className="mx-auto max-w-screen-md mb-8 px-6">
              <p className="mt-5 text-sm text-[#1DB459]">
                Any student can participate in our Finnish Language Program as long as they are interested in:
              </p>
            </div>
            <div className="mt-5 pb-16">

              <ul className="max-w-lg space-y-1 text-[#000000] text-sm list-disc list-inside font-normal mx-8">
                <li>
                  Aimed for students applying to vocational schools in Finland. No English skills required.
                </li>
                <li>
                  Programme is 40 weeks and the aimed level of language is B1.1
                </li>
                <li>
                  Learning 4 times per week, 75 minutes per lesson
                </li>
                <li>
                  Possibility to use teacher assistants
                </li>

              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className=" text-center lg:text-left">
        <div className="hidden md:block">
          <div
            style={{
              backgroundImage: `url(${girlbg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="  lg:px-14 pt-10 pb-24 mx-auto flex justify-center lg:justify-end"
          >

            <div className=" md:mt-20 px-8 ">

              <h1 className="text-white md:text-4xl text-2xl font-medium">Working in Finland <br />
                as an International Student</h1>

              <div className="flex items-center justify-center ">
                <div className="container lg:rounded-lg">
                  <table className="w-full text-sm text-left text-white border border-white  flex flex-row flex-no-wrap overflow-hidden sm:shadow-lg my-5">
                    <thead className="text-xs text-white uppercase">
                      <tr className=" flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 border-b border-white">

                        <th scope="col" className="px-8 py-3">
                          <span className="sr-only">Vocational School Level </span>
                        </th>
                        <th scope="col" className="px-3 py-3 text-xs">
                          {/* High School &<br /> */}
                           Vocational School Level
                        </th>
                        <th scope="col" className="px-3 py-3">
                          University Level
                        </th>
                      </tr>
                      {/* <tr className=" flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 border-b border-white">

                      <th scope="col" className="px-8 py-3">
                        <span className="sr-only">Vocational School Level </span>
                      </th>
                      <th scope="col" className="px-3 py-3 text-xs">
                        High School &<br /> Vocational School Level
                      </th>
                      <th scope="col" className="px-3 py-3">
                        University Level
                      </th>
                    </tr> */}
                      {/* <tr className=" flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 border-b border-white">

                      <th scope="col" className="px-8 py-3">
                        <span className="sr-only">Vocational School Level </span>
                      </th>
                      <th scope="col" className="px-3 py-3 text-xs">
                        High School &<br /> Vocational School Level
                      </th>
                      <th scope="col" className="px-3 py-3">
                        University Level
                      </th>
                    </tr> */}
                      {/* <tr className=" flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 border-b border-white">

                      <th scope="col" className="px-8 py-3">
                        <span className="sr-only">Vocational School Level </span>
                      </th>
                      <th scope="col" className="px-3 py-3 text-xs">
                        High School &<br /> Vocational School Level
                      </th>
                      <th scope="col" className="px-3 py-3">
                        University Level
                      </th>
                    </tr> */}


                    </thead>
                    <tbody className="flex-1 sm:flex-none">
                      <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                        <td className="border-white border border-t px-6 py-4 font-medium"> Age</td>
                        <td className="border-grey-light border  p-3 truncate">15-18 years old</td>
                        <td className="border-grey-light border  p-3 px-6 py-4 font-medium">18 years and above</td>
                      </tr>
                      <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                        <td className="border-white border border-t px-6 py-4 font-medium">  During School Time</td>
                        <td className="border-grey-light border  p-3 truncate"> 12h/week</td>
                        <td className="border-grey-light border  p-3 px-6 py-4 font-medium"> 30h/week</td>
                      </tr>
                      <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                        <td className="border-white border border-t px-6 py-4 font-medium"> During Summer Holiday</td>
                        <td className="border-grey-light border  p-3 truncate">40h/week</td>
                        <td className="border-grey-light border  p-3 px-6 py-4 font-medium">No Limits</td>
                      </tr>
                      <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                        <td className="border-white border border-t px-6 py-4 font-medium">Salary (Usually) </td>
                        <td className="border-grey-light border  p-3 truncate"> 9-12 EUR/h</td>
                        <td className="border-grey-light border  p-3 px-6 py-4 font-medium"> 9-12 EUR/h</td>
                      </tr>



                    </tbody>
                  </table>
                </div>
              </div>



            </div>
          </div>
        </div>

        {/* mobile */}
        <div className="block md:hidden ">
          <div className="  px-8 text-white bg-[#3b8f48] py-10 ">
            <h1 className="text-white text-2xl font-medium">Working in Finland <br />
              as an International Student</h1>
            <div className="mt-6">
              <img src="/images/table.png" alt="friends" />
            </div>

          </div>
        </div>

      </section>
      {/* <!-- End block --> */}

   
      <Footer />
      {/* <!-- End block --> */}


    </>
  );
}

export default StudyInFinnish;
