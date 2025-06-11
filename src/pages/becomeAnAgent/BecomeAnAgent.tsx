import React from 'react'
import businessBanner from "../../assets/business-man-banner.png";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import LoadingSpinner from '../../component/UI/LoadingSpinner';
import Footer from '../../component/Footer';

function BecomeAnAgent() {
  const [userData, setUserdata] = React.useState<any>({
    "full_name": "",
    'location' : "",
    'company_name': "",
    'company_id': "",
    'company_website': "",
    'company_email': "",
    'password': "",
    'company_phone_number': "",
    'social_media_instagram': " ",
    'social_media_twitter': " "
  });
  const [loader, setLoader] = React.useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserdata({ ...userData, [name]: value });
  };

  const handleInput = (event:any) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z]*$/; // Regular expression to match alphabetic characters only

    if (!regex.test(value)) {
      event.target.value = value.replace(/[^a-zA-Z]/g, ''); // Remove any non-alphabetic characters
    }
  };

  const handleSubmit = (e:any) => {
      e.preventDefault();
    //   setLoader(true)
    const formData = new FormData()
    formData.append('full_name', userData?.full_name)
    formData.append('location', userData?.location)
        formData.append('company_name', userData?.company_name)
        formData.append('company_id', userData?.company_id)
        formData.append('company_website', userData?.company_website)
        formData.append('company_email', userData?.company_email)
        formData.append('company_phone_number', userData?.company_phone_number)
        formData.append('password', userData?.password)
        formData.append('company_social_plarforms', userData?.social_media_instagram)
        formData.append('social_media_twitter', userData?.social_media_twitter)
  
    //     AuthApis.createAgent(formData).then(
    //       (response: any) => {
    //           if (response?.data) {
    //               if (response?.data?.success) {
    //                   console?.log(response?.data)
    //   setLoader(false)

    //                   toast.success(response?.data?.message)
    //                   navigate('/email-verify');
    //                   setUserdata([])
    //                   // window.location.replace('/');
    //               }else{
    //                 // console?.log(response?.data)

    //                 setLoader(false)
    //                 toast.warn('something went wrong')
    //               }
    //           } else {
    //             // console?.log(response?.data)
    //             setLoader(false)

    //               // toast.warn('Invalid Login Credentials');
    //               toast.warn('something went wrong')

    //           }
    //       }
    //   ).catch(function (error) {
    //       // handle error
    //       setLoader(false)

    //   })
  }

  return (
    <div>
      <Navbar />

      <section className=''>
        <div
          style={{
            backgroundImage: `url(${businessBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className=" lg:px-14 md:pb-24 pb-10 md:pt-16 md:mx-auto px-6 flex flex-col md:flex-row md:justify-between lg:space-x-14 relative"
        >
          <div className='md:w-6/12 mt-24'>
            <h1 className='text-white md:text-[60px] text-[40px] font-bold'>Partner with Us <br />and enjoy great<br /> benefits</h1>
            <p className='text-white font-light mt-3'>Together we could achieve a lot and realize the <br />dreams of millions of African students. </p>
          </div>

          <div className='md:w-6/12'>
            <form onSubmit={handleSubmit}>
              <div className='bg-white mt-[70px] p-6 border border-[#C4C4C4] rounded-[20px]'>
              <div className="mb-6 w-full md:px-4 mt-5">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                    Full Name
                  </label>
                  <input
                    type="text"

                    className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3 rounded-[10px]"
                    placeholder=""
                    name="full_name"
                    onChange={handleChange}
                    onInput={handleInput}

                    required
                  />
                </div>
                <div className="mb-6 w-full md:px-4">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                    Location
                  </label>
                  <input
                    type="text"

                    className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3 rounded-[10px]"
                    placeholder=""
                    name="location"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6 w-full md:px-4">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                    Company's Registered Name
                  </label>
                  <input
                    type="text"

                    className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3 rounded-[10px]"
                    placeholder=""
                    name="company_name"
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="mb-6 w-full md:px-4">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                    Company Registered ID
                  </label>
                  <input
                    type="text"
                    className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3 rounded-[10px]"
                    placeholder=""
                    name="company_id"
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="mb-6 w-full md:px-4">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                    Company Website
                  </label>
                  <input
                    type="text"

                    className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3 rounded-[10px]"
                    placeholder=""
                    name="company_website"
                    onChange={handleChange}
                    
                  />
                </div>
                <div className="mb-6 w-full md:px-4">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                    Company's Email Address
                  </label>
                  <input
                    type="text"
                    className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3 rounded-[10px]"
                    placeholder=""
                    name="company_email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6 w-full md:px-4">
                  <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                    Company's Phone Number
                  </label>
                  <input
                    type="number"
                    onChange={handleChange}
                    className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3 rounded-[10px]"
                    placeholder=""
                    name="company_phone_number"

                    required
                  />
                </div>
                <div className="mb-6 w-full md:px-4">
                <label className="block mb-2 text-sm font-semibold text-[#0A2E04]">
                  Password
                </label>
                <input
                  type="password"
                  className=" border border-[#D9D9D9] text-[#333333] text-sm block w-full p-3 rounded-[10px]"
                  placeholder=""
                  onChange={handleChange}
                  name="password"

                  required
                />
              </div>


                <div className='md:px-4 flex justify-center'>
                  <button
                    type="submit"
disabled={loader}
                    className="disabled:bg-gray-500 text-white bg-[#1DB459] rounded-[10px] font-medium text-sm md:px-6 px-3 md:py-3 py-2.5 mb-2"
                  >
                   {loader ? <LoadingSpinner /> : "Register"}
                  </button>
                </div>
                <p className="text-center text-xs font-semibold">
                  Already have an account?{" "}
                  <NavLink to="/become-an-agent-login">
                    <span className="text-[#48B774] cursor-pointer font-bold">log in</span>
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
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
      </section>
      <Footer />

     
    </div>
  )
}

export default BecomeAnAgent;