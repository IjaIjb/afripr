import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  toggle: () => void;
  DrawerOpen: boolean;
  open: () => void;
};

const UserSidebarPage = (props: Props) => {
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
      } relative w-[295px] z-[100]  scrollbar-hide overflow-y-auto pl-3 pb-8 border-r border-[#ECEDEF] h-screen`}
    >
      <div className="flex items-center justify-between px-2 md:px-4">
        {/* <div></div> */}
        <div className="flex justify-center  py-4">
          <Link to={"/"}  className="flex justify-center">
            <img
              aria-hidden
              src="/logo2.svg"
              alt="Window icon"
              className="flex justify-center"
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

        <div className="mt-3 flex flex-col  ">
            <div className="flex items-center border-b pb-4 mb-4 mr-4 justify-center gap-2">
            <img
              aria-hidden
              src="/Userpic.svg"
              alt="Window icon"
            />
            <div className="flex flex-col justify-center items-center ">
<h4 className="text-[#555555] text-[14px] font-medium">John Doe</h4>
<h6 className="text-[#777777] text-[10px] ">Johndoe@gmail.com</h6>
<h3 className="text-[#555555] text-[12px] font-medium">AFP-2023-5124</h3>
            </div>
            </div>

            <div className="flex flex-col gap-3">
          <div className="">
              <Link to={"/user/dashboard"} className="relative gap-1  ">
                <div
                  className={`${
                    ["user", "dashboard"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#04B040] text-[#FFFFFF]"
                      : " text-[#555555]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[14px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["user", "dashboard"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/overview.svg"
                        : "/images/userDashboard/dashboard-square-03.svg"
                    }
                    alt="Window icon"
                    // width={16}
                    // height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Dashboard</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/user/profile"} className="relative gap-1  ">
                <div
                  className={`${
                    ["user", "profile"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#04B040] text-[#FFFFFF]"
                      : " text-[#555555]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[14px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["user", "profile"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/overview.svg"
                        : "/images/userDashboard/carbon_cloud-service-management.svg"
                    }
                    alt="Window icon"
                    // width={16}
                    // height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Profile</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/user/aplications"} className="relative gap-1  ">
                <div
                  className={`${
                    ["user", "aplications"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#04B040] text-[#FFFFFF]"
                      : " text-[#555555]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[14px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["user", "aplications"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/overview.svg"
                        : "/images/userDashboard/user - Iconly Pro.svg"
                    }
                    alt="Window icon"
                    // width={16}
                    // height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Applications</h5>
                </div>
              </Link>
          </div>



          <div className="">
              <Link to={"/user/resident-permit"} className="relative gap-1  ">
                <div
                  className={`${
                    ["user", "resident-permit"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#04B040] text-[#FFFFFF]"
                      : " text-[#555555]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[14px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["user", "resident-permit"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/overview.svg"
                        : "/images/userDashboard/carbon_cloud-service-management.svg"
                    }
                    alt="Window icon"
                    // width={16}
                    // height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Resident Permit</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/user/upskill"} className="relative gap-1  ">
                <div
                  className={`${
                    ["user", "upskill"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#04B040] text-[#FFFFFF]"
                      : " text-[#555555]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[14px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["user", "upskill"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/overview.svg"
                        : "/images/userDashboard/carbon_cloud-service-management.svg"
                    }
                    alt="Window icon"
                    // width={16}
                    // height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Upskill</h5>
                </div>
              </Link>
          </div>

          <div className="">
              <Link to={"/user/notification"} className="relative gap-1  ">
                <div
                  className={`${
                    ["user", "notification"].every((ai) => pathnames.includes(ai))
                      ? "bg-[#04B040] text-[#FFFFFF]"
                      : " text-[#555555]"
                  } gap-x-3 flex items-center px-6  rounded-l-lg py-[14px] `}
                >
                  <img
                    aria-hidden
                    src={
                      ["user", "notification"].every((ai) =>
                        pathnames.includes(ai)
                      )
                        ? "/images/adminDashboard/overview.svg"
                        : "/images/userDashboard/notification.svg"
                    }
                    alt="Window icon"
                    // width={16}
                    // height={16}
                  />
                  <h5 className="text-[16px] font-[500]  ">Notifications</h5>
                </div>
              </Link>
          </div>
          </div>
        </div>
    </aside>
  );
};

export default UserSidebarPage;
