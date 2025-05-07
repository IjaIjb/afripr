import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar";
import { UserApis } from "../../apis/userApi/userApi";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { login } from "../../reducer/loginSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const dispatch: Dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const userLoginData = useSelector((state:any) => state.data.login.value);
  console.log(userLoginData);
  
  React.useEffect(() => {
    if (userLoginData?.data?.id) {
      UserApis.getUserById(userLoginData.data.id)
        .then((response) => {
          if (response?.data) {
            console.log(response);
            console.log(response.data);
          }
        })
        .catch(function (error) {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userLoginData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response: any = await UserApis.login({
        username: formData.username,
        password: formData.password,
      });

      if (response.data) {
        const token = response.data.token;
        const user = response.data.user;
        toast.success(response?.data?.message);

        // Dispatch login action
        dispatch(
          login({
            username: formData.username,
            token: token,
            data: user,
          })
        );

        // Check KYC status after successful login
        if (user?.id) {
          try {
            const kycResponse = await UserApis.getUserById(user.id);
            
            if (kycResponse?.data?.kyc_user_profile?.step_1_completed === true) {
              // If KYC step 1 is completed, route to dashboard
              console.log("KYC Step 1 completed - routing to dashboard", kycResponse.data);
              navigate("/user/dashboard");
            } else {
              // If KYC step 1 is not completed, route to KYC
              console.log("KYC Step 1 not completed - routing to KYC", kycResponse.data);
              navigate("/kyc");
            }
          } catch (kycError) {
            console.error("Error fetching KYC data:", kycError);
            // On KYC fetch error, route to KYC page
            navigate("/kyc");
          }
        } else {
          // If no user ID, default to KYC
          navigate("/kyc");
        }
      } else {
        toast.error(response);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Try again.");
      console.error("Login error:", err);
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
                  <div className="w-1/2 bg-[#1DB459] lg:flex hidden flex-col flex-grow items-center justify-center text-white p-8 rounded-l-3xl">
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

                  {/* Right Section */}
                  <div className="w-1/2 bg-white flex flex-col flex-grow md:px-12 px-3 py-6 rounded-r-3xl shadow-md">
                    <h2 className="text-[24px] font-bold text-primary text-center">
                      Welcome Back
                    </h2>
                    <p className="text-[#494949] text-[12px] text-center mb-6">
                      Enter the fields below to log in
                    </p>

                    <div className="flex justify-center">
                      <div>
                        <form
                          onSubmit={handleSubmit}
                          className="space-y-4 w-[250px]"
                        >
                          <div className="flex flex-col space-y-4">
                            <input
                              type="email"
                              name="username"
                              placeholder="Email"
                              value={formData.username}
                              onChange={handleChange}
                              className="border border-[#D7F5DC] shadow-sm rounded-[16px] p-3"
                              required
                            />

                            <div className="relative w-full">
                              <input
                                type={!showPassword ? "password" : "text"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="border relative w-full border-[#D7F5DC] shadow-sm rounded-[16px] p-3"
                                required
                              />
                              <button
                                type="button"
                                aria-label="show password"
                                title="show password"
                                onClick={() =>
                                  setShowPassword(() => !showPassword)
                                }
                                className={`absolute right-4 top-[16px]`}
                              >
                                {!showPassword ? (
                                  <AiOutlineEyeInvisible className="" />
                                ) : (
                                  <AiOutlineEye className="" />
                                )}
                              </button>
                            </div>
                          </div>

                          {error && (
                            <p className="text-red-500 text-sm text-center">
                              {error}
                            </p>
                          )}

                          <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-full hover:bg-green-700"
                            disabled={loading}
                          >
                            {loading ? "Logging in..." : "Log in"}
                          </button>
                        </form>

                        <p className="flex justify-end text-gray-600 mt-2">
                          <Link
                            to="/forgot-password"
                            className="text-[#0C8B01] text-[12px] font-semibold"
                          >
                            Forgot Password?
                          </Link>
                        </p>

                        <p className="text-center text-[12px] text-gray-600 mt-4">
                          Don't have an account?{" "}
                          <Link
                            to="/sign-up"
                            className="text-[#0C8B01] font-semibold"
                          >
                            Sign Up
                          </Link>
                        </p>
                      </div>
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

export default SignIn;