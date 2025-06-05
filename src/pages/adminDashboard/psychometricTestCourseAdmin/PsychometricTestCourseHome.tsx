import React, { useState, useEffect, useCallback } from 'react'
import AdminDashboardLayout from '../../../component/AdminDashboardLayout'
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminApis } from '../../../apis/adminApi/adminApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../../../component/UI/LoadingSpinner';

interface PsychometricCourse {
  id: string;
  generic_course_name: string;
  updatable_course_title: string;
  school_name: string;
  school_logo_url: string;
  course_url: string;
  course_image_url: string;
  course_description: string;
  country: string;
  start_date: string;
  duration: string;
  skills_covered: string[] | string; // Can be either string or array
  tags_associated: string[] | string; // Can be either string or array
  is_active: boolean;
  created_at: string | null;
  updated_at: string | null;
  [key: string]: any;
}

const PsychometricTestCourseHome = () => {
  const navigate = useNavigate();
  
  const [courses, setCourses] = useState<PsychometricCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Stats counters
  const [uniqueCountries, setUniqueCountries] = useState<number>(0);
  const [uniqueSchools, setUniqueSchools] = useState<number>(0);

  useEffect(() => {
    fetchAll();
  }, []);

  // Calculate stats whenever courses change
  const calculateStats = useCallback(() => {
    // Get unique countries
    const countries = new Set(courses.map(course => course.country));
    setUniqueCountries(countries.size);
    
    // Get unique schools
    const schools = new Set(courses.map(course => course.school_name));
    setUniqueSchools(schools.size);
  }, [courses]);

  useEffect(() => {
    calculateStats();
  }, [calculateStats]);

  const fetchAll = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await AdminApis.getAllPsychometricTestCourse();
      console.log(response.data);
      if (response?.data?.records) {
        setCourses(response.data.records);
      }
    } catch (error) {
      console.error("Error fetching psychometric courses:", error);
      toast.error("Failed to load psychometric courses");
    } finally {
      setLoading(false);
    }
  };

  const openDeleteModal = (id: string) => {
    setCourseToDelete(id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setCourseToDelete(null);
  };

  const handleEdit = (id: string, courseName: string) => {
    // Format the course name for URL (replace spaces with hyphens, make lowercase)
    const formattedCourseName = courseName.replace(/\s+/g, '-').toLowerCase();
    // Navigate to the edit page with course name in URL and id in state
    navigate(`/admin/psychometric-courses/edit/${formattedCourseName}`, { state: { id } });
  };

  const confirmDelete = async () => {
    if (!courseToDelete) return;
    
    setDeleteLoading(true);
    try {
      const response = await AdminApis.deletePsychometricTestCourse(courseToDelete);
      if (response.data) {
        toast.success(response.data.message || "Psychometric course deleted successfully");
        fetchAll(); // Refresh the list
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to delete psychometric course");
      console.error("Error deleting psychometric course:", error);
    } finally {
      setDeleteLoading(false);
      closeDeleteModal();
    }
  };

  // Filter courses based on search term
  const filteredCourses = courses.filter(course =>
    course.generic_course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.school_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.updatable_course_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatSkills = (skills: string[] | string) => {
    if (!skills) return 'N/A';
    
    // Handle both string and array formats
    let skillsArray: string[];
    if (typeof skills === 'string') {
      skillsArray = skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
    } else if (Array.isArray(skills)) {
      skillsArray = skills;
    } else {
      return 'N/A';
    }
    
    if (skillsArray.length === 0) return 'N/A';
    return skillsArray.slice(0, 2).join(', ') + (skillsArray.length > 2 ? `... +${skillsArray.length - 2}` : '');
  };

  const formatTags = (tags: string[] | string) => {
    if (!tags) return 'N/A';
    
    // Handle both string and array formats
    let tagsArray: string[];
    if (typeof tags === 'string') {
      tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    } else if (Array.isArray(tags)) {
      tagsArray = tags;
    } else {
      return 'N/A';
    }
    
    if (tagsArray.length === 0) return 'N/A';
    return tagsArray.slice(0, 3).join(', ') + (tagsArray.length > 3 ? `... +${tagsArray.length - 3}` : '');
  };

  // Helper function to get skills as array for tooltip
  const getSkillsArray = (skills: string[] | string): string[] => {
    if (!skills) return [];
    if (typeof skills === 'string') {
      return skills.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
    }
    return Array.isArray(skills) ? skills : [];
  };

  // Helper function to get tags as array for tooltip
  const getTagsArray = (tags: string[] | string): string[] => {
    if (!tags) return [];
    if (typeof tags === 'string') {
      return tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    }
    return Array.isArray(tags) ? tags : [];
  };

  return (
    <AdminDashboardLayout>
      <div className="p-4 font-sans">
        {/* Header section with search and upload button */}
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-60">
            <input
              type="text"
              placeholder="Search courses, schools, countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-2 py-1 w-full border border-gray-300 rounded-md text-sm"
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <button 
            onClick={() => navigate('/admin/psychometric-courses/create')} 
            className="bg-green-500 text-white px-3 py-2 rounded-md flex items-center text-sm gap-2 cursor-pointer hover:bg-green-600">
            <img src='/images/adminDashboard/downloadArrowDown.svg' alt='' />
            Add Psychometric Course
          </button>
        </div>

        {/* Stats bar */}
        <div className="flex gap-6 text-sm text-gray-600 mb-4">
          <div>
            <span className="font-bold">{filteredCourses.length ?? 0}</span> course{filteredCourses.length !== 1 ? "s" : ""}
          </div>
          <div>
            <span className="font-bold">{uniqueCountries}</span> {uniqueCountries !== 1 ? "countries" : "country"}
          </div>
          <div>
            <span className="font-bold">{uniqueSchools}</span> {uniqueSchools !== 1 ? "schools" : "school"}
          </div>
          <div className="font-bold text-primary">A-Z</div>
        </div>

        {/* Loading indicator */}
        {loading && (
          <div className="text-center">
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            </div>
            <p className="mt-2">Loading psychometric courses...</p>
          </div>
        )}

        {/* Table */}
        {!loading && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-sm text-gray-500 border-b border-gray-200">
                  <th className="text-left py-2 font-medium">Course</th>
                  <th className="text-left py-2 font-medium">School</th>
                  <th className="text-left py-2 font-medium">Country</th>
                  <th className="text-left py-2 font-medium">Duration</th>
                  <th className="text-left py-2 font-medium">Start Date</th>
                  <th className="text-left py-2 font-medium">Skills</th>
                  <th className="text-left py-2 font-medium">Tags</th>
                  <th className="text-left py-2 font-medium">Status</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.map((course) => (
                  <tr key={course.id} className="border-b my-1 rounded-xl bg-white px-2 border-gray-200 hover:bg-gray-100">
                    <td className="py-4 pl-3">
                      <div className="flex items-center">
                        <div className=''>
                          <img 
                            src={course?.school_logo_url || course?.course_image_url} 
                            className='mr-3 w-8 h-8 rounded object-cover' 
                            alt='Course logo'
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/default-course.png'; // fallback image
                            }}
                          />
                        </div>
                        <div>
                          <div className="text-green-500 font-medium text-sm">{course.generic_course_name}</div>
                          <div className="text-gray-400 text-xs">{course.updatable_course_title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 pl-4 text-gray-600 text-sm">{course.school_name}</td>
                    <td className="py-4 text-gray-600 text-sm">{course.country}</td>
                    <td className="py-4 text-gray-600 text-sm">{course.duration}</td>
                    <td className="py-4 text-gray-600 text-sm">{formatDate(course.start_date)}</td>
                    <td className="py-4 text-gray-600 text-sm max-w-32">
                      <span title={getSkillsArray(course.skills_covered).join(', ')}>
                        {formatSkills(course.skills_covered)}
                      </span>
                    </td>
                    <td className="py-4 text-gray-600 text-sm max-w-32">
                      <span title={getTagsArray(course.tags_associated).join(', ')}>
                        {formatTags(course.tags_associated)}
                      </span>
                    </td>
                    <td className="py-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.is_active 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {course.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="py-4 text-right pr-2">
                      <div className="flex gap-2 justify-end">
                        <button 
                          onClick={() => handleEdit(course.id, course.generic_course_name)} 
                          className="text-gray-400 hover:text-gray-600"
                          title="Edit course"
                        >
                          <img src='/images/adminDashboard/edit.svg' className='w-7 h-7' alt='Edit'/>
                        </button>
                        <button 
                          onClick={() => openDeleteModal(course.id)} 
                          className="text-gray-400 hover:text-gray-600"
                          title="Delete course"
                        >
                          <img src='/images/adminDashboard/delete.svg' className='w-7 h-7' alt='Delete'/>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {filteredCourses.length === 0 && !loading && (
                  <tr>
                    <td colSpan={9} className="py-8 text-center text-gray-500">
                      {searchTerm ? 'No courses found matching your search.' : 'No psychometric courses found'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        
        <ToastContainer />
        
        {/* Delete Confirmation Modal */}
        {deleteModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-medium text-gray-900">Confirm Delete</h3>
                <button
                  onClick={closeDeleteModal}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="mb-6">
                <p className="text-gray-700">
                  Are you sure you want to delete this psychometric course? This action cannot be undone.
                </p>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closeDeleteModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={deleteLoading}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-red-300"
                >
                  {deleteLoading ? <LoadingSpinner /> : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminDashboardLayout>
  )
}

export default PsychometricTestCourseHome