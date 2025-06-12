import React from 'react'

const Upskill = () => {
  return (
    <div>
                <section className="py-10  bg-white font-[\'Great Sailor\']">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-12">
      <div className="md:block hidden ">
          <img src="/images/home/upskill.svg" alt="Study Abroad Illustration" className="" />
        </div>
      <div className='relative'>
      {/* <h4 className="absolute text-[#000227]/[5%] md:text-[250px] text-[150px] font-[\'Great Sailor\'] -top-10">02</h4> */}
        <p className="text-[#000227]/[50%] text-  text-[20px]">Features</p>
        <h3 className="md:text-[36px] text-[20px] font-bold text-primary">Upskill Tech Courses</h3>
        <p className="text-[#333333] text-[14px] mt-4 max-w-[419px]">
        At AfriProEdu, we’re here to help you build the skills and seize the opportunities you need to succeed in today’s competitive job market. With our Upskill Tech Courses and Internships, we’re making it easier for you to turn your education into real-world success.
        </p>
        <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary/[70%]">
          Explore Tech Courses →
        </button>
      </div>
      <div className="flex justify-center md:hidden ">
          <img src="/images/home/upskill.svg" alt="Study Abroad Illustration" className="" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Upskill