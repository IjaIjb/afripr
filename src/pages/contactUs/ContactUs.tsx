import React from "react";
import { NavLink } from "react-router-dom";

import vocational from "../../assets/revamp-vocal-bg.png";

import { ToastContainer, toast } from 'react-toastify';
import Navbar from "../../component/Navbar";
import { icontypesEnum, SvgElement } from "../../component/assets/svgElement";
import Footer from "../../component/Footer";

const location = {
  address: 'Lautect Ogbomoso',
  lat: 8.142165,
  lng: 4.245186,
} // our location object from earlier

function ContactUs() {
  const [userData, setUserdata] = React.useState<any>({
    "f_name": "",
    'l_name': "",
    'email': "",
    'phone_number': " ",
    'contact_reason': "",
    'message': "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userData, [name]: value });
  };

  const handleSubmit = React.useCallback(
    (e: any) => {
        e.preventDefault();
    const formData = new FormData()
    formData.append('f_name', userData?.f_name)
    formData.append('l_name', userData?.l_name)
    formData.append('email', userData?.email)
    formData.append('phone_number', userData?.phone_number)
    formData.append('request', userData?.contact_reason)
    formData.append('message', userData?.message)

    // AuthApis.contactInfo(formData).then(
    //   (response: any) => {
    //     if (response?.data) {
    //       toast.success(response?.data?.message);
    //     }
    //   }
    // ).catch((err) => {
    //   if (err?.response?.status == 422) {
    //     toast.error('Form not rightly filled. Kindly Cross check.');
    //   } else {
    //     toast.error('Some error occured.Please try again');
    //   }
    // })
  },[userData]
  )

  return (
    <>
      <Navbar />
      {/* <!-- Start block --> */}

      <section
        style={{
          backgroundImage: `url(${vocational})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" body-font font-poppins  lg:text-left md:pt-20">
        <div className="lg:mx-16 md:mx-6 mt-16 pr-8 pb-8 pt-4  p-6">
          <div className="flex flex-col lg:flex-row lg:justify-between max-w-screen-xl md:pr-7 pr-4 pt-8">
            <div>
              <img src="/images/contact-us.svg" alt="location" className=" rounded-tl-[20px]" />

            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full  ">
              <div className="flex-auto md:px-10 py-10 pt-3">
                <div className="lg:px-4">
                  <h1 className="text-[#171717] md:text-3xl text-2xl font-semibold">Get in Touch with Us</h1>
                  <p className="text-xs text-[#838383] my-5">We are ready to help you in any way possible fo a smoother and easier learning process.</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 lg:pl-4">
                      <div className="relative w-full mb-6">
                        <label
                          className="block text-[#666666] text-sm font-medium mb-2"
                          htmlFor="grid-password"
                        >
                          First name*
                        </label>
                        <input
                          type="text"
                          required
                          name ='f_name'
                          className="  border border-[#B3B3B3] text-[#333333] text-sm rounded-lg block w-full p-3 placeholder-[#5A6474] ease-linear transition-all duration-150"
                          placeholder=""
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 lg:pl-4">
                      <div className="relative w-full mb-6">
                        <label
                          className="block text-[#666666] text-sm font-medium mb-2"
                          htmlFor="grid-password"
                        >
                          Last name*
                        </label>
                        <input
                          type="text"
                          className="  border border-[#B3B3B3] text-[#333333] text-sm rounded-lg block w-full p-3 placeholder-[#5A6474] ease-linear transition-all duration-150"
                          placeholder=""
                          required
                          name ='l_name'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 lg:px-4">
                      <div className="mb-6 ">
                        <label className="block mb-2 text-sm font-medium text-[#666666]">
                          Email address*
                        </label>
                        <input
                          type="email"
                          className=" border border-[#B3B3B3] text-[#333333] text-sm rounded-lg block w-full p-3"
                          placeholder=""
                          name ='email'
                          onChange={handleChange}
                          required

                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 lg:pl-4">
                      <div className="relative w-full mb-6">
                        <label
                          className="block text-[#666666] text-sm font-medium mb-2"
                          htmlFor=""
                        >
                          Phone Number(Optional)
                        </label>
                        <input
                          type="number"
                          className="  border border-[#B3B3B3] text-[#333333] text-sm rounded-lg block w-full p-3 placeholder-[#5A6474] ease-linear transition-all duration-150"
                          placeholder=""
                          name ='phone_number'
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-6/12 lg:pl-4">
                      <div className="relative w-full mb-6">
                        <label
                          className="block text-[#666666] text-sm font-medium mb-2"
                          htmlFor=""
                        >
                          What are you Requesting for?
                        </label>
                        <select id="contact-reason"
                          onChange={handleChange}
                          required
                          name="contact_reason"
                          className=" border border-[#D9D9D9] text-[#333333] text-sm rounded-lg  block w-full py-3 px-2.5">
                          <option selected>Choose a Category</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Feedback and Suggestions">Feedback and Suggestions</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full lg:w-12/12 lg:px-4">
                      <div className="mb-6 ">

                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#666666] ">Message</label>
                        <textarea id="message"
                          rows={4}
                          required
                          name ='message'
                          onChange={() => handleChange}
                          className="block p-2.5 w-full text-sm text-[#333333]  rounded-md border border-[#B3B3B3]" placeholder=""></textarea>

                      </div>
                    </div>
                    <div className="lg:pl-4">
                      <button
                        type="submit"
                        className="py-2.5 px-6  text-sm font-medium text-white bg-[#48B774] rounded-lg "
                      >
                        Get In Touch
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between max-w-screen-xl md:px-10">
            <div className="border-l-2 border-[#D9D9D9]">
              <h1 className="pl-2 text-sm text-[#000000] font-semibold">Location</h1>
              <p className="pl-2 text-xs text-[#666666] mt-1">Lotankatu 3 , Espoo Finland.</p>
              <p className="pl-2 text-xs text-[#666666] mt-1">3, Samuel Ajakaiye, Lagos Nigeria.</p>
            </div>
            <div className="border-l-2 border-[#D9D9D9] mt-3 lg:mt-0">
              <h1 className="pl-2 text-sm text-[#000000] font-semibold">Email</h1>
              <p className="pl-2 text-xs text-[#666666] mt-1">hello@afriproedu.com</p>
            </div>
            <div className="border-l-2 border-[#D9D9D9] mt-3 lg:mt-0">
              <h1 className="pl-2 text-sm text-[#000000] font-semibold">Telephone</h1>
              <p className="pl-2 text-xs text-[#666666] mt-1">+358 41 588 99 99 </p>
              <p className="pl-2 text-xs text-[#666666] mt-1">+234 701 233 0629</p>
              <p className="pl-2 text-xs text-[#666666] mt-1">+234 813 147 0992</p>
                                                                 
            </div>
            <div className="border-l-2 border-[#D9D9D9] mt-3 lg:mt-0">
              <h1 className="pl-2 text-sm text-[#000000] font-semibold">Office Hours</h1>
              <p className="pl-2 text-xs text-[#666666] mt-1">09:00 - 16: 00 EET</p>
              <p className="pl-2 text-xs text-[#666666] mt-1">09:00 AM - 6: 00 PM WAT</p>
            </div>
            <div className="border-l-2 border-[#D9D9D9] mt-3 lg:mt-0">
              <h1 className="pl-2 text-sm text-[#000000] font-semibold">Follow us</h1>
              <div className="flex space-x-2 pl-2 mt-1">
                <NavLink to="https://twitter.com/afriproedu?s=21&t=A8e-6qmPz4A32mqYaoclXA" target={"_blank"} className="text-gray-500 hover:text-gray-900 mt-1">
                  <SvgElement type={icontypesEnum.TWITTER} />
                </NavLink>
                <NavLink to="https://www.facebook.com/AfriProEdu?mibextid=ZbWKwL" target={"_blank"} className="text-gray-500 hover:text-gray-900">
                  <SvgElement type={icontypesEnum.FACEBOOK} />
                </NavLink>
                <NavLink to="https://instagram.com/afriproedu?igshid=YmMyMTA2M2Y=" target={"_blank"} className="text-gray-500 hover:text-gray-900">
                  <SvgElement type={icontypesEnum.INSTAGRAM} />
                </NavLink>
                <NavLink to="https://www.linkedin.com/company/afriproedu/" target={"_blank"} className="text-gray-500 hover:text-gray-900">
                  <SvgElement type={icontypesEnum.LINKEDIN} />
                </NavLink>
              </div>
            </div>

          </div>
        </div>
        {/* <div className="mx-16 mt-6 pr-8 pb-8 pt-4">
            
            <Map location={location} zoomLevel={17}/>
        </div> */}
      </section>

      {/* <!-- End block --> */}
      <section>
        <Footer />
      </section>

      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </>
  )
}
export default ContactUs;