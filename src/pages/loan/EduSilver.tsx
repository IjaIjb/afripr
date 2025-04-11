import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserApis } from "../../apis/userApi/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import schoolsData from "../../assets/schoolsData.json"; // Adjust path as needed
import countryList from "../../assets/country-list.json"; // Adjust path as needed

const EduSilverHome = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  const [formData, setFormData] = useState<any>({
    nationality: "",
    residence: "",
    schoolCountry: "",
    admittedSchool: "",
    course: "",
    admissionLetter: "",
    programType: "",
    isSTEM: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const [universities, setUniversities] = useState<string[]>([]);
// Extract country names
const countryNames = countryList.map((country: any) => country.name);

  // Extract countries from JSON
  const countries = schoolsData.map((country: any) => country.name);

  useEffect(() => {
    if (formData.schoolCountry) {
      const selectedCountry = schoolsData.find(
        (country: any) => country.name === formData.schoolCountry
      );
      setUniversities(selectedCountry ? selectedCountry.details.map((uni: any) => uni.name) : []);
    } else {
      setUniversities([]);
    }
  }, [formData.schoolCountry]);
  
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Map form values to the required API payload format
      const payload = {
        nationality: formData.nationality,
        admision_letter: formData.admissionLetter === "yes" ? "Yes" : "No",
        country_residence: formData.residence,
        programme_type:
          formData.programType === "bachelor" ? "Undergraduate" : "Graduate",
        school_country: formData.schoolCountry,
        admitted_school: formData.admittedSchool,
        course_admitted: formData.course,
        stem_related: formData.isSTEM === "yes" ? "Yes" : "No",
        status: "Pending",
      };

      // Post data to the API
      const response = await UserApis.applyEduSilver(payload);
      if (response.data) {
        // Handle redirection based on admission letter value
        if (formData.admissionLetter === "yes") {
          navigate("/loan/edu-premium"); // Redirect to edu-premium if Yes
          toast.success(
            response.data.message || "Edusilver created successfully"
          );
        } else {
          navigate("/loan/edu-gold"); // Redirect to edu-gold if No
          toast.success(
            response.data.message || "Edusilver created successfully"
          );
        }
      }
    } catch (err: any) {
      setError(
        "An error occurred while submitting your application. Please try again."
      );
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="">
        <div className="md:p-[20px] flex w-full justify-center">
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
                </div>
                <div className="max-w-4xl mx-auto bg-gray-50 relative p-4 sm:p-6 rounded-[20px] shadow-xl border border-primary/[62%]">
                  <button
                    type="button"
                    onClick={handleBackClick}
                    className="flex items-center text-gray-600 mb-4"
                  >
                    <FaArrowLeft className="mr-2" />
                    <span>Back</span>
                  </button>
                  <h2 className="text-center text-primary font-bold text-lg pt-3">
                    EDU SILVER
                  </h2>
                  <p className="text-center text-[#5B5B5B] text-[14px] mb-7">
                    For student with admission letter
                  </p>

                  <img
                    src="/images/loan/eduSilver.svg"
                    className="absolute -top-7 right-6"
                    alt="location"
                  />

                  {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <select
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                        required
                      >
                        <option value="">Please select your nationality</option>
                        {countryNames.map((country: string) => (
    <option key={country} value={country}>
      {country}
    </option>
  ))}
                      </select>

                      <select
                        name="admissionLetter"
                        value={formData.admissionLetter}
                        onChange={handleChange}
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                        required
                      >
                        <option value="">
                          Do you have an admission letter?
                        </option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>

                      <select
                        name="residence"
                        value={formData.residence}
                        onChange={handleChange}
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                        required
                      >
                        <option value="">Country of residence</option>
                        {countryNames.map((country: string) => (
    <option key={country} value={country}>
      {country}
    </option>
  ))}
                      </select>

                      <select
                        name="programType"
                        value={formData.programType}
                        onChange={handleChange}
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                        required
                      >
                        <option value="">Select your program type</option>
                        <option value="undergraduage">Under Graduate</option>
                        <option value="pgd">Post Graduate</option>
                        <option value="masters">Masters</option>
                      </select>

                      <select
                        name="schoolCountry"
                        value={formData.schoolCountry}
                        onChange={handleChange}
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                        required
                      >
                        <option value="">Select your school's country</option>
                        {countries.map((country:any) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
                      </select>

                      <select
                        name="admittedSchool"
                        value={formData.admittedSchool}
                        onChange={handleChange}
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                        required
                      >
                        <option value="">Select your admitted school</option>
                        {universities?.map((university:any) => (
          <option key={university} value={university}>
            {university}
          </option>
        ))}
                      </select>

                      <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        placeholder="Enter the course you are admitted to"
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                        required
                      />

                      <select
                        name="isSTEM"
                        value={formData.isSTEM}
                        onChange={handleChange}
                        className="w-full p-4 text-[14px] text-[#000000] border border-gray-200 rounded-xl"
                        required
                      >
                        <option value="">Is your course STEM-related?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold"
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Proceed"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 flex w-full justify-center">
          <div className="flex w-full justify-center">
            <div className="max-w-[2000px] relative mx-auto lg:px-14 px-3 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduSilverHome;
