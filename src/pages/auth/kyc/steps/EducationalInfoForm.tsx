import React, { useState, useRef, useEffect } from "react";
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

const EducationalInfoForm = ({ userData, handleInputChange, onSubmit, loading }:any) => {
  const [schools, setSchools] = useState<any>([]);
  const [school, setSchool] = useState({ name: "", from: "", to: "" });
  const [certificates, setCertificates] = useState<string[]>(
    userData?.certificate_image ? JSON.parse(userData?.certificate_image) : []
  );
  const [uploadingCertificate, setUploadingCertificate] = useState(false);
  
  // Define options for select fields
  const academicStatusOptions = ["High School Student", "Undergraduate", "Graduate", "Other"];
  const educationLevelOptions = ["High School Diploma", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctorate", "Other"];
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    // Prepare the previous schools attended string with length limit check
    if (schools.length > 0) {
      const schoolsString = schools.map((s:any) => 
        `${s.name} (${s.from} - ${s.to})`
      ).join("; ");
      
      // Truncate if too long (max 191 characters)
      userData.previous_schools_attended = schoolsString.length > 191 ? schoolsString.substring(0, 191) : schoolsString;
    }
    
    // Store certificates as JSON string
    userData.certificate_image = JSON.stringify(certificates);
    
    onSubmit();
  };
  
  const handleSchoolChange = (e:any) => {
    const { name, value } = e.target;
    setSchool(prev => ({ ...prev, [name]: value }));
  };
  
  const addSchool = () => {
    if (school.name && school.from && school.to) {
      setSchools([...schools, { ...school }]);
      setSchool({ name: "", from: "", to: "" });
    }
  };
  
  const removeSchool = (index:any) => {
    const updatedSchools = [...schools];
    updatedSchools.splice(index, 1);
    setSchools(updatedSchools);
  };
  
  const handleCertificateUpload = async (e:any) => {
    const file = e.target.files[0];
    if (!file) return;
    
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
            name: 'certificate_image',
            value: JSON.stringify(newCertificates)
          }
        });
        
        toast.success('Certificate uploaded successfully');
      } else {
        throw new Error('Upload failed');
      }
      
      // Reset file input
      e.target.value = '';
      setUploadingCertificate(false);
    } catch (error) {
      console.error("Error uploading certificate", error);
      toast.error("Error uploading certificate. Please try again.");
      setUploadingCertificate(false);
    }
  };
  
  const removeCertificate = (index:any) => {
    const newCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(newCertificates);
    
    // Update the parent state
    handleInputChange({
      target: {
        name: 'certificate_image',
        value: JSON.stringify(newCertificates)
      }
    });
  };

  const getCertificatePreview = (url: string) => {
    const fileExtension = url.split('.').pop()?.toLowerCase();
    const isImage = ['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension || '');
    
    if (isImage) {
      return <img src={url} alt="Certificate" className="h-8 object-cover rounded" />;
    } else {
      return (
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
    }
  };
  
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Background</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Academic Status <span className="text-red-500">*</span>
          </label>
          <CustomSelect
            name="academic_status"
            options={academicStatusOptions}
            placeholder="Select Academic Status"
            value={userData.academic_status}
            onChange={handleInputChange}
          />
        </div>
      
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Institution Name
          </label>
          <input
            type="text"
            name="current_institution_name"
            value={userData.current_institution_name}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Previous Schools Attended <span className="text-gray-500">(Names, Dates)</span>
          </label>
          
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={school.name}
              onChange={handleSchoolChange}
              placeholder="School Name"
              className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
            />
            <div className="grid md:grid-cols-2 mt-4 gap-4 mb-2">
              <div>
                <label className="block text-xs text-gray-500 mb-1">From</label>
                <input
                  type="date"
                  name="from"
                  value={school.from}
                  onChange={handleSchoolChange}
                  placeholder="Select date"
                  className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
                />
              </div>
              
              <div>
                <label className="block text-xs text-gray-500 mb-1">To</label>  
                <input
                  type="date"
                  name="to"
                  value={school.to}
                  onChange={handleSchoolChange}
                  placeholder="Select date"
                  className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
                />
              </div>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={addSchool}
                className="px-4 py-2 bg-white border border-[#D7F5DC] text-[#1DB459] rounded-lg"
              >
                Add Schools
              </button>
            </div>
          </div>
          
          {schools.length > 0 && (
            <div className="mt-2">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Added Schools:</h4>
              <ul className="space-y-2">
                {schools.map((s:any, index:any) => (
                  <li key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <span>
                      {s.name} ({s.from} - {s.to})
                    </span>
                    <button
                      type="button"
                      onClick={() => removeSchool(index)}
                      className="text-red-500"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Education Level Completed
          </label>
          <CustomSelect
            name="education_level_completed"
            options={educationLevelOptions}
            placeholder="Select Education Level"
            value={userData.education_level_completed}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Certificate Upload
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg py-8 text-center">
            <div className="flex flex-col items-center">
              {uploadingCertificate ? (
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1DB459] mx-auto mb-2"></div>
                  <p className="text-sm text-[#1DB459]">Uploading...</p>
                </div>
              ) : (
                <>
                  <div className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Upload</p>
                  <p className="text-xs text-gray-500 mb-4">
                    Attach file. File size of your documents should not exceed 10MB
                  </p>
                  <input
                    type="file"
                    name="certificate_image"
                    onChange={handleCertificateUpload}
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    id="certificateUpload"
                    disabled={uploadingCertificate}
                  />
                  <label 
                    htmlFor="certificateUpload" 
                    className="px-6 py-2 bg-white border border-[#1DB459] text-[#1DB459] rounded-lg cursor-pointer"
                  >
                    Add Certificate
                  </label>
                </>
              )}
            </div>
          </div>
          
          {certificates.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Certificates:</h4>
              <ul className="space-y-2">
                {certificates.map((cert:any, index:any) => (
                  <li key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                    <span className="flex items-center">
                      {getCertificatePreview(cert)}
                      <span className="ml-2">Certificate {index + 1}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => removeCertificate(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="px-12 bg-[#1DB459] text-white py-3 rounded-full hover:bg-green-700 transition-colors"
            disabled={loading || uploadingCertificate}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationalInfoForm;