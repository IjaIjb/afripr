import React from "react";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";

const PsychometricTestHome = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
          <Navbar />
          <div className="flex md:flex-row flex-col justify-between md:mx-10 items-center gap-6 mt-[150px]">
            <div>
              <h4 className="text-primary text-[38px] font-bold max-w-[598px] capitalize">
                choose the right career path with our psychometric tests
              </h4>
              <h4 className="text-[#6C6C6C] text-[18px] max-w-[550px] mt-6">
                AfriProEdu’s Free Psychometric Test is here to help you choose
                the right career path, course, and institution based on your
                unique personality, skills, and aspirations This tool ensures
                your decisions are data-driven and aligned with your goals. Say
                goodbye to uncertainty and embrace clarity in your academic
                journey. Let us guide you toward a brighter future!
              </h4>
            </div>
            <div>
              <img src="/images/psycho/psychoHome.svg" alt="Logo" />
            </div>
          </div>

          <Link
            to="/psychometric-test/programs"
            className="flex justify-center mt-5"
          >
            <button className="bg-primary  hover:bg-green-700 text-white py-2 px-5 rounded-full font-medium">
              Proceed
            </button>
          </Link>
        </div>
      </div>
      <img src="/images/psycho/psychoLine.svg" className="w-full" alt="Logo" />
    </div>
  );
};

export default PsychometricTestHome;
