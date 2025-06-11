import React, { useState } from "react";

// Custom Accordion Components
interface AccordionProps {
  open: boolean;
  children: React.ReactNode;
  className?: string;
}

interface AccordionHeaderProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

interface AccordionBodyProps {
  children: React.ReactNode;
  className?: string;
}

const CustomAccordion: React.FC<AccordionProps> = ({ open, children, className = "" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

const CustomAccordionHeader: React.FC<AccordionHeaderProps> = ({ onClick, children, className = "" }) => {
  return (
    <button 
      onClick={onClick} 
      className={`w-full text-left p-4 flex justify-between items-center ${className}`}
    >
      <span>{children}</span>
      <svg 
        className="w-5 h-5 transform transition-transform duration-200" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
};

const CustomAccordionBody: React.FC<AccordionBodyProps> = ({ children, className = "" }) => {
  return (
    <div className={`p-4 pt-0 ${className}`}>
      {children}
    </div>
  );
};

function EasyGoEduFaq() {
    const [open, setOpen] = useState<number>(1);
  
    const handleOpen = (value: number) => {
      setOpen(open === value ? 0 : value);
    };

    const faqData = [
      {
        id: 1,
        question: "What is EASYGOEDU?",
        answer: "EASYGOEDU is an innovative online language program designed to help individuals learn the Finnish language from the comfort of their own homes. It offers convenient access to expert instruction and immersive learning experiences over a 9-month period."
      },
      {
        id: 2,
        question: "How does EASYGOEDU work?",
        answer: "EASYGOEDU provides 2 hours 15 minutes per day (Mondays, Tuesdays and Wednesdays) where participants can engage in interactive lessons and practice their Finnish language skills. The program covers various aspects of Finnish language and culture to ensure comprehensive learning."
      },
      {
        id: 3,
        question: "What are the benefits of EASYGOEDU?",
        answer: (
          <ol className="space-y-1 list-disc list-inside">
            <li>Study Finnish from anywhere with an internet connection.</li>
            <li>Learn from experienced instructors who specialize in teaching Finnish as a foreign language.</li>
            <li>Unlock the opportunity to live and study in Finland for free, with immediate work opportunities upon arrival.</li>
          </ol>
        )
      },
      {
        id: 4,
        question: "Who can participate in EASYGOEDU?",
        answer: "EASYGOEDU is open to individuals of all backgrounds and proficiency levels who are interested in learning the Finnish language. Whether you're a beginner or looking to improve your existing skills, EASYGOEDU welcomes you."
      },
      {
        id: 5,
        question: "What is the duration of the EASYGOEDU program?",
        answer: "The EASYGOEDU program spans over 9 months, allowing participants ample time to progress through the curriculum and achieve fluency in Finnish."
      },
      {
        id: 6,
        question: "How much does EASYGOEDU cost?",
        answer: "The cost of EASYGOEDU 5500€ (4 instalment i.e 1,375€ per month), with a one-time processing fee of 200€. This pricing structure makes the program affordable and accessible to all."
      },
      {
        id: 7,
        question: "Is there any financial assistance available for EASYGOEDU?",
        answer: "At this time, EASYGOEDU does not offer financial assistance or scholarships. However, the program's affordable pricing and potential for free study opportunities in Finland make it an attractive option for many individuals."
      },
      {
        id: 8,
        question: "What are the sessions like?",
        answer: "EASYGOEDU sessions are interactive and engaging, with a focus on practical language skills such as speaking, listening, reading, and writing. Participants will have the opportunity to interact with instructors and fellow learners in a supportive online environment."
      },
      {
        id: 9,
        question: "How can I enroll in EASYGOEDU?",
        answer: "To enroll in EASYGOEDU, you can take the first step right here on our website, and complete the online registration form. Once registered, you will receive further instructions on how to access the program and begin your Finnish language journey."
      },
      {
        id: 10,
        question: "What if I have more questions?",
        answer: "If you have any additional questions or concerns about EASYGOEDU, please don't hesitate to contact our customer support team. We're here to help you every step of the way on your language learning journey."
      }
    ];

    return (
        <section className="bg-[#FFFFFF] body-font font-poppins pt-10">
          <div className="mx-auto flex justify-center text-center">
            <p className="hidden md:block text-[#000000] max-w-lg md:text-3xl px-6 font-semibold text-center">
              Frequently Asked <span className="text-[#48B774]">Questions on EASYGOEDU</span>
            </p>
            <p className="block md:hidden text-[#000000] text-2xl px-6 font-semibold text-center">
              Frequently Asked <span className="text-[#48B774]"><br/>Questions on EASYGOEDU</span>
            </p>
          </div>
          
          <div className="flex justify-center max-w-screen-xl px-8 lg:px-14 pt-5 md:pt-16 pb-8 mx-auto">
            <div className="lg:mb-20 max-w-3xl">
              {faqData.map((faq) => (
                <CustomAccordion 
                  key={faq.id}
                  open={open === faq.id} 
                  className="px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg"
                >
                  <CustomAccordionHeader 
                    onClick={() => handleOpen(faq.id)} 
                    className="border border-white text-base font-medium text-[#170F49] hover:bg-gray-50 transition-colors duration-200"
                  >
                    {faq.question}
                  </CustomAccordionHeader>
                  {open === faq.id && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      {faq.answer}
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>
              ))}
            </div>
          </div>
        </section>
    );
}

export default EasyGoEduFaq;