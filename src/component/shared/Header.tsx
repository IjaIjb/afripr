"use client"; // Add this for client components in the Next.js app directory
import React, { useEffect, useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";
import BreadscrumbDisplay from "./BreadscrumbDisplay";
// import { logoutUser } from "@/store/redux/actions/AuthAction";
// import { useAppDispatch } from "@/store/redux/store";

// Define the structure of user data
interface UserData {
    individual?: {
      firstname: string;
      avatar: string;
    };
    corporateBody?: {
      companyName: string;
      avatar: string;
    };
    status?: string;
  }
  
const Header = () => {

    // const dispatch = useAppDispatch(); // Access `dispatch`
  // const navigate = useNavigate();

    const [open, setOpen] = useState(false);
  
    const onOpenModal = () => {
      // e.preventDefault();
      setOpen(true);
    };
    const onCloseModal = () => setOpen(false);
  
    const handleDetails = () => {
      onOpenModal(); // Open the modal
    };

    const [userData, setUserData] = useState<UserData | null>(null);
   
  
    useEffect(() => {
    
          const storedUserData = localStorage.getItem("user");
          if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
          }
     
     
    }, []);
  
      
      // 
    // const handleLogout = () => {
    //   dispatch(logoutUser());
    //   // Clear user data from localStorage
    //   localStorage.removeItem("auth_token");
    //   localStorage.removeItem("user");
    
    //   // Redirect to login page
    //   navigate("/");
    
    //   toast.success("You have successfully logged out.");
    // };
    
  return (
    <div className="z-50 relative">
      {/* desktop screen */}
      {/* {loading ? (
        <div className="flex justify-center items-center h-screen">
        loading...
        </div>
      ) : ( */}
      <div className="lg:flex hidden relative justify-between z-50 items-center gap-[150px] ">
      <BreadscrumbDisplay />
      
        <div className="flex z-50 items-center gap-10">
          <div className="relative">
       <img src="/images/adminDashboard/Bell.svg" alt="/" />
   
   <div className="absolute -top-3 -right-3 flex justify-center items-center text-white  bg-primary h-7 w-7 rounded-full">
13
   </div>
   </div>

   <div className="flex gap-3">
<div className="bg-[#F8F8F8] w-10 h-10 rounded-full items-center flex justify-center">
JO
</div>

<div className="flex flex-col">
<h3 className="text-[#333333] text-[14px]">Thaywo47</h3>
<h5 className="text-[#666666] text-[12px]">Super Admin</h5>
</div>
   </div>
        </div>

      
      </div>
      {/* )} */}

      {/* mobile screen */}
      <div className=" lg:hidden ">
        <div className="flex justify-between">
        <div className="flex items-center gap-2">
        {/* {userData?.individual?.avatar ? (
    <div
    className="rounded-full overflow-hidden bg-gray-200"
    style={{ width: 40, height: 40 }}
  >
    <Image
      src={userData.individual.avatar}
      alt="person icon"
      className="object-cover w-full h-full"
      width={40}
      height={40}
    />
  </div>
) : userData?.corporateBody?.avatar ? (
  <div
  className="rounded-full overflow-hidden bg-gray-200"
  style={{ width: 40, height: 40 }}
>
  <Image
    src={userData.corporateBody?.avatar}
    alt="person icon"
    className="object-cover w-full h-full"
    width={40}
    height={40}
  />
</div>
) : 
(
  <div className="rounded-full bg-gray-200" style={{ width: 40, height: 40 }} />
)} */}
          <div className="flex flex-col leading-[24px]">
            <h4 className="text-[#1A1A1A]  text-[18px] font-light ">Hello</h4>
            <h4 className="text-primary font-[400] text-[18px]">
            {userData?.individual ? userData?.individual?.firstname : userData?.corporateBody?.companyName}

            </h4>
          </div>
        </div>
<div className="flex gap-3">
        <div className="bg-white relative flex justify-center rounded-full h-9 w-9">
            <div className="h-[8px] w-[8px]  absolute rounded-full left-1 -top-[0.5px] bg-primary"></div>
            {/* <Image
              src="/dashboard/bell-alt.svg"
              alt="person icon"
              className="rounded-full"
              width={30}
              height={30}
            /> */}
          </div>
          <div   onClick={handleDetails} className="cursor-pointer rounded-full h-9 w-9 flex justify-center items-center bg-[#FF4848]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14L19 10M19 10L15 6M19 10H7M11 19H4.20078C3.08068 19 2.52062 19 2.0928 18.782C1.71648 18.5903 1.41052 18.2843 1.21877 17.908C1.00078 17.4802 1.00078 16.9201 1.00078 15.8V4.2C1.00078 3.0799 1.00078 2.51984 1.21877 2.09202C1.41052 1.71569 1.71648 1.40973 2.0928 1.21799C2.52062 1 3.08068 1 4.20078 1L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

          </div>
          </div>
          </div>

        <div className="flex md:mt-0 mt-2  gap-4 items-center">
        {userData?.status === "ACTIVE" ? (
 <div className="rounded-full w-full bg-[#6CC56C30]/[19%]  px-2 py-2  ">
 <div className="flex gap-2 items-center">
 <IoIosInformationCircle className="w-5 h-5 text-primary" />

   <h5 className="text-primary text-[14px] font-light">
     Account has been Verified
   </h5>
 </div>
</div>
        ) : (
          <div className="rounded-full w-full bg-[#F22D351A]/[10%]  px-2 py-2  ">
            <div className="flex gap-2 items-center">
                       <IoIosInformationCircle className="w-7 h-7 text-[primary]" />

              <h5 className="text-[#FF4848] text-[14px] font-light">
                Account is yet to be Approved
              </h5>
            </div>
          </div> 
        )}
       

          {/* <div className="rounded-full w-full bg-[#F22D351A]/[10%]  px-2 py-2  ">
            <div className="flex gap-2 items-center">
                       <IoIosInformationCircle className="w-7 h-7 text-[primary]" />

              <h5 className="text-[#FF4848] text-[14px] font-light">
                Account is yet to be Approved
              </h5>
            </div>
          </div> */}

       
        </div>
      </div>

          <Modal 
              classNames={{
                modal: "rounded-[10px] overflow-visible relative",
              }}
              open={open} onClose={onCloseModal} center>
           <div className="sm:w-[430px] flex justify-center px-4 pb-2">
            
            <div>
              <h4 className="text-[#FF4848] text-center font-[600] mt-5 text-[18px] mb-2">
           Are you sure you want to log Out?
              </h4>

<div className="flex justify-center mb-4">
              <h5 className="text-[15px] text-center">Please confirm this action</h5>
              </div>

           <div className="flex flex-col gap-3">
           <button
                    // onClick={handleLogout}
                    // disabled={!selectedOption} // Disable button if no option is selected
                    className={`py-2 w-full px-6 bg-primary text-white rounded-lg  hover:primary/[60%]
    }`}
                  >
Proceed
                  </button>    
           <button
                    onClick={onCloseModal}
                    // disabled={!selectedOption} // Disable button if no option is selected
                    className={`py-2 w-full px-6 border border-primary rounded-lg  
    }`}
                  >
         No
                  </button>

 
           </div>
            </div>
         
          </div>
            </Modal>

                 {/* <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  /> */}
    </div>
  )
}

export default Header