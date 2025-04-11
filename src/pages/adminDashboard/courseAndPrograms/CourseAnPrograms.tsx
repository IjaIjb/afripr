import React, { useState, useEffect, useCallback } from 'react'
import AdminDashboardLayout from '../../../component/AdminDashboardLayout'
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AdminApis } from '../../../apis/adminApi/adminApi';
// import { MdOutlineEdit } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../../../component/UI/LoadingSpinner';

interface Course {
  id: string;
  course: string;
  university: string;
  tuition_fee: string;
  created_at: string | null;
  country: string;
  school_logo: string;
  [key: string]: any; // For other properties
}

const CourseAnPrograms = () => {
  const navigate = useNavigate();
  
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  
  // Stats counters
  const [uniqueCountries, setUniqueCountries] = useState<number>(0);
  const [uniqueUniversities, setUniqueUniversities] = useState<number>(0);
  
  useEffect(() => {
    fetchCourses();
  }, []);

  // Wrap calculateStats with useCallback to prevent it from being recreated on every render
  const calculateStats = useCallback(() => {
    // Get unique countries
    const countries = new Set(courses.map(course => course.country));
    setUniqueCountries(countries.size);
    
    // Get unique universities
    const universities = new Set(courses.map(course => course.university));
    setUniqueUniversities(universities.size);
  }, [courses]);

  // Calculate stats whenever courses change
  useEffect(() => {
    calculateStats();
  }, [calculateStats]);

  const fetchCourses = () => {
    setLoading(true);
    AdminApis.getCourses()
      .then((response) => {
        if (response?.data?.records) {
          setCourses(response.data.records);
        }
      })
      .catch(function (error) {
        toast.error("Failed to load courses");
        console.error("Error fetching courses:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const openDeleteModal = (id: string) => {
    setCourseToDelete(id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setCourseToDelete(null);
  };

  // Modified handleEdit function to show only course name in URL but pass ID as state
  const handleEdit = (id: string, courseName: string) => {
    // Format the course name for URL (replace spaces with hyphens, make lowercase)
    const formattedCourseName = courseName.replace(/\s+/g, '-').toLowerCase();
    // Navigate to the edit page with course name in URL and id in state
    navigate(`/dashboard/courses/edit/${formattedCourseName}`, { state: { id } });
  };

  const confirmDelete = async () => {
    if (!courseToDelete) return;
    
    setDeleteLoading(true);
    try {
      const response = await AdminApis.deleteCourse(courseToDelete);
      if (response.data) {
        toast.success(response.data.message || "Course deleted successfully");
        fetchCourses(); // Refresh the list
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to delete course");
      console.error("Error deleting course:", error);
    } finally {
      setDeleteLoading(false);
      closeDeleteModal();
    }
  };

  return (
    <AdminDashboardLayout>
      <div className="p-4 font-sans">
        {/* Header section with search and upload button */}
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-60">
            <input
              type="text"
              placeholder="Search universities, Courses and..."
              className="pl-8 pr-2 py-1 w-full border border-gray-300 rounded-md text-sm"
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <button 
            onClick={() => navigate('/dashboard/courses/upload-course')} 
            className="bg-green-500 text-white px-3 py-2 rounded-md flex items-center text-sm gap-2 cursor-pointer">
          <img src='/images/adminDashboard/downloadArrowDown.svg' alt='' />
            Upload courses
          </button>
        </div>

        {/* Stats bar */}
        <div className="flex gap-6 text-sm text-gray-600 mb-4">
          <div>
            <span className="font-bold">{courses.length ?? 0}</span> program{courses.length !== 1 ? "s" : ""}
          </div>
          <div>
            <span className="font-bold">{uniqueCountries}</span> {uniqueCountries !== 1 ? "countries" : "country"}
          </div>
          <div>
            <span className="font-bold">{uniqueUniversities}</span> {uniqueUniversities !== 1 ? "universities" : "university"}
          </div>
          <div className="font-bold text-primary">A-Z</div>
        </div>

        {/* Loading indicator */}
        {loading && (
          <div className="text-center">
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            </div>
            <p className="mt-2">Loading courses...</p>
          </div>
        )}

        {/* Table */}
        {!loading && (
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-sm text-gray-500 border-b border-gray-200">
                <th className="text-left py-2 font-medium">Course</th>
                <th className="text-left py-2 font-medium">Institution</th>
                <th className="text-left py-2 font-medium">Tuition/year</th>
                <th className="text-left py-2 font-medium">Date added</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b my-1 rounded-xl bg-white px-2 border-gray-200 hover:bg-gray-100">
                  <td className="py-4 pl-3">
                    <div className="flex items-center">
                      <div className=''>
                      <img src={course?.school_logo} className='mr-3 w-8 h-8' alt='/'/>
                      </div>
                      <span className="text-green-500 font-medium">{course.course}</span>
                    </div>
                  </td>
                  <td className="py-4 pl-4 text-gray-600">{course.university}</td>
                  <td className="py-4 text-gray-600">{course.tuition_fee}</td>
                  <td className="py-4 text-gray-600">{course.created_at}</td>
                  <td className="py-4 text-right pr-2">
                    <div className="flex gap-2 justify-end">
                      <button 
                      onClick={() => handleEdit(course.id, course.course)} 
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
              
              {courses.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-4 text-center text-gray-500">
                    No courses found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
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
                  Are you sure you want to delete this course? This action cannot be undone.
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

export default CourseAnPrograms