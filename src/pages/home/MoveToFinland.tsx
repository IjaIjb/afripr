import React from 'react'
import hero from "../../assets/new1.png";
import { Link } from 'react-router-dom';

const MoveToFinland = () => {
  return (
    <div>
                {/* Start Section */}
            <div className='bg-[#FFFFFF] flex justify-center items-start  md:pb-5' >
                <div
                    style={{
                        backgroundImage: `url(${hero})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    className='xl:max-w-[1280px] w-full'>
                    <section className='flex md:flex-row  flex-col-reverse sm:py-16'>
                        <div className='flex-1 flex-col justify-center items-start  hidden md:block'>
                            <img src="/images/home/new-hero.png" alt="hero" />
                        </div>

                        <div className='flex-1 flex   flex-col md:ml-[120px] ml-0 md:mt-[110px] mt-20 relative'>
                            <div className="md:flex flex-row w-full mt-5 md:mt-0">
                                <h1 className="flex-1 font-poppins font-bold md:text-[40px] text-[27px] text-black md:leading-[48px] leading-[38px]">
                                    Move to Finland through <br className="sm:block hidden" /> {" "}
                                    our different Educational
                                    <div
                                        className="md:w-[250px] md:h-[70px] w-[200px] h-[50px] rounded-[50%] 
                flex items-center justify-center 
                 border-[3px] border-[#FCD27C] font-bold">
                                        pathways
                                    </div>
                                </h1>
                            </div>
                            <div className='mt-3'>
                                <p className='font-poppins font-normal text-[#1B212F] md:text-[16px] text-[13px] md:leading-[23.85px] leading-[20px] max-w-[500px] mt-5'>Our programs are designed to prepare you for success in Finnish higher education and give you the skills and knowledge you need to thrive in the Finnish job market.</p>

                            </div>
                              <div className="flex justify-start">
          <Link to="/study-in-finnish" className="mt-6 bg-primary text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 hover:bg-green-700 transition">
           Check Programs
            <span className="text-xl">&#8594;</span>
          </Link>
        </div>
                            {/* <div className='mb-3 md:mt-10'>
                                <h3 className='text-[#1B212F] text-[14px] font-medium'><span className='text-[#1DB459]'>#1</span>African Path to Finnish Education</h3>
                            </div> */}
                        </div>
                    </section>
                </div>
            </div>
            {/* End Section */}
    </div>
  )
}

export default MoveToFinland