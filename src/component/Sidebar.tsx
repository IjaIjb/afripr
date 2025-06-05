import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  toggle: () => void;
  DrawerOpen: boolean;
  open: () => void;
};

const SidebarPage = (props: Props) => {
  const url = useLocation();
  const { pathname } = url;
  const pathnames = pathname.split("/").filter((x: any) => x);
// const [userData, setUserData] = useState<any>(null);

  // useEffect(() => {
  //   const storedUserData = localStorage.getItem("user");
  //   if (storedUserData) {
  //     setUserData(JSON.parse(storedUserData));
  //   }
  // }, []);
  // ;

  return (
    <aside
      className={`${
        props.DrawerOpen ? "" : ""
      } relative w-[305px] bg-primary scrollbar-hide overflow-y-auto pl-3 pb-8 border-r border-[#ECEDEF] h-screen`}
      // } relative w-[305px] z-[100] bg-primary scrollbar-hide overflow-y-auto pl-3 pb-8 border-r border-[#ECEDEF] h-screen`}
    >
      <div className="flex items-center justify-between px-2 md:px-4">
        {/* <div></div> */}
        <div className="flex justify-center  py-4">
          <Link to={"/"}>
            <img
              aria-hidden
              src="/logo.svg"
              alt="Window icon"
            />
            {/* <img src={logo} alt="Logo" className="w-[100px] h-[37px]" /> */}
          </Link>
        </div>
        <button
          onClick={() => {
            // setShowInfoTag(false)
            props.toggle();
          }}
          className=""
        >
          {props.DrawerOpen ? (
            <AiOutlineClose className="w-4 h-4 md:w-6 md:h-6 font-bold text-white " />
          ) : (
            <AiOutlineMenu className="w-4 h-4 md:w-6 md:h-6  font-bold hidden " />
          )}
        </button>
      </div>

        <div className="mt-3 flex flex-col ">
          <div className="">
              <Link to={"/admin/overview"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "overview"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "Overview"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/overview.svg"
                        : "/images/adminDashboard/overview.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Overview</h5>
                </div>
              </Link>
          </div>


          <div className="">
              <Link to={"/admin/courses"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "courses"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "courses"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/courseSidebar.svg"
                        : "/images/adminDashboard/courseSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Course & Programs</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/admin/admin-management"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "admin-management"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "admin-management"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/adminMSidebar.svg"
                        : "/images/adminDashboard/adminMSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Admin Management</h5>
                </div>
              </Link>
          </div>


          <div className="">
              <Link to={"/admin/user-management"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "user-management"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "user-management"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/userMSidebar.svg"
                        : "/images/adminDashboard/userMSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">User Management</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/admin/blog"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "blog"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "blog"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/blogSidebar.svg"
                        : "/images/adminDashboard/blogSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Blog</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/admin/testimonial"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "testimonial"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "testimonial"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/testimonialSidebar.svg"
                        : "/images/adminDashboard/testimonialSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Testimonials</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/admin/banner"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "banner"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "banner"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/bannerSidebar.svg"
                        : "/images/adminDashboard/bannerSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Banner</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/admin/psychometric-test"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "psychometric-test"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "psychometric-test"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/psychoSidebar.svg"
                        : "/images/adminDashboard/psychoSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Psychometric Test</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/admin/psychometric-test-course"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "psychometric-test-course"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "psychometric-test-course"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/psychoSidebar.svg"
                        : "/images/adminDashboard/psychoSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Psychometric Test Course</h5>
                </div>
              </Link>
          </div>
     
          <div className="">
              <Link to={"/admin/loan-application"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "loan-application"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "loan-application"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/loanSidebar.svg"
                        : "/images/adminDashboard/loanSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Loan Application</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/admin/payment"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "payment"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "payment"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/loanSidebar.svg"
                        : "/images/adminDashboard/loanSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Payment</h5>
                </div>
              </Link>
          </div>



          <div className="">
              <Link to={"/admin/waec-and-jamb"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "waec-and-jamb"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "waec-and-jamb"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/waecAndJambSidebar.svg"
                        : "/images/adminDashboard/waecAndJambSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Waec & Jamb</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/admin/faq-management"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "faq-management"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "faq-management"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/faqSidebar.svg"
                        : "/images/adminDashboard/faqSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Faq Management</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/admin/become-an-agent"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "become-an-agent"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "become-an-agent"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/becomeAnAgentSidebar.svg"
                        : "/images/adminDashboard/becomeAnAgentSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Become An Agent</h5>
                </div>
              </Link>
          </div>


          <div className="">
              <Link to={"/admin/consultation-booking"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "consultation-booking"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "consultation-booking"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/consultationBookingSidebar.svg"
                        : "/images/adminDashboard/consultationBookingSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Consultation Booking</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/admin/notification"} className="relative gap-1  ">
                <div
                  className={`${
                    ["admin", "notification"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#0C8B01] text-[#FFFFFF]"
                      : " text-[#FFFFFF]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[18px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["admin", "notification"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/notificationSidebar.svg"
                        : "/images/adminDashboard/notificationSidebar.svg"
                    }
                    alt="Window icon"
                    width={16}
                    height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Notification</h5>
                </div>
              </Link>
          </div>


        </div>
    </aside>
  );
};

export default SidebarPage;
