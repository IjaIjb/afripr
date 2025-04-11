import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import { FaArrowLeft } from 'react-icons/fa6';

const PsychometricTestPhd = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const programId = location.state?.programId;
    const handleBackClick = () => {
      navigate(-1); // Go back to the previous page
  };
  return (
    <div>
              <div className="flex justify-center">
        <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
          <Navbar />


          <div className=" mt-[140px] mb-8">
          <div className="flex justify-between mb-4">
          <button
                    type="button"
                    onClick={handleBackClick}
                    className="flex items-center gap-1 text-gray-600 mb-4"
                  >
                    <FaArrowLeft className="" />
                    <h4>Back</h4>
                  </button>
<h5 className="text-primary text-[20px] md:text-[32px] font-semibold ">PhD Psychrometric Test</h5>
                  <div></div>
          </div>

          <div className="border-b-[5px] border-b-[#1DB459] px-6 pt-16 pb-8 rounded-[10px] shadow-lg border border-[#E5E5E5] flex flex-col justify-between h-full">
            <div className="flex justify-center">
              <img src="/images/psycho/mastersPsycho.png" alt="/" className="" />
            </div>
            <h4 className="text-center text-[#1B1C1E] text-[22px] font-medium py-4">PhD</h4>
            <div className="flex justify-center text-center pb-9">
              <h5 className="text-[#5A5A72] text-center max-w-[1016px] text-[16px]">The Afriproedu Psychometric Test is designed to assess your interests, skills, personality traits, values, and academic aspirations, providing personalized course and career recommendations tailored to your strengths and goals. The test takes approximately 20–30 minutes to complete, and upon completion, you will receive data-driven insights and tailored suggestions to help you confidently choose the right academic path and institution for your future.</h5>
            </div>
            <div className="flex justify-center mt-auto">
              <Link 
              to="/psychometric-test/phd/questions" 
              state={{ programId }}
              className="bg-primary  hover:bg-green-700 items-center gap-2 flex justify-center pl-3 py-2 pr-2 rounded-full">
                {/* <FaAngleRight className="text-white w-8 h-8" /> */}
                <h4 className="text-[14px] text-white ">Take test now</h4>
                <img src="/images/psycho/arrowRight.png" alt="" className="" />
              </Link>
            </div>
          </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default PsychometricTestPhd