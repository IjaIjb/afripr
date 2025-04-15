import React, { useState } from "react";
import Navbar from "../../component/Navbar";
import { Link, useNavigate } from "react-router-dom";
// import { UserLiveApis } from "../../apis/live/userLive/userLiveApis";
import { UserApis } from "../../apis/userApi/userApi";
// import { useDispatch } from "react-redux";
// import { Dispatch } from "redux";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../reducer/loginSlice";
const SignUp = () => {
  // const dispatch: Dispatch = useDispatch();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirm_password: "",
    referral_code: "", // Optional field
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Password validation function
  const isPasswordStrong = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Password checks
    if (!isPasswordStrong(formData.password)) {
      setError("Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.");
      setLoading(false);
      return;
    }
    if (formData.password !== formData.confirm_password) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response:any = await UserApis.register({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        gender: formData.gender,
        password: formData.password,
        confirm_password: formData.confirm_password,
      });
      console.log("Signup Success:", response.data);
      console.log("Signup Success:", response);

      if (response?.data) {
        // dispatch(
        //   login({
        //     username: formData.email,
        //     // token: response.data.token,
        //     // name: response.data.name,
        //   })
        // );
        // console.log("Signup created:", response.data);

        toast.success("Login Successful");
      console.log("Signup Success:", response);

        navigate("/verify-email");
      } else {
        toast.error(response);
      console.log( response);

      }
      // setSuccess("Account created successfully!");
      console.log("Signup Success:", response.data);
      // Handle success (redirect or show message)
    } catch (err: any) {
      // setError(err.response?.data?.message || "Signup failed. Try again.");
      console.log(err);
      toast.error(err?.response?.data?.message || "Signup failed");

    
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="lg:p-3 p-2 min-h-screen bg-gray-100">
        <div className="flex justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <Navbar />
            <div className="md:px-10">
              <div className="flex h-screen mt-[100px]">
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

                {/* Right Section */}
                <div className="w-1/2 bg-white flex justify-center flex-col flex-grow px-12 py-6 rounded-r-3xl shadow-md">
                  <h2 className="text-[24px] font-bold text-primary text-center">
                    Create your account
                  </h2>
                  <p className="text-[#494949] text-[12px] text-center mb-6">
                    Enter the fields below to get started
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          className="border border-[#D7F5DC] shadow-sm rounded-[16px] p-3"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          className="border border-[#D7F5DC] shadow-sm rounded-[16px] p-3"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-[#D7F5DC] shadow-sm rounded-[16px] p-3"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="🇳🇬 Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border border-[#D7F5DC] shadow-sm rounded-[16px] p-3"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border border-[#D7F5DC] shadow-sm rounded-[16px] p-3"
          required
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="referral_code"
          placeholder="Referral code (optional)"
          value={formData.referral_code}
          onChange={handleChange}
          className="border border-[#D7F5DC] shadow-sm rounded-[16px] p-3"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border border-[#D7F5DC] shadow-sm rounded-[16px] p-3"
          required
        />
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          value={formData.confirm_password}
          onChange={handleChange}
          className="border border-[#D7F5DC] shadow-sm rounded-[16px] p-3"
          required
        />
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      {success && <p className="text-green-500 text-sm text-center">{success}</p>}

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-10 md:px-20 bg-primary text-white py-3 rounded-full hover:bg-green-700"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </div>
    </form>

                  <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link
                      to="/sign-in"
                      className="text-green-600 font-semibold"
                    >
                      Log In
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
