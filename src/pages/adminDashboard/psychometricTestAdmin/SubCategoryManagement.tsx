import React, { useState, useEffect } from 'react';
import { AdminApis } from '../../../apis/adminApi/adminApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../../../component/UI/LoadingSpinner';
import { FaPlus, FaTrash, FaTimes, FaExclamationTriangle, FaEdit } from 'react-icons/fa';

interface SubCategory {
  id: string;
  name: string;
  status: string;
  created_at: string | null;
  updated_at: string | null;
  question_types_id: string | null;
}

interface SubCategoryManagementProps {
  activeProgramId: string;
  activeTabName: string;
  onSubCategorySelect?: (subcategoryId: string, subcategoryName: string) => void;
}

const SubCategoryManagement: React.FC<SubCategoryManagementProps> = ({ 
  activeProgramId, 
  activeTabName,
  onSubCategorySelect 
}) => {
  // State for subcategories
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeSubcategory, setActiveSubcategory] = useState<string>("");
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<string>("");

  // State for subcategory modal
  const [showModal, setShowModal] = useState<boolean>(false);
  const [subcategoryName, setSubcategoryName] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editingSubcategoryId, setEditingSubcategoryId] = useState<string>("");

  // State for delete confirmation
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [subcategoryToDelete, setSubcategoryToDelete] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Fetch subcategories when program type changes
  useEffect(() => {
    if (activeProgramId) {
      fetchSubcategories();
    } else {
      setSubcategories([]);
      setActiveSubcategory("");
      setActiveSubcategoryId("");
    }
  }, [activeProgramId]);

  const fetchSubcategories = async () => {
    if (!activeProgramId) return;
    
    setLoading(true);
    try {
      const response = await AdminApis.getSubCategory();
      
      if (response?.data?.records) {
        // Filter subcategories by the active program type
        const filteredSubcategories = response.data.records.filter(
          (subcategory: SubCategory) => subcategory.question_types_id === activeProgramId
        );
        
        setSubcategories(filteredSubcategories);
        
        // Set the first subcategory as active if exists
        if (filteredSubcategories.length > 0 && !activeSubcategoryId) {
          setActiveSubcategory(filteredSubcategories[0].name);
          setActiveSubcategoryId(filteredSubcategories[0].id);
          
          // Call the onSubCategorySelect callback if provided
          if (onSubCategorySelect) {
            onSubCategorySelect(filteredSubcategories[0].id, filteredSubcategories[0].name);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      toast.error("Failed to load subcategories");
    } finally {
      setLoading(false);
    }
  };

  const handleSubcategoryChange = (subcategoryName: string, subcategoryId: string) => {
    setActiveSubcategory(subcategoryName);
    setActiveSubcategoryId(subcategoryId);
    
    // Call the callback if provided
    if (onSubCategorySelect) {
      onSubCategorySelect(subcategoryId, subcategoryName);
    }
  };

  // Open add modal
  const openAddModal = () => {
    setIsEditMode(false);
    setEditingSubcategoryId("");
    setSubcategoryName("");
    setShowModal(true);
  };

  // Open edit modal
  const openEditModal = (subcategory: SubCategory) => {
    setIsEditMode(true);
    setEditingSubcategoryId(subcategory.id);
    setSubcategoryName(subcategory.name);
    setShowModal(true);
  };

  // Open delete confirmation
  const openDeleteConfirmation = (subcategoryId: string) => {
    setSubcategoryToDelete(subcategoryId);
    setShowDeleteModal(true);
  };

  // Add or update subcategory
  const handleAddOrUpdateSubcategory = async () => {
    if (!subcategoryName.trim()) {
      toast.error("Subcategory name cannot be empty");
      return;
    }

    setIsSubmitting(true);
    try {
      if (isEditMode) {
        // Update existing subcategory
        // Note: Replace with the actual update endpoint when available
        const response = await AdminApis.updateSubCategory(editingSubcategoryId, {
          name: subcategoryName,
          question_types_id: activeProgramId
        });
        
        if (response.data) {
          toast.success("Subcategory updated successfully");
          
          // Update active subcategory if the current active one was updated
          if (editingSubcategoryId === activeSubcategoryId) {
            setActiveSubcategory(subcategoryName);
          }
        }
      } else {
        // Add new subcategory
        const response = await AdminApis.addSubCategory({
          name: subcategoryName,
          question_types_id: activeProgramId
        });
        
        if (response.data) {
          toast.success("Subcategory added successfully");
        }
      }
      
      fetchSubcategories();
      setShowModal(false);
      setSubcategoryName("");
      setIsEditMode(false);
      setEditingSubcategoryId("");
    } catch (error: any) {
      console.error(`Error ${isEditMode ? 'updating' : 'adding'} subcategory:`, error);
      toast.error(error.message || `Failed to ${isEditMode ? 'update' : 'add'} subcategory`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete subcategory
//   const confirmDeleteSubcategory = async () => {
//     if (!subcategoryToDelete) return;
    
//     setIsDeleting(true);
//     try {
//       // Note: Replace with the actual delete endpoint when available
//       await AdminApis.deleteSubCategory(subcategoryToDelete);
//       toast.success("Subcategory deleted successfully");
      
//       // If the deleted subcategory was active, select the first available subcategory
//       if (subcategoryToDelete === activeSubcategoryId) {
//         const remainingSubcategories = subcategories.filter(s => s.id !== subcategoryToDelete);
//         if (remainingSubcategories.length > 0) {
//           setActiveSubcategory(remainingSubcategories[0].name);
//           setActiveSubcategoryId(remainingSubcategories[0].id);
          
//           // Call the callback if provided
//           if (onSubCategorySelect) {
//             onSubCategorySelect(remainingSubcategories[0].id, remainingSubcategories[0].name);
//           }
//         } else {
//           setActiveSubcategory("");
//           setActiveSubcategoryId("");
          
//           // Call the callback with empty values if provided
//           if (onSubCategorySelect) {
//             onSubCategorySelect("", "");
//           }
//         }
//       }
      
//       fetchSubcategories();
//       setShowDeleteModal(false);
//       setSubcategoryToDelete("");
//     } catch (error: any) {
//       console.error("Error deleting subcategory:", error);
//       toast.error(error.message || "Failed to delete subcategory");
//     } finally {
//       setIsDeleting(false);
//     }
//   };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">
          Subcategories for {activeTabName.charAt(0).toUpperCase() + activeTabName.slice(1)}
        </h2>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded-md flex items-center text-sm"
          onClick={openAddModal}
          disabled={!activeProgramId}
        >
          <FaPlus className="mr-1" size={12} />
          Add Subcategory
        </button>
      </div>
      
      {/* Subcategory Tabs */}
      <div className="flex overflow-x-auto mb-4 border-b border-gray-200">
        {loading ? (
          <div className="p-2">
            <LoadingSpinner />
          </div>
        ) : subcategories.length > 0 ? (
          subcategories.map((subcategory) => (
            <div key={subcategory.id} className="relative">
              <button
                className={`py-2 px-4 whitespace-nowrap ${
                  activeSubcategory === subcategory.name
                    ? 'text-green-500 border-b-2 border-green-500 font-medium'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
                onClick={() => handleSubcategoryChange(subcategory.name, subcategory.id)}
              >
                {subcategory.name}
              </button>
              
              {/* Action buttons shown on hover */}
              <div className="absolute top-0 right-0 p-1 hidden group-hover:flex space-x-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openEditModal(subcategory);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                  title="Edit Subcategory"
                >
                  <FaEdit size={12} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openDeleteConfirmation(subcategory.id);
                  }}
                  className="text-red-500 hover:text-red-700"
                  title="Delete Subcategory"
                >
                  <FaTrash size={12} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-2 px-4 text-gray-500">
            {activeProgramId ? "No subcategories added yet." : "Select a program type to manage subcategories."}
          </div>
        )}
      </div>
      
      {/* Actions row with edit and delete buttons for the active subcategory */}
      {activeSubcategoryId && (
        <div className="flex justify-end mb-4 space-x-2">
          <button
            onClick={() => {
              const subcategory = subcategories.find(s => s.id === activeSubcategoryId);
              if (subcategory) openEditModal(subcategory);
            }}
            className="text-blue-500 hover:text-blue-700 flex items-center text-sm"
            title="Edit Subcategory"
          >
            <FaEdit className="mr-1" /> Edit Subcategory
          </button>
          <button
            onClick={() => openDeleteConfirmation(activeSubcategoryId)}
            className="text-red-500 hover:text-red-700 flex items-center text-sm"
            title="Delete Subcategory"
          >
            <FaTrash className="mr-1" /> Delete Subcategory
          </button>
        </div>
      )}
      
      {/* Add/Edit Subcategory Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium text-gray-900">
                {isEditMode ? 'Edit' : 'Add'} Subcategory
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <FaTimes />
              </button>
            </div>
            
            <div className="mb-4">
              <label htmlFor="subcategory-name" className="block text-sm font-medium text-gray-700 mb-1">
                Subcategory Name
              </label>
              <input
                type="text"
                id="subcategory-name"
                value={subcategoryName}
                onChange={(e) => setSubcategoryName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="e.g., Interest Exploration, Skill Assessment"
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrUpdateSubcategory}
                disabled={isSubmitting || !subcategoryName.trim()}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300"
              >
                {isSubmitting ? <LoadingSpinner /> : isEditMode ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 mr-4">
                <FaExclamationTriangle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900">Confirm Deletion</h3>
                <p className="mt-2 text-gray-600">
                  Are you sure you want to delete this subcategory? All associated questions will also be deleted. This action cannot be undone.
                </p>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSubcategoryToDelete("");
                }}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                // onClick={confirmDeleteSubcategory}
                disabled={isDeleting}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-red-300"
              >
                {isDeleting ? <LoadingSpinner /> : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubCategoryManagement;