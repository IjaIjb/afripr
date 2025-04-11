import React from 'react'

const AccelerateYourStudy = () => {
  return (
    <div>
           <section className="py-16 px-8 bg-white font-[\'Great Sailor\']">
      <div className="text-center mb-8">
        <p className="text-green-600 font-semibold">What We Offer</p>
        <h2 className="text-3xl font-bold">Accelerate Your Study Abroad</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      <div className='relative'>
        <h4 className="absolute text-[#000227]/[5%] text-[250px] font-[\'Great Sailor\'] bottom-0">01</h4>
        <p className="text-[#000227]/[50%]  text-[20px]">Features</p>
        <h3 className="text-[36px] font-bold text-primary">Explore Global Institution</h3>
        <p className="text-[#333333] text-[14px] mt-4 max-w-[430px]">
        Discover endless possibilities with Afriproedu’s by exploring global Institutions. We help you find and connect with top schools worldwide, making your dream of studying abroad simpler and more achievable.
        </p>
        <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary/[70%]">
          Explore Courses →
        </button>
      </div>
        <div className="flex justify-center">
          <img src="/images/home/explore.svg" alt="Study Abroad Illustration" className="" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default AccelerateYourStudy