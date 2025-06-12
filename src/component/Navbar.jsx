import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserApis } from "../apis/userApi/userApi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [moreExpanded, setMoreExpanded] = useState(false);
  const [studyProgramsExpanded, setStudyProgramsExpanded] = useState(false);
  const userLoginData = useSelector((state) => state.data.login.value);

  React.useEffect(() => {
    if (userLoginData?.data?.id) {
      UserApis.getUserById(userLoginData.data.id)
        .then((response) => {
          if (response?.data) {
            setUserData(response?.data)
          }
        })
        .catch(function (error) {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userLoginData]);

  return (
    <div className="fixed lg:left-[50px] left-[5px] right-[5px] top-6 z-[100] lg:right-[50px]">
      <nav className="flex relative bg-primary w-full items-center py-2 justify-between z-50 rounded-full lg:pr-6">
        <Link to={"/"}>
          <img src="/logo.svg" className="" alt="/" />
        </Link>
        <div className="lg:hidden flex items-center lg:pl-1  pr-3">
        {userLoginData.email !== "" ? (
                 <Link to="/sign-up" className="text-[#263238] flex gap-2 items-center hover:bg-green-100 bg-white rounded-full py-2 px-3">
              <h5>{userData?.first_name}</h5>
              {userData?.gender === "Male" ? (
              <img src="/images/avatar.svg" className="w-7 h-7" alt="" />
              ) : (
              <img src="/images/avatar1.svg" className="w-7 h-7" alt="" />

              )}
            </Link>
                ) : (
                  <Link to="/sign-up" className="flex items-center justify-center gap-1 bg-white text-[#333333] rounded-full py-1.5 px-4 shadow-md border border-gray-100">
                    <span className="text-sm whitespace-nowrap font-medium">Apply now</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="10" cy="10" r="10" fill="#1DB459"/>
                      <path d="M9.41003 13.8832L13.2934 9.99986L9.41003 6.11652" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                )}
                
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-gray-100"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24 bg-transparent"
                className="bg-transparent text-white"
              >
                <path
                  fill="#ffffff"
                  d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="bg-transparent"
              >
                <path
                  fill="#ffffff"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="lg:flex hidden z-50 gap-6">
          <Link
            to={"/about-us"}
            className="relative z-50"
          >
            <h5 className="text-white cursor-pointer font-semibold text-[14px]">
          About Us
            </h5>
          </Link>

          {/* Study Programs Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className="flex items-center space-x-1 text-white cursor-pointer text-[14px]"
              >
                <h5 className="cursor-pointer font-semibold text-[14px]">Study Programs</h5>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Menu.Button>
            </div>

            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute left-0 mt-2 w-80 bg-white text-gray-800 shadow-lg rounded-lg py-2 overflow-hidden"
              >
                <div className="space-y-2 p-2">
                  <Link to="/study-in-finnish" className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-blue-500">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h6 className="text-gray-800 font-semibold text-[14px]">Study in Finnish</h6>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        Learn the Finnish language and study in Finland for free (18+).
                      </p>
                    </div>
                  </Link>
                  
                  <Link to="/study-in-english" className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="text-green-500">
                        <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h6 className="text-gray-800 font-semibold text-[14px]">Study in English</h6>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        Study in English in Finland. This pathway entails paying Tuition fees.
                      </p>
                    </div>
                  </Link>

                  {/* <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link to="/explore-programs" className="flex items-center gap-2 p-3 hover:bg-gray-50 rounded-lg text-center justify-center">
                      <span className="text-primary font-medium text-[14px]">View All Programs</span>
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div> */}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Link
            to={"/"}
            className="relative"
          >
            <h5 className="text-white cursor-pointer font-semibold text-[14px]">
        Upskill
            </h5>
          </Link>

          <Link
            to={"/consultation"}
            className="relative"
          >
            <h5 className="text-white cursor-pointer font-semibold text-[14px]">
         Book Free Consultation
            </h5>
          </Link>

          <Link
            to={"/loan"}
            className="relative"
          >
            <h5 className="text-white cursor-pointer font-semibold text-[14px]">
         Study Loan
            </h5>
          </Link>
       
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className="flex items-center space-x-1 text-white cursor-pointer text-[14px]"
              >
                <h5 className="cursor-pointer font-semibold text-[14px]">More</h5>
              </Menu.Button>
            </div>

            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className="absolute left-0 mt-2 w-64 bg-white text-gray-800 shadow-lg rounded-lg py-2 overflow-hidden"
              >
                <div className="space-y-3 p-2">
                  <Link to="/become-agent" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 flex items-center justify-center bg-pink-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-pink-500">
                        <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-gray-800 font-medium">Become an agent</h6>
                      <p className="text-xs text-gray-500">Refer, get commission and unlimited access</p>
                    </div>
                  </Link>
                  
                  <Link to="/waec-jamb" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-indigo-500">
                        <path fill="currentColor" d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-gray-800 font-medium">Waec & Jamb</h6>
                      <p className="text-xs text-gray-500">Take a test in preparation of your examination</p>
                    </div>
                  </Link>
                  
                  <Link to="/faq" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-green-500">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-gray-800 font-medium">FAQ</h6>
                      <p className="text-xs text-gray-500">Answers to questions you might have</p>
                    </div>
                  </Link>
                  
                  <Link to="/blog" className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 flex items-center justify-center bg-orange-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-orange-500">
                        <path fill="currentColor" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                        <path fill="currentColor" d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-gray-800 font-medium">Blog</h6>
                      <p className="text-xs text-gray-500">Follow up with news and updates</p>
                    </div>
                  </Link>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="lg:flex hidden gap-4 items-center">
          <img src="/images/bookmark.svg" className="w-7 h-7" alt="" />
          
          {userLoginData.email !== "" ? (
            <Link to="/sign-up" className="text-[#263238] flex gap-2 items-center hover:bg-green-100 bg-white rounded-full py-2 px-3">
              <h5>{userData?.first_name}</h5>
              {userData?.gender === "Male" ? (
              <img src="/images/avatar.svg" className="w-7 h-7" alt="" />
              ) : (
              <img src="/images/avatar1.svg" className="w-7 h-7" alt="" />

              )}
            </Link>
          ) : (
            <Link to="/sign-up" className="flex items-center justify-center gap-1 bg-white text-[#333333] rounded-full py-1.5 px-4 shadow-md border border-gray-100">
              <span className="text-sm font-medium">Apply now</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#1DB459"/>
                <path d="M9.41003 13.8832L13.2934 9.99986L9.41003 6.11652" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile Menu - Updated with Study Programs Dropdown */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-500 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-400 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            className="lg:hidden bg-white w-full h-screen overflow-y-auto rounded-lg shadow-lg px-6 py-4"
            id="mobile-menu"
          >
            <div ref={ref} className="space-y-4">
              <div className="flex justify-end items-center sticky top-0 bg-white pt-2 pb-3 z-10">
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                    />
                  </svg>
                </button>
              </div>
              
              {/* Wishlist / Bookmark icon */}
              <div className="flex items-center gap-2 py-2 mt-2">
                <img src="/images/bookmark.svg" className="w-6 h-6" alt="Wishlist" />
                <span className="text-green-500 font-medium">My Wishlist</span>
              </div>
              
              <div className="border-b border-gray-200 my-2"></div>
              
              <Link to={"/about-us"} className="block py-2">
                <h5 className="text-green-500 font-medium text-lg">About Us</h5>
              </Link>
              
              {/* Mobile Study Programs Dropdown */}
              <div className="py-2">
                <div onClick={() => setStudyProgramsExpanded(!studyProgramsExpanded)} className="flex justify-between items-center cursor-pointer">
                  <h5 className="text-green-500 font-medium text-lg">Study Programs</h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`text-green-500 transform ${studyProgramsExpanded ? 'rotate-180' : ''}`}>
                    <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
                  </svg>
                </div>
                
                {studyProgramsExpanded && (
                  <div className="pl-4 pt-2 space-y-4 max-h-[300px] overflow-y-auto pr-2">
                    <Link to={"/study-in-finnish"} className="flex items-start gap-3 py-2">
                      <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-blue-500">
                          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h6 className="text-gray-800 font-medium">Study in Finnish</h6>
                        <p className="text-xs text-gray-500">Learn the Finnish language and study in Finland for free (18+).</p>
                      </div>
                    </Link>
                    
                    <Link to={"/study-in-english"} className="flex items-start gap-3 py-2">
                      <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-green-500">
                          <path fill="currentColor" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <div>
                        <h6 className="text-gray-800 font-medium">Study in English</h6>
                        <p className="text-xs text-gray-500">Study in English in Finland. This pathway entails paying Tuition fees.</p>
                      </div>
                    </Link>

                    <Link to={"/explore-programs"} className="flex items-center gap-2 py-2 justify-center border-t border-gray-100 pt-3">
                      <span className="text-primary font-medium">View All Programs</span>
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
              
              <Link to={"/"} className="block py-2">
                <h5 className="text-green-500 font-medium text-lg">Upskill</h5>
              </Link>
              
              <Link to={"/consultation"} className="block py-2">
                <h5 className="text-green-500 font-medium text-lg">Book Free Consultation</h5>
              </Link>
              
              <Link to={"/loan"} className="block py-2">
                <h5 className="text-green-500 font-medium text-lg">Study Loan</h5>
              </Link>
              
              <div className="py-2">
                <div onClick={() => setMoreExpanded(!moreExpanded)} className="flex justify-between items-center cursor-pointer">
                  <h5 className="text-green-500 font-medium text-lg">More</h5>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`text-green-500 transform ${moreExpanded ? 'rotate-180' : ''}`}>
                    <path fill="currentColor" d="M7 10l5 5 5-5H7z" />
                  </svg>
                </div>
                
                {moreExpanded && (
                  <div className="pl-4 pt-2 space-y-4 max-h-[300px] overflow-y-auto pr-2">
                    <Link to={"/become-agent"} className="flex items-center gap-3 py-1">
                      <div className="w-6 h-6 flex items-center justify-center bg-pink-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-pink-500">
                          <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div>
                        <h6 className="text-gray-800 font-medium">Become an agent</h6>
                        <p className="text-xs text-gray-500">Refer, get commission and unlimited access</p>
                      </div>
                    </Link>
                    
                    <Link to={"/waec-jamb"} className="flex items-center gap-3 py-1">
                      <div className="w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-indigo-500">
                          <path fill="currentColor" d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                        </svg>
                      </div>
                      <div>
                        <h6 className="text-gray-800 font-medium">Waec & Jamb</h6>
                        <p className="text-xs text-gray-500">Take a test in preparation of your examination</p>
                      </div>
                    </Link>
                    
                    <Link to={"/faq"} className="flex items-center gap-3 py-1">
                      <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-green-500">
                          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                        </svg>
                      </div>
                      <div>
                        <h6 className="text-gray-800 font-medium">FAQ</h6>
                        <p className="text-xs text-gray-500">Answers to questions you might have</p>
                      </div>
                    </Link>
                    
                    <Link to={"/blog"} className="flex items-center gap-3 py-1">
                      <div className="w-6 h-6 flex items-center justify-center bg-orange-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" className="text-orange-500">
                          <path fill="currentColor" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                          <path fill="currentColor" d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                      </div>
                      <div>
                        <h6 className="text-gray-800 font-medium">Blog</h6>
                        <p className="text-xs text-gray-500">Follow up with news and updates</p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Navbar;