import React from 'react'
import Navbar from '../../component/Navbar'
import { Link } from 'react-router-dom'

const VerifyEmail = () => {
  return (
    <div>
    <div className='min-h-screen w-full bg-gray-100'>
<div className='lg:p-3 p-2 min-h-screen bg-gray-100'>
<div className="flex justify-center">
  <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
    <Navbar />
    <div className='md:px-10'>
    <div className="flex justify-center mt-[100px]">
      {/* Left Section */}
      <div className="w-1/2 bg-[#1DB459] flex flex-col flex-grow items-center justify-center text-white p-8 rounded-l-3xl">
        <Link to={"/"}>
          <img src="/logo.svg" alt="Logo" />
        </Link>
        <h2 className="text-3xl font-bold">Explore Global Institution</h2>
        <img src="/images/home/explore.svg" alt="Study Abroad" className="w-[300px] h-[300px]" />
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col flex-grow px-12 py-6 rounded-r-3xl shadow-md">

  <div className="flex justify-center mt-20 items-center">
    <div>
 <div className='flex justify-center'>
<img src='/images/verifyEmail.svg' alt='' />
</div>
<h2 className="text-[24px] font-bold text-primary text-center">Check Your Mail</h2>

  <h2 className="text-[12px] max-w-[302px] text-[#494949] text-center">Check your email address for instructions verification of your email</h2>
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

export default VerifyEmail