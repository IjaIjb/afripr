import React from 'react'
import Marquee from "react-fast-marquee";

const ConsultationAndPartner = () => {
  return (
    <div>
        
<section className='text-center'>
<h4 className='text-[56px] font-bold text-[#262626]'>Book a <span className='text-primary'>Free Consultation</span></h4>
<div className='flex justify-center'>
<h5 className='text-center max-w-[668px]'>
AfriProEdu offers free counseling sessions to help prospective students navigate their study-abroad plans. These sessions provide guidance on program selection, application processes, visa requirements, and adapting to life in Abroad
</h5>
</div>
<div className='flex mt-3 justify-center'>
<button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600">
          Consult with our expert →
        </button>
</div>
</section>





        <section className="  lg:px-16 p-3 ">
        <div className=" lg:block">
          <div className="flex justify-center pt-6">
            <div className="pb-6">
              <h5 className=" hidden lg:block text-[32px] text-center font-[600] text-gray-900 leading-7 ">
                Our Educational Partners
              </h5>
              <h5 className=" lg:hidden block text-center text-[26px]  font-semibold text-gray-900 leading-7 ">
                Our Educational Partners
              </h5>
{/* <div className="flex items-center gap-3">
              <img
                src="./images/logoerfg-removebg-preview.png"
                className=""
                alt="Afripro Logo"
              />
               
               
                </div> */}
            </div>
          </div>
          <div className=" w-full px-4 flex flex-col lg:flex-row lg:justify-between  bg-[#FBFBFC] border border-gray-100 rounded-lg shadow-md sm:p-8">
            {/* <div className=" lg:w-6/12">
              <hr className="w-20 h-2 mb-2 bg-[#48B774] border-0 rounded  " />
              <h5 className=" hidden lg:block text-[25px]  font-[500] text-gray-900 leading-7 ">
                Our Trusted Partners<br /> around
                the globe
              </h5>
              <h5 className=" lg:hidden block text-center text-[15px] pb-3  font-semibold text-gray-900 leading-7 ">
                Our Trusted Partners around
                the globe
              </h5>
            </div> */}
            <Marquee direction="right" speed={50}>
              <div className="flex flex-row items-center space-x-5 lg:space-x-10">
              
                {/* <img
                  src="/images/edusampo-logo.jpeg"
                  alt="paystack"
                  className="w-[150px]"
                /> */}
                {/* <img
                  src="/images/josa-removebg.png"
                  alt="josa"
                  className="w-[50%] lg:w-full"
                /> */}
              <a href="https://lab.fi/en/lab-separate-application" rel="noreferrer" target="_blank">
                <img
                  src="/images/lab-logo.svg"
                  alt="afripro"
                  className="w-full"
                />

</a>
<a href="/" target="_blank" rel="noreferrer">
          <img
                src="./images/logoerfg-removebg-preview.png"
                className="w-[160px] h-[20%] lg:h-[30%] lg:w-[200px]"

                alt="Afripro Logo"
              />

</a>
<a href="https://www.seamk.fi/en/" target="_blank" rel="noreferrer">
           <img
                  src="/images/f9c1a37a-seamk-logo-valkoinen.svg"
                  alt="finest-future"
                  className="lg:w-full lg:h-full w-[80%]"
                />

</a>
<a href="https://www.takk.fi/fi/etusivu" target="_blank" rel="noreferrer">
       <img
                  src="/images/takk-logo-removebg.png"
                  alt="takk"
                       className="w-full"
                />

</a>
<a href="https://www.uwasa.fi/fi" target="_blank" rel="noreferrer">
        <img
                  src="/images/vaasa.png"
                  alt="takk"
                      className="w-full"
                />

</a>
                <a  target="_blank" rel="noreferrer" href="https://www.lut.fi/fi">
                 <img
                  src="/images/lut1.png"
                  alt="takk"
                  className="lg:w-full lg:h-full w-[80%] lg:pr-5"
                />
                </a>
              </div>
            </Marquee>
        


          </div> 
        </div>

        {/* <div className=" block px-3">
          <div className="flex space-x-4 bg-white border border-gray-100 rounded-lg shadow-md p-4">

            <div>
              <hr className="w-20 h-2 mb-2 bg-[#48B774] border-0 rounded  " />
              <h5 className="mb-2 text-base font-semibold text-gray-900 ">
                Our Trusted Partners <br />
                around the globe
              </h5>
            </div>

            <div className="flex justify-center items-center" id="gallary">
              <img
                src="/images/edusampo-logo.jpeg"
                alt="hero"
                className="w-[150px] opacity-0"
              />
            </div>

          </div>
        </div> */}
      </section>
    </div>
  )
}

export default ConsultationAndPartner