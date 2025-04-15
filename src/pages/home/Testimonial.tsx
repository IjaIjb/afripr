import React, { useRef, useState } from 'react'
// import { FaPlay } from "react-icons/fa";

const Testimonial = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // const togglePlayPause = () => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.pause();
  //     } else {
  //       videoRef.current.play();
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  return (
    <div>
         <section className=" py-12  ">
          <div className='md:flex justify-between'>
            <div className='flex md:justify-start justify-center'>
          <h2 className="text-green-600 md:text-start text-center md:max-w-[270px] leading-[60px] text-[40px] font-bold mb-6">Are you still in doubt?</h2>
          </div>
          <div className="flex md:justify-end justify-center">
            <div>
            <h4 className='max-w-[200px] text-center'>Here are some testimonials from our students</h4>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-600">
          See more reviews →
        </button>
        </div>
      </div>
          </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Testimonials */}
        <div className="space-y-4">
          {[1, 2].map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-left">
                <img
                  src="/images/home/star.png"
                  alt="Mariam Sandice"
                  className="S"
                />
              <p className="text-gray-700 mt-2">
                "Study for free in Finland and access world-class education by choosing AirProEdu. We will walk with you through every step of the process."
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="/images/home/mariam.png"
                  alt="Mariam Sandice"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">Mariam Sandice</p>
                  <p className="text-sm text-gray-500">University of Vancouver</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Center Student Card */}
        <div className="bg-white shadow-lg border-[3px] border-[#04B040]/[20%]  rounded-lg px-6 pb-6 pt-2 text-center">
          <span className="border border-primary text-primary px-4 py-1 text-sm rounded-full">Student</span>
          <div>
      <video ref={videoRef} className="h-[320px] mt-3 w-full" controls>
        <source src="images/testimonial1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <button
        onClick={togglePlayPause}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isPlaying ? "Pause" : "Play"}
      </button> */}
    </div>
          <h3 className="text-xl font-bold mt-4">William Sanju</h3>
          <p className="text-gray-500">University of Vancouver</p>
        </div>
        
        {/* Right Testimonials */}
        <div className="space-y-4">
          {[1, 2].map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-left">
             <img
                  src="/images/home/star.png"
                  alt="Mariam Sandice"
                  className="S"
                />
              <p className="text-gray-700 mt-2">
                "Study for free in Finland and access world-class education by choosing AirProEdu. We will walk with you through every step of the process."
              </p>
              <div className="flex items-center mt-4">
                <img
                                  src="/images/home/mariam.png"
                                  alt="Mariam Sandice"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-semibold">Mariam Sandice</p>
                  <p className="text-sm text-gray-500">University of Vancouver</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Button */}
    
    </section>
    </div>
  )
}

export default Testimonial