import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../../../component/Navbar';
import { AdminApis } from '../../../apis/adminApi/adminApi';
import { useSelector } from 'react-redux';

interface Option {
  id: string;
  option_letter: string;
  option_text: string;
  question_id: string;
  created_at: string | null;
  updated_at: string | null;
}

interface Question {
  id: string;
  section_id: string;
  question_text: string;
  display_order: number;
  options: Option[];
  section: {
    id: string;
    title: string;
    created_at: string | null;
    updated_at: string | null;
  };
  created_at: string | null;
  updated_at: string | null;
}

interface Section {
  id: string;
  title: string;
  created_at: string | null;
  updated_at: string | null;
}

interface SelectedAnswer {
  optionIndex: number;
  optionId: string;
  questionId: string;
}

const PsychoBachelorQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
     const userLoginData = useSelector((state:any) => state.data.login.value);
     console.log(userLoginData);
     
  const [sections, setSections] = useState<Section[]>([]);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingQuestions, setLoadingQuestions] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, SelectedAnswer>>({});
  const [submittingAnswers, setSubmittingAnswers] = useState<boolean>(false);
  const [submissionComplete, setSubmissionComplete] = useState<boolean>(false);

  const fetchSections = async (): Promise<void> => {
    setLoading(true);
    try {
      const response = await AdminApis.getAllSectionPsychometric();
      if (response?.data?.records) {
        setSections(response.data.records);
        console.log("Sections loaded:", response.data.records);
      }
    } catch (error) {
      console.error("Error fetching sections:", error);
      toast.error("Failed to load sections");
    } finally {
      setLoading(false);
    }
  };

  const fetchAllQuestions = useCallback(async (): Promise<void> => {
    setLoadingQuestions(true);
    try {
      const response = await AdminApis.getAllQuestionsPsychometric();
      console.log("Questions response:", response);
      
      if (response?.data?.records) {
        // Sort questions by display_order within each section
        const sortedQuestions = response.data.records.sort((a: Question, b: Question) => {
          if (a.section_id === b.section_id) {
            return a.display_order - b.display_order;
          }
          return 0;
        });
        setAllQuestions(sortedQuestions);
        console.log("Questions loaded:", sortedQuestions);
      } else if (response?.data) {
        setAllQuestions(Array.isArray(response.data) ? response.data : []);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      toast.error("Failed to load questions");
      setAllQuestions([]);
    } finally {
      setLoadingQuestions(false);
    }
  }, []);

  // Fetch sections and questions on component mount
  useEffect(() => {
    fetchSections();
    fetchAllQuestions();
  }, [fetchAllQuestions]);

  // Group questions by section
  const getQuestionsBySection = (sectionId: string): Question[] => {
    return allQuestions.filter(question => question.section_id === sectionId);
  };

  // Get current section's questions
  const getCurrentSectionQuestions = (): Question[] => {
    if (currentStep < sections.length) {
      const currentSection = sections[currentStep];
      return getQuestionsBySection(currentSection.id);
    }
    return [];
  };

  // Debug logging for questions and selected answers
  useEffect(() => {
    console.log("Total sections:", sections.length);
    console.log("Current selected answers:", selectedAnswers);
    
    // Log the number of answers selected for each section
    sections.forEach((section, index) => {
      const questionsInSection = getQuestionsBySection(section.id).length;
      const answeredInSection = getQuestionsBySection(section.id).filter(q => 
        selectedAnswers[q.id] !== undefined
      ).length;
      
      console.log(`Section ${index + 1} (${section.title}): ${answeredInSection}/${questionsInSection} questions answered`);
    });
  }, [sections, allQuestions, selectedAnswers]);

  const handleNext = () => {
    // Check if all questions in the current step have answers
    if (currentStep < sections.length) {
      const currentSectionQuestions = getCurrentSectionQuestions();
      const allQuestionsAnswered = currentSectionQuestions.every(
        (q) => selectedAnswers[q.id] !== undefined
      );
      
      if (allQuestionsAnswered) {
        // If this is the last section, submit answers and navigate to results
        if (currentStep === sections.length - 1) {
          submitAnswers().then((success) => {
            if (success) {
              navigate('/psychometric-test/list-of-programs');
            }
          });
        } else {
          setCurrentStep(currentStep + 1);
        }
      } else {
        toast.warning("Please answer all questions before proceeding.");
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswerSelect = (question: Question, optionIndex: number) => {
    const questionId = question.id;
    const optionId = question.options[optionIndex].id;
    
    console.log(`Selected answer - Question ID: ${questionId}, Option ID: ${optionId}, Option Index: ${optionIndex}`);
    
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: {
        optionIndex,
        optionId,
        questionId
      }
    }));
  };

const submitAnswers = async (): Promise<boolean> => {
  try {
    setSubmittingAnswers(true);
    
    // Prepare the payload in the required format
    const answers = Object.values(selectedAnswers).map(answer => ({
      question_id: answer.questionId,
      option_id: answer.optionId
    }));
    
    const payload = {
      user_id: userLoginData?.data?.id,
      answers: answers
    };
    
    console.log("Payload being submitted:", payload);
    console.log("User ID:", userLoginData?.data?.id);
    console.log("Number of answers:", answers.length);
    
    // Validate that we have a user_id
    if (!userLoginData?.data?.id) {
      toast.error("User ID not found. Please log in again.");
      return false;
    }
    
    // Validate that we have answers
    if (answers.length === 0) {
      toast.error("No answers found to submit.");
      return false;
    }
    
    // Make the actual API call
    const response = await AdminApis.answerPsychometricQuestion(payload);
    
    console.log("API Response:", response);
    
    // Check if the submission was successful
    if (response?.status === 200 || response?.status === 201) {
      // Store the response data if needed
      if (response?.data) {
        localStorage.setItem('psychometricResults', JSON.stringify(response.data));
      }
      
      setSubmissionComplete(true);
      toast.success("Your answers have been submitted successfully!");
      return true;
    } else {
      // Handle unsuccessful response
      console.error("Unexpected response status:", response?.status);
      toast.error("Failed to submit your answers. Please try again.");
      return false;
    }
    
  } catch (error: any) {
    console.error("Error submitting answers:", error);
    
    // Handle different types of errors
    if (error?.response?.status === 400) {
      toast.error("Invalid data submitted. Please check your answers and try again.");
    } else if (error?.response?.status === 401) {
      toast.error("Authentication failed. Please log in again.");
    } else if (error?.response?.status === 500) {
      toast.error("Server error. Please try again later.");
    } else if (error?.message) {
      toast.error(`Error: ${error.message}`);
    } else {
      toast.error("Failed to submit your answers. Please try again.");
    }
    
    return false;
  } finally {
    setSubmittingAnswers(false);
  }
};

  // Get the step title based on section
  const getStepTitle = (index: number) => {
    if (index < sections.length) {
      return sections[index].title;
    }
    
    return `Step ${index + 1}`;
  };
    
  const totalSteps = sections.length;

  if (loading || loadingQuestions) {
    return (
      <div>
        <Navbar />
        <div className="mt-[130px] flex justify-center items-center h-[60vh]">
          <div className="text-center">
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            </div>
            <p className="mt-2">Loading questions...</p>
          </div>
        </div>
      </div>
    );
  }

  const currentSectionQuestions = getCurrentSectionQuestions();

  return (
    <div>
      <Navbar />
      <div className="mt-[130px]">
        <div className="flex w-full justify-center mt-12">
          <div className="max-w-[2000px] relative mx-auto lg:px-14 px-3 w-full">
            <div className="p-6">
              <div className="max-w-[1000px] mx-auto md:mb-20">
                <div className="mb-6 relative">
                  {/* Progress Bar */}
                  <div className="relative flex items-center">
                    <div className="h-2 bg-gray-200 w-full rounded-full absolute">
                      <div
                        className="h-2 bg-green-500 rounded-full transition-all duration-300"
                        style={{
                          width: `${(currentStep / (totalSteps - 1)) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Mobile-only active step title */}
                  <div className="mt-3 text-center lg:hidden">
                    <h3 className="text-primary font-medium">
                      {getStepTitle(currentStep)}
                    </h3>
                  </div>
                  
                  {/* Step Indicators */}
                  <div className="absolute -top-3 w-full flex justify-between items-center">
                    {Array.from({ length: totalSteps }).map((_, index) => (
                      <div
                        key={index}
                        className="relative flex flex-col items-center"
                      >
                        {/* Step Circle */}
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                            ${
                              currentStep >= index
                                ? "bg-green-500 border-green-500"
                                : "bg-gray-300 border-gray-300"
                            }`}
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        {/* Step Label - Desktop only, only show for active step */}
                        {currentStep === index && (
                          <span className="absolute lg:block hidden top-7 whitespace-nowrap text-xs w-[80px] text-center font-medium text-primary">
                            {getStepTitle(index)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Graduation Cap Icon */}
                  <div className="absolute -right-5 -top-8">
                    <img
                      src="/images/psycho/Graduation-cap.gif"
                      className="w-10 h-10"
                      alt="Graduation Cap"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {currentSectionQuestions.length > 0 ? (
                  currentSectionQuestions.map((question, questionIndex) => (
                    <div
                      key={question.id}
                      className="bg-[#F8F8FC] relative rounded-lg px-4 md:px-12 pb-6 pt-14 shadow-md"
                    >
                      <div className="bg-green-600 absolute top-3 text-[17px] -left-6 px-5 md:px-7 py-2 w-fit text-white">
                        {questionIndex + 1}
                      </div>
                      <h2 className="text-lg font-semibold mb-4">
                        {question.question_text}
                      </h2>
                      <div className="bg-white px-4 md:px-8 py-3">
                        {question.options.map((option, optionIndex) => (
                          <label key={option.id} className="mb-2 flex items-center">
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              className="mr-2"
                              checked={selectedAnswers[question.id]?.optionIndex === optionIndex}
                              onChange={() => handleAnswerSelect(question, optionIndex)}
                            />
                            <span className="font-medium mr-2">{option.option_letter.trim()}.</span>
                            {option.option_text}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No questions found for this section.
                  </div>
                )}
              </div>
              
              <div className="flex justify-end gap-7 mt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="border border-primary text-[#04B040] rounded-full bg-white shadow-sm hover:bg-gray-100 disabled:opacity-50 px-6 py-2"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={submittingAnswers}
                  className="bg-primary text-white rounded-full hover:bg-green-600 disabled:opacity-50 px-6 py-2 flex items-center"
                >
                  {submittingAnswers ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    currentStep === sections.length - 1 ? "Submit" : "Next"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default PsychoBachelorQuestions;