import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import vocational from "../../assets/revamp-vocal-bg.png";

import { useSelector } from "react-redux";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

function Consultation() {
  const [isLogin, setIsLogin] = useState(false);

  const userLoginData = useSelector((state: any) => state.data.login.value);

  React.useEffect(() => {
    if (!userLoginData.token) {
      setIsLogin(false);
    }

    // console?.log(userLoginData)

    if (userLoginData.token) {
      setIsLogin(true);
    }
    //  (userLoginData.token ?
    //   ''
    //   :
    //     navigate('/sign-in'));
  }, []);
  return (
    <>
      <Navbar />

      {/* <!-- Start block --> */}
      <section className="bg-[#FBFBFB] body-font font-poppins md:pt-16  relative">
        <div className="hidden md:block">
          <div
            style={{
              backgroundImage: `url(${vocational})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="lg:px-14 pt-20 pb-20  bg-cover "
          >
            <div className="relative hidden md:block">
            <img src="/images/revamp-consultation.png" alt="hero" />
            </div>
<div className="absolute top-20 mx-auto flex flex-col lg:flex-row lg:space-x-16 px-6 py-8 lg:py-0">
<div className=" hidden lg:mt-10 lg:ml-36 lg:flex ">
              <img src="/images/revamp-consult-img.png" alt="hero" className="w-[80%]" />
            </div>
            <div className="mr-auto bg-[#48B774] md:bg-inherit text-white mt-24 lg:pl-28">
              <div className="hidden md:block">
                <h1 className=" text-4xl font-semibold text-black">Do you need Clarity?</h1>
                <h1 className=" text-4xl font-semibold  text-black">Consult with an expert</h1>
                <h1 className=" text-4xl font-semibold  text-black">for Free!</h1>
              </div>
              
              <p className="md:text-base text-sm mt-5  text-black">
                We give you hands-on assistance during registration.
              </p>
              <p className="md:text-base text-sm md:mt-2  text-black">
                Proper clarity and answers to every question.
              </p>

             
              <p className="md:text-base text-sm md:mt-3 text-black">Get a 15 minutes free consultation with our customer<br/>
               service team and get detailed information about<br/> our programs and answers to your questions.</p>


              <div className="flex mt-8">
              {/* {isLogin ? ( */}
                <NavLink to="https://calendly.com/afripro/afriproedufreeconsultation" className="">
                  <button
                    type="submit"
                    className="py-2.5 px-5  text-sm font-medium text-[#48B774] bg-white rounded border border-[#48B774] "
                  >
                    Book Consultation
                  </button>
                </NavLink>
              {/* ) : (
                <NavLink to={"/sign-in"} className="">
                <button
                  type="submit"
                  className="py-2.5 px-5  text-sm font-medium text-[#48B774] bg-white rounded border border-[#48B774] "
                >
                  Book Consultation
                </button>
              </NavLink>
              )} */}
                {/* <NavLink to="https://calendly.com/afripro/30min">
                <button
                  type="button"
                  className="ml-5 text-[#48B774] bg-white  font-medium rounded text-sm px-5 py-2.5 border border-[#48B774]"
                >
                  Make Payment

                </button>
              </NavLink> */}
              </div>
            </div>
</div>
           

            
          </div>
        </div>

        <div className="">
        <div className="block md:hidden pt-5 pb-8 px-6"
        style={{
          backgroundImage: `url(${vocational})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "",
      }}
        
        >
                <div className="mr-auto  md:bg-inherit text-black mt-24 lg:pl-10">
              
              <div className="md:hidden block">
                <h1 className=" text-2xl font-semibold">Do you need Clarity?</h1>
                <h1 className=" text-2xl font-semibold">Consult with an </h1>
                <h1 className=" text-2xl font-semibold">expert for Free!</h1>
              </div>

              <p className="md:text-base text-sm mt-5">
                We give you hands-on assistance during registration.
              </p>
              <p className="md:text-base text-sm md:mt-2">
                Proper clarity and answers to every question.
              </p>
              {/* <p className="md:text-base text-sm md:mt-3">
                Kindly login to your account to book Consultation
              </p> */}
              <p className="md:text-base text-sm mt-3 text-black">Get a 15 minutes free consultation with our customer<br/>
               service team and get detailed information about<br/> our programs and answers to your questions.</p>



              <div className="flex mt-8">
              {/* {isLogin ? ( */}
                <NavLink to="https://calendly.com/afripro/afriproedufreeconsultation" className="">
                  <button
                    type="submit"
                    className="py-2.5 px-5  text-sm font-medium text-[#48B774] bg-white rounded border border-[#48B774] "
                  >
                    Book Consultation
                  </button>
                </NavLink>
              {/* ) : (
                <NavLink to={"/sign-in"} className="">
                <button
                  type="submit"
                  className="py-2.5 px-5  text-sm font-medium text-[#48B774] bg-white rounded border border-[#48B774] "
                >
                  Book Consultation
                </button>
              </NavLink>
              )} */}
                {/* <NavLink to="https://calendly.com/afripro/30min">
                <button
                  type="button"
                  className="ml-5 text-[#48B774] bg-white  font-medium rounded text-sm px-5 py-2.5 border border-[#48B774]"
                >
                  Make Payment

                </button>
              </NavLink> */}
              </div>
            </div>
        </div>
        </div>

      </section>
      <Footer />
    </>
  );
}

export default Consultation;
