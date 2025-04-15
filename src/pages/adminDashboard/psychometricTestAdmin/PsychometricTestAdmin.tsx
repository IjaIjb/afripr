import React, { useState, useEffect } from 'react';
import { AdminApis } from '../../../apis/adminApi/adminApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../../../component/UI/LoadingSpinner';
import AdminDashboardLayout from '../../../component/AdminDashboardLayout';
import { FaPlus, FaTrash, FaTimes, FaExclamationTriangle, FaEdit, FaEllipsisV } from 'react-icons/fa';
import SubCategoryManagement from './SubCategoryManagement';

// Define interfaces for TypeScript
interface ProgramType {
  id: string;
  program_type: string;
  status: string;
  created_at: string | null;
  updated_at: string | null;
}

interface Option {
  id?: string;
  option: string;
  question_id?: string;
  created_at?: string | null;
  updated_at?: string | null;
  tags?: string[];
}

interface Question {
  id: string;
  category_id: string;
  question: string;
  options: Option[];
  created_at: string | null;
  updated_at: string | null;
  category?: string;
  sub_category_id?: string;
}

const PsychometricTestAdmin: React.FC = () => {
  // State for program types
  const [programTypes, setProgramTypes] = useState<ProgramType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>("");
  const [activeProgramId, setActiveProgramId] = useState<string>("");
  console.log(activeProgramId)
  // State for subcategory
  const [activeSubcategoryId, setActiveSubcategoryId] = useState<string>("");
  const [activeSubcategoryName, setActiveSubcategoryName] = useState<string>("");
  console.log(activeSubcategoryId)
  
  // State for questions
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState<boolean>(false);
  console.log(filteredQuestions)
  // State for adding and editing questions
  const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false);
  const [questionText, setQuestionText] = useState<string>("");
  const [questionOptions, setQuestionOptions] = useState<Option[]>([{ option: "" }]);
  const [submittingQuestion, setSubmittingQuestion] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editingQuestionId, setEditingQuestionId] = useState<string>("");
  
  // State for program type modal
  const [showProgramModal, setShowProgramModal] = useState<boolean>(false);
  const [newProgramType, setNewProgramType] = useState<string>("");
  const [addingProgram, setAddingProgram] = useState<boolean>(false);
  const [isEditProgramMode, setIsEditProgramMode] = useState<boolean>(false);
  const [editingProgramId, setEditingProgramId] = useState<string>("");
  
  // State for program type actions menu
  const [programTypeMenuOpen, setProgramTypeMenuOpen] = useState<string | null>(null);
  
  // State for confirmation modal
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [questionToDelete, setQuestionToDelete] = useState<string>("");
  const [deletingQuestion, setDeletingQuestion] = useState<boolean>(false);
  
  // State for program type deletion
  const [showDeleteProgramModal, setShowDeleteProgramModal] = useState<boolean>(false);
  const [programToDelete, setProgramToDelete] = useState<string>("");
  const [deletingProgram, setDeletingProgram] = useState<boolean>(false);
  
  // Fetch program types on component mount
  useEffect(() => {
    fetchProgramTypes();
  }, []);
  const fetchQuestions = async (): Promise<void> => {
    setLoadingQuestions(true);
    try {
      const response = await AdminApis.getPsychometricQuestion();
      console.log(response)
      if (response?.data) {
        // Filter questions by program type and subcategory
        const filteredByProgram = response.data
          .filter((q: Question) => q.category_id === activeProgramId)
          .filter((q: Question) => q.sub_category_id === activeSubcategoryId);
          
        setQuestions(filteredByProgram);
        setFilteredQuestions(filteredByProgram);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      toast.error("Failed to load questions");
    } finally {
      setLoadingQuestions(false);
    }
  };
  
  // Fetch questions when program type or subcategory changes
  useEffect(() => {
    if (activeProgramId && activeSubcategoryId) {
      fetchQuestions();
    } else if (activeProgramId) {
      // If only program is selected but no subcategory, clear questions
      setQuestions([]);
      setFilteredQuestions([]);
    }
  }, [activeProgramId, activeSubcategoryId, fetchQuestions]);
  
  // Close program type menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Don't close if clicking on the menu toggle button
      if ((e.target as Element).closest('.program-menu-toggle')) {
        return;
      }
      setProgramTypeMenuOpen(null);
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const fetchProgramTypes = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await AdminApis.getProgramType();
      if (response?.data?.records) {
        setProgramTypes(response.data.records);
        // Set the first program type as active if exists
        if (response.data.records.length > 0) {
          setActiveTab(response.data.records[0].program_type);
          setActiveProgramId(response.data.records[0].id);
        }
      }
    } catch (error) {
      console.error("Error fetching program types:", error);
      toast.error("Failed to load program types");
    } finally {
      setLoading(false);
    }
  };
  

  
  // Program Type Functions
  const openAddProgramModal = (): void => {
    setIsEditProgramMode(false);
    setEditingProgramId("");
    setNewProgramType("");
    setShowProgramModal(true);
  };
  console.log(filteredQuestions)
  console.log(questions)
  
  const openEditProgramModal = (program: ProgramType): void => {
    setIsEditProgramMode(true);
    setEditingProgramId(program.id);
    setNewProgramType(program.program_type);
    setShowProgramModal(true);
    setProgramTypeMenuOpen(null);
  };
  
  const openDeleteProgramConfirmation = (programId: string): void => {
    setProgramToDelete(programId);
    setShowDeleteProgramModal(true);
    setProgramTypeMenuOpen(null);
  };
  
  const handleProgramTypeAction = (e: React.MouseEvent, programId: string): void => {
    e.preventDefault();
    e.stopPropagation();
    
    // Toggle menu open state
    setProgramTypeMenuOpen(programTypeMenuOpen === programId ? null : programId);
  };
  
  const handleAddOrUpdateProgramType = async (): Promise<void> => {
    if (!newProgramType.trim()) {
      toast.error("Program type cannot be empty");
      return;
    }
    
    setAddingProgram(true);
    try {
      if (isEditProgramMode) {
        // Update existing program type
        const response = await AdminApis.updateProgramType(editingProgramId, {
          program_type: newProgramType.toLowerCase(),
          status: "active"
        });
        
        if (response.data) {
          toast.success("Program type updated successfully");
          
          // Update active tab if the current active tab was updated
          if (editingProgramId === activeProgramId) {
            setActiveTab(newProgramType.toLowerCase());
          }
        }
      } else {
        // Add new program type
        const response = await AdminApis.addProgramType({
          program_type: newProgramType.toLowerCase(),
          status: "active"
        });
        
        if (response.data) {
          toast.success("Program type added successfully");
        }
      }
      
      fetchProgramTypes();
      setShowProgramModal(false);
      setNewProgramType("");
      setIsEditProgramMode(false);
      setEditingProgramId("");
    } catch (error: any) {
      console.error(`Error ${isEditProgramMode ? 'updating' : 'adding'} program type:`, error);
      toast.error(error.message || `Failed to ${isEditProgramMode ? 'update' : 'add'} program type`);
    } finally {
      setAddingProgram(false);
    }
  };
  
  const confirmDeleteProgramType = async (): Promise<void> => {
    if (!programToDelete) return;
    
    setDeletingProgram(true);
    try {
      await AdminApis.deleteProgramType(programToDelete);
      toast.success("Program type deleted successfully");
      
      // If the deleted program was active, select the first available program
      if (programToDelete === activeProgramId) {
        const remainingPrograms = programTypes.filter(p => p.id !== programToDelete);
        if (remainingPrograms.length > 0) {
          setActiveTab(remainingPrograms[0].program_type);
          setActiveProgramId(remainingPrograms[0].id);
        } else {
          setActiveTab("");
          setActiveProgramId("");
        }
      }
      
      fetchProgramTypes();
      setShowDeleteProgramModal(false);
      setProgramToDelete("");
    } catch (error: any) {
      console.error("Error deleting program type:", error);
      toast.error(error.message || "Failed to delete program type");
    } finally {
      setDeletingProgram(false);
    }
  };
  
  // Question Functions
  const handleAddOption = (): void => {
    setQuestionOptions([...questionOptions, { option: "" }]);
  };
  
  const handleRemoveOption = (index: number): void => {
    const updatedOptions = [...questionOptions];
    updatedOptions.splice(index, 1);
    setQuestionOptions(updatedOptions);
  };
  
  const handleOptionChange = (index: number, value: string): void => {
    const updatedOptions = [...questionOptions];
    updatedOptions[index].option = value;
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
    
    if (questionOptions.some(opt => !opt.option.trim())) {
      toast.error("All options must have text");
      return;
    }
    
    // Add tags to each option
    const optionsWithTags = questionOptions.map(opt => ({
      ...opt,
      tags: [activeSubcategoryName.toLowerCase().replace(/\s+/g, '_')] // Use the subcategory as the tag
    }));
    
    setSubmittingQuestion(true);
    try {
      if (isEditMode) {
        // Update existing question
        const response = await AdminApis.updatePsychometricQuestion(editingQuestionId, {
          question: questionText,
          category_id: activeProgramId,
          sub_category_id: activeSubcategoryId,
          questionoptions: optionsWithTags
        });
        
        if (response.data) {
          toast.success("Question updated successfully");
        }
      } else {
        // Create new question
        const response = await AdminApis.createPsychometricQuestion({
          question: questionText,
          category_id: activeProgramId,
          sub_category_id: activeSubcategoryId,
          options: optionsWithTags
        });
        
        if (response.data) {
          toast.success("Question added successfully");
        }
      }
      
      // Reset form and close modal
      setShowQuestionModal(false);
      setQuestionText("");
      setQuestionOptions([{ option: "" }]);
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
  
  const handleProgramTypeChange = (programType: string, programId: string): void => {
    setActiveTab(programType);
    setActiveProgramId(programId);
    // Reset subcategory when program type changes
    setActiveSubcategoryId("");
    setActiveSubcategoryName("");
  };
  
  // Handle subcategory selection
  const handleSubcategorySelect = (subcategoryId: string, subcategoryName: string): void => {
    setActiveSubcategoryId(subcategoryId);
    setActiveSubcategoryName(subcategoryName);
  };
  
  // Open delete confirmation modal
  const openDeleteConfirmation = (questionId: string): void => {
    setQuestionToDelete(questionId);
    setShowDeleteModal(true);
  };
  
  // Open edit question modal
  const openEditQuestion = (question: any): void => {
    setIsEditMode(true);
    setEditingQuestionId(question.id);
    setQuestionText(question.question);
    setQuestionOptions(question.options?.map((opt:any) => ({
      ...opt,
      // Remove tags as they'll be re-generated on save
      tags: undefined
    })));
    setShowQuestionModal(true);
  };
  
  // Delete question handler
  const confirmDeleteQuestion = async (): Promise<void> => {
    if (!questionToDelete) return;
    
    setDeletingQuestion(true);
    try {
      await AdminApis.deletePsychometricQuestion(questionToDelete);
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
      <div className="bg-gray-50 min-h-screen p-4 font-sans">
        <div className=" mx-auto">
          {/* Header with title and program type tabs */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-green-500">Psychometric Test Management</h1>
            
            <div className="flex items-center">
              {/* Program Type Tabs */}
              <div className="border border-green-500 rounded-xl flex">
                {loading ? (
                  <div className="px-4 py-1">
                    <LoadingSpinner />
                  </div>
                ) : (
                  <>
                    {programTypes.map((program) => (
                      <div key={program.id} className="relative">
                        <button
                          className={`w-[100px] py-2 ${
                            activeTab === program.program_type
                              ? 'bg-green-500 rounded-xl text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => handleProgramTypeChange(program.program_type, program.id)}
                        >
                          {program.program_type.charAt(0).toUpperCase() + program.program_type.slice(1)}
                        </button>
                        <button 
                          onClick={(e) => handleProgramTypeAction(e, program.id)}
                          className={`program-menu-toggle absolute top-1 right-1 text-xs p-1 rounded-full z-20 ${
                            activeTab === program.program_type ? 'text-white' : 'text-gray-500'
                          } hover:bg-gray-200 hover:text-gray-700`}
                        >
                          <FaEllipsisV size={10} />
                        </button>
                        
                        {/* Program Type Action Menu */}
                        {programTypeMenuOpen === program.id && (
                          <div className="absolute right-0 top-8 w-36 bg-white shadow-lg rounded-md z-50 py-1 border border-gray-200">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openEditProgramModal(program);
                              }}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              <FaEdit className="inline mr-2" /> Edit
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                openDeleteProgramConfirmation(program.id);
                              }}
                              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                            >
                              <FaTrash className="inline mr-2" /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
              
              {/* Add Program Type Button */}
              <button
                className="ml-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
                onClick={openAddProgramModal}
                title="Add Program Type"
              >
                <FaPlus className="h-3 w-3" />
              </button>
            </div>
          </div>
          
          {/* Subcategory Management Component */}
          {activeProgramId && (
            <SubCategoryManagement 
              activeProgramId={activeProgramId} 
              activeTabName={activeTab}
              onSubCategorySelect={handleSubcategorySelect}
            />
          )}
          
          {/* Add Question Button */}
          <div className="flex justify-end mb-6">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center"
              onClick={() => {
                setIsEditMode(false);
                setEditingQuestionId("");
                setQuestionText("");
                setQuestionOptions([{ option: "" }]);
                setShowQuestionModal(true);
              }}
              disabled={!activeProgramId || !activeSubcategoryId}
            >
              <FaPlus className="mr-2" />
              Add Question
            </button>
          </div>
          
          {/* Questions List */}
          <div className="">
            <h2 className="text-xl font-medium mb-4">
              {activeSubcategoryName ? `Questions for ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} - ${activeSubcategoryName}` : activeTab ? "Select a subcategory" : "Select a program type"}
            </h2>
            
            {loadingQuestions ? (
              <div className="flex justify-center py-8">
               <div className="text-center">
                <div className="flex justify-center items-center py-10">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
                </div>
                <p className="mt-2">Loading questions...</p>
               </div>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredQuestions.length > 0 ? (
                  filteredQuestions.map((question, index) => (
                    <div key={question.id} className="">
                       <div className="bg-green-500 text-white w-14 h-8 flex items-center justify-center rounded-sm mr-3">
                            {index + 1}
                          </div>
                      <div className="ml-4 flex justify-between items-start">
                        <div className="flex items-start">
                       
                          <div className='mt-5'>
                            <div className='border bg-white rounded-md py-1 px-8 w-[100%]'>
                            <h3 className="font-medium text-lg">{question.question}</h3>
                            </div>
                            <div className="mt-3 ml-6 space-y-2">
                              {question.options.map((option, optIndex) => (
                                <div key={option.id || optIndex} className="flex items-center">
                                  <div className="w-5 h-5 border border-gray-300 rounded-full mr-2"></div>
                                  <span>{option.option}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            className="text-blue-500 hover:text-blue-700" 
                            title="Edit Question"
                            onClick={() => openEditQuestion(question)}
                          >
                            <FaEdit />
                          </button>
                          <button 
                            className="text-red-500 hover:text-red-700" 
                            title="Delete Question"
                            onClick={() => openDeleteConfirmation(question.id)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    {activeSubcategoryId ? `No questions added yet for ${activeSubcategoryName}.` : activeProgramId ? "Please select a subcategory to manage questions." : "Please select a program type to manage questions."}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Add/Edit Program Type Modal */}
        {showProgramModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-medium text-gray-900">
                  {isEditProgramMode ? 'Edit' : 'Add'} Program Type
                </h3>
                <button
                  onClick={() => setShowProgramModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="mb-4">
                <label htmlFor="program-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Program Type Name
                </label>
                <input
                  type="text"
                  id="program-type"
                  value={newProgramType}
                  onChange={(e) => setNewProgramType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="e.g., BSc, Masters, PhD"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowProgramModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddOrUpdateProgramType}
                  disabled={addingProgram || !newProgramType.trim()}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300"
                >
                  {addingProgram ? <LoadingSpinner /> : isEditProgramMode ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Add/Edit Question Modal */}
        {showQuestionModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-medium text-gray-900">
                  {isEditMode ? 'Edit' : 'Add'} Question for {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} - {activeSubcategoryName}
                </h3>
                <button
                  onClick={() => setShowQuestionModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FaTimes />
                </button>
              </div>
              
              <div className="mb-4">
                <label htmlFor="question-text" className="block text-sm font-medium text-gray-700 mb-1">
                  Question
                </label>
                <input
                  type="text"
                  id="question-text"
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your question"
                />
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Options</label>
                  <button
                    type="button"
                    onClick={handleAddOption}
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800"
                  >
                    <FaPlus className="mr-1" />
                    Add Option
                  </button>
                </div>
                
                <div className="space-y-2">
                  {questionOptions?.map((opt, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 border border-gray-300 rounded-full mr-2 flex-shrink-0"></div>
                      <input
                        type="text"
                        value={opt.option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        className="flex-grow p-2 border border-gray-300 rounded-md"
                        placeholder={`Option ${index + 1}`}
                      />
                      {questionOptions.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveOption(index)}
                          className="ml-2 text-red-500 hover:text-red-700"
                          title="Remove Option"
                        >
                          <FaTrash />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowQuestionModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitQuestion}
                  disabled={submittingQuestion || !questionText.trim() || questionOptions?.some(opt => !opt.option.trim())}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300"
                >
                  {submittingQuestion ? <LoadingSpinner /> : isEditMode ? "Update Question" : "Save Question"}
                </button>
              </div>
            </div>
          </div>
        )}
        

      {/* Delete Question Confirmation Modal */}
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
                    Are you sure you want to delete this question? This action cannot be undone.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setQuestionToDelete("");
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                  disabled={deletingQuestion}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDeleteQuestion}
                  disabled={deletingQuestion}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-red-300"
                >
                  {deletingQuestion ? <LoadingSpinner /> : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Delete Program Type Confirmation Modal */}
        {showDeleteProgramModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 mr-4">
                  <FaExclamationTriangle className="h-6 w-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900">Delete Program Type</h3>
                  <p className="mt-2 text-gray-600">
                    Are you sure you want to delete this program type? All associated questions will also be deleted. This action cannot be undone.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowDeleteProgramModal(false);
                    setProgramToDelete("");
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                  disabled={deletingProgram}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDeleteProgramType}
                  disabled={deletingProgram}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-red-300"
                >
                  {deletingProgram ? <LoadingSpinner /> : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
        
        <ToastContainer />
      </div>
    </AdminDashboardLayout>
  );
};

export default PsychometricTestAdmin;