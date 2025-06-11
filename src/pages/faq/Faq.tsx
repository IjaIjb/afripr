import React, { Fragment, useState } from "react";
// import { AdminApis } from "../apis/adminApi";
import { AxiosResponse } from "axios";

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
  isOpen?: boolean;
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

const CustomAccordionHeader: React.FC<AccordionHeaderProps> = ({ onClick, children, className = "", isOpen = false }) => {
  return (
    <button 
      onClick={onClick} 
      className={`w-full text-left p-4 flex justify-between items-center ${className}`}
    >
      <span>{children}</span>
      <svg 
        className={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
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
    <div className={`p-4 pt-0 transition-all duration-300 ease-in-out ${className}`}>
      {children}
    </div>
  );
};

function Faq() {
  const [open, setOpen] = useState(1);
  const [openTestTab, setOpenTestTab] = useState(1);
  const [faqLists, setFaqList] = React.useState<any>([]);
  const [searchText, setSearchText] = React.useState("");

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  // Function to sanitize HTML content
  const sanitizeHTML = (html: any) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  React.useEffect(() => {
    const query: any = {
      search: searchText,
    };
    // AdminApis.getAllFaq()
    //   .then((response: AxiosResponse<any>) => {
    //     if (response?.data) {
    //       setFaqList(response?.data?.data);
    //     }
    //   })
    //   .catch(function (error) {
    //     // handle error
    //   });
  }, []);

  // Define categories explicitly
  const categories = [
    "general",
    "payment",
    "english pathway",
    "finish pathway",
    "before application",
    "after application",
  ];

  // Filter FAQs based on the selected category
  const filteredFaqs = faqLists.filter(
    (faq: any) => faq.faq_category.toLowerCase() === openTestTab
  );

  return (
    <>
      <section className="bg-[#FFFFFF] body-font pt-10 md:pt-20 font-poppins">
        <div className="flex flex-col md:flex-row md:justify-between md:max-w-screen-xl px-8 lg:px-24 pb-8 mx-auto lg:gap-20">
          <div className="my-6 lg:mt-0 lg:pl-24 flex flex-row lg:flex-col max-w-[90vw] overflow-auto">
            <div
              onClick={() => setOpenTestTab(1)}
              className={` ${
                openTestTab === 1 ? "bg-[#E4FFEF] text-[#1DB459]" : ""
              } pl-4 pr-4 lg:pr-16 lg:py-3.5 py-2 mb-4 text[#6F6C90] text-sm rounded-lg cursor-pointer`}
            >
              General
            </div>
            <div
              onClick={() => setOpenTestTab(2)}
              className={` ${
                openTestTab === 2 ? "bg-[#E4FFEF] text-[#1DB459]" : ""
              } pl-4 pr-4 lg:pr-16 lg:py-3.5 py-2 mb-4 text[#6F6C90] text-sm rounded-lg cursor-pointer`}
            >
              Payment
            </div>
            <div
              onClick={() => setOpenTestTab(3)}
              className={` ${
                openTestTab === 3 ? "bg-[#E4FFEF] text-[#1DB459]" : ""
              } pl-4 pr-4 lg:pr-16 lg:py-3.5 py-2 mb-4 text[#6F6C90] text-sm rounded-lg cursor-pointer`}
            >
              English Pathway
            </div>
            <div
              onClick={() => setOpenTestTab(4)}
              className={` ${
                openTestTab === 4 ? "bg-[#E4FFEF] text-[#1DB459]" : ""
              } pl-4 pr-4 lg:pr-16 lg:py-3.5 py-2 mb-4 text[#6F6C90] rounded-lg text-sm cursor-pointer`}
            >
              Finnish Pathway
            </div>

            <div
              onClick={() => setOpenTestTab(5)}
              className={` ${
                openTestTab === 5 ? "bg-[#E4FFEF] text-[#1DB459]" : ""
              } pl-4 pr-4 lg:pr-16 lg:py-3.5 py-2 mb-4 text[#6F6C90] rounded-lg text-sm cursor-pointer`}
            >
              Before Application
            </div>
            <div
              onClick={() => setOpenTestTab(6)}
              className={` ${
                openTestTab === 6 ? "bg-[#E4FFEF] text-[#1DB459]" : ""
              } pl-4 pr-4 lg:pr-16 lg:py-3.5 py-2 mb-4 text[#6F6C90] rounded-lg text-sm cursor-pointer`}
            >
              After Application
            </div>
          </div>

          <div className=" lg:mb-20 max-w-xl">
            {/* GENERAL TAB */}
            <div className={openTestTab === 1 ? "block" : "hidden"}>
              <Fragment>
                <CustomAccordion
                  open={open === 1}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(1)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 1}
                  >
                    Can parents opt to arrange accommodation for their Children?
                  </CustomAccordionHeader>
                  {open === 1 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes. It is recommended to consider the distance from the
                      accommodation to the school to avoid too long travel to and
                      from the school.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 2}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 2}
                  >
                    What are the processes we offer?
                  </CustomAccordionHeader>
                  {open === 2 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      <ol className="space-y-1 list-disc list-inside">
                        <li>Access to our expert language teachers</li>
                        <li>Access to our Finnish Language certificate</li>
                        <li>Access to apply to our partner schools in Finland</li>
                        <li>Access to our language materials</li>
                        <li>
                          Access to our learning portals and entire language
                          learning journey.
                        </li>
                        <li>
                          Access to our visa and documentation processing and
                          support
                        </li>
                        <li>
                          Access to accommodation support and some necessities
                          needed on or before arrival to Finland
                        </li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 3}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(3)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 3}
                  >
                    What are the products we offer ( Long and Short)
                  </CustomAccordionHeader>
                  {open === 3 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      <div className="font-semibold">We have two programs:</div>
                      <span className="font-semibold">Short program:</span> You
                      will study the Finnish language in your home country for two
                      months before travelling to Finland, where you will continue
                      your studies for an additional four months. During this
                      time, accommodation and lunch will be provided. Following
                      the four-month program, you will underg o interviews with
                      our partner schools in Finland. Upon acceptance, you will
                      receive a school acceptance letter, which is a required
                      document for obtaining a residence permit in Finland.
                      <div>
                        <span className="font-semibold">Long program:</span> You
                        will undergo an extensive program to learn the Finnish
                        language in your home country for a duration of 8 to 10
                        months before embarking on your journey to Finland. This
                        program involves online Finnish language lessons conducted
                        by our experienced teachers, alongside fellow students
                        from various parts of the globe. The entire learning
                        process takes place in a virtual classroom setting. Upon
                        successful completion of the 8-month program, you will
                        advance to the next stage, which involves applying for an
                        interview with our affiliated schools. Upon acceptance,
                        you will receive an official acceptance letter, a crucial
                        document required for the processing of your residence
                        permit in Finland.
                      </div>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 4}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(4)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 4}
                  >
                    Can I travel to Finland with my Family?
                  </CustomAccordionHeader>
                  {open === 4 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes, you can travel with your family. We have the family
                      package option, and our service charge is completely free
                      for children at the age of 10 and below.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 5}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(5)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 5}
                  >
                    Can an individual bring a dependant on a student visa?
                  </CustomAccordionHeader>
                  {open === 5 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes, you have the option to bring a dependent with you while
                      on a study visa. The eligibility is based on the specific
                      dependent and their age.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 6}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(6)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 6}
                  >
                    Are the students allowed to work part-time?
                  </CustomAccordionHeader>
                  {open === 6 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes, in Finland, students are allowed to work part-time from
                      the age of 15 years. This arrangement helps to cover most
                      (if not all) of the living costs. Students may work a
                      maximum of 25 hours per week during school time and a
                      maximum of 40 hours per week during the summer holiday. Many
                      Finnish students have had part-time jobs to experience the
                      work environment since high school.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 7}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(7)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 7}
                  >
                    If the students are underage, do they need to be accompanied
                    by a guardian while traveling to Finland?
                  </CustomAccordionHeader>
                  {open === 7 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      Not necessarily. While all students have the option to
                      travel independently, those under 15 years old may have the
                      opportunity to utilize a minor-escort service provided by
                      the Airline. This service availability and age restrictions
                      vary depending on the airline, such as the case with Qatar
                      Airways. During our pilot year, all students aged 14-17 flew
                      unaccompanied, although parents could still arrange for an
                      escort if desired.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 8}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(8)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 8}
                  >
                    Is there any other expense to be covered by parents?
                  </CustomAccordionHeader>
                  {open === 8 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      Yes, after successful acceptance from school: -
                      <ol className="space-y-1 list-disc list-inside">
                        <li> Visa Application Fee.</li>
                        <li> Air ticket to Finland.</li>
                        <li>
                          {" "}
                          International insurance – EUR 376 for 1st Year and goes
                          down to EUR 310 from 2nd Year.
                        </li>
                        <li>
                          {" "}
                          Student Residence Permit application fee (online) – EUR
                          240 for 1st Year, EUR 180 from 2nd Year.
                        </li>
                        <li>
                          {" "}
                          Residence Permit documentation fee (notarize etc.) – EUR
                          100.
                        </li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 46}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(46)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 46}
                  >
                    What are the application requirements for universities in
                    Finland?
                  </CustomAccordionHeader>
                  {open === 46 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      While different for each university, here are some general
                      requirements for every Finnish university:
                      <ol className="space-y-1 list-disc list-inside">
                        <li>High school diploma or equivalent</li>
                        <li>Standardized test scores (SAT)</li>
                        <li>English language proficiency (TOEFL)</li>
                        <li>Motivation letter and recommendation letters</li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 47}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(47)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 47}
                  >
                    What are the scholarship opportunities available for
                    international students in Finland?
                  </CustomAccordionHeader>
                  {open === 47 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Several scholarship opportunities are available for
                      international students studying in Finland, such as:
                      <ol className="space-y-1 list-disc list-inside">
                        <li>
                          Finnish Government Scholarships: Offered to outstanding
                          international students pursuing postgraduate studies in
                          specific fields.
                        </li>
                        <li>
                          Erasmus+ Scholarships: Provides funding for exchange
                          students from European universities.
                        </li>
                        <li>
                          University-specific scholarships: Many universities
                          offer their scholarships for international students.
                        </li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 48}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(48)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 48}
                  >
                    What is the cost of living and studying in Finland?
                  </CustomAccordionHeader>
                  {open === 48 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Finland is generally more affordable compared to other
                      Western European countries. Given below are the cost of
                      living and studying in the country:
                      <ol className="space-y-1 list-disc list-inside">
                        <li>
                          Tuition fees: Public universities in Finland offer free
                          tuition for EU/EEA students, while international
                          students pay tuition fees ranging from €5,000 to
                          €20,000/ year.
                        </li>
                        <li>
                          Living expenses: Accommodation, food, and transportation
                          costs can range from €500 to €800/month.
                        </li>
                      </ol>
                      Many universities offer student housing options and
                      financial aid resources to help manage expenses.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 49}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(49)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 49}
                  >
                    When should I apply for funding?
                  </CustomAccordionHeader>
                  {open === 49 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      You can request AfriPay funding if you've applied to, been
                      accepted at, or are currently enrolled in an eligible
                      school. But we can't finalize your application until you've
                      been accepted to your program. You can apply for funding up
                      to 12 months before your program starts. Our loans don't
                      cover students with more than two years remaining in their
                      program. If this is you, check out our scholarships or
                      contact your school's financial aid office
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 50}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(50)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 50}
                  >
                    How much can I borrow?
                  </CustomAccordionHeader>
                  {open === 50 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      AfriPay offers loans between US$2,001 and US$50,000 per
                      academic period, with a lifetime limit of US$100,000. For
                      example, a student might borrow US$50,000 in their fall
                      semester and another US$50,000 in their spring semester.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 51}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(51)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 51}
                  >
                    What are AfriPay's interest rates?
                  </CustomAccordionHeader>
                  {open === 51 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Our interest rates are fixed, which means they won't change
                      as market interest rates change. Our current rates are
                      between 7.99% (8.89% APR¹) and 13.99% (14.98% APR¹).
                      Although we don't negotiate interest rates, we do offer
                      three interest rate discounts to reduce your rate by up to
                      1.50%. You'll get a 0.50% discount when you enroll in
                      autopay; another 0.50% discount when you make six
                      consecutive, on-time payments using autopay; and a final
                      0.50% deduction when you start a full-time, salaried job
                      after graduation!
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 52}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(52)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 52}
                  >
                    What else can I expect from an AfriPay loan?
                  </CustomAccordionHeader>
                  {open === 52 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      These are some top highlights when funding your education
                      with us:
                      <ol className="space-y-1 list-disc list-inside">
                        <li>
                          No cosigner or collateral required
                        </li>
                        <li>
                          Fixed interest rates with up to 1.50% in discounts
                          (details above)
                        </li>
                        <li>
                          Build your U.S. credit history with on-time payments
                        </li>
                        <li>
                          No fees to apply, free visa and career support to
                          customers
                        </li>
                        <li>100% digital application process</li>
                        <li>All loans are in USD</li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 53}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(53)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 53}
                  >
                    Do I need a credit history or cosigner to apply?
                  </CustomAccordionHeader>
                  {open === 53 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      AfriPay doesn't require a credit history or cosigner to
                      apply because we make loan decisions based on your future
                      potential. If you do have a credit history, we'll review it
                      looking for things like late payments and collections.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 54}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(54)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 54}
                  >
                    What are the repayment terms?
                  </CustomAccordionHeader>
                  {open === 54 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      <b>
                        {" "}
                        While you're in school (and six months after you
                        graduate),
                      </b>{" "}
                      you're only required to make interest payments each month.
                      That way you can focus on your studies - while building
                      credit and getting used to making on-time payments!
                      <br />
                      <b>Six months after you graduate,</b> your 10-year repayment
                      term begins. At this point, you'll start making full
                      principal and interest payments each month until your entire
                      balance is paid off.
                      <br />
                      <br />
                      There's no prepayment penalty if you pay off part or all of
                      your loan ahead of time! Just contact your servicer to
                      request the correct payoff amount.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 55}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(55)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 55}
                  >
                    Does AfriPay offer visa support?
                  </CustomAccordionHeader>
                  {open === 55 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes! AfriPay offers free support letters to all our approved
                      students to assist their visa process. For students studying
                      in the U.S., our support letters will help you receive your
                      I-20 from your school and the visa application afterwards.
                      For those studying in Canada, our support letter can help
                      prove that you have enough funds to support your education
                      to both your school and Canadian government.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 56}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(56)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 56}
                  >
                    Which U.S. and Canadian schools are eligible?
                  </CustomAccordionHeader>
                  {open === 56 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      AfriPay supports 400+ schools in the U.S. and Canada! Check
                      out the full list on our website, or check your eligibility
                      to see if your school's eligible. Schools in other countries
                      are not currently on our school list, and you'll need to
                      reside in the country of your school while completing your
                      program
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 57}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(57)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 57}
                  >
                    What documents and personal information do I need to apply?
                  </CustomAccordionHeader>
                  {open === 57 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      You'll need your passport or other national ID to submit
                      your application. You'll also need to submit information
                      about your program and how you'll fund it in addition to an
                      AfriPay loan. Once you submit your application, you'll
                      upload additional documents to your AfriPay account. We're
                      happy to help if you have any issues uploading your
                      documents.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 58}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(58)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 58}
                  >
                    Why was my AfriPay application denied?
                  </CustomAccordionHeader>
                  {open === 58 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      We're sorry we couldn't approve your application. Please
                      know that AfriPay reviews each application carefully before
                      making a loan decision. The specific reason for decline
                      would have been communicated to you through your registered
                      email with the subject line "We are sorry, your loan
                      application was not approved". If you need additional
                      information, please reach out to your dedicated relationship
                      manager. To start a new loan application, you can easily
                      begin the process online.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 59}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(59)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 59}
                  >
                    How do I Know if I'm Eligible?
                  </CustomAccordionHeader>
                  {open === 59 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      <ol className="space-y-1 list-disc list-inside">
                        <li>
                          You want to study at a school & programme we support
                        </li>
                        <li>You're from a country or state we support</li>
                        <li>You plan to study abroad (UK residents excepted)</li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 60}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(60)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 60}
                  >
                    How do I Start my application?
                  </CustomAccordionHeader>
                  {open === 60 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      <ol className="space-y-1 list-disc list-inside">
                        <li>Receive an instant provisional offer</li>
                        <li>
                          You can complete the entire process online & get a
                          conditional offer within 5 business days!
                        </li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 61}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(61)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 61}
                  >
                    How much can I borrow?
                  </CustomAccordionHeader>
                  {open === 61 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      <ol className="space-y-1 list-disc list-inside">
                        <li>
                          {" "}
                          Depending on your programme, you may request up to the
                          full cost of tuition
                        </li>
                        <li>
                          {" "}
                          For US & some other programmes you may also request for
                          living expenses
                        </li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 62}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(62)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 62}
                  >
                    What documents are required?
                  </CustomAccordionHeader>
                  {open === 62 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      <ol className="space-y-1 list-disc list-inside">
                        <li> Proof of ID & proof of address</li>
                        <li> Proof of admission</li>
                        <li> Proof of income & savings (if applicable)</li>
                        <li> Proof of savings</li>
                        <li> Credit Report</li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 63}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(63)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 63}
                  >
                    What is the interest rate?
                  </CustomAccordionHeader>
                  {open === 63 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      <ol className="space-y-1 list-disc list-inside">
                        <li>
                          {" "}
                          Our variable rates are comprised of an individual fixed
                          margin rate plus a quarterly averaged US SOFR base rate
                        </li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 64}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(64)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 64}
                  >
                    Can my loan be used as proof of funds?
                  </CustomAccordionHeader>
                  {open === 64 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      <ol className="space-y-1 list-disc list-inside">
                        <li>
                          {" "}
                          Yes! Our loan confirmation letter is valid proof of
                          funds during your visa application
                        </li>
                        <li>
                          {" "}
                          We do not charge any fees for your loan
                          confirmation/sanction letter
                        </li>
                      </ol>
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>
              </Fragment>
            </div>

            {/* PAYMENT TAB */}
            <div className={openTestTab === 2 ? "block" : "hidden"}>
              <Fragment>
                <CustomAccordion
                  open={open === 9}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(9)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 9}
                  >
                    What are the Payment plan possibilities?
                  </CustomAccordionHeader>
                  {open === 9 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      You can make payment of the service charges at once or 5
                      instalments
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 10}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(10)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 10}
                  >
                    What are the Payment Terms and Conditions ?
                  </CustomAccordionHeader>
                  {open === 10 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      You must pay at least the first instalment of the service
                      charge to be enrolled to the Finnish program and begin
                      classes -If you decide to opt for payment by instalments,
                      you must ensure not to default on making payments as at when
                      due or you will be removed from the class till you can pay
                      your next instalment.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 11}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(11)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 11}
                  >
                    In what Currency can I make payment?
                  </CustomAccordionHeader>
                  {open === 11 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      You can make payment in Euro, Dollars . For Nigerian
                      citizens who want to pay into our local bank accounts must
                      ensure they pay the updated rates to naira.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>
              </Fragment>
            </div>

            {/* ENGLISH PATHWAY TAB */}
            <div className={openTestTab === 3 ? "block" : "hidden"}>
              <Fragment>
                <CustomAccordion
                  open={open === 12}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(12)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 12}
                  >
                    Do I need to be proficient in Finnish or take the IELTS exam
                    to enroll in this program?
                  </CustomAccordionHeader>
                  {open === 12 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      No, you do not need to be proficient in Finnish or take the
                      IELTS exam to join this program.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 13}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(13)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 13}
                  >
                    How does the admission process work for this program?
                  </CustomAccordionHeader>
                  {open === 13 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      To gain admission, you'll need to pass a simple English
                      proficiency test and pay tuition fees.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 14}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(14)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 14}
                  >
                    Can I bring my family with me while studying in Finland?
                  </CustomAccordionHeader>
                  {open === 14 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes, you have the option to bring your family with you under
                      this program as long as you are able to provide their proof
                      of funds which covers their living expenses in Finland.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 15}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(15)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 15}
                  >
                    Is there a job placement guarantee for Nursing students in
                    Finland?
                  </CustomAccordionHeader>
                  {open === 15 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes, Nursing students have a guaranteed practical work
                      placement opportunity. This means you get to do an
                      internship for a period of time and upon successful
                      completion of your internship program, you will get a job
                      nut this depends on your attitude and devotion to doing your
                      internship very well.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 16}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(16)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 16}
                  >
                    Can I work while studying Nursing in Finland?
                  </CustomAccordionHeader>
                  {open === 16 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes, you can work and study simultaneously. By law in
                      Finland, students are allowed to work 30 hours per week.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 17}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(17)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 17}
                  >
                    How long is the nursing program in Finland?
                  </CustomAccordionHeader>
                  {open === 17 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      The English language Nursing program is a two years program.
                      However the Finnish language Nursing is a 3 years program.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 18}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(18)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 18}
                  >
                    What is the process for obtaining a residence permit after
                    completing the program?
                  </CustomAccordionHeader>
                  {open === 18 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      You can apply for a residence permit after finishing your
                      studies.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 19}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(19)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 19}
                  >
                    How are the tuition fees paid?
                  </CustomAccordionHeader>
                  {open === 19 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      The first year's fees are paid in full, while the
                      second-year fees can be paid in 8 instalments.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 20}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(20)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 20}
                  >
                    What is the exam assignment?
                  </CustomAccordionHeader>
                  {open === 20 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      The exam assesses your understanding of simple English
                      reading and comprehension, primary school-level mathematics.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 21}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(21)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 21}
                  >
                    Is the service fee of $100 for the exam?
                  </CustomAccordionHeader>
                  {open === 21 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      The service fee is not for the exam, it covers your visa
                      application process, documentation and school application.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 22}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(22)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 22}
                  >
                    Do I need prior Nursing education to apply for this program?
                  </CustomAccordionHeader>
                  {open === 22 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      No, prior Nursing education is not required to apply.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 23}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(23)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 23}
                  >
                    What is the registration process, and is there a fee?
                  </CustomAccordionHeader>
                  {open === 23 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      To register, you need to pay a service charge of $100. Once
                      paid, your spot is guaranteed.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>
              </Fragment>
            </div>

            {/* FINNISH PATHWAY TAB */}
            <div className={openTestTab === 4 ? "block" : "hidden"}>
              <Fragment>
                <CustomAccordion
                  open={open === 24}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(24)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 24}
                  >
                    Can one work while studying the Vocational program?
                  </CustomAccordionHeader>
                  {open === 24 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Students coming from outside of Finland with a student
                      residence permit are allowed to work part-time for up to 30
                      hours per week at most. You also get an average salary
                      between 10€- 11.30€/hr.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 25}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(25)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 25}
                  >
                    Can one work immediately after finishing the Vocational
                    program?
                  </CustomAccordionHeader>
                  {open === 25 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes, you can start working immediately once you are done
                      with your vocational program. However this is determined by
                      companies you applied to but your chances of getting a job
                      is very high because of your studies in Finnish language.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 26}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(26)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 26}
                  >
                    Will an individual still enjoy free tuition after he/she is
                    done with the Vocational program and decides to further
                    his/her studies?
                  </CustomAccordionHeader>
                  {open === 26 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes, you will still enjoy free tuition after you finish with
                      the Vocational program and decide to further your studies.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 27}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(27)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 27}
                  >
                    What happens if a student doesn&#39;t attend some language
                    classes during the week? Is there any way to gain access to
                    recordings?
                  </CustomAccordionHeader>
                  {open === 27 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Yes, there are recordings. Or they can take the weekly
                      module for the missed classes again next week or later. We
                      are teaching the same 8 modules in a running cycle, so even
                      if a student misses some lessons, they will be taught again
                      soon.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 28}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(28)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 28}
                  >
                    What is the duration of the Finnish language course?
                  </CustomAccordionHeader>
                  {open === 28 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      There are a total of four (4) levels in the course and a
                      student must finish all 4 levels. Fastest that students can
                      complete the WHOLE program is 8 months (6 months to achieve
                      a high enough level to apply to a school and residence
                      permit). No maximum duration. On average students will study
                      between 8-18 months with us.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 29}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(29)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 29}
                  >
                    What happens if a student fails exams at the end of any
                    level?
                  </CustomAccordionHeader>
                  {open === 29 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      A student can repeat an exam as many times as possible until
                      he/she passes. The first repeat (retake) will be free of
                      charge but will pay 50.00 Euro for each consecutive repeat.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 30}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(30)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 30}
                  >
                    Can you please give some details on how the weekly language
                    classes are conducted?
                  </CustomAccordionHeader>
                  {open === 30 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      We have 5 lessons per week (Mon-Fri), 75minutes per lesson.
                      Monday and Tuesday are very important days and Friday is
                      about speaking. Each week follows a module/theme and each
                      day within a week has its own goal for learning. The classes
                      are potentially scheduled to start around 12:00 PM WAT ,
                      1:30 PM WAT or 3:30 PM WAT ( For later time you can contact
                      our customer service to discuss ) but students can either
                      join live classes and choose which days of the week they
                      want to attend or watch recordings.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 31}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(31)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 31}
                  >
                    Is the Finnish language self-taught online?
                  </CustomAccordionHeader>
                  {open === 31 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      No, you will be under the supervision and also the teachings
                      of Finnish language expert teachers. You be learning with
                      other students as well, possibly other parts of the world.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 42}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(42)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 42}
                  >
                    Do I need to know Finnish to study at a vocational school in
                    Finland?
                  </CustomAccordionHeader>
                  {open === 42 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      Many programs are offered in English, but mastering Finnish
                      opens doors to more options and enhances your integration.
                      Check specific program requirements and consider preparatory
                      courses if needed.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 43}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(43)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 43}
                  >
                    Can I work while studying at a vocational school?
                  </CustomAccordionHeader>
                  {open === 43 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      Absolutely! Part-time work is encouraged and often
                      integrated into programs through internships or practical
                      training. This valuable experience strengthens your resume
                      and career prospects.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 44}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(44)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 44}
                  >
                    What financial aid options are available for international
                    students?
                  </CustomAccordionHeader>
                  {open === 44 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      Scholarships, grants, and student loans are given by Finnish
                      institutions and organizations like Edufi. Research options
                      early and explore possibilities based on your chosen program
                      and background.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 45}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(45)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 45}
                  >
                    What are the career opportunities after graduating from a
                    Finnish vocational school?
                  </CustomAccordionHeader>
                  {open === 45 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      Finland boasts a high employment rate for vocational
                      graduates. Your acquired skills are highly sought-after,
                      paving the way for immediate job entry, further studies, or
                      even entrepreneurship in diverse fields.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>
              </Fragment>
            </div>

            {/* BEFORE APPLICATION TAB */}
            <div className={openTestTab === 5 ? "block" : "hidden"}>
              <Fragment>
                <CustomAccordion
                  open={open === 32}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(32)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 32}
                  >
                    At what stage/point can a student apply to join high school
                    in Finland?
                  </CustomAccordionHeader>
                  {open === 32 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      Between February and Mid-March. A student must have
                      completed three (3) levels of language course by March then
                      apply for high school. This is the general intake, but when
                      some schools don&#39;t have enough applications, they will
                      keep open the rolling intake all year round for the students
                      to apply. (Rolling intake opens around May).
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 33}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(33)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 33}
                  >
                    At what stage/point can a student apply to vocational school
                    in Finland?
                  </CustomAccordionHeader>
                  {open === 33 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      The intake for the vocational school is all-round the year.
                      This means once you are done with your language course. At
                      the 6 th month (3 rd level) you can begin applying to
                      partner school for entrance exam unlike the high school
                      which there are rolling intake between February and Mid-
                      March then May and Mid-June After acceptance to join high
                      school/Vocational School, student will continue with level
                      four (4) of the language course while applying for residence
                      permit. Level 4 is mainly to review the language and to help
                      students better understand the environment, culture, and way
                      of life in Finland. FF program will assist on the
                      application.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 34}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(34)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 34}
                  >
                    Is the program paying for the living costs of the students
                    while in Finland?
                  </CustomAccordionHeader>
                  {open === 34 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      No, parents/guardians are responsible to pay for the living
                      costs. According to the Finnish immigration department,
                      student's living costs also known as Proof OF Funds
                      (accommodation, meals, and transport) is estimated at EUR
                      6,720 per year. However, there are few schools that provide
                      opportunity of free accommodation in school year or host
                      family.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 35}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(35)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 35}
                  >
                    What is the monthly rent range for student apartments?
                  </CustomAccordionHeader>
                  {open === 35 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      Free to EUR 285 per month. On average most of schools range
                      from EUR 180 to 220 per month.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 36}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(36)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 36}
                  >
                    Is there a possibility that a Finnish School might not
                    accept a student, even though he/she has done and passed the
                    Language Exams?
                  </CustomAccordionHeader>
                  {open === 36 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      Students can apply to up to 7 schools; therefore, it is VERY
                      UNLIKELY that they wouldn&#39;t get into any of them. In
                      case a student would not get into any school that they wish,
                      the students can continue applying for the rolling intake
                      (see question no. 12 for similar information).
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>
              </Fragment>
            </div>

            {/* AFTER APPLICATION TAB */}
            <div className={openTestTab === 6 ? "block" : "hidden"}>
              <Fragment>
                <CustomAccordion
                  open={open === 37}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(37)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 37}
                  >
                    Can a student learn Finnish language course through other
                    channels then do exams with the program?
                  </CustomAccordionHeader>
                  {open === 37 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      No. Finest Future Finnish Language Program has its own
                      unique course that a student must go through before taking
                      the exams that are also prepared according to the program.
                      Besides language training, we also combine much other
                      knowledge of culture, how to integrate into society and
                      equip the students with the skills they need in High School
                      and Vocational Studies like communication skills, team work
                      skills, presentation etc.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 38}
                  className=" px-4 mb-4 bg-white border border-[#1DB459] shadow-md rounded-lg "
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(38)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 38}
                  >
                    What is the application Timeline?
                  </CustomAccordionHeader>
                  {open === 38 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal ">
                      a. Call for applications: Anytime. Application fee of 100
                      EUR is to be paid before interview. The fee includes one (1)
                      retake. For consecutive retakes, the applicant shall pay an
                      additional 50 EUR per retake. b. Entry Interview: Weekly;
                      every Tuesday for High School and Wednesday for Vocational
                      studies, c. Selected applicant approval or rejection: Within
                      one week of interview.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 39}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(39)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 39}
                  >
                    Can a student postpone an acceptance letter?
                  </CustomAccordionHeader>
                  {open === 39 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      No. The acceptance letter cannot be postponed but postponing
                      arrival to Finland is possible.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 40}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(40)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 40}
                  >
                    What are the minimum academic qualifications required when
                    applying for the program?
                  </CustomAccordionHeader>
                  {open === 40 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      GPA of at least 7.0 of lower secondary. You can provide
                      academic reports for already finished lower secondary
                      school.
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>

                <CustomAccordion
                  open={open === 41}
                  className=" px-4 mb-4 bg-white rounded-lg border border-[#1DB459] shadow-md"
                >
                  <CustomAccordionHeader
                    onClick={() => handleOpen(41)}
                    className="border border-white text-base font-medium text-[#170F49]"
                    isOpen={open === 41}
                  >
                    What are the minimum academic qualifications required when
                    applying to join high school in Finland?
                  </CustomAccordionHeader>
                  {open === 41 && (
                    <CustomAccordionBody className="text-[#6F6C90] text-sm font-normal">
                      The principal&#39;s in Finland are looking at the cumulative
                      GPA from lower secondary. In Finland all of the grades from
                      7th and 8th grade are added to the grades of 9th grade
                      (final grade before entering High School). By the time they
                      come to Finland, they need to have graduated from lower
                      secondary school in their home country - Basically they need
                      to be eligible for High School in their home country. But
                      when first applying to a high school in Finland, their GPA
                      and Finnish level are the most important factors. We
                      recommend having a GPA of at least 7.0
                    </CustomAccordionBody>
                  )}
                </CustomAccordion>
              </Fragment>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;