import React, { useState } from "react";
import Navbar from "../../../component/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserApis } from "../../../apis/userApi/userApi";
import SuccessSchoolModal from "./SuccessSchoolModal";

const PremiumSchoolProcessing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // File states
  const [bscCertificate, setBscCertificate] = useState<any>(null);
  const [cv, setCv] = useState<any>(null);
  const [waec, setWaec] = useState<any>(null);
  const [coverLetter, setCoverLetter] = useState<any>(null);
  
  const [formData, setFormData] = useState<any>({
    fullName: "",
    email: "",
    phoneNumber: "",
    issueAddress: "",
    country: "",
    state: "",
    countryInterest: "",
    stateInterest: "",
    courseInterest: "",
    documents: []
  });

  const handleBackClick = () => {
    toast.info("Going back to previous page", {
      position: "top-center",
      autoClose: 2000,
      onClose: () => {
        navigate(-1); // Go back to the previous page after toast shows
      }
    });
  };

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      // Handle checkboxes for document selection
      if (checked) {
        setFormData({
          ...formData,
          documents: [...formData.documents, value]
        });
      } else {
        setFormData({
          ...formData,
          documents: formData.documents.filter((doc:any) => doc !== value)
        });
      }
    } else {
      // Handle regular input fields
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (event:any, setFile:any) => {
    const file = event.target.files?.[0];
    if (
      file &&
      ["image/png", "image/jpeg", "application/pdf"].includes(file.type) &&
      file.size <= 10 * 1024 * 1024
    ) {
      setFile(file);
    } else {
      toast.error("Invalid file. Please upload PNG, JPG, or PDF (max 10MB).");
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.fullName || !formData.email || !formData.phoneNumber || 
        !formData.country || !formData.countryInterest) {
      toast.error("Please fill in all required fields", {
        position: "top-center",
        autoClose: 5000
      });
      return;
    }
    
    // Check if at least one document is selected and uploaded
    if (formData.documents.length === 0) {
      toast.error("Please select at least one document type", {
        position: "top-center",
        autoClose: 5000
      });
      return;
    }
    
    // Check if selected documents have files
    if (formData.documents.includes("bsc") && !bscCertificate) {
      toast.error("Please upload your BSc Certificate", {
        position: "top-center",
        autoClose: 5000
      });
      return;
    }
    
    if (formData.documents.includes("Curriculum Vitae (CV)") && !cv) {
      toast.error("Please upload your CV", {
        position: "top-center",
        autoClose: 5000
      });
      return;
    }
    
    if (formData.documents.includes("WEAC / NECO Certificate") && !waec) {
      toast.error("Please upload your WAEC/NECO Certificate", {
        position: "top-center",
        autoClose: 5000
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // In a real implementation, you would upload the files to a server
      // and get back URLs. Here we're using placeholder URLs
      const bscCertificateUrl = bscCertificate ? "https://willbeuploaded.com/bsc-certificate.pdf" : "";
      const cvUrl = cv ? "https://willbeuploaded.com/cv.pdf" : "";
      const waecUrl = waec ? "https://willbeuploaded.com/waec-neco.pdf" : "";
      const coverLetterUrl = coverLetter ? "https://willbeuploaded.com/cover-letter.pdf" : "";
      
      // Prepare payload
      const payload = {
        full_name: formData.fullName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        country_of_residence: formData.country,
        state_of_residence: formData.state,
        country_of_interest: formData.countryInterest,
        state_of_interest: formData.stateInterest || "",
        document_available: formData.documents,
        bsc_certificate: bscCertificateUrl,
        curriculum_vitae: cvUrl,
        cover_letter: coverLetterUrl,
        waec_neco: waecUrl,
        status: "Pending"
      };
      
      // Send data to API
      const response = await UserApis.applyEduPremiumSchoolProcessing(payload);
      
      if (response.data) {
        // Show success toast and open success modal
        toast.success("Your application has been submitted successfully!", {
          position: "top-center",
          autoClose: 3000,
          onClose: () => {
            setShowSuccessModal(true);
          }
        });
      } else {
        toast.error("Something went wrong with your application. Please try again.", {
          position: "top-center"
        });
      }
    } catch (err:any) {
      toast.error(err.message || "Failed to submit your application. Please try again.", {
        position: "top-center"
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
      <SuccessSchoolModal
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
                    className="flex items-center text-gray-600 mb-4"
                  >
                    <FaArrowLeft className="mr-2" />
                    <span>Back</span>
                  </button>
                  <h2 className="text-center text-green-600 font-bold text-xl">
                    EDU PREMIUM
                  </h2>
                  <p className="text-center text-gray-500 text-sm mb-6">
                    For those qualified to take this loan from Edu Gold
                  </p>
                  <img
                    src="/images/loan/eduPremium.svg"
                    className="absolute -top-7 right-6"
                    alt="location"
                  />
                  <div className="flex justify-center pb-5">
                    <div className="flex items-center gap-2">
                      <h5>School Processing</h5>
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
                      <input
                        type="text"
                        name="issueAddress"
                        value={formData.issueAddress}
                        onChange={handleChange}
                        placeholder="Issue Address"
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      />
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      >
                        <option value="">Select country of residency</option>
                        <option value="USA">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Australia">Australia</option>
                        {/* Add more countries as needed */}
                      </select>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      >
                        <option value="">Select state of residency</option>
                        <option value="California">California</option>
                        <option value="New York">New York</option>
                        <option value="Texas">Texas</option>
                        <option value="Florida">Florida</option>
                        <option value="Illinois">Illinois</option>
                        {/* Add more states as needed */}
                      </select>
                      <select
                        name="countryInterest"
                        value={formData.countryInterest}
                        onChange={handleChange}
                        required
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      >
                        <option value="">Select Country of Interest</option>
                        <option value="USA">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        {/* Add more countries as needed */}
                      </select>
                      <select
                        name="stateInterest"
                        value={formData.stateInterest}
                        onChange={handleChange}
                        className="w-full p-4 text-sm border border-gray-200 rounded-xl"
                      >
                        <option value="">Select State/Province of Interest</option>
                        <option value="Ontario">Ontario</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="California">California</option>
                        <option value="London">London</option>
                        {/* Add more states as needed */}
                      </select>
                    </div>
                    
                    <div className="bg-white rounded-lg mt-6 pb-3 pt-1 px-4">
                      <h3 className="text-gray-700 font-semibold mb-5">
                        Select the documents you have:
                      </h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="documents"
                            value="bsc"
                            onChange={handleChange}
                            className="mr-2"
                          />{" "}
                          BSC Certificate
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="documents"
                            value="transcript"
                            onChange={handleChange}
                            className="mr-2"
                          />{" "}
                          BSC Transcript
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="documents"
                            value="Curriculum Vitae (CV)"
                            onChange={handleChange}
                            className="mr-2"
                          />{" "}
                          Curriculum Vitae (CV)
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="documents"
                            value="WEAC / NECO Certificate"
                            onChange={handleChange}
                            className="mr-2"
                          />{" "}
                          WEAC / NECO Certificate
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="documents"
                            value="International passport data page"
                            onChange={handleChange}
                            className="mr-2"
                          />
                          International passport data page
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="documents"
                            value="Letter of recommendation"
                            onChange={handleChange}
                            className="mr-2"
                          />{" "}
                          Letter of recommendation
                        </label>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 pt-4 gap-4">
                      {/* BSC Certificate Upload */}
                      <div>
                        <h5 className="text-[#333333] pb-2 text-[14px]">
                          BSC Certificate
                        </h5>
                        <div className="border-2 border-dashed bg-white h-[120px] border-gray-300 rounded-lg p-4 text-center">
                          <label className="cursor-pointer">
                            <input
                              type="file"
                              accept="image/png, image/jpeg, application/pdf"
                              className="hidden"
                              onChange={(e) =>
                                handleFileChange(e, setBscCertificate)
                              }
                            />
                            {bscCertificate ? (
                              <p className="text-sm text-gray-700">
                                {bscCertificate.name}
                              </p>
                            ) : (
                              <div>
                                <div className="flex justify-center">
                                  <img
                                    src="/images/loan/upload.svg"
                                    className="text-center flex justify-center"
                                    alt=""
                                  />
                                </div>
                                <div className="text-green-600 text-sm">
                                  <p>Click to upload</p>
                                  <p className="text-gray-500">
                                    PNG, JPG, PDF (max. 10mb)
                                  </p>
                                </div>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>

                      {/* Curriculum Vitae Upload */}
                      <div>
                        <h5 className="text-[#333333] pb-2 text-[14px]">
                          Curriculum Vitae (CV)
                        </h5>
                        <div className="border-2 border-dashed bg-white h-[120px] border-gray-300 rounded-lg p-4 text-center">
                          <label className="cursor-pointer">
                            <input
                              type="file"
                              accept="image/png, image/jpeg, application/pdf"
                              className="hidden"
                              onChange={(e) => handleFileChange(e, setCv)}
                            />
                            {cv ? (
                              <p className="text-sm text-gray-700">{cv.name}</p>
                            ) : (
                              <div>
                                <div className="flex justify-center">
                                  <img
                                    src="/images/loan/upload.svg"
                                    className="text-center flex justify-center"
                                    alt=""
                                  />
                                </div>
                                <div className="text-green-600 text-sm">
                                  <p>Click to upload</p>
                                  <p className="text-gray-500">
                                    PNG, JPG, PDF (max. 10mb)
                                  </p>
                                </div>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>

                      {/* Cover Letter Upload */}
                      <div>
                        <h5 className="text-[#333333] pb-2 text-[14px]">
                          Cover Letter
                        </h5>
                        <div className="border-2 border-dashed bg-white h-[120px] border-gray-300 rounded-lg p-4 text-center">
                          <label className="cursor-pointer">
                            <input
                              type="file"
                              accept="image/png, image/jpeg, application/pdf"
                              className="hidden"
                              onChange={(e) => handleFileChange(e, setCoverLetter)}
                            />
                            {coverLetter ? (
                              <p className="text-sm text-gray-700">
                                {coverLetter.name}
                              </p>
                            ) : (
                              <div>
                                <div className="flex justify-center">
                                  <img
                                    src="/images/loan/upload.svg"
                                    className="text-center flex justify-center"
                                    alt=""
                                  />
                                </div>
                                <div className="text-green-600 text-sm">
                                  <p>Click to upload</p>
                                  <p className="text-gray-500">
                                    PNG, JPG, PDF (max. 10mb)
                                  </p>
                                </div>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>

                      {/* WAEC/NECO Certificate Upload */}
                      <div>
                        <h5 className="text-[#333333] pb-2 text-[14px]">
                          WAEC/NECO Certificate
                        </h5>
                        <div className="border-2 border-dashed bg-white h-[120px] border-gray-300 rounded-lg p-4 text-center">
                          <label className="cursor-pointer">
                            <input
                              type="file"
                              accept="image/png, image/jpeg, application/pdf"
                              className="hidden"
                              onChange={(e) => handleFileChange(e, setWaec)}
                            />
                            {waec ? (
                              <p className="text-sm text-gray-700">{waec.name}</p>
                            ) : (
                              <div>
                                <div className="flex justify-center">
                                  <img
                                    src="/images/loan/upload.svg"
                                    className="text-center flex justify-center"
                                    alt=""
                                  />
                                </div>
                                <div className="text-green-600 text-sm">
                                  <p>Click to upload</p>
                                  <p className="text-gray-500">
                                    PNG, JPG, PDF (max. 10mb)
                                  </p>
                                </div>
                              </div>
                            )}
                          </label>
                        </div>
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
  );
};

export default PremiumSchoolProcessing;