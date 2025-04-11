import React, { useState } from 'react'
import Navbar from '../../component/Navbar'
import { Link } from 'react-router-dom';

const tiers = [
    {
      name: "EDU SILVER",
      img: "/images/loan/eduSilver.svg",
      description: "For student with admission letter",
      details:
        "This is for those with existing admission letters from schools. You can access the loan and find out if your school is among the schools we offer loan.",
      price: "Free plan",
      benefits: [
        "Check your school",
        "Check your country",
        "Check your course",
        "Check your admission",
      ],
      link: "/loan/edu-silver"
    },
    {
      name: "EDU GOLD",
      img: "/images/loan/eduGOld.svg",
      description: "For who is qualify to take loan in Edu Silver",
      details:
        "This is available for students who may already have been granted administrative or offer letter to access this service.",
      price: "Amount in your currency",
      benefits: ["Check your credit report", "Get loan"],
      link: "/loan/edu-gold"

    },
    {
      name: "EDU PREMIUM",
      img: "/images/loan/eduPremium.svg",
      description:
        "For student without admission / scholar eligible to qualify for display loan",
      details:
        "Student who do not have admission but have the document to get admission",
      price: "$450",
      benefits: ["Get everything in Edu Gold & Silver", "Gain admission", "Get loan"],
      link: "/loan/edu-premium"
    },
  ];
  
const LoanHome = () => {
    const [active, setActive] = useState(null);
  
  
  return (
    <div className="bg-gray-50">
    <Navbar />
    <div className=" mt-[140px]">
      <div className="flex w-full justify-center ">
        <div className="max-w-[2000px] relative mx-auto lg:px-14 px-3 w-full">
          <div className="flex justify-center">

<div>
    <div className='bg-primary rounded-[15px] pl-10'>
<div className='flex items-center justify-between'>
<div className='flex flex-col gap-2'>
<h3 className='text-white text-[36px]'>Study Loan Application</h3>
<h3 className='text-white text-[14px] max-w-[396px]'>Late on tuition fees? Struggling to raise funds or find a loan that works for global institutions? <span className='font-semibold'>AfriproEdu</span> got you covered!</h3>
</div>
<img src="/images/loan/loanHero.svg" alt="location" />

</div>
    </div>
          <div className="flex flex-col md:flex-row justify-center gap-6 p-6">
      {tiers.map((tier, index:any) => (
        <div
          key={index}
          className={`relative flex flex-col justify-between px-6 pb-6 rounded-2xl shadow-md transition-all w-full md:w-1/3 cursor-pointer border border-[#E0E0E0] hover:bg-green-500 hover:text-white ${
            active === index ? "bg-green-500 text-white" : "bg-white"
          }`}
          onMouseEnter={() => setActive(index)}
          onMouseLeave={() => setActive(null)}
        >
          <div>
            <div className='flex justify-center'>
            <img src={tier.img} alt={tier.img} />

                </div>
            <h3 className={`text-lg font-bold text-center ${active === index ? "text-white" : "text-primary"}`}>{tier.name}</h3>
            <p className={`text-[14px] text-center mt-2 ${active === index ? "text-white" : "text-[#5B5B5B]"}`}>{tier.description}</p>
            <p className={`text-[14px] mt-4 ${active === index ? "text-white" : "text-[#5B5B5B]"}`}>{tier.details}</p>
            {/* <p className="  text-center mt-2">{tier.description}</p> */}
            {/* <p className="text-[14px] mt-4 text-[#5E5B5B] ">{tier.details}</p> */}
            <p className="text-xl font-bold text-center mt-4">{tier.price}</p>
            <div className="mt-4">
              <p className="font-semibold text-[22px]">Package Benefit</p>
              <ul className="mt-2 space-y-3">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                   {active === index ? (
            <img src="/images/loan/checkWhite.svg" alt={tier.img} />

                   ) : (
            <img src="/images/loan/checkGreen.svg" alt={tier.img} />

                   )} {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to={tier.link}
                onClick={() => {
                  if (tier.name === "EDU GOLD") {
                    localStorage.removeItem("eduPremiumPlus");
                  }
                }} className={` mt-6 text-center  font-bold py-2 px-4 rounded-full w-full hover:bg-gray-100 transition 

            ${active === index ? "bg-white text-primary" : "bg-primary text-white" } `}>
            Get started
          </Link>
        </div>
      ))}
    </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoanHome