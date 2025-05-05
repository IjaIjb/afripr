// DocumentVerificationForm.tsx
import React from "react";
import { toast } from "react-toastify";

const DocumentVerificationForm = ({ userData, handleInputChange, onSubmit, onSkip, loading }:any) => {
  const [uploadingFiles, setUploadingFiles] = React.useState<Record<string, boolean>>({});

  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit();
  };

  const handleFileChange = async (e:any) => {
    const { name, files } = e.target;
    
    if (files && files[0]) {
      const file = files[0];
      
      // Show uploading state for this specific file
      setUploadingFiles(prev => ({ ...prev, [name]: true }));
      
      try {
        // Create a FormData object
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "urban_image");
        
        // Choose the appropriate endpoint based on file type
        const endpoint = file.type.startsWith('image/') 
          ? "https://api.cloudinary.com/v1_1/dngyazspl/image/upload"
          : "https://api.cloudinary.com/v1_1/dngyazspl/auto/upload"; // Use 'auto' for non-image files
        
        // Upload to Cloudinary
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
        });
        
        const result = await response.json();
        
        if (result.secure_url) {
          // Update state with the Cloudinary URL
          handleInputChange({
            target: {
              name: name,
              value: result.secure_url
            }
          });
          toast.success(`${name.replace('_', ' ')} uploaded successfully`);
        } else {
          throw new Error('Upload failed');
        }
        
        setUploadingFiles(prev => ({ ...prev, [name]: false }));
      } catch (error) {
        console.error("Error uploading file", error);
        toast.error(`Error uploading ${name.replace('_', ' ')}. Please try again.`);
        setUploadingFiles(prev => ({ ...prev, [name]: false }));
      }
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile photo & Documents</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Profile photo
          </label>
          <div className="flex items-center">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center relative">
              {uploadingFiles.profile_image ? (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1DB459]"></div>
              ) : userData.profile_image ? (
                <img 
                  src={userData.profile_image} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              )}
              <div className="absolute bottom-0 right-0 bg-[#1DB459] rounded-full w-6 h-6 flex items-center justify-center">
                <span className="text-white text-xs">+</span>
              </div>
            </div>
            <input
              type="file"
              name="profile_image"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              id="profile-image-upload"
              disabled={uploadingFiles.profile_image}
            />
            <label htmlFor="profile-image-upload" className="ml-4 cursor-pointer">
              <span className="text-[#1DB459] font-medium">
                {uploadingFiles.profile_image ? "Uploading..." : "Change Photo"}
              </span>
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Passport Photo (optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
              {uploadingFiles.passportimage ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1DB459] mx-auto mb-2"></div>
                  <p className="text-sm text-[#1DB459]">Uploading...</p>
                </div>
              ) : userData.passportimage ? (
                <div className="mb-2">
                  <img 
                    src={userData.passportimage} 
                    alt="Passport Preview" 
                    className="h-16 object-contain"
                  />
                </div>
              ) : (
                <div className="text-gray-400 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
              )}
              <input
                type="file"
                name="passportimage"
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                id="passport-upload"
                disabled={uploadingFiles.passportimage}
              />
              <label htmlFor="passport-upload" className="cursor-pointer">
                <span className="text-[#1DB459] font-medium">
                  {uploadingFiles.passportimage ? "Uploading..." : "Upload"}
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Max file size: 5MB
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Valid ID (National ID, Driver's License, etc.)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
              {uploadingFiles.valid_id ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1DB459] mx-auto mb-2"></div>
                  <p className="text-sm text-[#1DB459]">Uploading...</p>
                </div>
              ) : userData.valid_id ? (
                <div className="mb-2">
                  <img 
                    src={userData.valid_id} 
                    alt="ID Preview" 
                    className="h-16 object-contain"
                  />
                </div>
              ) : (
                <div className="text-gray-400 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
              )}
              <input
                type="file"
                name="valid_id"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="hidden"
                id="id-upload"
                disabled={uploadingFiles.valid_id}
              />
              <label htmlFor="id-upload" className="cursor-pointer">
                <span className="text-[#1DB459] font-medium">
                  {uploadingFiles.valid_id ? "Uploading..." : "Upload"}
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Max file size: 5MB
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Proof of Residence (utility bill, etc.)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
              {uploadingFiles.proof_of_residence ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1DB459] mx-auto mb-2"></div>
                  <p className="text-sm text-[#1DB459]">Uploading...</p>
                </div>
              ) : userData.proof_of_residence ? (
                <div className="mb-2">
                  <img 
                    src={userData.proof_of_residence} 
                    alt="Proof of Residence Preview" 
                    className="h-16 object-contain"
                  />
                </div>
              ) : (
                <div className="text-gray-400 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
              )}
              <input
                type="file"
                name="proof_of_residence"
                onChange={handleFileChange}
                accept="image/*,.pdf"
                className="hidden"
                id="residence-upload"
                disabled={uploadingFiles.proof_of_residence}
              />
              <label htmlFor="residence-upload" className="cursor-pointer">
                <span className="text-[#1DB459] font-medium">
                  {uploadingFiles.proof_of_residence ? "Uploading..." : "Upload"}
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Max file size: 5MB
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Personal Statement/CV (optional)
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
              {uploadingFiles.personal_statement_or_cv ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1DB459] mx-auto mb-2"></div>
                  <p className="text-sm text-[#1DB459]">Uploading...</p>
                </div>
              ) : userData.personal_statement_or_cv ? (
                <div className="mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1DB459]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              ) : (
                <div className="text-gray-400 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
              )}
              <input
                type="file"
                name="personal_statement_or_cv"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="cv-upload"
                disabled={uploadingFiles.personal_statement_or_cv}
              />
              <label htmlFor="cv-upload" className="cursor-pointer">
                <span className="text-[#1DB459] font-medium">
                  {uploadingFiles.personal_statement_or_cv ? "Uploading..." : "Upload"}
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Max file size: 5MB
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Recommendation Letter (optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
            {uploadingFiles.recommendation_letter ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1DB459] mx-auto mb-2"></div>
                <p className="text-sm text-[#1DB459]">Uploading...</p>
              </div>
            ) : userData.recommendation_letter ? (
              <div className="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1DB459]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            ) : (
              <div className="text-gray-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
            )}
            <input
              type="file"
              name="recommendation_letter"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
              id="recommendation-upload"
              disabled={uploadingFiles.recommendation_letter}
            />
            <label htmlFor="recommendation-upload" className="cursor-pointer">
              <span className="text-[#1DB459] font-medium">
                {uploadingFiles.recommendation_letter ? "Uploading..." : "Upload"}
              </span>
            </label>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Max file size: 5MB
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            type="button"
            onClick={onSkip}
            className="px-6 md:px-10 border border-[#1DB459] text-[#1DB459] py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            Skip
          </button>
          <button
            type="submit"
            className="px-6 md:px-10 bg-[#1DB459] text-white py-3 rounded-full hover:bg-green-700 transition-colors"
            disabled={loading || Object.values(uploadingFiles).some(isUploading => isUploading)}
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocumentVerificationForm;