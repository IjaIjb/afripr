import React, { useState } from 'react'
import Navbar from '../../../component/Navbar'
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserApis } from '../../../apis/userApi/userApi';
import SuccessModal from './SuccesLoanModal';

const PremiumLoanProcessing = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleBackClick = () => {
      toast.info("Going back to previous page", {
        position: "top-center",
        autoClose: 2000,
      });
      navigate(-1); // Go back to the previous page
    };

    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      phoneNumber: "",
      country: "",
      schoolName: "",
      courseName: "",
      resumptionDate: "",
      agreement: false
    });

    const handleChange = (e:any) => {
      const { name, value, type, checked } = e.target;
      
      // Show toast for agreement checkbox
      if (name === 'agreement' && checked) {
        toast.info("You've agreed to use the loan for tuition fees only", {
          position: "bottom-center",
          autoClose: 3000,
        });
      }
      
      setFormData({ 
        ...formData, 
        [name]: type === 'checkbox' ? checked : value 
      });
    };

    const handleSubmit = async (e:any) => {
      e.preventDefault();

      // Validate form
      if (!formData.fullName || !formData.email || !formData.phoneNumber || 
          !formData.country || !formData.schoolName || !formData.courseName || 
          !formData.resumptionDate || !formData.agreement) {
        toast.error("Please fill in all fields and accept the agreement", {
          position: "top-center",
          autoClose: 5000,
        });
        return;
      }

      // Prepare payload
      const payload = {
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        admission_received_country: formData.country,
        admission_received_school: formData.schoolName,
        course_admitted: formData.courseName,
        date_of_resumption: formData.resumptionDate,
        agreement: formData.agreement ? "Accepted" : "Declined",
        status: "Active"
      };

      setLoading(true);

      try {
        const response = await UserApis.applyEduPremiumLoan(payload);
        
        if (response.data) {
          // Show success toast and open modal
          toast.success(response.data.mesage || "Your application has been submitted successfully!", {
            position: "top-center",
            autoClose: 3000,
            onClose: () => {
              setShowSuccessModal(true);
            }
          });
        } else {
          toast.error(response.data.message || "Something went wrong with your application. Please try again.", {
            position: "top-center",
          });
        }
      } catch (err:any) {
        toast.error(err.message || "Failed to submit your application. Please try again.", {
          position: "top-center",
        });
      } finally {
        setLoading(false);
      }
    };
    
    const handleCloseSuccessModal = () => {
      setShowSuccessModal(false);
    };

  return (
    <div className="bg-gray-100">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      {/* Success Modal */}
      <SuccessModal
        open={showSuccessModal}
        onClose={handleCloseSuccessModal}
      />
      
      <div className="flex justify-center w-full">
        <div className="max-w-[2000px] mx-auto z-50 lg:px-14 px-3 w-full">
          <div className="flex justify-center">
            <Navbar />
          </div>
          <div className="pt-[140px]">
            <div className="bg-primary rounded-[15px] w-full">
              <div className="flex justify-between items-center px-5">
                <div className="flex flex-col text-white py-4 gap-1">
                  <h3 className="text-[36px] font-[600]">
                    Study Loan Application
                  </h3>
                  <h3 className="text-[14px] max-w-[396px]">
                    Late on tuition fees? Struggling to raise funds or find a
                    loan that works for global institutions?{" "}
                    <span className="font-bold">AfriproEdu</span> got you
                    covered!
                  </h3>
                </div>
                <img
                  src="/images/loan/loanHero.svg"
                  className="lg:block hidden"
                  alt="location"
                />
              </div>
            </div>
            <div className="my-10">
              <hr />
              <div className="flex justify-center sm:px-6 sm:py-6 py-4">
                <div className="max-w-4xl w-full p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-300 relative">
                  <button 
                    type="button"
                    onClick={handleBackClick}
                    className="flex items-center text-gray-600 mb-4">
                    <FaArrowLeft className="mr-2" />
                    <span>Back</span>
                  </button>
                  <h2 className="text-center text-green-600 font-bold text-xl">
                    EDU PREMIUM
                  </h2>
                  <p className="text-center text-gray-500 text-sm mb-6">
                    For who is qualified to take the loan in Edu Premium
                  </p>
                  <img
                    src="/images/loan/eduPremium.svg"
                    className="absolute -top-7 right-6"
                    alt="location"
                  />
                  <div className="flex justify-center pb-5">
                    <div className="flex items-center gap-2">
                      <h5>Loan Processing</h5>
                      <img
                        src="/images/loan/next.svg"
                        className="w-7 h-7"
                        alt=""
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full name"
                        required
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      />
                      <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone number"
                        required
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      >
                        <option value="">Country of school you received admission in</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Nigeria">Nigeria</option>
                        {/* Add other countries as needed */}
                      </select>
                      <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                        placeholder="Name of the school you received admission in"
                        required
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      />
                      <input
                        type="text"
                        name="courseName"
                        value={formData.courseName}
                        onChange={handleChange}
                        placeholder="Course you are admitted for"
                        required
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      />
                      <input
                        type="date"
                        name="resumptionDate"
                        value={formData.resumptionDate}
                        onChange={handleChange}
                        placeholder="Date of resumption"
                        required
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      />
                      <div></div>
                      <div className="flex items-center mt-4">
                        <input 
                          type="checkbox" 
                          id="agreement"
                          name="agreement"
                          checked={formData.agreement}
                          onChange={handleChange}
                          required
                          className="mr-2" 
                        />
                        <label htmlFor="agreement" className="text-gray-600 text-sm">
                          I agree to use the loan for tuition fee
                        </label>
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      disabled={loading}
                      className={`mt-6 w-full ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white p-3 rounded-xl`}
                    >
                      {loading ? 'Processing...' : 'Proceed'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumLoanProcessing