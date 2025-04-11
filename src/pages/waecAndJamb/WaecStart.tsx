import React from 'react'
import Navbar from '../../component/Navbar';

const WaecStart = () => {
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

          
      {/* Process Steps Section with Full Semi-Elliptical Cards */}
      <div className="grid md:grid-cols-3 gap-5 mb-16">
                  {/* Step 1 Card */}
                  <div className="relative">
                    {/* The main container with overflow hidden for the semi-ellipse effect */}
                    <div className="overflow-hidden rounded-lg shadow-sm h-[200px]">
                      {/* Top semi-elliptical colored section */}
                      <div className="h-[100px] bg-[#EBF1F4] w-full relative">
                        {/* The actual semi-ellipse created with a circle that's half-shown */}
                        <div className="absolute -bottom-[10px] left-1/2 transform -translate-x-1/2 w-[200%] h-[80px] bg-[#EBF1F4] rounded-[50%]"></div>
                        {/* Icon centered in the colored section */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <img 
                            src="/images/waec/complete.png" 
                            alt="Complete Test Icon" 
                            className=" object-contain"
                          />
                        </div>
                      </div>
                      {/* Bottom white content section */}
                      <div className="h-[100px] bg-white w-full pt-9 px-4">
                        <h3 className="text-lg font-semibold text-center mb-1">Complete the Test</h3>
                        <p className="text-[#5A5A72] text-[14px] text-center">
                          Be yourself and answer honestly to find out your preferred type
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 Card */}
                  <div className="relative">
                    {/* The main container with overflow hidden for the semi-ellipse effect */}
                    <div className="overflow-hidden rounded-lg shadow-sm h-[200px]">
                      {/* Top semi-elliptical colored section */}
                      <div className="h-[100px] bg-[#F5F2E7] w-full relative">
                        {/* The actual semi-ellipse created with a circle that's half-shown */}
                        <div className="absolute -bottom-[10px] left-1/2 transform -translate-x-1/2 w-[200%] h-[80px] bg-[#F5F2E7] rounded-[50%]"></div>
                        {/* Icon centered in the colored section */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <img 
                            src="/images/waec/view-result-icon.png" 
                            alt="View Result Icon" 
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>
                      {/* Bottom white content section */}
                      <div className="h-[100px] bg-white w-full pt-9 px-4">
                        <h3 className="text-lg font-semibold text-center mb-1">View detailed result</h3>
                        <p className="text-[#5A5A72] text-[14px] text-center">
                          Explore the final results after completing the test
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 Card */}
                  <div className="relative">
                    {/* The main container with overflow hidden for the semi-ellipse effect */}
                    <div className="overflow-hidden rounded-lg shadow-sm h-[200px]">
                      {/* Top semi-elliptical colored section */}
                      <div className="h-[100px] bg-[#F0EBF8] w-full relative">
                        {/* The actual semi-ellipse created with a circle that's half-shown */}
                        <div className="absolute -bottom-[10px] left-1/2 transform -translate-x-1/2 w-[200%] h-[80px] bg-[#F0EBF8] rounded-[50%]"></div>
                        {/* Icon centered in the colored section */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <img 
                            src="/images/waec/start-application-icon.png" 
                            alt="Start Application Icon" 
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>
                      {/* Bottom white content section */}
                      <div className="h-[100px] bg-white w-full pt-9 px-4">
                        <h3 className="text-lg font-semibold text-center mb-1">Start application</h3>
                        <p className="text-[#5A5A72] text-[14px] text-center">
                          You can start application after choosing the right program
                        </p>
                      </div>
                    </div>
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

export default WaecStart