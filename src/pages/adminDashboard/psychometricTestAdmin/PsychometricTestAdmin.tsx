import React, { useState, useEffect, useCallback } from 'react';
import { AdminApis } from '../../../apis/adminApi/adminApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../../../component/UI/LoadingSpinner';
import AdminDashboardLayout from '../../../component/AdminDashboardLayout';
import { FaPlus, FaTrash, FaTimes, FaExclamationTriangle, FaEdit, FaEllipsisV, FaGripVertical, FaQuestionCircle, FaListUl, FaPuzzlePiece } from 'react-icons/fa';

// Define interfaces for TypeScript
interface Section {
  id: string;
  title: string;
  created_at: string | null;
  updated_at: string | null;
}

interface Option {
  id?: string;
  option_letter?: string;
  option_text: string;
  question_id?: string;
  created_at?: string | null;
  updated_at?: string | null;
}

interface Question {
  id: string;
  section_id: string;
  question_text: string;
  display_order?: number;
  options: Option[];
  created_at: string | null;
  updated_at: string | null;
  section?: Section;
}

const PsychometricTestAdmin: React.FC = () => {
  // State for sections
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  
  // State for questions
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState<boolean>(false);
  
  // State for adding and editing questions
  const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false);
  const [questionText, setQuestionText] = useState<string>("");
  const [questionOptions, setQuestionOptions] = useState<Option[]>([{ option_text: "" }]);
  const [submittingQuestion, setSubmittingQuestion] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editingQuestionId, setEditingQuestionId] = useState<string>("");
  
  // State for section modal
  const [showSectionModal, setShowSectionModal] = useState<boolean>(false);
  const [newSectionTitle, setNewSectionTitle] = useState<string>("");
  const [addingSection, setAddingSection] = useState<boolean>(false);
  const [isEditSectionMode, setIsEditSectionMode] = useState<boolean>(false);
  const [editingSectionId, setEditingSectionId] = useState<string>("");
  
  // State for section actions menu
  const [sectionMenuOpen, setSectionMenuOpen] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  
  // State for confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [questionToDelete, setQuestionToDelete] = useState<string>("");
  const [deletingQuestion, setDeletingQuestion] = useState<boolean>(false);
  
  // State for section deletion
  const [showDeleteSectionModal, setShowDeleteSectionModal] = useState<boolean>(false);
  const [sectionToDelete, setSectionToDelete] = useState<string>("");
  const [deletingSection, setDeletingSection] = useState<boolean>(false);

  // Fetch sections on component mount
  useEffect(() => {
    fetchSections();
  }, []);

  // Fetch questions when section changes
  const fetchQuestions = useCallback(async (): Promise<void> => {
    if (!activeSectionId) {
      setQuestions([]);
      return;
    }

    setLoadingQuestions(true);
    try {
      const response = await AdminApis.getQuestionsPsychometricBySectionId(activeSectionId);
      console.log(response)
      if (response?.data?.questions) {
        setQuestions(response.data.questions);
      } else if (response?.data) {
        // Handle if the response structure is different
        setQuestions(Array.isArray(response.data) ? response.data : []);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      toast.error("Failed to load questions");
      setQuestions([]);
    } finally {
      setLoadingQuestions(false);
    }
  }, [activeSectionId]);
  
  // Fetch questions when section changes
  useEffect(() => {
    fetchQuestions();
  }, [activeSectionId, fetchQuestions]);
  
  // Close section menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      
      // Don't close if clicking on the menu toggle button
      if (target.closest('.section-menu-toggle')) {
        return;
      }
      
      // Don't close if clicking inside the dropdown menu
      if (target.closest('.section-menu-dropdown')) {
        return;
      }
      
      // Close the menu
      setSectionMenuOpen(null);
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const fetchSections = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await AdminApis.getAllSectionPsychometric();
      if (response?.data?.records) {
        setSections(response.data.records);
        // Set the first section as active if exists
        if (response.data.records.length > 0) {
          setActiveTab(response.data.records[0].title);
          setActiveSectionId(response.data.records[0].id);
        }
      }
    } catch (error) {
      console.error("Error fetching sections:", error);
      toast.error("Failed to load sections");
    } finally {
      setLoading(false);
    }
  };
  
  // Section Functions
  const openAddSectionModal = (): void => {
    setIsEditSectionMode(false);
    setEditingSectionId("");
    setNewSectionTitle("");
    setShowSectionModal(true);
  };
 
  const openEditSectionModal = (section: Section): void => {
    setIsEditSectionMode(true);
    setEditingSectionId(section.id);
    setNewSectionTitle(section.title);
    setShowSectionModal(true);
    setSectionMenuOpen(null);
  };
  
  const openDeleteSectionConfirmation = (sectionId: string): void => {
    setSectionToDelete(sectionId);
    setShowDeleteSectionModal(true);
    setSectionMenuOpen(null);
  };
  
  const handleSectionAction = (e: React.MouseEvent, sectionId: string): void => {
    e.preventDefault();
    e.stopPropagation();
    
    if (sectionMenuOpen === sectionId) {
      setSectionMenuOpen(null);
      return;
    }
    
    // Calculate position for the dropdown
    const buttonRect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setMenuPosition({
      top: buttonRect.bottom + 8,
      left: buttonRect.right - 192 // 192px is the width of the dropdown (w-48)
    });
    
    setSectionMenuOpen(sectionId);
  };
  
  const handleAddOrUpdateSection = async (): Promise<void> => {
    if (!newSectionTitle.trim()) {
      toast.error("Section title cannot be empty");
      return;
    }
    
    setAddingSection(true);
    try {
      if (isEditSectionMode) {
        // Update existing section
        const response = await AdminApis.updateSectionPsychometric(editingSectionId, {
          title: newSectionTitle
        });
        if (response.data) {
          toast.success("Section updated successfully");    
          // Update active tab if the current active section was updated
          if (editingSectionId === activeSectionId) {
            setActiveTab(newSectionTitle);
          }
        }
      } else {
        // Add new section
        const response = await AdminApis.addSectionPsychometric({
          title: newSectionTitle
        }); 
        if (response.data) {
          toast.success("Section added successfully");
        }
      }  
      fetchSections();
      setShowSectionModal(false);
      setNewSectionTitle("");
      setIsEditSectionMode(false);
      setEditingSectionId("");
    } catch (error: any) {
      console.error(`Error ${isEditSectionMode ? 'updating' : 'adding'} section:`, error);
      toast.error(error.message || `Failed to ${isEditSectionMode ? 'update' : 'add'} section`);
    } finally {
      setAddingSection(false);
    }
  };
  
  const confirmDeleteSection = async (): Promise<void> => {
    if (!sectionToDelete) return;   
    
    setDeletingSection(true);
    try {
      await AdminApis.deleteSectionPsychometric(sectionToDelete);
      toast.success("Section deleted successfully");    
      
      // If the deleted section was active, select the first available section
      if (sectionToDelete === activeSectionId) {
        const remainingSections = sections.filter(s => s.id !== sectionToDelete);
        if (remainingSections.length > 0) {
          setActiveTab(remainingSections[0].title);
          setActiveSectionId(remainingSections[0].id);
        } else {
          setActiveTab("");
          setActiveSectionId("");
        }
      }  
      
      fetchSections();
      setShowDeleteSectionModal(false);
      setSectionToDelete("");
    } catch (error: any) {
      console.error("Error deleting section:", error);
      toast.error(error.message || "Failed to delete section");
    } finally {
      setDeletingSection(false);
    }
  };
  
  // Question Functions
  const handleAddOption = (): void => {
    setQuestionOptions([...questionOptions, { option_text: "" }]);
  };
  
  const handleRemoveOption = (index: number): void => {
    const updatedOptions = [...questionOptions];
    updatedOptions.splice(index, 1);
    setQuestionOptions(updatedOptions);
  };
  
  const handleOptionChange = (index: number, value: string): void => {
    const updatedOptions = [...questionOptions];
    updatedOptions[index].option_text = value;
    setQuestionOptions(updatedOptions);
  };
  
  const handleSubmitQuestion = async (): Promise<void> => {
    // Validate inputs
    if (!questionText.trim()) {
      toast.error("Question text cannot be empty");
      return;
    }
    
    if (questionOptions.length < 2) {
      toast.error("At least two options are required");
      return;
    }
    
    if (questionOptions.some(opt => !opt.option_text.trim())) {
      toast.error("All options must have text");
      return;
    }
    
    setSubmittingQuestion(true);
    try {
      if (isEditMode) {
        // Update existing question
        const response = await AdminApis.updateQuestionsPsychometric(editingQuestionId, {
          question_text: questionText,
          section_id: activeSectionId,
          options: questionOptions
        }); 
        if (response.data) {
          toast.success("Question updated successfully");
        }
      } else {
        // Create new question
        const response = await AdminApis.addMoreQuestionsPsychometric({
          question_text: questionText,
          section_id: activeSectionId,
          options: questionOptions
        });  
        if (response.data) {
          toast.success("Question added successfully");
        }
      }   
      
      // Reset form and close modal
      setShowQuestionModal(false);
      setQuestionText("");
      setQuestionOptions([{ option_text: "" }]);
      setIsEditMode(false);
      setEditingQuestionId("");
      fetchQuestions();
    } catch (error: any) {
      console.error(`Error ${isEditMode ? 'updating' : 'adding'} question:`, error);
      toast.error(error.response?.data?.message || `Failed to ${isEditMode ? 'update' : 'add'} question`);
    } finally {
      setSubmittingQuestion(false);
    }
  };
  
  const handleSectionChange = (sectionTitle: string, sectionId: string): void => {
    setActiveTab(sectionTitle);
    setActiveSectionId(sectionId);
  };
  
  // Open delete confirmation modal
  const openDeleteConfirmation = (questionId: string): void => {
    setQuestionToDelete(questionId);
    setShowDeleteModal(true);
  };
  
  // Open edit question modal
  const openEditQuestion = (question: Question): void => {
    setIsEditMode(true);
    setEditingQuestionId(question.id);
    setQuestionText(question.question_text);
    setQuestionOptions(question.options?.map((opt: Option) => ({
      ...opt,
      option_text: opt.option_text || ""
    })) || [{ option_text: "" }]);
    setShowQuestionModal(true);
  };
  
  // Delete question handler
  const confirmDeleteQuestion = async (): Promise<void> => {
    if (!questionToDelete) return; 
    
    setDeletingQuestion(true);
    try {
      await AdminApis.deleteQuestionsPsychometric(questionToDelete);
      toast.success("Question deleted successfully");
      fetchQuestions();
      setShowDeleteModal(false);
      setQuestionToDelete("");
    } catch (error: any) {
      console.error("Error deleting question:", error);
      toast.error(error.message || "Failed to delete question");
    } finally {
      setDeletingQuestion(false);
    }
  };

  return (
    <AdminDashboardLayout>
      <div className="min-h-screen ">
        <style dangerouslySetInnerHTML={{
          __html: `
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            
            .custom-scrollbar::-webkit-scrollbar {
              height: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #cbd5e1;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #94a3b8;
            }
          `
        }} />
        <div className="max-w-5xl mx-auto  pb-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* <div className="bg-gradient-to-r from-emerald-500 to-primary p-3 rounded-xl shadow-lg">
                  <FaPuzzlePiece className="h-8 w-8 text-white" />
                </div> */}
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-primary bg-clip-text text-transparent">
                    Psychometric Test Management
                  </h1>
                  <p className="text-gray-600 mt-1">Manage test sections and questions</p>
                </div>
              </div>
              
              
              <button
                onClick={openAddSectionModal}
                className="bg-gradient-to-r from-emerald-500 to-primary hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <FaPlus className="h-4 w-4" />
                <span className="font-medium">Add Section</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8">
            <div className="bg-white flex overflow-x-auto scrollbar-hide rounded-2xl shadow-lg border border-gray-200 p-2">
              {loading ? (
                <div className="flex items-center justify-center w-full py-4">
                  <LoadingSpinner />
                </div>
              ) : sections.length > 0 ? (
                <div className="">
                  <div className="flex space-x-2 pb-1" style={{ minWidth: 'max-content' }}>
                    {sections.map((section) => (
                      <div key={section.id} className="relative group flex-shrink-0">
                        <button
                          onClick={() => handleSectionChange(section.title, section.id)}
                          className={`relative px-4 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap text-sm ${
                            activeTab === section.title
                              ? 'bg-gradient-to-r from-emerald-500 to-primary text-white shadow-lg'
                              : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                          }`}
                          style={{ minWidth: 'fit-content' }}
                        >
                          {section.title}
                        </button>
                        
                        <button 
                          onClick={(e) => handleSectionAction(e, section.id)}
                          className={`section-menu-toggle absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                            activeTab === section.title 
                              ? 'bg-white/20 text-white hover:bg-white/30' 
                              : 'bg-gray-200 text-gray-500 hover:bg-gray-300 opacity-0 group-hover:opacity-100'
                          }`}
                        >
                          <FaEllipsisV size={10} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full py-8 text-gray-500">
                  <div className="text-center">
                    <FaPuzzlePiece className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p>No sections created yet. Add your first section to get started.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
            {/* Content Header */}
            <div className="px-8 py-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FaQuestionCircle className="h-6 w-6 text-emerald-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    {activeTab ? `Questions for ${activeTab}` : "Select a section to manage questions"}
                  </h2>
                  {questions.length > 0 && (
                    <span className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full">
                      {questions.length} question{questions.length !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => {
                    setIsEditMode(false);
                    setEditingQuestionId("");
                    setQuestionText("");
                    setQuestionOptions([{ option_text: "" }]);
                    setShowQuestionModal(true);
                  }}
                  disabled={!activeSectionId}
                  className={`px-6 py-3 rounded-xl flex items-center space-x-2 font-medium transition-all duration-200 ${
                    activeSectionId
                      ? 'bg-gradient-to-r from-emerald-500 to-primary hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <FaPlus className="h-4 w-4" />
                  <span>Add Question</span>
                </button>
              </div>
            </div>

            {/* Questions Content */}
            <div className="p-8">
              {loadingQuestions ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent mb-4"></div>
                  <p className="text-gray-600">Loading questions...</p>
                </div>
              ) : questions.length > 0 ? (
                <div className="space-y-6">
                  {questions.map((question, index) => (
                    <div key={question.id} className="bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200">
                      <div className="p-6">
                        <div className="flex items-start space-x-4">
                          {/* Question Number */}
                          <div className="flex-shrink-0">
                            <div className="bg-gradient-to-r from-emerald-500 to-primary text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm">
                              {question.display_order || index + 1}
                            </div>
                          </div>
                          
                          {/* Question Content */}
                          <div className="flex-1 min-w-0">
                            <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                              <h3 className="text-lg font-medium text-gray-900 leading-relaxed">
                                {question.question_text}
                              </h3>
                            </div>
                            
                            {/* Options */}
                            <div className="ml-4 space-y-3">
                              {question.options?.map((option, optIndex) => (
                                <div key={option.id || optIndex} className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
                                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mt-0.5 flex-shrink-0"></div>
                                  <span className="text-gray-700 leading-relaxed">
                                    {option.option_letter && (
                                      <span className="font-semibold text-emerald-600 mr-2">
                                        {option.option_letter.trim()}
                                      </span>
                                    )}
                                    {option.option_text}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex-shrink-0">
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={() => openEditQuestion(question)}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                                title="Edit Question"
                              >
                                <FaEdit className="h-4 w-4" />
                              </button>
                              <button 
                                onClick={() => openDeleteConfirmation(question.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                                title="Delete Question"
                              >
                                <FaTrash className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <FaListUl className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {activeSectionId ? 'No questions yet' : 'Select a section'}
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md">
                    {activeSectionId 
                      ? `Start building your ${activeTab} section by adding your first question.`
                      : 'Choose a section from the tabs above to view and manage questions.'
                    }
                  </p>
                  {activeSectionId && (
                    <button
                      onClick={() => {
                        setIsEditMode(false);
                        setEditingQuestionId("");
                        setQuestionText("");
                        setQuestionOptions([{ option_text: "" }]);
                        setShowQuestionModal(true);
                      }}
                      className="bg-gradient-to-r from-emerald-500 to-primary hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                    >
                      <FaPlus className="h-4 w-4" />
                      <span>Add Your First Question</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Section Action Menu - Fixed Position */}
        {sectionMenuOpen && (
          <div
            className="section-menu-dropdown fixed bg-white shadow-xl rounded-xl py-2 border border-gray-100 w-48"
            style={{
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
              zIndex: 9999
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {sections
              .filter(section => section.id === sectionMenuOpen)
              .map(section => (
                <div key={section.id}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openEditSectionModal(section);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 flex items-center space-x-3"
                  >
                    <FaEdit className="h-4 w-4" />
                    <span>Edit Section</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openDeleteSectionConfirmation(section.id);
                    }}
                    className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3"
                  >
                    <FaTrash className="h-4 w-4" />
                    <span>Delete Section</span>
                  </button>
                </div>
              ))
            }
          </div>
        )}
        
        {/* Add/Edit Section Modal */}
        {showSectionModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {isEditSectionMode ? 'Edit Section' : 'Create New Section'}
                  </h3>
                  <button
                    onClick={() => setShowSectionModal(false)}
                    className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <FaTimes className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <label htmlFor="section-title" className="block text-sm font-medium text-gray-700 mb-2">
                    Section Title
                  </label>
                  <input
                    type="text"
                    id="section-title"
                    value={newSectionTitle}
                    onChange={(e) => setNewSectionTitle(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="e.g., Values in Action, Learning Preferences"
                  />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowSectionModal(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddOrUpdateSection}
                    disabled={addingSection || !newSectionTitle.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-primary text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium flex items-center space-x-2"
                  >
                    {addingSection ? <LoadingSpinner /> : null}
                    <span>{isEditSectionMode ? "Update Section" : "Create Section"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Add/Edit Question Modal */}
        {showQuestionModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300">
              <div className="px-6 py-4 border-b border-gray-200 sticky top-0 bg-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {isEditMode ? 'Edit Question' : 'Add New Question'} for {activeTab}
                  </h3>
                  <button
                    onClick={() => setShowQuestionModal(false)}
                    className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <FaTimes className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <label htmlFor="question-text" className="block text-sm font-medium text-gray-700 mb-2">
                    Question Text
                  </label>
                  <textarea
                    id="question-text"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="Enter your question here..."
                    rows={4}
                  />
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <label className="block text-sm font-medium text-gray-700">Answer Options</label>
                    <button
                      type="button"
                      onClick={handleAddOption}
                      className="inline-flex items-center space-x-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-lg transition-colors duration-200"
                    >
                      <FaPlus className="h-3 w-3" />
                      <span>Add Option</span>
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {questionOptions?.map((opt, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="w-4 h-4 border-2 border-gray-400 rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium text-gray-500 w-8">
                          {String.fromCharCode(97 + index)}
                        </span>
                        <input
                          type="text"
                          value={opt.option_text}
                          onChange={(e) => handleOptionChange(index, e.target.value)}
                          className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                          placeholder={`Option ${index + 1}`}
                        />
                        {questionOptions.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveOption(index)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                            title="Remove Option"
                          >
                            <FaTrash className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setShowQuestionModal(false)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitQuestion}
                    disabled={submittingQuestion || !questionText.trim() || questionOptions?.some(opt => !opt.option_text.trim())}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-primary text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium flex items-center space-x-2"
                  >
                    {submittingQuestion ? <LoadingSpinner /> : null}
                    <span>{isEditMode ? "Update Question" : "Save Question"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Delete Question Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <FaExclamationTriangle className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Question</h3>
                    <p className="text-gray-600">
                      Are you sure you want to delete this question? This action cannot be undone and will permanently remove the question and all its options.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowDeleteModal(false);
                      setQuestionToDelete("");
                    }}
                    disabled={deletingQuestion}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDeleteQuestion}
                    disabled={deletingQuestion}
                    className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium flex items-center space-x-2"
                  >
                    {deletingQuestion ? <LoadingSpinner /> : null}
                    <span>Delete Question</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Delete Section Confirmation Modal */}
        {showDeleteSectionModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300">
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <FaExclamationTriangle className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete Section</h3>
                    <p className="text-gray-600">
                      Are you sure you want to delete this section? This will permanently remove the section and all associated questions. This action cannot be undone.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => {
                      setShowDeleteSectionModal(false);
                      setSectionToDelete("");
                    }}
                    disabled={deletingSection}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDeleteSection}
                    disabled={deletingSection}
                    className="px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium flex items-center space-x-2"
                  >
                    {deletingSection ? <LoadingSpinner /> : null}
                    <span>Delete Section</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="mb-4 mr-4"
        />
      </div>
    </AdminDashboardLayout>
  );
};

export default PsychometricTestAdmin;