import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RiLockLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { UserApis } from "../../apis/userApi/userApi";
import Navbar from "../../component/Navbar";

const ResetPassword = () => {
  const dispatch: Dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    token: "",
    password: "",
    confirm_password: ""
  });

  // State for UI
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Extract token and email from URL on component mount
  useEffect(() => {
    const searchParams = new URLSearchParams(location.hash.split('?')[1]);
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    
    if (token && email) {
      setFormData(prev => ({
        ...prev,
        token: token,
        email: decodeURIComponent(email)
      }));
    } else {
      // Handle missing token or email
      toast.error("Invalid password reset link");
      setTimeout(() => navigate('/forgot-password'), 2000);
    }
  }, [location, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate passwords
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response: any = await UserApis.resetPassword({
        email: formData.email,
        token: formData.token,
        password: formData.password,
        confirm_password: formData.confirm_password
      });

      if (response.data) {
        toast.success(response?.data?.message || "Password has been reset successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error(response || "Something went wrong");
      }
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || "Failed to reset password. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Reset password error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen w-full bg-gray-100">
        <div className="lg:p-3 p-2 min-h-screen bg-gray-100">
          <div className="flex justify-center">
            <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
              <Navbar />
              <div className="md:px-10">
                <div className="flex justify-center mt-[100px]">
                  {/* Left Section */}
                  <div className="w-1/2 bg-[#1DB459] flex flex-col flex-grow items-center justify-center text-white p-8 rounded-l-3xl">
                    <Link to={"/"}>
                      <img src="/logo.svg" alt="Logo" />
                    </Link>
                    <h2 className="text-3xl font-bold">
                      Explore Global Institution
                    </h2>
                    <img
                      src="/images/home/explore.svg"
                      alt="Study Abroad"
                      className="w-[300px] h-[300px]"
                    />
                  </div>

                  {/* Right Section - Reset Password Form */}
                  <div className="w-1/2 bg-white flex flex-col flex-grow px-12 py-10 rounded-r-3xl shadow-md">
                    <div className="max-w-md mx-auto w-full">
                      <h2 className="text-[28px] font-bold text-[#00AF4F] text-center">
                        Reset password?
                      </h2>
                      <p className="text-[#494949] text-[14px] text-center mb-8">
                        Enter your new password
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6 w-full">
                        {/* Password input with icon */}
                        <div className="relative">
                          <div className="flex items-center border border-[#E0E0E0] rounded-full overflow-hidden">
                            <div className="pl-4 pr-2">
                              <RiLockLine className="text-[#ABABAB] text-xl" />
                            </div>
                            <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              placeholder="New Password"
                              value={formData.password}
                              onChange={handleChange}
                              className="w-full py-3 px-2 outline-none"
                              required
                            />
                            <div 
                              className="pr-4 cursor-pointer"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <AiOutlineEyeInvisible className="text-[#ABABAB] text-xl" />
                              ) : (
                                <AiOutlineEye className="text-[#ABABAB] text-xl" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Confirm Password input with icon */}
                        <div className="relative">
                          <div className="flex items-center border border-[#E0E0E0] rounded-full overflow-hidden">
                            <div className="pl-4 pr-2">
                              <RiLockLine className="text-[#ABABAB] text-xl" />
                            </div>
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              name="confirm_password"
                              placeholder="Confirm Password"
                              value={formData.confirm_password}
                              onChange={handleChange}
                              className="w-full py-3 px-2 outline-none"
                              required
                            />
                            <div 
                              className="pr-4 cursor-pointer"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                              {showConfirmPassword ? (
                                <AiOutlineEyeInvisible className="text-[#ABABAB] text-xl" />
                              ) : (
                                <AiOutlineEye className="text-[#ABABAB] text-xl" />
                              )}
                            </div>
                          </div>
                        </div>

                        {error && (
                          <div className="text-red-500 text-sm">{error}</div>
                        )}

                        <button
                          type="submit"
                          className="w-full bg-[#00AF4F] text-white py-3 rounded-full hover:bg-green-600 transition-colors"
                          disabled={loading}
                        >
                          {loading ? "Resetting..." : "Reset password"}
                        </button>
                        
                        {/* Back to login link */}
                        <div className="flex items-center mt-4">
                          <Link to="/login" className="flex items-center text-gray-500 hover:text-[#00AF4F] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <span className="ml-2">Back to log in</span>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer
              position="top-right"
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
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;