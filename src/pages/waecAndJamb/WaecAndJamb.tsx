import React from 'react'
import Navbar from '../../component/Navbar';
import { Link } from 'react-router-dom';

const WaecAndJamb = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="mt-[140px]">
        <div className="flex w-full justify-center">
          <div className="max-w-[2000px] relative mx-auto lg:px-14 px-3 w-full">
            <div className="flex justify-center">
              <div className="w-full">
                {/* Hero Section */}
                <div className='bg-primary rounded-[15px] p-10 mb-12'>
                  <div className='flex items-center justify-between'>
                    <div className='flex flex-col gap-2'>
                      <h3 className='text-white text-[36px] font-bold'>WAEC & JAMB Prep Test</h3>
                      <h3 className='text-white text-[14px] max-w-[396px]'>
                        Get access to expert-curated practice tests, past questions, and 
                        interactive tutorials to boost your exam success. Study smarter 
                        and ace your exams with confidence! 🎯
                      </h3>
                    </div>
                    <img src="/images/waec/waecAndJambHero.svg" alt="Exam preparation" className="h-[150px]" />
                  </div>
                </div>

                {/* Test Options Section */}
                <div className="grid md:grid-cols-2 justify-items-center gap-8 mb-12">
                  {/* JAMB Test Card */}
                  <div className="bg-white w-fit border rounded-lg p-6 shadow-sm flex flex-col items-center">
                    <div className="mb-4 w-32 h-32">
                      <img 
                        src="/images/waec/jamb-logo.svg" 
                        alt="JAMB Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3">JAMB Prep Test</h3>
                    <p className="text-[#5A5A72] max-w-[300px] text-[16px] text-center mb-5">
                      Get access to expert-curated practice tests, past questions, and interactive 
                      tutorials to boost your exam success. Study smarter and ace your exams with 
                      confidence! 🎯
                    </p>
                    <Link
                    to="/waec-and-jamb/start"
                     className="bg-primary text-white py-2 px-5 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors">
                      Get Started
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>

                  {/* WAEC Test Card */}
                  <div className="bg-white w-fit border rounded-lg p-6 shadow-sm flex flex-col items-center">
                    <div className="mb-4 w-32 h-32">
                      <img 
                        src="/images/waec/waec-logo.svg" 
                        alt="WAEC Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-center mb-3">WAEC Prep Test</h3>
                    <p className="text-[#5A5A72] max-w-[300px] text-[16px] text-center mb-5">
                      Get access to expert-curated practice tests, past questions, and interactive 
                      tutorials to boost your exam success. Study smarter and ace your exams with 
                      confidence!
                    </p>
                    <button className="bg-primary text-white py-2 px-5 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors">
                      Get Started
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaecAndJamb