import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { AdminApis } from "../../../../apis/adminApi/adminApi";
import { UserApis } from "../../../../apis/userApi/userApi";
import { toast } from "react-toastify";

// Custom Select Component
const CustomSelect = ({ name, options, placeholder, value, onChange }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef:any = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelect = (option:any) => {
    // Create a synthetic event object to match the onChange interface
    const syntheticEvent = {
      target: {
        name: name,
        value: option
      }
    };
    onChange(syntheticEvent);
    setIsOpen(false);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Custom Select Button */}
      <div 
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full mt-1 px-4 py-3 bg-white border border-[#D7F5DC] shadow-sm rounded-lg cursor-pointer focus:outline-none hover:border-primary transition-colors"
      >
        <span className={`text-sm truncate ${!value ? 'text-gray-400' : 'text-gray-800'}`}>
          {value || placeholder}
        </span>
        <svg 
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option:any) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:text-white w-full hover:bg-[#1DB459]/[60%] transition-colors"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const PersonalInfoForm = ({ userData, handleInputChange, onSubmit, loading }:any) => {
  const [uploadingImage, setUploadingImage] = useState(false);

  // Define options for select fields
  const genderOptions = ["Male", "Female", "Other"];
  const employmentStatusOptions = ["Full-time", "Part-time", "Self-employed", "Student", "Unemployed", "Other"];
  
  // Nationality options (demonyms) - comprehensive list of nationalities
  const nationalityOptions = [
    "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguan", "Argentine", "Armenian", 
    "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", 
    "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Motswana", "Brazilian", 
    "British", "Bruneian", "Bulgarian", "Burkinabe", "Burundian", "Cambodian", "Cameroonian", "Canadian", 
    "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Congolese", 
    "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican", 
    "Dutch", "Ecuadorian", "Egyptian", "Salvadoran", "Equatorial Guinean", "Eritrean", "Estonian", 
    "Ethiopian", "Fijian", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", 
    "Greek", "Grenadian", "Guatemalan", "Guinean", "Guyanese", "Haitian", "Honduran", "Hungarian", 
    "Icelandic", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Jamaican", 
    "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kiribati", "North Korean", "South Korean", "Kuwaiti", 
    "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Mosotho", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", 
    "Luxembourgish", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", 
    "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", 
    "Montenegrin", "Moroccan", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealand", "Nicaraguan", 
    "Nigerian", "Nigerien", "Norwegian", "Omani", "Pakistani", "Palauan", "Palestinian", "Panamanian", 
    "Papua New Guinean", "Paraguayan", "Peruvian", "Filipino", "Polish", "Portuguese", "Qatari", "Romanian", 
    "Russian", "Rwandan", "Saint Lucian", "Samoan", "Sammarinese", "Saudi Arabian", "Senegalese", "Serbian", 
    "Seychellois", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", "Solomon Islander", "Somali", 
    "South African", "South Sudanese", "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swazi", "Swedish", 
    "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Timorese", "Togolese", "Tongan", 
    "Trinidadian", "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Emirati", 
    "Uruguayan", "Uzbek", "Ni-Vanuatu", "Vatican", "Venezuelan", "Vietnamese", "Yemeni", "Zambian", "Zimbabwean"
  ];

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit();
  };

  const handleImageUpload = async (e:any) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadingImage(true);
      
      try {
        // Create a FormData object
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "urban_image"); // Your Cloudinary preset
        
        // Upload to Cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dngyazspl/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        
        const result = await response.json();
        
        if (result.secure_url) {
          // Update the profile_image field with the Cloudinary URL
          handleInputChange({
            target: {
              name: 'profile_image',
              value: result.secure_url
            }
          });
          toast.success('Profile image uploaded successfully');
        } else {
          throw new Error('Upload failed');
        }
        
        setUploadingImage(false);
      } catch (error) {
        console.error("Error uploading image", error);
        toast.error("Error uploading image. Please try again.");
        setUploadingImage(false);
      }
    }
  };
  
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="first_name"
              value={userData.first_name}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3 bg-gray-100"
              required
              disabled={true}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="last_name"
              value={userData.last_name}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3 bg-gray-100"
              required
              disabled={true}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
            <input
              type="text"
              name="middle_name"
              value={userData.middle_name}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Name</label>
            <input
              type="text"
              name="preferred_name"
              value={userData.preferred_name}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              value={userData.phone_number}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              placeholder="🇳🇬 Phone Number"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              name="date_of_birth"
              value={userData.date_of_birth}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <CustomSelect
              name="gender"
              options={genderOptions}
              placeholder="Select Gender"
              value={userData.gender}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
            <CustomSelect
              name="nationality"
              options={nationalityOptions}
              placeholder="Select Nationality"
              value={userData.nationality}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Residential Address</label>
            <input
              type="text"
              name="residential_address"
              value={userData.residential_address}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={userData.country}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              name="state"
              value={userData.state}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="city"
              value={userData.city}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Social Handles (LinkedIn, Twitter - optional)</label>
            <input
              type="text"
              name="social_handles"
              value={userData.social_handles}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              placeholder="e.g., linkedin.com/in/username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Employment Status</label>
            <CustomSelect
              name="employment_status"
              options={employmentStatusOptions}
              placeholder="Select Employment Status"
              value={userData.employment_status}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center text-center justify-center">

            {userData.profile_image && (
              <div className="mr-4">
                <img 
                  src={userData.profile_image} 
                  alt="Profile Preview" 
                  className="h-16 w-16 rounded-full object-cover"
                />
              </div>
            )}
            <div className="relative">
              <input
                type="file"
                name="profile_image"
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
                required={!userData.profile_image}
                disabled={uploadingImage}
                id="profile-image-input"
              />
                 <label htmlFor="profile-image-input" className="cursor-pointer">
                <span className="text-[#1DB459] text-center font-medium">
                  {uploadingImage ? "Uploading..." : "Upload"}
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Max file size: 5MB
              </p>
              {uploadingImage && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1DB459]"></div>
                </div>
              )}
            </div>
          </div>
          {uploadingImage && (
            <p className="text-sm text-[#1DB459] mt-1">Uploading image...</p>
          )}
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="px-10 md:px-20 bg-[#1DB459] text-white py-3 rounded-full hover:bg-green-700 transition-colors"
            disabled={loading || uploadingImage}
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoForm;