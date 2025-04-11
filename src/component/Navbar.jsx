import { Menu, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userLoginData = useSelector((state) => state.data.login.value);
console.log(userLoginData)
  const username = userLoginData?.username?.split("@")[0] || "";

// console.log(username)

  return (
    <div className="fixed  lg:left-[50px] left-[5px] right-[5px] top-6 z-[100]  lg:right-[50px]">
      {/* <nav className="bg-white w-full z-20 top-6 rounded-[12px] py-2 "> */}
      <nav className=" flex relative bg-primary w-full items-center py-2  justify-between z-50 rounded-full lg:pr-6 ">
        {/* <div className="flex w-full items-center py-2 justify-between "> */}
        <Link to={"/"}>
          <img src="/logo.svg" className="" alt="/" />
        </Link>
        <div className="lg:hidden block lg:pl-1 pl-40 pr-8 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg lg:hidden  hover:bg-gray-100"
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
                viewBox="0 0 24 24 "
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
            to={"/"}
            className="relative z-50"
          >
            <h5 className="text-white cursor-pointer font-semibold text-[14px]">
            Home
            </h5>
          </Link>

          <Link
            to={"/explore-programs"}
            className="relative"
            // onMouseOut={() => setToggleRe((prev) => !prev)}
            // onMouseOver={() => setToggleRe((prev) => !prev)}
          >
            <h5 className="text-white cursor-pointer font-semibold text-[14px]">
           Study Programs
            </h5>
          </Link>

          <Link
            to={"/"}
            className="relative"
          >
            <h5 className="text-white cursor-pointer font-semibold text-[14px]">
        Upskill
            </h5>
          </Link>

          {/* <Link
            to={"/"}
            className="relative"
          >
            <h5 className="text-white cursor-pointer font-semibold text-[14px]">
           Waec/Jamb
            </h5>
          </Link> */}
             <Link
            to={"/loan"}
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
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setTimeout(() => setIsOpen(false), 300)}
          className="flex items-center space-x-1 text-white cursor-pointer text-[14px]"
        >
          <h5 className="cursor-pointer font-semibold text-[14px]">More</h5>
          {/* <ChevronDownIcon className="w-4 h-4" /> */}
        </Menu.Button>
      </div>

      {isOpen && (
        <Menu.Items
          static
          className="absolute left-0 mt-2 w-36 bg-[#1e1e1e] text-white shadow-lg rounded-lg py-2"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Menu.Item>
            {({ active }) => (
              <a
                href="/loan"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-700" : ""
                }`}
              >
                Loan
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/payment"
                className={`block px-4 py-2 text-sm ${
                  active ? "bg-gray-700" : ""
                }`}
              >
                Payment
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      )}
    </Menu>

          {/* </div> */}
        </div>
        <div className="lg:flex hidden gap-4 items-center">

<img src="/images/bookmark.svg" className="w-7 h-7" alt="" />
       
        {userLoginData.email !== "" ? (
      <Link to="/sign-up" className="text-[#263238] flex gap-2 items-center hover:bg-green-100 bg-white rounded-full py-2 px-3">
     <h5>{username}</h5>
<img src="/images/avatar.svg" className="w-7 h-7" alt="" />
      </Link>
        ) : (
          <Link to="/sign-up" className="text-[#263238] flex gap-2 items-center hover:bg-green-100 bg-white rounded-full py-2 px-3">
          <h5>Apply Now</h5>
          <img src="/images/rightNav.svg" className="" alt="/" />
  
          </Link>
        )}
         </div>
  
      </nav>

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
            className="lg:hidden bg-gray-100 w-full pl-6 pr-4 h-screen "
            id="mobile-menu"
          >
            <div ref={ref} className="pt-10 pb-3 space-y-4">
              <div className="relative">
                <div className="flex gap-3 items-center">
                  <Link
                    to={"/"}
                    className="relative"
                    // onMouseOut={() => setToggle((prev) => !prev)}
                    // onMouseOver={() => setToggle((prev) => !prev)}
                  >
                    <h5 className="text-[#A3A3A3] cursor-pointer text-[20px]">
                    Home
                    </h5>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="flex gap-3">
                  <Link
                     to={"/explore-programs"}
                    className="relative"
                    // onMouseOut={() => setToggleRe((prev) => !prev)}
                    // onMouseOver={() => setToggleRe((prev) => !prev)}
                  >
                    <h5 className="text-[#A3A3A3] cursor-pointer text-[20px]">
                    Study Programs
                    </h5>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="flex gap-3">
                  <Link
                    to={"/"}
                    className="relative"
                    // onMouseOut={() => setToggleSer((prev) => !prev)}
                    // onMouseOver={() => setToggleSer((prev) => !prev)}
                  >
                    <h5 className="text-[#A3A3A3] cursor-pointer text-[20px]">
                    Upskill
                    </h5>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="flex gap-3">
                  <Link
                    to={"/"}
                    className="relative"
                    // onMouseOut={() => setToggleCar((prev) => !prev)}
                    // onMouseOver={() => setToggleCar((prev) => !prev)}
                  >
                    <h5 className="text-[#A3A3A3] cursor-pointer text-[20px]">
                     Waec/Jamb
                    </h5>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="flex gap-3">
                  <Link
                    to={"/loan"}
                    className="relative"
                    // onMouseOut={() => setToggleCar((prev) => !prev)}
                    // onMouseOver={() => setToggleCar((prev) => !prev)}
                  >
                    <h5 className="text-[#A3A3A3] cursor-pointer text-[20px]">
                     Apply for study loan
                    </h5>
                  </Link>
                </div>
              </div>

              {/* <Link
                to={"/market-place"}
                className="relative"
                // onMouseOut={() => setToggleColl((prev) => !prev)}
                // onMouseOver={() => setToggleColl((prev) => !prev)}
              >
                <h5 className="text-[#A3A3A3] mt-4 cursor-pointer text-[20px]">
                  Marketplace
                </h5>
              </Link> */}
         
           
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Navbar;
