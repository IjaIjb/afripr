import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../../component/Navbar";
import { FaArrowLeft } from "react-icons/fa";

const tiers = [
  {
    name: "Edupremium School Processing",
    img: "/images/loan/eduSilver.svg",
    description: "For student with admission letter",
    details:
      "This services  is available for student who have the necessary document to apply  for admission ",
    price: "$200",
    benefits: [
      "Check your school",
      "Check your country",
      "Check your course",
      "Check your admission",
    ],
    link: "/loan/school-processing",
  },
  {
    name: "Edupremium Plus",
    img: "/images/loan/eduGOld.svg",
    description: "For who is qualify to take loan in Edu Silver",
    details:
      "This is intended for student who did not have admission but have the necessary document to get admission and the loan ",
    price: "$450",
    benefits: ["Check your credit report", "Get loan"],
    link: "/loan/edu-gold",
  },
  {
    name: "Edupremium Study Loan",
    img: "/images/loan/eduPremium.svg",
    description:
      "For student without admission / scholar eligible to qualify for display loan",
    details:
      "This service is available for students who may already have been granted am admission letter or offer letter to access this service , please verify on EDUSILVER that your Institution  is included in the list of institutions for which we provide study loans.",
    price: "$250",
    benefits: [
      "Get everything in Edu Gold & Silver",
      "Gain admission",
      "Get loan",
    ],
    link: "/loan/loan-processing",
  },
];

const EduPremium = () => {
      const navigate = useNavigate();
  
  const [active, setActive] = useState(null);
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
};
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className=" mt-[140px]">
        <div className="flex w-full justify-center ">
          <div className="max-w-[2000px] relative mx-auto lg:px-14 px-3 w-full">
            <div className="flex justify-center">
              <div>
                <div className="bg-primary rounded-[15px] pl-10">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-white text-[36px]">
                        Study Loan Application
                      </h3>
                      <h3 className="text-white text-[14px] max-w-[396px]">
                        Late on tuition fees? Struggling to raise funds or find
                        a loan that works for global institutions?{" "}
                        <span className="font-semibold">AfriproEdu</span> got
                        you covered!
                      </h3>
                    </div>
                    <img src="/images/loan/loanHero.svg" alt="location" />
                  </div>
                </div>
                <div className="bg-white p-5 sm:p-8 mt-16 rounded-xl border-gray-300">
                  <button
                    onClick={handleBackClick}
                    className="flex items-center text-gray-600 mb-4"
                  >
                    <FaArrowLeft className="mr-2" />
                    <span>Back</span>
                  </button>
                  <div className="flex items-center gap-3 justify-center">
                    <img
                      src="/images/loan/eduPremium.svg"
                      className=""
                      alt="location"
                    />
                    <div className="flex flex-col text-primary gap-2">
                      <h4 className="text-[24px] font-semibold">EDU PREMIUM</h4>
                      <h4 className="text-[14px] max-w-[300px]">
                        For student without admission / school or eligible to
                        qualify for study loan{" "}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-center gap-6 py-4 sm:px-6 sm:py-6">
                    {tiers.map((tier, index: any) => (
                      <div
                        key={index}
                        className={`relative flex flex-col border justify-between px-3 sm:px-6 pt-4 pb-6 rounded-2xl  transition-all w-full md:w-1/3 cursor-pointer  hover:bg-green-500 hover:text-white ${
                          active === index ? "bg-green-500 text-white" : ""
                        }`}
                        onMouseEnter={() => setActive(index)}
                        onMouseLeave={() => setActive(null)}
                      >
                        <div>
                          <div className="flex justify-center">
                            {/* <img src={tier.img} alt={tier.img} /> */}
                          </div>
                          <h3
                            className={`text-lg font-bold border rounded-full sm:text-[16px] text-[10px] py-2 text-center ${
                              active === index
                                ? "text-white border-white"
                                : "border-primary text-primary"
                            }`}
                          >
                            {tier.name}
                          </h3>
                          {/* <p className={`text-[14px] text-center mt-2 ${active === index ? "text-white" : "text-[#5B5B5B]"}`}>{tier.description}</p> */}
                          <p
                            className={`text-[14px] text-center mt-4 ${
                              active === index ? "text-white" : "text-[#5B5B5B]"
                            }`}
                          >
                            {tier.details}
                          </p>
                          {/* <p className="  text-center mt-2">{tier.description}</p> */}
                          {/* <p className="text-[14px] mt-4 text-[#5E5B5B] ">{tier.details}</p> */}
                          <div className="mt-4">
                            {/* <ul className="mt-2 space-y-3">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                   {active === index ? (
            <img src="/images/loan/checkWhite.svg" alt={tier.img} />

                   ) : (
            <img src="/images/loan/checkGreen.svg" alt={tier.img} />

                   )} {benefit}
                  </li>
                ))}
              </ul> */}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <p className="text-xl font-bold text-center mt-4">
                            {tier.price}
                          </p>
                          <Link
                            to={tier.link}
                            onClick={() => {
                              if (tier.name === "Edupremium Plus") {
                                localStorage.setItem("eduPremiumPlus", tier.name);
                              }
                            }}
                          
                            className={` mt-6 text-center  font-bold py-2 px-4 rounded-full w-full hover:bg-gray-100 transition 
            ${
              active === index
                ? "bg-white text-primary"
                : "bg-primary text-white"
            } `}
                          >
                            Get started
                          </Link>
                        </div>
                      </div>
                    ))}
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

export default EduPremium;
