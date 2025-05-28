import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../../../component/Navbar';

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

// Dummy data extracted from the design images
const DUMMY_QUESTIONS_DATA = [
  // Step 1: Personal Interests & Abilities
  {
    id: 1,
    subcategoryName: "Personal Interests",
    questions: [
      {
        id: 1,
        question: "What type of work brings you complete project's prefer to:",
        options: [
          "Work with information and data management",
          "Work in construction and building activities",
          "Collaborate with others in business and sales",
          "Collaborate with others in education and public"
        ]
      },
      {
        id: 2,
        question: "How would you describe when I am:",
        options: [
          "Working independently in a quiet space",
          "Collaborating and managing multiple tasks",
          "Leading discussions and training sessions",
          "Always looking to manage my work schedule and tasks"
        ]
      },
      {
        id: 3,
        question: "When learning a new skill, I prefer:",
        options: [
          "Reading detailed manuals or watching instructional videos",
          "Hands-on practice and experimentation",
          "Working with a mentor or teacher for guidance",
          "Online interactive tools or educational platforms"
        ]
      },
      {
        id: 4,
        question: "My ideal workplace would be:",
        options: [
          "A modern office with state-of-the-art technology",
          "A bustling environment with lots of interaction",
          "A flexible space where I can move around and change scenery",
          "A well-organized workspace that is comfortable and functional"
        ]
      },
      {
        id: 5,
        question: "When I come to deadlines, I generally:",
        options: [
          "Start early and plan everything out step by step",
          "Work steadily and methodically to stay on track",
          "Work in bursts of energy as deadlines approach",
          "Keep them in my mind and work consistently towards it"
        ]
      }
    ]
  },
  // Step 2: Career Preferences
  {
    id: 2,
    subcategoryName: "Career Preferences",
    questions: [
      {
        id: 6,
        question: "In my ideal career, I would most enjoy:",
        options: [
          "Solving complex problems and analyzing data patterns",
          "Creating and designing innovative products or services",
          "Working directly with people and helping them achieve goals",
          "Managing large projects and leading diverse teams"
        ]
      },
      {
        id: 7,
        question: "The work environment that motivates me most is:",
        options: [
          "Fast-paced and dynamic with new challenges daily",
          "Structured and organized with clear procedures and guidelines",
          "Collaborative with frequent team interactions and brainstorming",
          "Independent with flexibility to work at my own pace"
        ]
      },
      {
        id: 8,
        question: "When considering job opportunities, I prioritize:",
        options: [
          "High salary and comprehensive financial benefits package",
          "Work-life balance and flexible scheduling options",
          "Clear opportunities for advancement and professional growth",
          "Meaningful work that makes a positive difference in society"
        ]
      },
      {
        id: 9,
        question: "I feel most accomplished when:",
        options: [
          "I complete a complex technical project on time and within budget",
          "I help someone solve a difficult personal or professional problem",
          "I innovate or create something completely new and original",
          "I successfully lead a team to achieve a challenging common goal"
        ]
      },
      {
        id: 10,
        question: "My preferred method of receiving feedback is:",
        options: [
          "Detailed written reports with specific metrics and performance data",
          "Face-to-face discussions with immediate input and suggestions",
          "Regular scheduled check-ins with constructive developmental feedback",
          "Informal conversations during collaborative work sessions"
        ]
      }
    ]
  },
  // Step 3: Learning Style
  {
    id: 3,
    subcategoryName: "Learning Style",
    questions: [
      {
        id: 11,
        question: "I learn best when information is presented:",
        options: [
          "Visually through detailed charts, diagrams, and informative images",
          "Auditorily through engaging lectures and group discussions",
          "Kinesthetically through hands-on activities and practical exercises",
          "Through comprehensive reading and well-structured written materials"
        ]
      },
      {
        id: 12,
        question: "When studying for an important exam, I prefer to:",
        options: [
          "Create detailed study guides and comprehensive outlines",
          "Form study groups and engage in collaborative discussions",
          "Practice problems and work through real-world applications",
          "Review materials multiple times independently and quietly"
        ]
      },
      {
        id: 13,
        question: "I retain information most effectively when I:",
        options: [
          "Take detailed notes while actively listening to presentations",
          "Participate actively in discussions and ask clarifying questions",
          "Apply concepts immediately through practical exercises and projects",
          "Reflect quietly on the material and make personal connections"
        ]
      },
      {
        id: 14,
        question: "My preferred learning pace is:",
        options: [
          "Fast-paced with quick transitions between different topics",
          "Moderate pace with adequate time for questions and clarification",
          "Slow and thorough with deep exploration of complex concepts",
          "Variable pace depending on the complexity and familiarity of material"
        ]
      },
      {
        id: 15,
        question: "When learning new technology or software, I:",
        options: [
          "Read the comprehensive manual thoroughly before starting",
          "Jump in immediately and learn through trial and error",
          "Seek guidance and mentorship from experienced users",
          "Watch detailed tutorials and follow step-by-step instructions"
        ]
      }
    ]
  },
  // Step 4: Work Environment
  {
    id: 4,
    subcategoryName: "Work Environment",
    questions: [
      {
        id: 16,
        question: "The ideal team size for me to work most effectively is:",
        options: [
          "Working independently alone or with minimal direct supervision",
          "Small intimate team of 3-5 people with close collaboration",
          "Medium-sized team of 6-10 people with diverse skill sets",
          "Large dynamic team with extensive expertise and resources"
        ]
      },
      {
        id: 17,
        question: "I perform at my best in an environment that is:",
        options: [
          "Quiet and completely distraction-free for focused concentration",
          "Moderately active with some background activity and energy",
          "Dynamic and energetic with lots of interaction and collaboration",
          "Flexible with multiple options to change settings as needed"
        ]
      },
      {
        id: 18,
        question: "My preferred work schedule would ideally be:",
        options: [
          "Traditional 9-5 schedule with consistent daily routine and structure",
          "Flexible hours with designated core collaboration times",
          "Project-based schedule with varying timelines and deadlines",
          "Part-time or freelance arrangement with maximum flexibility"
        ]
      },
      {
        id: 19,
        question: "When facing significant workplace challenges, I prefer to:",
        options: [
          "Analyze the problem thoroughly and independently before seeking help",
          "Immediately collaborate with colleagues to brainstorm solutions",
          "Research established best practices and proven methodologies",
          "Experiment with creative and innovative problem-solving approaches"
        ]
      },
      {
        id: 20,
        question: "The type of workplace culture where I thrive most is:",
        options: [
          "Competitive and results-driven with clear performance metrics",
          "Collaborative and team-oriented with shared goals and values",
          "Innovative and risk-taking with encouragement for creative thinking",
          "Supportive and nurturing with emphasis on personal development"
        ]
      }
    ]
  },
  // Step 5: Skills Assessment
  {
    id: 5,
    subcategoryName: "Skills Assessment",
    questions: [
      {
        id: 21,
        question: "My strongest and most developed skill area is:",
        options: [
          "Analytical thinking and systematic problem-solving approaches",
          "Communication and strong interpersonal relationship building",
          "Creative thinking and innovative solution development",
          "Organization and comprehensive project management coordination"
        ]
      },
      {
        id: 22,
        question: "When working on complex multi-faceted projects, I excel at:",
        options: [
          "Breaking down complex problems into manageable, actionable parts",
          "Coordinating team efforts and maintaining clear communication channels",
          "Finding creative and innovative solutions to unexpected obstacles",
          "Maintaining detailed schedules and consistently meeting important deadlines"
        ]
      },
      {
        id: 23,
        question: "I am most confident and skilled in my ability to:",
        options: [
          "Analyze complex data sets and identify meaningful patterns",
          "Persuade and positively influence others toward common goals",
          "Generate original ideas and develop innovative concepts",
          "Plan comprehensive strategies and execute them effectively"
        ]
      },
      {
        id: 24,
        question: "Others frequently seek my assistance and expertise with:",
        options: [
          "Technical problems and systematic troubleshooting processes",
          "Conflict resolution and effective mediation between parties",
          "Creative projects and collaborative brainstorming sessions",
          "Planning and organizing complex tasks and detailed procedures"
        ]
      },
      {
        id: 25,
        question: "I feel most energized and motivated when I am:",
        options: [
          "Solving challenging intellectual puzzles and complex analytical problems",
          "Connecting with people and building meaningful professional relationships",
          "Creating something completely new, original, and innovative",
          "Organizing and optimizing existing systems or developing new processes"
        ]
      }
    ]
  }
];

const PsychoBachelorQuestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  
  const [questionsGroupedBySubcategory, setQuestionsGroupedBySubcategory] = useState<SubcategoryQuestions[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, SelectedAnswer>>({});
  
  // State to store the program results
  const [programResults, setProgramResults] = useState<any>(null);
  const [submittingAnswers, setSubmittingAnswers] = useState<boolean>(false);
  const [submissionComplete, setSubmissionComplete] = useState<boolean>(false);
  
  // Load dummy data function
  const loadDummyData = () => {
    setLoadingData(true);
    
    // Simulate loading time
    setTimeout(() => {
      const groupedQuestions = DUMMY_QUESTIONS_DATA.map((subcategoryData, index) => {
        const subcategoryQuestions = subcategoryData.questions.map((q, qIndex) => ({
          id: qIndex + 1,
          question: q.question,
          options: q.options,
          questionId: `question-${q.id}`,
          optionIds: q.options.map((_, optIndex) => `option-${q.id}-${optIndex}`)
        }));
        
        return {
          id: index + 1,
          name: subcategoryData.subcategoryName,
          subcategoryId: `subcat-${subcategoryData.id}`,
          questions: subcategoryQuestions
        };
      });
      
      setQuestionsGroupedBySubcategory(groupedQuestions);
      console.log("Dummy questions loaded:", groupedQuestions);
      setLoadingData(false);
    }, 1000);
  };

  useEffect(() => {
    // Always load dummy data
    loadDummyData();
  }, []);

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

  console.log(questionsGroupedBySubcategory)
  
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
      
      // Simulate successful submission with dummy results
      console.log("Dummy data submission - simulating success");
      
      const dummyResults = [
        { 
          id: 1, 
          name: "Computer Science", 
          score: 85, 
          description: "Perfect match for analytical and technical thinking. Your responses indicate strong problem-solving abilities and preference for systematic approaches." 
        },
        { 
          id: 2, 
          name: "Business Administration", 
          score: 78, 
          description: "Excellent fit for leadership and management skills. You show strong organizational abilities and team coordination preferences." 
        },
        { 
          id: 3, 
          name: "Psychology", 
          score: 72, 
          description: "Good match for interpersonal skills and helping others. Your responses suggest strong empathy and communication abilities." 
        },
        { 
          id: 4, 
          name: "Engineering", 
          score: 69, 
          description: "Solid alignment with practical problem-solving and systematic thinking approaches." 
        },
        { 
          id: 5, 
          name: "Creative Arts", 
          score: 65, 
          description: "Moderate fit for creative and innovative thinking. Shows potential for artistic and design-oriented fields." 
        }
      ];
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      localStorage.setItem('psychometricResults', JSON.stringify(dummyResults));
      setProgramResults(dummyResults);
      setSubmissionComplete(true);
      toast.success("Your answers have been submitted successfully!");
      return true;
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