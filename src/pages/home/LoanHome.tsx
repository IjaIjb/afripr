import React from 'react'

const LoanHome = () => {
  return (
    <div>
                   <section className="py-16 px-8 bg-white font-[\'Great Sailor\']">
    
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    <div className='relative'>
      <h4 className="absolute text-[#000227]/[5%] text-[250px] font-[\'Great Sailor\'] bottom-0">05</h4>
      <p className="text-[#000227]/[50%]  text-[20px]">Features</p>
      <h3 className="text-[36px] font-bold text-primary">Global Study Loan</h3>
      <p className="text-[#333333] text-[14px] mt-4 max-w-[430px]">
      Late on tuition fees? Struggling to raise funds or find a loan that works for global institutions? AfriProEdu’s Global Study Loan offers flexible funding, competitive interest rates, and access to top schools worldwide, ensuring nothing stands between you and your education dreams!
      </p>
      <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary/[70%]">
       Apply For Study Loan →
      </button>
    </div>
      <div className="flex justify-center">
        <img src="/images/home/loan.svg" alt="Study Abroad Illustration" className="" />
      </div>
    </div>
  </section>
    </div>
  )
}

export default LoanHome