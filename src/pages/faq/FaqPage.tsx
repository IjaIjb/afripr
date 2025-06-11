import React, { useState } from 'react'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import Faq from './Faq'
function FaqPage() {
 
  return (
    <>
    <Navbar/>
    <div className='pt-20' >
       {/* <!-- Start block --> */}
       <section className="block">
      <div className="mx-auto text-center pt-5 md:pt-16">
          <p className="hidden md:block text-[#000000] md:text-3xl px-6 font-semibold text-center">
            Frequently Asked <span className="text-[#48B774]">Questions</span>
          </p>
          <p className="block md:hidden text-[#000000] text-2xl px-6 font-semibold text-center">
            Frequently Asked{" "}
            <span className="text-[#48B774]">
              <br />
              Questions
            </span>
          </p>
        </div>

        <Faq />
       
      </section>

    <Footer/>
    </div>

    </>
  )
}

export default FaqPage