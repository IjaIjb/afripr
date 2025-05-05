import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
// import PersonalInfoForm from "./steps/PersonalInfoForm";
// import EducationalInfoForm from "./steps/EducationalInfoForm";
// import DocumentVerificationForm from "./steps/DocumentVerificationForm";
// import ParentGuardianForm from "./steps/ParentGuardianForm";
// import SkillsCareerForm from "./steps/SkillsCareerForm";
// import UniversityPreferenceForm from "./steps/UniversityPreferenceForm";
// import FinancialInfoForm from "./steps/FinancialInfoForm";
// import SuccessScreen from "./steps/SuccessScreen";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserApis } from "../../../apis/userApi/userApi";
import PersonalInfoForm from "./steps/PersonalInfoForm";
import Navbar from "../../../component/Navbar";
import EducationalInfoForm from "./steps/EducationalInfoForm";
import DocumentVerificationForm from "./steps/DocumentVerificationForm";
import ParentGuardianForm from "./steps/ParentGuardianForm";
import SkillsCareerForm from "./steps/SkillsCareerForm";
import UniversityPreferenceForm from "./steps/UniversityPreferenceForm";
import FinancialInfoForm from "./steps/FinancialInfoForm";
import SuccessScreen from "./steps/SuccessScreen";
import { useSelector } from "react-redux";

const ProfileCompletion = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [profileData, setProfileData] = useState<any>({});
  const userLoginData = useSelector((state:any) => state.data.login.value);
  console.log(userLoginData);

   React.useEffect(() => {
      UserApis.getUserById(userLoginData?.data?.id)
        .then((response) => {
          if (response?.data) {
            console?.log(response);
            console?.log(response?.data?.first_name);
            // Update the form with API data
           setProfileData(response?.data)
           setUserData(prevData => ({
            ...prevData,
            first_name: response?.data?.first_name || '',
            last_name: response?.data?.last_name || '',
            // email: response.data.email || '',
            // phone_number: response.data.phone || '',
            // gender: response.data.gender || ''
          }));
          } else {
            // dispatch(login([]))
          }
        })
        .catch(function (error) {});
    }, []);
 
    console.log(profileData.first_name)
  const [userData, setUserData] = useState({
    // Step 1: Personal Info
    first_name: profileData.first_name,
    middle_name: profileData.last_name,
    last_name: "",
    preferred_name: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    email: "",
    phone_number: "",
    profile_image: null,
    residential_address: "",
    country: "",
    state: "",
    city: "",
    social_handles: "",
    employment_status: "",
    
    // User profile ID received after step 1
    user_profile_id: "",
    
    // Step 2: Educational Background
    academic_status: "",
    current_institution_name: "",
    previous_schools_attended: "",
    education_level_completed: "",
    certificate_name: "",
    certificate_image: null,
    
    // Step 3: Document Verification
    passportimage: null,
    valid_id: null,
    proof_of_residence: null,
    recommendation_letter: null,
    personal_statement_or_cv: null,
    
    // Step 4: Parent/Guardian Information
    parent_fullname: "",
    relationship: "",
    contact_information: "",
    parent_address: "",
    
    // Step 5: Skills & Career
    current_skills: "",
    certificate_earned: "",
    career_goals: "",
    dream_job_role: "",
    areas_of_interest: "",
    regular_power: "",
    
    // Step 6: University Preference (optional)
    country_of_interest: "",
    preferred_region: "",
    preferred_language: "",
    budget: "",
    preferred_study_mode: "",
    previous_visa_rejection: "",
    
    // Step 7: Financial Information
    self_funding_or_sponsored: "",
    annual_family_income_range: "",
    funding_plan: "",
    willing_to_take_loan: "",
  });

  console.log(userData)

  // Function to handle file uploads and convert to base64
  const handleFileUpload = (file:any, field:any) => {
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setUserData({ ...userData, [field]: reader.result });
    };
    reader.readAsDataURL(file);
  };

  // Function to handle input changes
// Function to handle input changes
const handleInputChange = (e:any) => {
  const { name, value, files } = e.target;
  
  if (files && files[0]) {
    // Store the file object instead of converting to base64
    setUserData({ ...userData, [name]: files[0] });
  } else {
    setUserData({ ...userData, [name]: value });
  }
};

  // Function to move to the next step
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Function to move to the previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Function to skip optional steps
  const skipStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Step 1: Submit Personal Information
  const submitPersonalInfo = async () => {
    setLoading(true);
    try {
      const response = await UserApis.kycAddUserProfile({
        // first_name: userData.first_name,
        // middle_name: userData.middle_name,
        // last_name: userData.last_name,
        preferred_name: userData.preferred_name,
        date_of_birth: userData.date_of_birth,
        gender: userData.gender,
        nationality: userData.nationality,
        email: userData.email,
        phone_number: userData.phone_number,
        // profile_image: userData.profile_image,
        residential_address: userData.residential_address,
        country: userData.country,
        state: userData.state,
        city: userData.city,
        social_handles: userData.social_handles,
        employment_status: userData.employment_status,
        step_1_completed: true
      });
      
      if (response?.data) {
        // Save the user profile ID for subsequent steps
        setUserData({ ...userData, user_profile_id: response.data.id });
        toast.success("Personal information saved successfully");
        nextStep();
      } else {
        toast.error("Failed to save personal information");
      }
    } catch (error:any) {
      console.error("Error submitting personal info:", error);
      toast.error(error?.response?.data?.message || "Failed to save personal information");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Submit Educational Background
  const submitEducationalInfo = async () => {
    setLoading(true);
    try {
      const response = await UserApis.kycAddUserProfileEducational({
        user_profile_id: userData.user_profile_id,
        academic_status: userData.academic_status,
        current_institution_name: userData.current_institution_name,
        previous_schools_attended: userData.previous_schools_attended,
        education_level_completed: userData.education_level_completed,
        certificate_name: userData.certificate_name,
        certificate_image: userData.certificate_image,
        step_2_completed: true
      });
      
      if (response?.data) {
        toast.success("Educational information saved successfully");
        nextStep();
      } else {
        toast.error("Failed to save educational information");
      }
    } catch (error:any) {
      console.error("Error submitting educational info:", error);
      toast.error(error?.response?.data?.message || "Failed to save educational information");
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Submit Document Verification
// Step 3: Submit Document Verification
const submitDocumentVerification = async () => {
  setLoading(true);
  try {
    // Create FormData to handle file uploads
    const formData = new FormData();
    
    formData.append('user_profile_id', 
      userData.user_profile_id);
    
    if (userData.passportimage) {
      formData.append('passportimage', userData.passportimage);
    }
    if (userData.valid_id) {
      formData.append('valid_id', userData.valid_id);
    }
    if (userData.proof_of_residence) {
      formData.append('proof_of_residence', userData.proof_of_residence);
    }
    if (userData.recommendation_letter) {
      formData.append('recommendation_letter', userData.recommendation_letter);
    }
    if (userData.personal_statement_or_cv) {
      formData.append('personal_statement_or_cv', userData.personal_statement_or_cv);
    }

    const response = await UserApis.kycAddUserProfileDocumentVerification(formData);
    
    if (response?.data) {
      toast.success("Documents uploaded successfully");
      nextStep();
    } else {
      toast.error("Failed to upload documents");
    }
  } catch (error:any) {
    console.error("Error submitting documents:", error);
    toast.error(error?.response?.data?.message || "Failed to upload documents");
  } finally {
    setLoading(false);
  }
};

  // Step 4: Submit Parent/Guardian Information
  const submitParentInfo = async () => {
    setLoading(true);
    try {
      const response = await UserApis.kycAddUserProfileParent({
        // user_profile_id: "9ed50bfc-f203-49b4-b37b-057d4254d6fa",
        user_profile_id: userData.user_profile_id,


        
        fullname: userData.parent_fullname,
        relationship: userData.relationship,
        contact_information: userData.contact_information,
        address: userData.parent_address
      });
      
      if (response?.data) {
        toast.success("Parent/Guardian information saved successfully");
        nextStep();
      } else {
        toast.error("Failed to save parent/guardian information");
      }
    } catch (error:any) {
      console.error("Error submitting parent info:", error);
      toast.error(error?.response?.data?.message || "Failed to save parent/guardian information");
    } finally {
      setLoading(false);
    }
  };

  // Step 5: Submit Skills & Career Information
  const submitSkillsCareer = async () => {
    setLoading(true);
    try {
      const response = await UserApis.kycAddUserProfileSkillsCareer({
        user_profile_id: userData.user_profile_id,
        // user_profile_id: "9ed50bfc-f203-49b4-b37b-057d4254d6fa",

        
        current_skills: userData.current_skills,
        certificate_earned: userData.certificate_earned,
        career_goals: userData.career_goals,
        dream_job_role: userData.dream_job_role,
        areas_of_interest: userData.areas_of_interest,
        regular_power: userData.regular_power
      });
      
      if (response?.data) {
        toast.success("Skills & career information saved successfully");
        nextStep();
      } else {
        toast.error("Failed to save skills & career information");
      }
    } catch (error:any) {
      console.error("Error submitting skills & career info:", error);
      toast.error(error?.response?.data?.message || "Failed to save skills & career information");
    } finally {
      setLoading(false);
    }
  };

  // Step 6: Submit University Preference
  const submitUniversityPreference = async () => {
    setLoading(true);
    try {
      const response = await UserApis.kycAddUserProfileUniversityPreference({
        user_profile_id: userData.user_profile_id,
        // user_profile_id: "9ed50bfc-f203-49b4-b37b-057d4254d6fa",

        
        country_of_interest: userData.country_of_interest,
        preferred_region: userData.preferred_region,
        preferred_language: userData.preferred_language,
        budget: userData.budget,
        preferred_study_mode: userData.preferred_study_mode,
        previous_visa_rejection: userData.previous_visa_rejection
      });
      
      if (response?.data) {
        toast.success("University preferences saved successfully");
        nextStep();
      } else {
        toast.error("Failed to save university preferences");
      }
    } catch (error:any) {
      console.error("Error submitting university preferences:", error);
      toast.error(error?.response?.data?.message || "Failed to save university preferences");
    } finally {
      setLoading(false);
    }
  };

  // Step 7: Submit Financial Information
  const submitFinancialInfo = async () => {
    setLoading(true);
    try {
      const response = await UserApis.kycAddUserProfileFinancialInfo({
        user_profile_id: userData.user_profile_id,
        // user_profile_id: "9ed50bfc-f203-49b4-b37b-057d4254d6fa",

        
        self_funding_or_sponsored: userData.self_funding_or_sponsored,
        annual_family_income_range: userData.annual_family_income_range,
        funding_plan: userData.funding_plan,
        willing_to_take_loan: userData.willing_to_take_loan
      });
      
      if (response?.data) {
        toast.success("Financial information saved successfully");
        nextStep(); // Move to success screen
      } else {
        toast.error("Failed to save financial information");
      }
    } catch (error:any) {
      console.error("Error submitting financial info:", error);
      toast.error(error?.response?.data?.message || "Failed to save financial information");
    } finally {
      setLoading(false);
    }
  };

  // Navigate to dashboard after completion
  const proceedToDashboard = () => {
    navigate("/user/dashboard");
  };

  // Render the appropriate step form
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoForm 
            userData={userData}
            handleInputChange={handleInputChange}
            onSubmit={submitPersonalInfo}
            loading={loading}
          />
        );
      case 2:
        return (
          <EducationalInfoForm 
            userData={userData}
            handleInputChange={handleInputChange}
            onSubmit={submitEducationalInfo}
            loading={loading}
          />
        );
      case 3:
        return (
          <DocumentVerificationForm 
            userData={userData}
            handleInputChange={handleInputChange}
            onSubmit={submitDocumentVerification}
            onSkip={skipStep}
            loading={loading}
          />
        );
      case 4:
        return (
          <ParentGuardianForm 
            userData={userData}
            handleInputChange={handleInputChange}
            onSubmit={submitParentInfo}
            onSkip={skipStep}
            loading={loading}
          />
        );
      case 5:
        return (
          <SkillsCareerForm 
            userData={userData}
            handleInputChange={handleInputChange}
            onSubmit={submitSkillsCareer}
            onSkip={skipStep}
            loading={loading}
          />
        );
      case 6:
        return (
          <UniversityPreferenceForm 
            userData={userData}
            handleInputChange={handleInputChange}
            onSubmit={submitUniversityPreference}
            onSkip={skipStep}
            loading={loading}
          />
        );
      case 7:
        return (
          <FinancialInfoForm 
            userData={userData}
            handleInputChange={handleInputChange}
            onSubmit={submitFinancialInfo}
            onSkip={skipStep}
            loading={loading}
          />
        );
      case 8:
        return (
          <SuccessScreen 
            onProceed={proceedToDashboard}
          />
        );
      default:
        return null;
    }
  };

  // Progress indicator width calculation
  const calculateProgressWidth = () => {
    return `${((currentStep - 1) / 7) * 100}%`;
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="lg:p-3 p-2 min-h-screen bg-gray-100">
        <div className="flex justify-center">
          <div className="max-w-[2000px] mx-auto lg:px-14 px-3 w-full">
            <Navbar />
            <div className="md:px-10">
              <div className="flex min-h-screen lg:mt-[100px] mt-[50px]">
                {/* Left Section */}
                <div className="w-1/2 bg-[#1DB459] lg:flex hidden flex-col flex-grow items-center  text-white p-8 rounded-l-3xl">
                  <div className="mb-8">
                    <img src="/logo.svg" alt="AfriProEdu Logo" className="h-10" />
                  </div>
                  <h2 className="text-3xl font-bold mb-8">Explore Global Institution</h2>
                  <img
                    src="/images/home/explore.svg"
                    alt="Study Abroad"
                    className="w-[300px] h-[300px]"
                  />
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 w-full bg-white flex flex-col flex-grow md:px-12 px-3 py-6 rounded-r-3xl shadow-md">
                  <h2 className="text-[24px] pt-6 font-bold text-[#1DB459] text-center">
                    Complete Profile Details
                  </h2>
                  <p className="text-[#494949] text-[12px] text-center mb-6">
                    Enter the required information below to finish your registration
                  </p>

                  {/* Progress indicator */}
                  <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
                    <div
                      className="h-full bg-[#1DB459] rounded-full transition-all duration-300 ease-in-out"
                      style={{ width: calculateProgressWidth() }}
                    ></div>
                  </div>

                  {/* Step indicators */}
                  <div className="flex justify-between mb-8">
                    {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                      <div
                        key={step}
                        className={`w-2 h-2 rounded-full ${
                          currentStep >= step ? "bg-[#1DB459]" : "bg-gray-300"
                        }`}
                      ></div>
                    ))}
                  </div>

                  {/* Current step form */}
                  {renderStep()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;