import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../../component/Navbar';
import { AdminApis } from '../../apis/adminApi/adminApi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SubCategory {
  id: string;
  name: string;
  status: string;
  created_at: string | null;
  updated_at: string | null;
  question_types_id: string | null;
}

interface Option {
  id: string;
  option: string;
  tags?: string[];
}

interface Question {
  id: string;
  question: string;
  category_id: string;
  sub_category_id: string;
  options: Option[];
}

interface QuestionDisplay {
  id: number;
  question: string;
  options: string[];
  questionId: string;
  optionIds: string[];
}

interface SubcategoryQuestions {
  id: number;
  name: string;
  subcategoryId: string;
  questions: QuestionDisplay[];
}

interface SelectedAnswer {
  optionIndex: number;
  optionId: string;
}

const PsychoBachelorQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const programId = location.state?.programId;
  
  const [subcategories, setSubcategories] = useState<SubCategory[]>([]);
  const [questionsGroupedBySubcategory, setQuestionsGroupedBySubcategory] = useState<SubcategoryQuestions[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, SelectedAnswer>>({});
  
  // State to store the program results
  const [programResults, setProgramResults] = useState<any>(null);
  const [submittingAnswers, setSubmittingAnswers] = useState<boolean>(false);
  const [submissionComplete, setSubmissionComplete] = useState<boolean>(false);
  
  const fetchSubcategoriesAndQuestions = async () => {
    setLoadingData(true);
    try {
      // First, fetch subcategories for the selected program
      const subcategoriesResponse = await AdminApis.getSubCategory();
      
      if (subcategoriesResponse?.data?.records) {
        // Filter subcategories by the program type
        const filteredSubcategories = subcategoriesResponse.data.records.filter(
          (subcategory: SubCategory) => subcategory.question_types_id === programId
        );
        
        setSubcategories(filteredSubcategories);
        
        // Then fetch all questions
        const questionsResponse = await AdminApis.getPsychometricQuestion();
        
        if (questionsResponse?.data?.records) {
          // Group questions by subcategory
          const groupedQuestions = filteredSubcategories.map((subcategory:any, index:any) => {
            // Filter questions for this subcategory
            const subcategoryQuestions = questionsResponse.data.records
              .filter((q: Question) => 
                q.category_id === programId && 
                q.sub_category_id === subcategory.id
              )
              .map((q: Question, qIndex: number) => ({
                id: qIndex + 1,
                question: q.question,
                options: q.options.map(opt => opt.option),
                questionId: q.id,
                optionIds: q.options.map(opt => opt.id)
              }));
            
            return {
              id: index + 1,
              name: subcategory.name,
              subcategoryId: subcategory.id,
              questions: subcategoryQuestions
            };
          });
          
          setQuestionsGroupedBySubcategory(groupedQuestions);
          console.log("Questions grouped by subcategory:", groupedQuestions);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load questions");
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (programId) {
      fetchSubcategoriesAndQuestions();
    } else {
      toast.error("Program ID not found. Please go back and select a program.");
      setLoadingData(false);
    }
  }, [programId, fetchSubcategoriesAndQuestions]);

  // Log when program results are ready
  useEffect(() => {
    if (submissionComplete && programResults) {
      console.log("Program results ready for navigation:", programResults);
    }
  }, [submissionComplete, programResults]);

  // Debug logging for questions and selected answers
  useEffect(() => {
    console.log("Total subcategories:", questionsGroupedBySubcategory.length);
    console.log("Current selected answers:", selectedAnswers);
    
    // Log the number of answers selected for each subcategory
    questionsGroupedBySubcategory.forEach((subcat, index) => {
      const questionsInSubcat = subcat.questions.length;
      const answeredInSubcat = subcat.questions.filter(q => 
        selectedAnswers[q.questionId] !== undefined
      ).length;
      
      console.log(`Subcategory ${index + 1} (${subcat.name}): ${answeredInSubcat}/${questionsInSubcat} questions answered`);
    });
  }, [questionsGroupedBySubcategory, selectedAnswers]);



  const handleNext = () => {
    // Check if all questions in the current step have answers
    if (currentStep < questionsGroupedBySubcategory.length) {
      // Check if all questions in current subcategory have answers
      const currentSubcategory = questionsGroupedBySubcategory[currentStep];
      const allQuestionsAnswered = currentSubcategory.questions.every(
        (q) => {
          // Check if this question has been answered using the question's actual API ID
          return selectedAnswers[q.questionId] !== undefined;
        }
      );
      
      if (allQuestionsAnswered) {
        // Move to the next step
        setCurrentStep(currentStep + 1);
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

  const handleAnswerSelect = (question: any, optionIndex: number) => {
    // Get the actual question ID and option ID
    const questionId = question.questionId;
    const optionId = question.optionIds[optionIndex];
    
    console.log(`Selected answer - Question ID: ${questionId}, Option ID: ${optionId}, Option Index: ${optionIndex}`);
    
    // Update the selectedAnswers state with the new selection
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: {
        optionIndex,
        optionId
      }
    }));
  };

  const submitAnswers = async (): Promise<boolean> => {
    try {
      setSubmittingAnswers(true);
      
      // Simply collect all option IDs directly from the selectedAnswers object
      const allOptionIds = Object.values(selectedAnswers).map(answer => answer.optionId);
      
      // Log the information for debugging
      console.log("All selected answers object:", selectedAnswers);
      console.log("All option IDs being submitted:", allOptionIds);
      console.log("Number of option IDs:", allOptionIds.length);
      
      // Create the payload
      const payload = {
        selected_options: allOptionIds
      };
      
      console.log("Submitting answers payload:", payload);
      
      // Submit to API
      const response = await AdminApis.createScoreSubmition(payload);
      
      if (response.data) {
        console.log("Score submission successful:", response.data);
        
        // Get program results from the response
        const programData = response.data.programs || [];
        
        // Store in localStorage for persistence
        localStorage.setItem('psychometricResults', JSON.stringify(programData));
        
        // Update state
        setProgramResults(programData);
        setSubmissionComplete(true);
        
        toast.success("Your answers have been submitted successfully!");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error submitting answers:", error);
      toast.error("Failed to submit your answers. Please try again.");
      return false;
    } finally {
      setSubmittingAnswers(false);
    }
  };

  // Get the step title based on subcategory
  const getStepTitle = (index: number, totalStepCount: number) => {
    // If it's the last index, always show "Result"
    if (index === totalStepCount) {
      return "Result";
    }
    
    // If we have subcategories, use their names
    if (index < questionsGroupedBySubcategory.length) {
      return questionsGroupedBySubcategory[index].name;
    }
    
    // Fallback
    return `Step ${index + 1}`;
  };
    
  const totalSteps = questionsGroupedBySubcategory.length > 0 ? questionsGroupedBySubcategory.length : 5;

  if (loadingData) {
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
                          width: `${(currentStep / totalSteps) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* Mobile-only active step title */}
                  <div className="mt-3 text-center lg:hidden">
                    <h3 className="text-primary font-medium">
                      {currentStep < questionsGroupedBySubcategory.length 
                        ? getStepTitle(currentStep, totalSteps) 
                        : "Result"}
                    </h3>
                  </div>
                  {/* Step Indicators */}
                  <div className="absolute -top-3 w-full flex justify-between items-center">
                    {Array.from({ length: totalSteps + 1 }).map((_, index) => (
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
                        {/* Step Label - Desktop only */}
                        <span className="absolute lg:block hidden top-7 whitespace-nowrap text-xs w-[80px] text-center">
                          {getStepTitle(index, totalSteps)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Graduation Cap Icon (Always visible, always at the end) */}
                  <div className="absolute -right-5 -top-8">
                    <img
                      src="/images/psycho/Graduation-cap.gif"
                      className="w-10 h-10"
                      alt="Graduation Cap"
                    />
                  </div>
                </div>
              </div>
              
              {currentStep < questionsGroupedBySubcategory.length ? (
                <div className="space-y-6">
                  {questionsGroupedBySubcategory[currentStep]?.questions.length > 0 ? (
                    questionsGroupedBySubcategory[currentStep].questions.map((q) => (
                      <div
                        key={q.questionId} // Use the actual questionId from API
                        className="bg-[#F8F8FC] relative rounded-lg px-4 md:px-12 pb-6 pt-14 shadow-md"
                      >
                        <div className="bg-green-600 absolute top-3 text-[17px] -left-6 px-5 md:px-7 py-2 w-fit text-white">
                          {q.id}
                        </div>
                        <h2 className="text-lg font-semibold mb-4">
                          {q.question}
                        </h2>
                        <div className="bg-white px-4 md:px-8 py-3">
                          {q.options.map((option, index) => (
                            <label key={`${q.questionId}-option-${index}`} className="mb-2 flex items-center">
                              <input
                                type="radio"
                                name={`question-${q.questionId}`} // Use the actual questionId from API
                                className="mr-2"
                                checked={selectedAnswers[q.questionId]?.optionIndex === index}
                                onChange={() => handleAnswerSelect(q, index)}
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      No questions found for this subcategory.
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid lg:grid-cols-1 gap-6 mt-8 mb-20 md:grid-cols-1">
                  <div>
                    <div className="border-b-[5px] border-b-[#1DB459] px-6 py-10 rounded-[10px] shadow-lg border border-[#E5E5E5] flex flex-col justify-between h-full">
                      <div className="flex mb-7 text-primary items-center gap-3 text-[36px] font-bold justify-center">
                        Congratulations
                        <img
                          src="/images/psycho/Party-popper.gif"
                          className="w-14 h-14"
                          alt="celebration"
                        />
                      </div>
                      <div className="flex justify-center text-center pb-9">
                        <h5 className="text-[#5A5A72] text-center text-[16px]">
                          You've successfully completed the Afriproedu
                          Psychometric Test. Based on your responses, we've
                          generated personalized insights and course
                          recommendations that align with your strengths,
                          interests, and career aspirations.
                          <br />
                          <br />
                          Explore your results, discover the best academic path
                          for you, and take the next step toward a successful
                          future. Your journey starts now!🚀
                        </h5>
                      </div>
                         {/* Disclaimer Section */}
   {/* Improved Disclaimer Section */}
<div className=" flex justify-center mt-6 mb-8">
  <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-amber-400 rounded-lg shadow-sm overflow-hidden">
    <div className="flex items-start p-4">
      {/* Warning Icon */}
      <div className="flex-shrink-0 mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      
      {/* Disclaimer Content */}
      <div className="flex-1">
        <h6 className="text-amber-700 font-semibold text-sm mb-2 flex items-center">
          Disclaimer
          <span className="ml-2 h-px bg-amber-200 flex-1"></span>
        </h6>
        
        <div className="text-gray-600 text-xs space-y-2 leading-relaxed">
          <p>
            The recommendations provided by this psychometric test are based on your responses and are intended as guidance only.
          </p>
          <p>
            These results should be considered alongside other factors such as your academic history, personal interests, and career goals.
          </p>
          <p>
            We strongly encourage you to consult with educational advisors and career counselors before making important academic decisions.
          </p>
          <p className="text-gray-500 italic">
            Afriproedu does not guarantee specific outcomes or success in any particular field or program based on these results.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
                      <div className="flex justify-center">
                        {submittingAnswers ? (
                          <button
                            disabled
                            className="bg-[#04B040] opacity-75 flex justify-center gap-2 items-center px-4 py-2 rounded-full"
                          >
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <h4 className="text-white">Submitting...</h4>
                          </button>
                        ) : (
                          <button 
                            onClick={() => {
                              submitAnswers().then((success) => {
                                if (success) {
                                  // Navigate to results page
                                  navigate('/psychometric-test/list-of-programs');
                                }
                              });
                            }}
                            className="bg-[#04B040] hover:bg-[#48B774] flex justify-center gap-2 items-center pl-3 pr-2 py-2 rounded-full"
                          >
                            <h4 className="text-white">Check Result</h4>
                            <img
                              src="/images/psycho/arrowRight.png"
                              className="w-7 h-7"
                              alt="arrow"
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end gap-7 mt-6">
                <button
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="border border-primary text-[#04B040] rounded-full bg-white shadow-sm hover:bg-gray-100 disabled:opacity-50 px-6 py-2"
                >
                  Previous
                </button>
                {currentStep < questionsGroupedBySubcategory.length ? (
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
                      "Next"
                    )}
                  </button>
                ) : null}
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