import React, { useEffect, useState } from 'react';
import AdminDashboardLayout from '../../../component/AdminDashboardLayout'
import { FaCalendarAlt } from 'react-icons/fa';
import { AdminApis } from '../../../apis/adminApi/adminApi';
import LoadingSpinner from '../../../component/UI/LoadingSpinner';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from 'react-router-dom';

const EditPsychometricTestCourse = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const courseId = location.state?.id; // Get ID from navigation state
  
  const [formData, setFormData] = useState<any>({
    generic_course_name: "",
    updatable_course_title: "",
    school_name: "",
    school_logo_url: "",
    course_url: "",
    course_image_url: "",
    course_description: "",
    country: "",
    start_date: null,
    duration: "",
    skills_covered: [],
    tags_associated: []
  });

  const [schoolLogoImage, setSchoolLogoImage] = useState<any>(null);
  const [courseImage, setCourseImage] = useState<any>(null);
  const [loader, setLoader] = useState<any>(false);
  const [pageLoading, setPageLoading] = useState<any>(true);
  const [availableTags, setAvailableTags] = useState<any>([]);
  const [loadingTags, setLoadingTags] = useState<any>(false);
  const [skillInput, setSkillInput] = useState<string>("");

  // Redirect if no course ID
  useEffect(() => {
    if (!courseId) {
      toast.error("Course ID not found");
      navigate("/admin/psychometric-test-course");
      return;
    }
    fetchCourseDetails();
    fetchAllTags();
  }, [courseId, navigate]);

  const fetchCourseDetails = async (): Promise<void> => {
    setPageLoading(true);
    try {
      const response = await AdminApis.getPsychometricTestCourseById(courseId);
      if (response?.data) {
        const courseData = response.data;
        setFormData({
          generic_course_name: courseData.generic_course_name || "",
          updatable_course_title: courseData.updatable_course_title || "",
          school_name: courseData.school_name || "",
          school_logo_url: courseData.school_logo_url || "",
          course_url: courseData.course_url || "",
          course_image_url: courseData.course_image_url || "",
          course_description: courseData.course_description || "",
          country: courseData.country || "",
          start_date: courseData.start_date ? new Date(courseData.start_date) : null,
          duration: courseData.duration || "",
          skills_covered: courseData.skills_covered || [],
          tags_associated: courseData.tags_associated || []
        });
        
        // Set existing images
        setSchoolLogoImage(courseData.school_logo_url);
        setCourseImage(courseData.course_image_url);
      }
    } catch (error) {
      console.error("Error fetching course details:", error);
      toast.error("Failed to load course details");
      navigate("/admin/psychometric-test-course");
    } finally {
      setPageLoading(false);
    }
  };

  const fetchAllTags = async (): Promise<void> => {
    setLoadingTags(true);
    try {
      const response = await AdminApis.getAllTags();
      if (response?.data?.records) {
        setAvailableTags(response.data.records);
      }
    } catch (error) {
      console.error("Error fetching tags:", error);
      toast.error("Failed to load tags");
    } finally {
      setLoadingTags(false);
    }
  };

  const ImageUpload: any = ({ image, setImage, title }: any) => {
    const [loading, setLoading] = useState(false);

    const handleImageChange = async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = e.target.files?.[0];
      if (file) {
        setLoading(true);

        try {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", "urban_image");

          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dngyazspl/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );

          const result = await response.json();
          if (result.secure_url) {
            setImage(result.secure_url);
          }

          setLoading(false);
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
                src={image}
                alt={`Uploaded ${title}`}
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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (date: any) => {
    setFormData((prevState: any) => ({
      ...prevState,
      start_date: date
    }));
  };

  const handleTagChange = (tagCode: string) => {
    setFormData((prevState: any) => {
      // Ensure tags_associated is always an array
      const currentTags = Array.isArray(prevState.tags_associated) ? prevState.tags_associated : [];
      const isSelected = currentTags.includes(tagCode);
      const updatedTags = isSelected
        ? currentTags.filter((code: string) => code !== tagCode)
        : [...currentTags, tagCode];
      
      return {
        ...prevState,
        tags_associated: updatedTags
      };
    });
  };

  const handleSkillAdd = () => {
    if (skillInput.trim() && Array.isArray(formData.skills_covered) && !formData.skills_covered.includes(skillInput.trim())) {
      setFormData((prevState: any) => ({
        ...prevState,
        skills_covered: [...prevState.skills_covered, skillInput.trim()]
      }));
      setSkillInput("");
    }
  };

  const handleSkillRemove = (skillToRemove: string) => {
    if (Array.isArray(formData.skills_covered)) {
      setFormData((prevState: any) => ({
        ...prevState,
        skills_covered: prevState.skills_covered.filter((skill: string) => skill !== skillToRemove)
      }));
    }
  };

  const handleSkillKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSkillAdd();
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);

    // Helper function to convert array to string
    const arrayToString = (data: string[] | string): string => {
      if (!data) return "";
      if (typeof data === 'string') return data;
      if (Array.isArray(data)) return data.join(',');
      return "";
    };

    // Format data for submission - convert arrays to comma-separated strings
    const formattedData = {
      ...formData,
      school_logo_url: schoolLogoImage || formData.school_logo_url,
      course_image_url: courseImage || formData.course_image_url,
      start_date: formData.start_date ? formData.start_date.toISOString().split('T')[0] : "",
      skills_covered: arrayToString(formData.skills_covered),
      tags_associated: arrayToString(formData.tags_associated),
    };

    try {
      const response = await AdminApis.updatePsychometricTestCourse(courseId, formattedData);
      console.log('Psychometric course updated successfully:', response);
      if (response.data) {
        toast.success(response.data.message || "Psychometric course updated successfully");
        navigate("/admin/psychometric-test-course");
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
      console.error('Error updating psychometric course:', error);
    } finally {
      setLoader(false);
    }
  };

  const CustomDatePickerInput = ({ value, onClick, placeholder }: any) => (
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

  // Show loading screen while fetching course details
  if (pageLoading) {
    return (
      <AdminDashboardLayout>
        <div className="flex justify-center items-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading course details...</p>
          </div>
        </div>
      </AdminDashboardLayout>
    );
  }

  return (
    <AdminDashboardLayout>
      <div>
        <div className="mx-auto pb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[32px] font-bold text-primary">Edit Psychometric Test Course</h2>
            <button
              onClick={() => navigate("/admin/psychometric-test-course")}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Back to Courses
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <h3 className="text-[24px] font-medium text-primary mb-4">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-1">Generic Course Name</label>
                <input
                  type="text"
                  name="generic_course_name"
                  value={formData.generic_course_name}
                  onChange={handleChange}
                  className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
                  placeholder="e.g., Introduction to Computer Science"
                  required
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-1">Updatable Course Title</label>
                <input
                  type="text"
                  name="updatable_course_title"
                  value={formData.updatable_course_title}
                  onChange={handleChange}
                  className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
                  placeholder="e.g., CS101 - Updated Title"
                  required
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-1">School Name</label>
                <input
                  type="text"
                  name="school_name"
                  value={formData.school_name}
                  onChange={handleChange}
                  className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
                  placeholder="e.g., Harvard University"
                  required
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
                  placeholder="e.g., USA"
                  required
                />
              </div>
            </div>

            {/* Course Details */}
            <h3 className="text-[24px] font-medium text-primary mb-4">Course Details</h3>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-1">Course Description</label>
                <textarea
                  name="course_description"
                  value={formData.course_description}
                  onChange={handleChange}
                  className="w-full p-2 border border-[#E7EAEB] rounded-[12px]"
                  placeholder="This course provides a broad introduction to..."
                  rows={4}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-1">Course URL</label>
                <input
                  type="url"
                  name="course_url"
                  value={formData.course_url}
                  onChange={handleChange}
                  className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
                  placeholder="https://example.com/course/cs101"
                />
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-1">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
                  placeholder="e.g., 12 weeks"
                  required
                />
              </div>
            </div>

            {/* Start Date */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-1">Start Date</label>
                <DatePicker
                  selected={formData.start_date}
                  onChange={handleDateChange}
                  customInput={<CustomDatePickerInput placeholder="Select start date" />}
                />
              </div>
            </div>

            {/* Skills Covered */}
            <h3 className="text-[24px] font-medium text-primary mb-4">Skills Covered</h3>
            <div className="mb-6">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyPress={handleSkillKeyPress}
                  className="flex-1 p-2 border h-12 border-[#E7EAEB] rounded-[12px]"
                  placeholder="Enter a skill (e.g., programming, algorithms)"
                />
                <button
                  type="button"
                  onClick={handleSkillAdd}
                  className="px-4 py-2 bg-green-500 text-white rounded-[12px] hover:bg-green-600"
                >
                  Add Skill
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(formData.skills_covered) && formData.skills_covered.map((skill: string, index: number) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleSkillRemove(skill)}
                      className="ml-2 text-green-600 hover:text-green-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <h3 className="text-[24px] font-medium text-primary mb-4">Tags Associated</h3>
            <div className="mb-6">
              {loadingTags ? (
                <LoadingSpinner />
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {availableTags.map((tag: any) => (
                    <label key={tag.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={Array.isArray(formData.tags_associated) && formData.tags_associated.includes(tag.code)}
                        onChange={() => handleTagChange(tag.code)}
                        className="w-4 h-4 text-green-500"
                      />
                      <span className="text-sm">{tag.name} ({tag.code})</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Images */}
            <h3 className="text-[24px] font-medium text-primary mb-4">Images</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-1">School Logo</label>
                <ImageUpload image={schoolLogoImage} setImage={setSchoolLogoImage} title="School Logo" />
                {!schoolLogoImage && (
                  <input
                    type="url"
                    name="school_logo_url"
                    value={formData.school_logo_url}
                    onChange={handleChange}
                    className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px] mt-2"
                    placeholder="Or enter logo URL"
                  />
                )}
              </div>
              <div>
                <label className="block text-[14px] font-medium text-[#000000] mb-1">Course Image</label>
                <ImageUpload image={courseImage} setImage={setCourseImage} title="Course Image" />
                {!courseImage && (
                  <input
                    type="url"
                    name="course_image_url"
                    value={formData.course_image_url}
                    onChange={handleChange}
                    className="w-full p-2 border h-12 border-[#E7EAEB] rounded-[12px] mt-2"
                    placeholder="Or enter image URL"
                  />
                )}
              </div>
            </div>

            {/* Submit button */}
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/admin/psychometric-test-course")}
                className="bg-gray-500 text-white px-8 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loader}
                className="bg-green-500 disabled:bg-gray-400 text-white px-10 py-2 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                {loader ? <LoadingSpinner /> : "Update Psychometric Course"}
              </button>
            </div>
          </form>
        </div>
      <ToastContainer position="top-right" autoClose={3000} />

      </div>
    </AdminDashboardLayout>
  );
};

export default EditPsychometricTestCourse; 