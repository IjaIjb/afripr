import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../component/Navbar'

const EmailVerificationSuccess = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)
  const [urlParams, setUrlParams] = useState<any>({})

  useEffect(() => {
    // Extract URL parameters
    const searchParams = new URLSearchParams(location.search)
    const params = {
      expires: searchParams.get('expires'),
      hash: searchParams.get('hash'),
      id: searchParams.get('id'),
      signature: searchParams.get('signature'),
    }
    setUrlParams(params)
    console.log('Email verification parameters:', params)

    // You can also send these parameters to your API for verification
    // Example: verifyEmailWithParams(params)

    // Start countdown timer
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          navigate('/sign-in')
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [location, navigate])

  // Optional: Function to verify email with API
  const verifyEmailWithParams = async (params: any) => {
    try {
      // Make API call here if needed
      // await api.verifyEmail(params)
      console.log('Verifying email with params:', params)
    } catch (error) {
      console.error('Error verifying email:', error)
    }
  }

  return (
    <div className='min-h-screen w-full bg-gray-100'>
      <div className='lg:p-3 p-2 min-h-screen bg-gray-100'>
        <div className="flex justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <Navbar />
            <div className='md:px-10'>
              <div className="flex justify-center lg:mt-[100px] mt-[50px]">
                {/* Left Section */}
                <div className="w-1/2 bg-[#1DB459] lg:flex hidden flex-col flex-grow items-center justify-center text-white p-8 rounded-l-3xl">
                  <div className="mb-8">
                    <img src="/logo.svg" alt="AfriProEdu Logo" className="h-10" />
                  </div>
                  <h2 className="text-3xl font-bold">Explore Global Institution</h2>
                  <img src="/images/home/explore.svg" alt="Study Abroad" className="w-[300px] h-[300px]" />
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 w-full bg-white flex flex-col flex-grow md:px-12 px-4 py-6 rounded-r-3xl shadow-md">
                  <div className="flex justify-center mt-20 items-center">
                    <div className="text-center">
                      <div className='flex justify-center mb-6'>
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <h2 className="text-[24px] font-bold text-[#1DB459] text-center mb-4">
                        Email Verified Successfully!
                      </h2>
                      <p className="text-[14px] text-[#494949] text-center mb-6 max-w-[400px] mx-auto">
                        Your email has been successfully verified. You will be redirected to complete your profile in {countdown} seconds.
                      </p>
                      
                      {/* Optional: Show loading bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                        <div 
                          className="bg-[#1DB459] h-2.5 rounded-full transition-all duration-1000" 
                          style={{ width: `${(countdown / 5) * 100}%` }}
                        ></div>
                      </div>

                      <button
                        onClick={() => navigate('/kyc')}
                        className="px-8 py-3 bg-[#1DB459] text-white rounded-full hover:bg-green-700 transition-colors"
                      >
                        Complete Profile Now
                      </button>
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

export default EmailVerificationSuccess