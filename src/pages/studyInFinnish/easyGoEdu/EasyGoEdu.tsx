import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { useSelector } from "react-redux";
import Navbar from "../../../component/Navbar";
import Footer from "../../../component/Footer";
import EasyGoEduFaq from "./EasyGoEduFaq";

function EasyGoEdu() {
  const [isLogin, setIsLogin] = useState(false);

  const userLoginData = useSelector((state:any) => state.data.login.value);

  React.useEffect(() => {
    if (!userLoginData.token) {
      setIsLogin(false)
    }

    // console?.log(userLoginData)

    if (userLoginData.token) {
      setIsLogin(true)
    }

  }, []);

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when the component mounts
    }, []);


  return (
    <>
      <Navbar />
      {/* <!-- Start block --> */}
      <section className=" body-font font-poppins md:pt-10 pt-20">
        <div className="grid lg:grid-cols-12 max-w-screen-xl mx-auto px-8   lg:gap-8 xl:gap-0 lg:pt-16 pt-20">
          <div className="mr-auto place-self-center lg:col-span-7">
          <div className="ml-[86px] pb-1 lg:block hidden">
              <div className="bg-[#FFBA40] h-3 w-3 rounded-full"></div>
            </div>
            <h1 className="lg:max-w-2xl mb-4 lg:text-[48px] text-[35px] text-[#000] font-[700] md:leading-[52px] leading-[48px] tracking-normal  ">
              EASYGOEDU
            </h1>
            <div className=" -mt-8  lg:flex justify-end mr-[150px]  hidden">
              <div className="bg-[#EE1D52] h-6 w-6 rounded-full"></div>
            </div>
            <p className=" max-w-[620px] lg:pr-[30px]  mb-6 mt-3 font-normal text-[#777777] lg:mb-8 lg:text-[22px] md:leading-[30px] text-sm ">
            Your gateway to Finnish mastery and free study in
            Vocational schools in Finland
            </p>

            <div className="flex justify-between">
            {/* {isLogin ? <a  href="https://wa.me/2349047248430?text=Hello%20I%20would%20like%20to%20speak%20to%20a%20consultant"  rel="noopener noreferrer" target="_blank">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#01963C] to-[#158FD3] py-[16px] px-[40px]  text-sm font-medium text-white rounded-[40px] "
              >
                Get Started
              </button>
              </a> :  */}
                <NavLink to={"/contact-us"} className="">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#01963C] to-[#158FD3] py-[16px] px-[40px]  text-sm font-medium text-white rounded-[40px] "
                >
                  Get Started
                </button>
              </NavLink>
              {/* } */}
              <div className="flex flex-col">
                <div className=" mb-4  lg:flex justify-end mr-[140px]  hidden">
                  <div className="bg-[#0174B4] h-3 w-3 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className=" mb-4  lg:flex justify-center -mt-[30px] mr-[200px]  hidden">
                <div className="bg-[#1DB459] h-5 w-5 rounded-full"></div>
              </div>
          </div>
          <div className=" my-6 lg:mt-0 lg:col-span-5 lg:flex w-full">
            <img src="/images/finnish/easygoedu1.png" alt="hero" />
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

   {/* <!-- Start block --> */}
   <section className=" body-font font-poppins md:pt-10 pt-10">
        <div className=" px-8 lg:px-14  ">
          <h1 className=" mb-4 lg:text-[48px] text-[35px] text-[#000] font-[700] md:leading-[52px] leading-[48px] tracking-normal  ">
            Benefits of EASYGOEDU
          </h1>

          <div className=" space-y-8 grid lg:grid-cols-3 md:grid-cols-2  xl:gap-4 gap-3 lg:space-y-0 lg:py-6 lg:mt-6 ">
           <div className=" lg:mt-0 mt-10">
              <div className="px-6 py-[15px] lg:h-[180px] h-[230px] rounded-[10px]  bg-[#EEFFF5]">
              <div className="flex ">
                  {/* <div>
                    <img src="/images/finnish/easygoedu4.png" alt="hero" />
                  </div> */}
              <div className="flex flex-col gap-3">
             <div className="flex gap-2 items-center">
              <div className="bg-[#D7F5DC]  rounded-md w-[25px] h-[25px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1DB459"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
                  <p className="font-normal list-disc text-sm max-w-[300px] text-[#000000]">
                    Access to language learning materials.

                    </p>
                    </div>
                    <div className="flex gap-2 items-center">
              <div className="bg-[#D7F5DC]  rounded-md w-[25px] h-[25px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1DB459"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
                  <p className="font-normal list-disc text-sm max-w-[300px] text-[#000000]">
                    Access to language certificate.

                    </p>
                    </div>
                    <div className="flex gap-2 items-center">
              <div className="bg-[#D7F5DC]  rounded-md w-[25px] h-[25px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1DB459"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
                    <p className="font-normal  text-sm max-w-[320px] text-[#000000]">
                    Access to once-a-month 45-minute speaking practice with a Finnish citizen.

                    </p>
                    </div>

                    <div className="flex gap-2 items-center">
              <div className="bg-[#D7F5DC]  rounded-md w-[25px] h-[25px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#1DB459"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
                    <p className="font-normal  text-sm max-w-[300px] text-[#000000]">
                    Access to video learning materials.

                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:mt-0 mt-10">
              <div className="px-6 py-[15px] h-[180px] rounded-[10px]  bg-[#F48120]/[15%]">
               <div className="flex gap-[10px]">
                  {/* <div>
                    <img src="/images/finnish/easygoedu5.png" alt="hero" />
                  </div> */}
                   <div className="flex flex-col gap-3">
                  
                   <div className="flex gap-2 items-center">
              <div className="bg-[#F4812026]  rounded-md w-[25px] h-[25px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#cc6918e5"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
                    <p className="font-normal max-w-[320px] text-sm  text-[#000000]">
                    Access to support system from our Finnish teachers.

                    </p>
                    </div>

                    <div className="flex gap-2 items-center">
              <div className="bg-[#F4812026]  rounded-md w-[25px] h-[25px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#cc6918e5"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
                    <p className="font-normal max-w-[320px] text-sm text-[#000000]">
                    Access to school application assistance.

                    </p>
                    </div>

                    <div className="flex gap-2 items-center">
              <div className="bg-[#F4812026]  rounded-md w-[25px] h-[25px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#cc6918e5"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
                    <p className="font-normal max-w-[320px] text-sm  text-[#000000]">
                    Guidance for the residence permit process.

                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" lg:mt-0 mt-10">
              <div className="px-6 py-[15px] h-[180px] rounded-[10px]  bg-[#C24B9A]/[15%]">
            <div className="flex gap-[10px]">
                  {/* <div>
                    <img src="/images/finnish/easygoedu6.png" alt="hero" />
                  </div> */}
             <div className="flex flex-col gap-3">
                   
             <div className="flex gap-2 items-center">
              <div className="bg-[#e0b6d2]  rounded-md w-[25px] h-[25px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#C24B9A"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
                    <p className="font-normal max-w-[320px] text-sm  text-[#000000]">
                    Access to counseling and career opportunities.
                    </p>
                    </div>

                    <div className="flex gap-2 items-center">
              <div className="bg-[#e0b6d2]  rounded-md w-[25px] h-[25px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#C24B9A"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
                    <p className="font-normal max-w-[320px] text-sm  text-[#000000]">
                    Support in accommodation search.
                    </p>
                    </div>

                    <div className="flex gap-2 items-center">
              <div className="bg-[#e0b6d2]  rounded-md w-[25px] h-[25px] inline-flex items-center justify-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#C24B9A"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
                    />
                  </svg>
                </div>
                    <p className="font-normal max-w-[320px] text-sm text-[#000000]">
                    Access to our team for daily support and many more services.

                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className=" lg:mt-0 mt-10">
              <div className="px-6 py-[15px] h-[118px] rounded-[10px]  bg-[#0174B4]/[15%]">
          <div className="flex gap-[10px]">
             
             <div>
                    <p className="font-normal  text-sm max-w-[220px]  text-[#000000]">
                    Get a language certificate that enables you to study for free in vocational schools in Finland.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}
      
      {/* <!-- Start block --> */}
      <section className=" body-font font-poppins md:pt-10 pt-10">
        <div className="grid lg:grid-cols-12 max-w-screen-xl mx-auto px-8 lg:px-14  pb-8  lg:gap-8 xl:gap-0">
          <div className="mr-auto place-self-center hidden lg:flex lg:col-span-7">
            <img src="/images/finnish/easygoedu2.png" alt="hero" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-5">
            <h1 className="lg:max-w-2xl mb-4 lg:text-[48px] text-[35px] text-[#1DB459] font-[700] md:leading-[52px] leading-[48px] tracking-normal">
              No need to travel far <span className="text-black">and wide</span>
            </h1>
            <p className=" mt-3 mb-4 font-normal text-[#777777] lg:text-base text-sm">
            Unlock your path to Finnish mastery with our innovative online language program. Experience expert instruction and immersive learning that brings Finland to you. Earn a language certificate that opens the door to free studies in vocational schools across Finland

            </p>
            {/* {isLogin ? <a  href="https://wa.me/2349047248430?text=Hello%20I%20would%20like%20to%20speak%20to%20a%20consultant"  rel="noopener noreferrer" target="_blank">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#01963C] to-[#158FD3] py-[16px] px-[40px]  text-sm font-medium text-white rounded-[40px] "
              >
                Get Started
              </button>
              </a> :  */}
                <NavLink to={"/contact-us"} className="">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#01963C] to-[#158FD3] py-[16px] px-[40px]  text-sm font-medium text-white rounded-[40px] "
                >
                  Get Started
                </button>
              </NavLink>
              {/* } */}
          </div>
          
          <div className="mr-auto place-self-center lg:hidden flex lg:col-span-7">
            <img src="/images/finnish/easygoedu2.png" alt="hero" />
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className=" body-font font-poppins md:pt-10 pt-10">
        <div className="grid lg:grid-cols-12 max-w-screen-xl mx-auto  px-8 lg:px-14  pb-8  lg:gap-8 xl:gap-0 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="lg:max-w-xl mb-4 lg:text-[48px] text-[35px]  text-black font-[700] md:leading-[52px] leading-[48px] tracking-normal">
              More than just a{" "}
              <span className="text-[#1DB459]">language program</span>
            </h1>

            <p className=" max-w-[610px] lg:pr-[30px]  mb-4 mt-3 font-normal text-[#777777] lg:mb-4 lg:text-base text-sm ">
            Earn a language certificate that qualifies you to study for free in vocational schools in Finland.
Receive guidance and support to apply to various vocational schools in Finland.
Seamlessly transition into your new life in Finland
            </p>
            <div className="">
            {/* {isLogin ? <a  href="https://wa.me/2349047248430?text=Hello%20I%20would%20like%20to%20speak%20to%20a%20consultant"  rel="noopener noreferrer" target="_blank">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#01963C] to-[#158FD3] py-[16px] px-[40px]  text-sm font-medium text-white rounded-[40px] "
              >
                Get Started
              </button>
              </a> :  */}
                <NavLink to={"/contact-us"} className="">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#01963C] to-[#158FD3] py-[16px] px-[40px]  text-sm font-medium text-white rounded-[40px] "
                >
                  Get Started
                </button>
              </NavLink>
              {/* } */}

            </div>
          </div>
          <div className=" my-6 lg:mt-0 lg:col-span-5 lg:flex w-full">
            <img src="/images/finnish/easygoedu3.png" alt="hero" />
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

   

      {/* <!-- Start block --> */}
      <section className="">
        <EasyGoEduFaq />
      </section>

      {/* <!-- End block --> */}
      <Footer />
    </>
  );
}

export default EasyGoEdu;
