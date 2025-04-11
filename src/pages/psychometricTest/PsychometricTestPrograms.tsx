import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AdminApis } from "../../apis/adminApi/adminApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PsychometricTestPrograms = () => {
  const navigate = useNavigate();
  const [programTypes, setProgramTypes] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch program types on component mount
  useEffect(() => {
    fetchProgramTypes();
  }, []);

  const fetchProgramTypes = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await AdminApis.getProgramType();
      if (response?.data?.records) {
        setProgramTypes(response.data.records);
        console.log(response.data.records);
      }
    } catch (error) {
      console.error("Error fetching program types:", error);
      toast.error("Failed to load program types");
    } finally {
      setLoading(false);
    }
  };
   
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  // Map program type to display title
  const getProgramTitle = (type: string) => {
    switch(type.toLowerCase()) {
      case 'bsc':
        return "Bachelor's Degree";
      case 'masters':
        return "Master's Degree";
      case 'phd':
        return "PhD";
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  // Map program type to description
  const getProgramDescription = (type: string) => {
    switch(type.toLowerCase()) {
      case 'bsc':
        return "This test provides personalized recommendations for fields of study and institutions that align with your goals and abilities.";
      case 'masters':
        return "This test evaluates your skills, interests, and career goals to recommend specialized fields of study and top institutions.";
      case 'phd':
        return "This test evaluates your research interests, academic strengths, and long-term career goals to recommend fields of study and institutions.";
      default:
        return "Take this psychometric test to get personalized recommendations for your educational journey.";
    }
  };

  // Map program type to image
  const getProgramImage = (type: string) => {
    switch(type.toLowerCase()) {
      case 'bsc':
        return "/images/psycho/bachelorPsycho.png";
      case 'masters':
        return "/images/psycho/mastersPsycho.png";
      case 'phd':
        return "/images/psycho/phdPsycho.png";
      default:
        return "/images/psycho/bachelorPsycho.png";
    }
  };

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="mt-[130px] flex justify-center items-center h-[60vh]">
          <div className="text-center">
          <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            </div>
            <p className="mt-2">Loading programs...</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
          <Navbar />

          <div className=" mt-[140px]">
            <div className="flex justify-between mb-4">
              <button
                type="button"
                onClick={handleBackClick}
                className="flex items-center gap-1 text-gray-600 mb-4"
              >
                <FaArrowLeft className="" />
                <h4>Back</h4>
              </button>
              <h5 className="text-primary text-[20px] md:text-[32px] font-semibold ">Which program are you interested in?</h5>
              <div></div>
            </div>
            <div className="flex items-center mb-4">
              {/* <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "20%" }}></div>
              </div> */}
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mt-8 mb-20 md:grid-cols-2">
              {programTypes.map((program: any) => (
                <div 
                  key={program.id} 
                  className="border-b-[5px] border-b-[#1DB459] px-6 pt-16 pb-8 rounded-[10px] shadow-lg border border-[#E5E5E5] flex flex-col justify-between h-full"
                >
                  <div className="flex justify-center">
                    <img src={getProgramImage(program.program_type)} alt={getProgramTitle(program.program_type)} className="" />
                  </div>
                  <h4 className="text-center text-[#1B1C1E] text-[22px] font-medium py-3">
                    {getProgramTitle(program.program_type)}
                  </h4>
                  <div className="flex justify-center text-center pb-9">
                    <h5 className="text-[#5A5A72] text-center text-[16px]">
                      {getProgramDescription(program.program_type)}
                    </h5>
                  </div>
                  <div className="flex justify-center mt-auto">
                  <Link 
                      to={`/psychometric-test/${program.program_type.toLowerCase()}`}
                      state={{ programId: program.id }}
                      className="bg-primary hover:bg-green-700 items-center gap-2 flex justify-center pl-3 py-2 pr-2 rounded-full"
                    >
                      <h4 className="text-[14px] text-white">Take test now</h4>
                      <img src="/images/psycho/arrowRight.png" alt="arrow right" className="" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychometricTestPrograms;