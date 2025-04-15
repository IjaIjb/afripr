import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../component/Navbar";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { UserApis } from "../../../apis/userApi/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminApis } from "../../../apis/adminApi/adminApi";
import countryList from "../../../assets/country-list.json"; // Adjust path as needed

const EduGold = () => {
  const navigate = useNavigate();
  const [eduData, setEduData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedData:any = localStorage.getItem("eduPremiumPlus");
    if (storedData) {
      setEduData(storedData);
    }
  }, []);

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const onCloseModal = () => setOpen(false);
  const onCloseSuccessModal = () => setOpenSuccess(false);
   
      // const [isLoading, setIsLoading] = useState(false);
      const [payment, setPayment] = useState<any>(null);
      
      useEffect(() => {
        const fetchPaymentData = async () => {
          try {
            // setIsLoading(true);
            const response = await AdminApis.getPaymentById("f746b9ed-5a4c-4ef7-9281-25b95e5e796d");
           console.log(response)
            if (response?.data) {
              setPayment(response?.data);
            }
          } catch (error) {
            console.error('Error fetching payment:', error);
            toast.error("Failed to load payment data");
          } finally {
            // setIsLoading(false);
          }
        };
        
        // if () {
          fetchPaymentData();
        // }
      }, []);
// console.log(payment)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    email: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    bvn: "",
    idType: "",
    address: "",
    maritalStatus: "",
    employerName: "",
    employerAddress: "",
    frontID: null,
    backID: null,
    agreement: false
  });

  const [frontImage, setFrontImage] = useState<any>(null);
  const [backImage, setBackImage] = useState<any>(null);

  const handleFileChange = (event:any, setImage:any) => {
    const file = event.target.files?.[0];
    if (file && ["image/png", "image/jpeg", "application/pdf"].includes(file.type) && file.size <= 10 * 1024 * 1024) {
      setImage(file);
    } else {
      alert("Invalid file. Please upload PNG, JPG, or PDF (max 10MB).");
    }
  };

  
  // Handle form field changes including country and state
  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    
    if (name === "country") {
      // When country changes, reset the state field
      setFormData({ 
        ...formData, 
        country: value, 
        state: "" 
      });
    } else {
      // For all other fields, update normally
      setFormData({ 
        ...formData, 
        [name]: type === 'checkbox' ? checked : value 
      });
    }
  };
  
  // Get states for the selected country
  const getStatesForCountry = () => {
    if (!formData.country) return [];
    
    const selectedCountry = countryList.find(country => country.name === formData.country);
    return selectedCountry ? selectedCountry.states : [];
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    
    // Check if agreement is checked
    if (!formData.agreement) {
      toast.error("Please agree to the terms before proceeding");
    setLoading(false);
     
      return;
      
    }
    try {
      // Create FormData for file uploads
      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        other_name: formData.otherName,
        email: formData.email,
        phone_number: formData.phoneNumber,
        gender: formData.gender,
        date_of_birth: formData.dob,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        bvn: formData.bvn,
        identity_type: formData.idType,
        address: formData.address,
        marital_status: formData.maritalStatus,
        employer_name: formData.employerName,
        employer_address: formData.employerAddress,
        front_identity_card: frontImage ? URL.createObjectURL(frontImage) : "",
        back_identity_card: backImage ? URL.createObjectURL(backImage) : "",
        agreement: "Accepted",
        status: "Active"
      };
      
      // In a real implementation, you would upload the files and get URLs back
      // For now, we're mocking this process
      
      const response = await UserApis.applyEduGold(payload);
      
      if (response.data) {
    setLoading(false);
                     toast.success(response.data.message || "EduGold created successfully")
       
        setOpen(true);

        // setTimeout(() => setOpenSuccess(true), 300);
      } else {
        // setError("Something went wrong with your application. Please try again.");
        toast.error(response.data.message || "Failed to create EduGold")
        // setOpen(false);
    setLoading(false);

      }
    } catch (err:any) {
      toast.error(err.message || "An error occurred while processing your application");
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  // const handlePayment = async () => {
  //   setLoading(true);
  //   setError(null);
    

  // };

  const handleSubmit2 = (e:any) => {
    e.preventDefault();

    if (eduData) {
      navigate("/loan/school-processing");
    } else {
      setOpenSuccess(false);
    }
  };

  return (
    <div className="bg-gray-100">
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
                    Late on tuition fees? Struggling to raise funds or find
                    a loan that works for global institutions?{" "}
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
              <div className="flex justify-center mt-10">
                <div className="max-w-4xl w-full p-4 sm:p-8 rounded-2xl shadow-lg border border-gray-300 relative">
                  <button onClick={handleBackClick} className="flex items-center text-gray-600 mb-4">
                    <FaArrowLeft className="mr-2" />
                    <span>Back</span>
                  </button>
                  <h2 className="text-center text-green-600 font-bold text-xl">EDU GOLD</h2>
                  <p className="text-center text-gray-500 text-sm mb-4">For who is qualify to take the loan in Edu Gold</p>
                  <img
                    src="/images/loan/eduGold.svg"
                    className="absolute -top-7 right-6"
                    alt="location"
                  />
                  <div className="flex justify-center pb-5">
                    <div className="flex items-center gap-2">
                      <h5>Check credit score</h5>
                      <img
                        src="/images/loan/next.svg"
                        className="w-7 h-7"
                        alt=""
                      />
                    </div>
                  </div>
                  
                  {error && (
                    <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
                      {error}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        placeholder="First name" 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                      <input 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        placeholder="Last name" 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                      <input 
                        type="text" 
                        name="otherName" 
                        value={formData.otherName} 
                        onChange={handleChange} 
                        placeholder="Other name" 
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="Email" 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                      <select 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleChange} 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                      >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="prefer not to say">Prefer Not to say</option>
                      </select>
                      <input 
                        type="date" 
                        name="dob" 
                        value={formData.dob} 
                        onChange={handleChange} 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                      <input 
                        type="text" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                        placeholder="Phone number" 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                      <select 
                        name="country" 
                        value={formData.country} 
                        onChange={handleChange} 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                      >
                        <option value="">Select your country</option>
                        {countryList.map((country:any) => (
          <option key={country.iso3} value={country.name}>
            {country.name}
          </option>
        ))}
                   </select>
                      <select 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange} 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                      >
                        <option value="">State/Province</option>
                        {getStatesForCountry().map((state) => (
    <option key={state.state_code} value={state.name}>
      {state.name}
    </option>
  ))}
           </select>
                      <input 
                        type="text" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange} 
                        placeholder="City" 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                      <input 
                        type="text" 
                        name="bvn" 
                        value={formData.bvn} 
                        onChange={handleChange} 
                        placeholder="BVN (Nigeria only)" 
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                      <select 
                        name="idType" 
                        value={formData.idType} 
                        onChange={handleChange} 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                      >
                        <option value="">Select Identification Type</option>
                        <option value="International Passport">International Passport</option>
                        <option value="Driver's License">Driver's License</option>
                        <option value="National ID">National ID</option>
                      </select>
                      <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        placeholder="Address" 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                      <select 
                        name="maritalStatus" 
                        value={formData.maritalStatus} 
                        onChange={handleChange} 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                      >
                        <option value="">Select your marital status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="divorced">Divorced</option>
                      </select>
                      <input 
                        type="text" 
                        name="employerName" 
                        value={formData.employerName} 
                        onChange={handleChange} 
                        placeholder="Your employer's name" 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                      <input 
                        type="text" 
                        name="employerAddress" 
                        value={formData.employerAddress} 
                        onChange={handleChange} 
                        placeholder="Your employer's address" 
                        required
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl" 
                      />
                    </div>
                 
                    <div className="grid grid-cols-1 sm:grid-cols-2 pt-4 gap-4">
                      {/* Front View Upload */}
                      <div>
                        <h5 className="text-[#333333] pb-2 text-[14px]">Front view of your identity card</h5>
                        <div className="border-2 border-dashed bg-white h-[120px] border-gray-300 rounded-lg p-4 text-center">
                          <label className="cursor-pointer">
                            <input 
                              type="file" 
                              accept="image/png, image/jpeg, application/pdf" 
                              className="hidden"
                              onChange={(e) => handleFileChange(e, setFrontImage)}
                              required
                            />
                            {frontImage ? (
                              <p className="text-sm text-gray-700">{frontImage.name}</p>
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
                                  <p className="text-gray-500">PNG, JPG, PDF (max. 10mb)</p>
                                </div>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>

                      {/* Back View Upload */}
                      <div>
                        <h5 className="text-[#333333] pb-2 text-[14px]">Back view of your identity card</h5>
                        <div className="border-2 border-dashed bg-white h-[120px] border-gray-300 rounded-lg p-4 text-center">
                          <label className="cursor-pointer">
                            <input 
                              type="file" 
                              accept="image/png, image/jpeg, application/pdf" 
                              className="hidden"
                              onChange={(e) => handleFileChange(e, setBackImage)}
                              required
                            />
                            {backImage ? (
                              <p className="text-sm text-gray-700">{backImage.name}</p>
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
                                  <p className="text-gray-500">PNG, JPG, PDF (max. 10mb)</p>
                                </div>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center mt-4">
                      <input 
                        type="checkbox" 
                        id="agreement" 
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        className="mr-2" 
                      />
                      <label htmlFor="agreement" className="text-gray-600 text-sm">
                        I agree that the payment is not refundable regardless of the result of the test
                      </label>
                    </div>

                    <button 
  type="submit" 
  className="mt-6 w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700"
  disabled={loading}
>
  {loading ? "Processing..." : `Pay NGN${payment?.amount}`}
</button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Modal */}
      <Modal 
        classNames={{
          modal: "rounded-[10px] overflow-visible relative",
        }}
        open={open} 
        onClose={onCloseModal} 
        center
      >
        <div className="md:max-w-sm body-font font-poppins">
          <h2 className="text-[#333333] font-semibold md:text-[20px] text-[18px]">
            Payment for credit eligibility test
          </h2>
          <div className="p-3 bg-[#FFF1CC] mt-2 text-[#987104]">
            <h5 className="text-[14px]">
              Please, we recommend that you use the card option to make your payment 
            </h5>
          </div>
          <h2 className="text-center text-[#1DB459] font-bold md:text-[26px] text-[22px] pb-4">
            {payment?.amount}
          </h2>
          <div className="flex justify-center mt-10 mb-4">
            <button
              onClick={handleSubmit2}
              disabled={loading}
              className={`${
                loading ? "bg-gray-400" : "bg-[#1DB459]"
              } text-white md:w-[300px] w-full flex justify-center px-5 rounded-full py-3`}
            >
              {loading ? "Processing..." : "Make payment"}
            </button>
          </div>
        </div>
      </Modal>

      {/* Success Modal */}
      <Modal   
        classNames={{
          modal: "rounded-[10px] overflow-visible relative",
        }}
        open={openSuccess} 
        onClose={onCloseSuccessModal} 
        center
      >
        <div className="md:max-w-sm body-font font-poppins">
          <h2 className="text-[#333333] text-center font-bold md:text-[22px] text-[20px]">
            Payment successful
          </h2>
          <h2 className="text-center text-[#7A7979] text-[19px] pb-4">
            You can now proceed to fill your school processing form
          </h2>
          <div className="flex justify-center mt-10 mb-4">
            <button
              onClick={handleSubmit2}
              className="bg-[#1DB459] text-white md:w-[300px] w-full flex justify-center px-5 rounded-full py-3"
            >
              Proceed
            </button>
          </div>
        </div>
      </Modal>
                          <ToastContainer />
      
    </div>
  );
};

export default EduGold;