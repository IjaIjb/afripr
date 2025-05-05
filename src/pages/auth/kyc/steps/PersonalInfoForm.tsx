import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AdminApis } from "../../../../apis/adminApi/adminApi";
import { UserApis } from "../../../../apis/userApi/userApi";
import { toast } from "react-toastify";

const PersonalInfoForm = ({ userData, handleInputChange, onSubmit, loading }:any) => {
  const [uploadingImage, setUploadingImage] = useState(false);

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

  console.log(userData)
  
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
            <select
              name="gender"
              value={userData.gender}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nationality</label>
            <input
              type="text"
              name="nationality"
              value={userData.nationality}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              required
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
            <select
              name="employment_status"
              value={userData.employment_status}
              onChange={handleInputChange}
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
              required
            >
              <option value="">Select Employment Status</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Self-employed">Self-employed</option>
              <option value="Student">Student</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Other">Other</option>
            </select>
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