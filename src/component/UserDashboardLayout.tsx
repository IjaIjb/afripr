import { ReactNode, useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "react-responsive-modal/styles.css";
import UserSidebarPage from "./UserSidebarPage";
import UserHeader from "./shared/UserHeader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DashboardLayoutProps {
  children: ReactNode;
}

const UserDashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get user data from Redux store
  const userLoginData = useSelector((state: any) => state.data.login.value);
  const navigate = useNavigate();

  // Authentication check effect
  useEffect(() => {
    const checkAuth = () => {
      // Check if userLoginData exists and has a non-empty token
      if (!userLoginData || !userLoginData.token || userLoginData.token === '') {
        toast.error("Please login to access the dashboard.");
        navigate("/sign-in");
        return false;
      }
      
      // Check if user data exists in Redux store
      if (!userLoginData.data) {
        toast.error("User session invalid. Please login again.");
        navigate("/sign-in");
        return false;
      }
      
      // Check if user ID exists (for KYC validation)
      const userData = userLoginData.data;
      if (!userData.id) {
        toast.error("User profile incomplete. Please complete KYC process.");
        navigate("/kyc");
        return false;
      }
      
      return true;
    };

    // const isAuthenticated = checkAuth();
    setIsLoading(false);
    
    // Optional: Periodic validation of auth state
    const interval = setInterval(() => {
      checkAuth();
    }, 30 * 60 * 1000); // Check every 30 minutes
    
    return () => clearInterval(interval);
  }, [navigate, userLoginData]);

  const toggleDrawer = () => {
    setOpenDrawer((prev) => !prev);
    setShowSideBar((prev) => !prev);
  };

  // open side Drawer
  const open = () => {
    setOpenDrawer(true);
  };

  // If still loading or not authenticated, show a loader
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#EFEFEF]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1DB459]"></div>
      </div>
    );
  }

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <div
        className={`${
          openDrawer ? "w-0 xl:w-[310px]" : " hidden lg:block"
        } relative left-0 top-0 h-screen`}
      >
        <UserSidebarPage
          toggle={toggleDrawer}
          DrawerOpen={openDrawer}
          open={open}
        />
      </div>

      {/* Background shadow for sidebar */}
      {(showSideBar || openDrawer) && (
        <div
          className={`w-full h-full block lg:hidden bg-[#747380D1] opacity-[82%] z-[90] fixed top-0 left-0`}
          onClick={() => {
            setOpenDrawer(false);
            setShowSideBar(false);
          }}
        ></div>
      )}

      <div className="w-[100%] bg-[#EFEFEF] lg:px-0 px-3 h-screen flex flex-col">
        {/* Header - outside the scrollable area */}
        <div className="mb-7 sticky top-0 w-full backdrop-filter backdrop-blur-md z-50">
          <div className="flex lg:block gap-5 left-0 justify-between relative items-center">
            <button
              onClick={() => {
                setOpenDrawer(!openDrawer);
                setShowSideBar(!showSideBar);
              }}
              className="flex lg:hidden items-center gap-3"
            >
              {openDrawer ? (
                <AiOutlineClose className="w-4 h-4 md:w-6 md:h-6 font-bold" />
              ) : (
                <AiOutlineMenu className="w-4 h-4 md:w-6 md:h-6 font-bold" />
              )}
            </button>
            <div className="lg:hidden relative w-full z-50 lg:px-[3%] pt-5 px-[1%]">
              <UserHeader />
            </div>
            <div className="hidden lg:block bg-white shadow relative z-50 lg:px-[3%] pt-5 pb-2 px-[1%]">
              <UserHeader />
            </div>
          </div>
        </div>

        {/* Scrollable content area - only for children */}
        <div className="lg:mx-[3%] mx-[1%] scrollbar-hide h-[calc(100vh-75px)] overflow-y-scroll">
          {children}
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

// Create a higher-order component for protected routes
export const withProtection = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const navigate = useNavigate();
    const userLoginData = useSelector((state: any) => state.data.login.value);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    
    useEffect(() => {
      // Check for authentication using only Redux data
      if (!userLoginData || !userLoginData.token || userLoginData.token === '') {
        toast.error("Please login to access this page");
        navigate("/sign-in");
        setIsAuthenticated(false);
        return;
      }
      
      setIsAuthenticated(true);
    }, [navigate, userLoginData]);
    
    // Show loading state while checking authentication
    if (isAuthenticated === null) {
      return (
        <div className="flex items-center justify-center h-screen bg-[#EFEFEF]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1DB459]"></div>
        </div>
      );
    }
    
    // Only render the component if authenticated
    return isAuthenticated ? <Component {...props} /> : null;
  };
};

export default UserDashboardLayout;