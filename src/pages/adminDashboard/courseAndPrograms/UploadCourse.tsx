import React, { useEffect, useState } from 'react';
import AdminDashboardLayout from '../../../component/AdminDashboardLayout'

import { FaCalendarAlt } from 'react-icons/fa';
import { AdminApis } from '../../../apis/adminApi/adminApi';
import LoadingSpinner from '../../../component/UI/LoadingSpinner';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
const UploadCourse = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<any>({
        program_summary: "",
        program_type: "",
        university: "",
        course: "",
        city: "",
        country: "",
        program_years: "",
        tuition_fee: "",
        language_type: "",
        study_type: "",
        scholarship: false,
        scholarship_information: "",
        registration_start: null,
        registartion_ends: null,
        school_resumption: null,
        processing_fee: "",
        minimum_education: "",
        minimum_gpa: "",
        ielts: "",
        toefl: "",
        pte: "",
        duolingo: "",
        school_logo: "",
        overview: ""
      });
      const [schoolLogoImage, setSchoolLogoImage] = useState<any>(null);
      const [overviewImage, setOverviewImage] = useState<any>(null);
      const [loader, setLoader] = useState<any>(false);
      const [programTypes, setProgramTypes] = useState<any>([]);
    
        const fetchProgramTypes = async (): Promise<void> => {
          // setLoading(true);
          try {
            const response = await AdminApis.getProgramType();
            if (response?.data?.records) {
              setProgramTypes(response.data.records);
              // Set the first program type as active if exists
              // if (response.data.records.length > 0) {
              //   setActiveTab(response.data.records[0].program_type);
              //   setActiveProgramId(response.data.records[0].id);
              // }
            }
          } catch (error) {
            console.error("Error fetching program types:", error);
            toast.error("Failed to load program types");
          } finally {
            // setLoading(false);
          }
        };

          // Fetch program types on component mount
          useEffect(() => {
            fetchProgramTypes();
          }, []);
          
      const SchoolLogoUpload: any = ({ image, setImage }:any) => {
        const [loading, setLoading] = useState(false);
    
        const handleImageChange = async (
          e: React.ChangeEvent<HTMLInputElement>
        ) => {
          const file = e.target.files?.[0];
          if (file) {
            setLoading(true); // Show loading spinner or indicator
    
            try {
              // Create a FormData object
              const formData = new FormData();
              formData.append("file", file);
              formData.append("upload_preset", "urban_image"); // Replace with your Cloudinary preset
    
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
                // Set the image URL in the state
                setImage(result.secure_url);
              }
    
              setLoading(false); // Stop loading
            } catch (error) {
              console.error("Error uploading image", error);
              toast.error("Error uploading image. Please try again.");
              setLoading(false);
            }
          }
        };
    
        return (
          <div className="flex justify-center text-center">
            <label className="flex w-full bg-white border-dashed border border-[#D8D8E2] flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
              <div className="flex flex-col items-center justify-center h-[120px]">
                {image ? (
                  <img
                    className=""
                    src={image} // This should now be the Cloudinary URL
                    alt="Uploaded logo"
                    width={100}
                    height={100}
                  />
                ) : (
                  <div>
                  <div className="flex justify-center">
                    <img src="/images/loan/upload.svg" className="text-center" alt="Upload Icon" />
                  </div>
                  <div className="text-green-600 text-sm">
                    <p>Click to upload</p>
                    <p className="text-gray-500">PNG, JPG (max. 10MB)</p>
                  </div>
                </div>
                )}
              </div>
              <input
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
                className="hidden mb-2 text-sm text-[#6C757D] font-medium"
                onChange={handleImageChange}
              />
            </label>
            {loading && <p><LoadingSpinner /></p>}
          </div>
        );
      };

      const OverviewUpload: any = ({ image, setImage }:any) => {
        const [loading, setLoading] = useState(false);
    
        const handleImageChange = async (
          e: React.ChangeEvent<HTMLInputElement>
        ) => {
          const file = e.target.files?.[0];
          if (file) {
            setLoading(true); // Show loading spinner or indicator
    
            try {
              // Create a FormData object
              const formData = new FormData();
              formData.append("file", file);
              formData.append("upload_preset", "urban_image"); // Replace with your Cloudinary preset
    
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
                // Set the image URL in the state
                setImage(result.secure_url);
              }
    
              setLoading(false); // Stop loading
            } catch (error) {
              console.error("Error uploading image", error);
              toast.error("Error uploading image. Please try again.");
              setLoading(false);
            }
          }
        };
    
        return (
          <div className="flex justify-center text-center">
            <label className="flex w-full bg-white border-dashed border border-[#D8D8E2] flex-col items-center justify-center rounded-[5px] cursor-pointer relative">
              <div className="flex flex-col items-center justify-center h-[120px]">
                {image ? (
                  <img
                    className=""
                    src={image} // This should now be the Cloudinary URL
                    alt="Uploaded logo"
                    width={100}
                    height={100}
                  />
                ) : (
                  <div>
                  <div className="flex justify-center">
                    <img src="/images/loan/upload.svg" className="text-center" alt="Upload Icon" />
                  </div>
                  <div className="text-green-600 text-sm">
                    <p>Click to upload</p>
                    <p className="text-gray-500">PNG, JPG (max. 10MB)</p>
                  </div>
                </div>
                )}
              </div>
              <input
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
                className="hidden mb-2 text-sm text-[#6C757D] font-medium"
                onChange={handleImageChange}
              />
            </label>
            {loading && <p><LoadingSpinner /></p>}
          </div>
        );
      };
      const handleChange = (e:any) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState:any) => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
      const handleDateChange = (date:any, name:any) => {
        setFormData((prevState:any) => ({
          ...prevState,
          [name]: date
        }));
      };
    
      const handleSubmit = async (e:any) => {
        e.preventDefault();
        setLoader(true)
        // Format dates to YYYY-MM-DD
        const formattedData = {
          ...formData,
          school_logo: schoolLogoImage,
          overview: overviewImage,
          registration_start: formData.registration_start ? formData.registration_start.toISOString().split('T')[0] : "",
          registartion_ends: formData.registartion_ends ? formData.registartion_ends.toISOString().split('T')[0] : "",
          school_resumption: formData.school_resumption ? formData.school_resumption.toISOString().split('T')[0] : "",
          scholarship: formData.scholarship.toString()
        };
        
        try {
          const response = await AdminApis.addCourse(formattedData);
          console.log('Course added successfully:', response);
          if (response.data) {
            toast.success(response.data.message || "course created successfully")
            setLoader(true)
            navigate("/dashboard/courses");

          }
          // Handle success (redirect, show message, etc.)
        } catch (error:any) {
          toast.error(error.message || "An error occured")
          setLoader(true)
          
          console.error('Error adding course:', error);
          // Handle error
        }
      };
    
      const CustomDatePickerInput = ({ value, onClick, placeholder }:any) => (
        <div className="relative w-full">
          <input
            type="text"
            className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
            value={value}
            onClick={onClick}
            placeholder={placeholder}
            readOnly
          />
          <FaCalendarAlt className="absolute right-2 top-3 text-gray-400" />
        </div>
      );
  return (
    
    <AdminDashboardLayout>
        <div>
        <div className=" mx-auto pb-10">
      <form onSubmit={handleSubmit}>
        {/* First section - Program and University */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">Program Summary</label> */}
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Program Summary</label>
            <textarea
              name="program_summary"
              value={formData.program_summary}
              onChange={handleChange}
              // className="w-full p-2 border border-gray-200 rounded"
              className="w-full p-2 border  border-[#E7EAEB] rounded-[12px]"
              placeholder="Program summary details"
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Program Type</label>
            <select
              name="program_type"
              value={formData.program_type}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
            >
              <option value="">Select Program Type</option>
              {programTypes.map((type: any) => (
                <option key={type.id} value={type.id}>
                  {type.program_type}
                </option>
              ))}
            </select>
            {/* <input
              type="text"
              name="program_type"
              value={formData.program_type}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="Bachelor's, Master's, etc."
            /> */}
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">University</label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="Name of the university"
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="Computer Science, Business, etc."
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="City name"
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="Country name"
            />
          </div>
        </div>

        {/* Program details section */}
        {/* <h3 className="text-lg font-medium text-green-600 mb-4">Program details</h3> */}
        <h3 className="text-[24px] font-medium text-primary mb-4">Program details</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Program Years</label>
            <input
              type="text"
              name="program_years"
              value={formData.program_years}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="Duration in years"
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Tuition Fee</label>
            <input
              type="text"
              name="tuition_fee"
              value={formData.tuition_fee}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="Annual fee amount"
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Language Type</label>
            <input
              type="text"
              name="language_type"
              value={formData.language_type}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="English, French, etc."
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Study Type</label>
            <input
              type="text"
              name="study_type"
              value={formData.study_type}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="Full-time, Part-time, etc."
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Scholarship</label>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                name="scholarship"
                checked={formData.scholarship}
                onChange={handleChange}
                className="w-5 h-5 text-green-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Scholarship Information</label>
            <input
              type="text"
              name="scholarship_information"
              value={formData.scholarship_information}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="Details about scholarship"
            />
          </div>
        </div>

        {/* Program Intake section */}
        <h3 className="text-[24px] font-medium text-primary mb-4">Program Intake</h3>
        <div className="grid grid-cols-2 w-full gap-4 mb-6">
          <div className='w-full'>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Registration starts</label>
            <DatePicker
              selected={formData.registration_start}
              onChange={(date) => handleDateChange(date, 'registration_start')}
              customInput={<CustomDatePickerInput placeholder="Select date" />}
            />
          </div>
          <div className='w-full'>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Registration ends</label>
            <DatePicker
              selected={formData.registartion_ends}
              onChange={(date) => handleDateChange(date, 'registartion_ends')}
              customInput={<CustomDatePickerInput placeholder="Select date" />}
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">School resumption</label>
            <DatePicker
              selected={formData.school_resumption}
              onChange={(date) => handleDateChange(date, 'school_resumption')}
              customInput={<CustomDatePickerInput placeholder="Select date" />}
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Processing fee</label>
            <input
              type="text"
              name="processing_fee"
              value={formData.processing_fee}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="Fee amount"
            />
          </div>
        </div>

        {/* Academic Requirement section */}
        <h3 className="text-[24px] font-medium text-primary mb-4">Academic Requirement</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Minimum Level of Education Completed</label>
            <input
              type="text"
              name="minimum_education"
              value={formData.minimum_education}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="High School, Bachelor's, etc."
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">Minimum GPA</label>
            <input
              type="text"
              name="minimum_gpa"
              value={formData.minimum_gpa}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="e.g., 3.0"
            />
          </div>
        </div>

        {/* Language Test Score section */}
        <h3 className="text-[24px] font-medium text-primary mb-4">Minimum Language Test Score</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">IELTS</label>
            <input
              type="text"
              name="ielts"
              value={formData.ielts}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="e.g., 6.5"
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">TOEFL</label>
            <input
              type="text"
              name="toefl"
              value={formData.toefl}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="e.g., 80"
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">PTE</label>
            <input
              type="text"
              name="pte"
              value={formData.pte}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="e.g., 58"
            />
          </div>
          <div>
            <label className="block text-[14px] font-medium text-[#000000] mb-1">DUOLINGO</label>
            <input
              type="text"
              name="duolingo"
              value={formData.duolingo}
              onChange={handleChange}
              className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
              placeholder="e.g., 100"
            />
          </div>
        </div>

        {/* School Logo and Overview section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
          <label className="block text-[14px] font-medium text-[#000000] mb-1">School Logo</label>

        <SchoolLogoUpload image={schoolLogoImage} setImage={setSchoolLogoImage} />
        </div>
        <div>
        <label className="block text-[14px] font-medium text-[#000000] mb-1">Overview</label>
        <OverviewUpload image={overviewImage} setImage={setOverviewImage} />
         </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-center">
          <button 
            type="submit" 
            disabled={loader}
            className="bg-green-500 disabled:bg-gray-400 text-white px-10 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
          >
           {loader ? <LoadingSpinner /> : "Submit"} 
          </button>
        </div>
      </form>
    </div>
        </div>
    </AdminDashboardLayout>
  )
}

export default UploadCourse