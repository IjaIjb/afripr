import React from 'react'

const PsychometricHome = () => {
  return (
    <div>
           <section className="py-16 bg-white font-[\'Great Sailor\']">
    
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      <div className='relative'>
      <h4 className="absolute text-[#000227]/[5%] md:text-[250px] text-[150px] font-[\'Great Sailor\'] -top-10">03</h4>
        <p className="text-[#000227]/[50%]  text-[20px]">Features</p>
        <h3 className="md:text-[36px] text-[20px] font-bold text-primary">Psychrometric Test</h3>
        <p className="text-[#333333] text-[14px] mt-4 max-w-[430px]">
        Our Psychometric test is here to help you find the perfect schools, courses, and career paths that align with your personality, interests, and strengths. With personalized recommendations based on your unique profile, you can make confident, data-driven decisions about your future.
        </p>
        <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary/[70%]">
         Try Our Psychometric Test →
        </button>
      </div>
        <div className="flex justify-center">
          <img src="/images/home/psychometricHome.svg" alt="Study Abroad Illustration" className="" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default PsychometricHome