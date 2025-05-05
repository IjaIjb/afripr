import React, { useState } from "react";
import { toast } from "react-toastify";

const SkillsCareerForm = ({ userData, handleInputChange, onSubmit, onSkip, loading }:any) => {
  const [uploadingCertificate, setUploadingCertificate] = useState(false);
  const [certificates, setCertificates] = useState<string[]>(
    userData?.certificate_earned ? JSON.parse(userData?.certificate_earned) : []
  );

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Update the certificate_earned field with stringified array before submitting
    const updatedUserData = {
      ...userData,
      certificate_earned: JSON.stringify(certificates)
    };
    onSubmit(updatedUserData);
  };

  const handleCertificateUpload = async (e:any) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadingCertificate(true);
      
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
          // Add the new certificate to the array
          const newCertificates = [...certificates, result.secure_url];
          setCertificates(newCertificates);
          
          // Update the parent state
          handleInputChange({
            target: {
              name: 'certificate_earned',
              value: JSON.stringify(newCertificates)
            }
          });
          
          toast.success('Certificate uploaded successfully');
        } else {
          throw new Error('Upload failed');
        }
        
        setUploadingCertificate(false);
      } catch (error) {
        console.error("Error uploading certificate", error);
        toast.error("Error uploading certificate. Please try again.");
        setUploadingCertificate(false);
      }
    }
  };

  const removeCertificate = (index: number) => {
    const newCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(newCertificates);
    
    // Update the parent state
    handleInputChange({
      target: {
        name: 'certificate_earned',
        value: JSON.stringify(newCertificates)
      }
    });
  };

  const getCertificatePreview = (url: string) => {
    const fileExtension = url.split('.').pop()?.toLowerCase();
    const isImage = ['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension || '');
    
    if (isImage) {
      return <img src={url} alt="Certificate" className="h-12 object-cover rounded" />;
    } else {
      return (
        <div className="h-12 w-12 bg-gray-200 rounded flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      );
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Skill & Career Aspiration</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Skills
          </label>
          <textarea
            name="current_skills"
            value={userData.current_skills}
            onChange={handleInputChange}
            placeholder="e.g., Programming, Communication, Leadership"
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3 h-20"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Career Goals (Short Answer)
          </label>
          <textarea
            name="career_goals"
            value={userData.career_goals}
            onChange={handleInputChange}
            placeholder="Briefly describe your career aspirations"
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3 h-20"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dream Job Role
          </label>
          <select
            name="dream_job_role"
            value={userData.dream_job_role}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          >
            <option value="">Select Role</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Product Manager">Product Manager</option>
            <option value="UX/UI Designer">UX/UI Designer</option>
            <option value="Business Analyst">Business Analyst</option>
            <option value="Marketing Specialist">Marketing Specialist</option>
            <option value="Financial Analyst">Financial Analyst</option>
            <option value="Doctor">Doctor</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Teacher">Teacher</option>
            <option value="Researcher">Researcher</option>
            <option value="Entrepreneur">Entrepreneur</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Areas of Interest (IT, Medicine, Law, etc.)
          </label>
          <input
            type="text"
            name="areas_of_interest"
            value={userData.areas_of_interest}
            onChange={handleInputChange}
            placeholder="e.g., Artificial Intelligence, Healthcare, International Law"
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you have a laptop and regular power supply for your training programmes?
          </label>
          <select
            name="regular_power"
            value={userData.regular_power}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Certificates Earned (e.g., Coursera, Udemy uploads)
          </label>
          
          {/* Display uploaded certificates */}
          {certificates.length > 0 && (
            <div className="mb-4 space-y-2">
              {certificates.map((cert, index) => (
                <div key={index} className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    {getCertificatePreview(cert)}
                    <div>
                      <p className="text-sm font-medium text-gray-700">Certificate {index + 1}</p>
                      <p className="text-xs text-gray-500 truncate max-w-[200px]">{cert}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeCertificate(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {/* Upload new certificate */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
            {uploadingCertificate ? (
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1DB459] mx-auto mb-2"></div>
                <p className="text-sm text-[#1DB459]">Uploading...</p>
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
              name="certificate_earned"
              onChange={handleCertificateUpload}
              accept=".pdf,.jpg,.jpeg,.png"
              className="hidden"
              id="certificate-upload"
              disabled={uploadingCertificate}
            />
            <label htmlFor="certificate-upload" className="cursor-pointer">
              <span className="text-[#1DB459] font-medium">
                {uploadingCertificate ? "Uploading..." : "Upload Certificate"}
              </span>
            </label>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Accept file size of your documents should not exceed 5MB
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
            disabled={loading || uploadingCertificate}
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkillsCareerForm;