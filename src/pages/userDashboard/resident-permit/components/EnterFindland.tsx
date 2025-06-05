import React from "react";
// @ts-ignore
import Carousel from "react-grid-carousel";

function EnterFindland() {
  const [openTestTab, setOpenTestTab] = React.useState(1);
  // const arrowLeft = [
  //     { url: "/images/Dashboard/ArrowLeft.png" },
  //   ];
  // const left = { url: "/images/Dashboard/ArrowLeft.png" };

  // const MyDot = ({ isActive}:{[key:string]:any}) => (
  //     <span
  //       style={{
  //         display: 'inline-block',
  //         height: isActive ? '8px' : '5px',
  //         width: isActive ? '8px' : '5px',
  //         background: '#1DB459',
  //         borderRadius: '50%'
  //       }}
  //     ></span>
  //   )

  return (
    <>
      <div className="mt-5 flex-col justify-center items-start lg:px-32 ">
        <h3 className="text-center text-[16px] font-bold">
          Apply on EnterFinland.Fi
        </h3>

        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-10 mt-[25px]">
          <div className="mt-2">
            <p className="text-center  text-[14px] font-normal">
              EnterFinland is a digital service for customers of the Finnish
              Immigration Service, an alternative to applying on paper.
            </p>
            <p className="text-center text-[14px] font-normal">
              After submitting the application online, the applicant can track
              the processing status and result on the website.
            </p>

            <h3 className="text-[14px] mt-[18px] font-bold">
              Application Process on Enter Finland{" "}
            </h3>
            <p className="text-[14px] font-normal">
              Check that you have all the necessary attachments and information
              before you begin. You must have at least:
            </p>
            <ul className="text-[14px] font-normal space-y-1  list-disc list-inside mt-3">
              <li>A valid passport</li>
              <li>
                A certificate of acceptance from a Finnish educational
                institution
              </li>
              <li>A clarification on income</li>
              <li>A certificate of health insurance</li>
            </ul>
          </div>

          <div className="mt-4">
            <div className="flex justify-center space-x-5 ">
              <div className=" bg-[#D6F1E1] text-[#1DB459] py-[15px] px-[44px]  text-sm rounded-[43px] cursor-pointer">
                Steps at a Glance
              </div>
            </div>

            {/* <!-- Steps at a  Glance   Content --> */}
            <div className="flex justify-center mt-10">
              <div className="grid grid-cols-2 lg:grid-cols-3 lg:mt-8 gap-10">
                <div className="mt-4">
                  <div className="mb-5">
                    <img src="/images/Dashboard/step1.png" alt="hero" />
                  </div>
                  <span className=" bg-[#1DB459] text-[#ffffff] rounded-[31px] lg:px-[50px] px-[20px]  py-[8px]">
                    Step 1
                  </span>
                  <h3 className="text-[13px] font-light mt-5">
                    Create a User Account
                  </h3>
                </div>
                <div className="mt-4">
                  <div className="mb-5">
                    <img src="/images/Dashboard/step2.png" alt="hero" />
                  </div>
                  <span className=" bg-[#1DB459] text-[#ffffff] rounded-[31px] lg:px-[50px] px-[20px] py-[8px]">
                    Step 2
                  </span>
                  <h3 className="text-[13px] font-light mt-5">
                    Fill in the application
                    <br /> and add your documents
                  </h3>
                </div>
                <div className="mt-4">
                  <div className="mb-5">
                    <img src="/images/Dashboard/step3.png" alt="hero" />
                  </div>
                  <span className=" bg-[#1DB459] text-[#ffffff] rounded-[31px] lg:px-[50px] px-[20px]  py-[8px]">
                    Step 3
                  </span>
                  <h3 className="text-[13px] font-light mt-5">
                    Choose your prefered service
                    <br /> point, the embassy or <br /> consulate of Finland
                  </h3>
                </div>
                <div className="mt-4">
                  <div className="mb-5">
                    <img src="/images/Dashboard/step4.png" alt="hero" />
                  </div>
                  <span className=" bg-[#1DB459] text-[#ffffff] rounded-[31px] lg:px-[50px] px-[20px]  py-[8px]">
                    Step 4
                  </span>
                  <h3 className="text-[13px] font-light mt-5">
                    Pay the processing fee
                    <br />
                    (You have the option <br />
                    to payin-person
                    <br /> at the service point)
                  </h3>
                </div>
                <div className="mt-4">
                  <div className="mb-5">
                    <img src="/images/Dashboard/step5.png" alt="hero" />
                  </div>
                  <span className=" bg-[#1DB459] text-[#ffffff] rounded-[31px] lg:px-[50px] px-[20px]  py-[8px]">
                    Step 5
                  </span>
                  <h3 className="text-[13px] font-light mt-5">
                    Send the application
                  </h3>
                </div>
                <div className="mt-4">
                  <div className="mb-5">
                    <img src="/images/Dashboard/step6.png" alt="hero" />
                  </div>
                  <span className=" bg-[#1DB459] text-[#ffffff] rounded-[31px] lg:px-[50px] px-[20px]  py-[8px]">
                    Step 6
                  </span>
                  <h3 className="text-[13px] font-light mt-5">
                    Contact the service
                    <br /> point, the embassy or <br />
                    consulate of Finland to
                    <br /> schedule your visit
                  </h3>
                </div>
                <div className="mt-4">
                  <div className="mb-5">
                    <img src="/images/Dashboard/step7.png" alt="hero" />
                  </div>
                  <span className=" bg-[#1DB459] text-[#ffffff] rounded-[31px] lg:px-[50px] px-[20px]  py-[8px]">
                    Step 7
                  </span>
                  <h3 className="text-[13px] font-light mt-5">
                    Visit the service point,
                    <br /> embassy, or consulate to
                    <br /> prove your identity and
                    <br /> submit required documents
                  </h3>
                </div>
                <div className="mt-4">
                  <div className="mb-5">
                    <img src="/images/Dashboard/step8.png" alt="hero" />
                  </div>
                  <span className=" bg-[#1DB459] text-[#ffffff] rounded-[31px] lg:px-[50px] px-[20px]  py-[8px]">
                    Step 8
                  </span>
                  <h3 className="text-[13px] font-light mt-5">
                    Follow the status of
                    <br /> your application
                  </h3>
                </div>
                <div className="mt-4">
                  <div className="mb-5">
                    <img src="/images/Dashboard/step9.png" alt="hero" />
                  </div>
                  <span className=" bg-[#1DB459] text-[#ffffff] rounded-[31px] lg:px-[50px] px-[20px]  py-[8px]">
                    Step 9
                  </span>
                  <h3 className="text-[13px] font-light mt-5">
                    You will be notified on
                    <br /> EnterFinland when the
                    <br /> decision is ready
                  </h3>
                </div>
              </div>
            </div>

            {/* <!-- Important Notes   Content --> */}
            <div className="mt-10">
              <span className=" bg-[#D6F1E1] text-[#1DB459]  py-[15px] px-[48px] text-sm rounded-[43px] cursor-pointer">
                Important Notes
              </span>
              <div className="block mt-10">
                <div className="mt-8">
                  <div>
                    <ul className="text-[14px] font-normal space-y-1  list-disc list-inside mt-3">
                      <li>
                        If more information is needed, you will get a request
                        for additional information on your email
                      </li>
                      <li>
                        Make sure to check your email regularly and reply to the
                        request on time
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="md:hidden flex justify-end text-[#48B774] text-[24px] px-6 mb-4">
                    {" "}
                    ➜
                  </div>
                  <Carousel cols={1} rows={1} gap={10} loop showDots>
                    <Carousel.Item>
                      <div className="lg:mx-8 mx-3">
                        <div className="flex-col justify-center items-center text-center">
                          <h2 className="text-[32px] font-bold mb-6">STEP 1</h2>
                          <span className="bg-[#1DB459] text-[#ffffff] rounded-[31px] items-center py-[14px] px-[32px]">
                            Go to EnterFinland
                          </span>
                          <h3 className="text-[13px] font-light mt-5">
                            Create a User Account
                          </h3>
                        </div>
                        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 mt-12">
                          <div>
                            <ul className="max-w-[405px] text-[14px] font-normal space-y-2 list-decimal list-inside mt-3">
                              <li>Go to enterfinland.fi</li>
                              <li>
                                Click “Create a user account” on the top left
                                bar of the website
                              </li>
                              <li>
                                Before creating account on EnterFinland: Agents
                                should create a list of new emails for students
                                with a standardized format such as
                                name.surname@gmail.com (nghia.lytm@gmail.com),
                                so that they can use it throughout the period of
                                staying and studying in Finland.
                              </li>
                              <li>
                                Delegate the account and password to students
                                after finishing the RP process
                              </li>
                              <li>
                                Use this email to extend the validity of RP
                              </li>
                            </ul>
                          </div>
                          <div>
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland1.png"
                                alt="hero"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="lg:mx-8 mx-3">
                        <div className="flex-col justify-center items-center text-center">
                          <h2 className="text-[32px] font-bold mb-3">STEP 2</h2>
                          <h3 className="text-[13px] font-light">
                            Choose 'Create an account using your email address'
                          </h3>
                        </div>
                        <div className="mt-4">
                          <div className="place-self-center w-full flex justify-center">
                            <img
                              src="/images/Dashboard/EnterFinland2.png"
                              alt="hero"
                            />
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="lg:mx-8 mx-3">
                        <div className="flex-col justify-center items-center text-center">
                          <h2 className="text-[32px] font-bold mb-3">STEP 3</h2>
                        </div>
                        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 mt-12">
                          <div className="mt-8">
                            <h3 className="text-[13px]">
                              . Fill in information in English
                            </h3>
                            <ul className="max-w-[405px] text-[13px] font-normal space-y-2 list-decimal list-inside mt-4">
                              <li>
                                Enter middle name and first name (Example: Tran
                                Minh Nghia)
                              </li>
                              <li>Enter last name (Example: Ly)</li>
                            </ul>
                            <h3 className="text-[13px] mt-5">
                              . Set up the Password
                            </h3>
                          </div>
                          <div>
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland3.png"
                                alt="hero"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="lg:mx-8 mx-3">
                        <div className="flex-col justify-center items-center text-center">
                          <h2 className="text-[32px] font-bold mb-3">STEP 4</h2>
                          <h3 className="text-[13px] font-light">
                            Log in The Account & Fill in Personal Information
                          </h3>
                        </div>
                        <div className="mt-4">
                          <div className="place-self-center w-full flex justify-center">
                            <img
                              src="/images/Dashboard/EnterFinLand4.png"
                              alt="hero"
                            />
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="lg:mx-8 mx-3">
                        <div className="flex-col justify-center items-center text-center">
                          <h2 className="text-[32px] font-bold mb-3">STEP 5</h2>
                        </div>
                        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 mt-12">
                          <div className="mt-8">
                            <h3 className="text-[13px]">
                              First Log in →Receive 6-digit code via email for
                              verification
                            </h3>
                            <ul className="max-w-[405px] text-[13px] font-normal space-y-2 list-disc list-inside mt-3">
                              <li>Choose New Application</li>
                              <li>Choose First residence permit</li>
                              <li>Choose Studies</li>
                            </ul>
                          </div>
                          <div>
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland5.png"
                                alt="hero"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="lg:mx-8 mx-3">
                        <div className="flex-col justify-center items-center text-center">
                          <h2 className="text-[32px] font-bold mb-3">STEP 6</h2>
                        </div>
                        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 mt-12">
                          <div className="mt-8">
                            <h3 className="text-[13px]">
                              Information on the applicant
                            </h3>
                            <ul className="max-w-[405px] text-[13px] font-normal space-y-2 list-decimal list-inside mt-3">
                              <li>Leave blank</li>
                              <li>Enter according to passport</li>
                              <li>Choose “English”</li>
                              <li>Enter “Student”</li>
                              <li>Choose “Secondary level”</li>
                            </ul>
                          </div>
                          <div>
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland6.png"
                                alt="hero"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>

                    <Carousel.Item>
                      <div className="lg:mx-8 mx-3">
                        <div className="flex-col justify-center items-center text-center">
                          <h2 className="text-[32px] font-bold mb-3">STEP 7</h2>
                        </div>
                        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 mt-12">
                          <div className="mt-8">
                            <h3 className="text-[13px]">Contact Information</h3>
                            <ul className="max-w-[405px] text-[13px] font-normal space-y-2 list-decimal list-inside mt-3">
                              <li>
                                Enter information in your country of residence
                              </li>
                              <li>Leave it blank.</li>
                            </ul>
                            <p className="max-w-[405px] text-[13px] mt-4">
                              The schools provide information of the hosts only
                              when they know the exact number of students
                              enrolling in their schools and having RP
                            </p>
                          </div>
                          <div>
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland7.png"
                                alt="hero"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="lg:mx-8 mx-3">
                        <div className="flex-col justify-center items-center text-center">
                          <h2 className="text-[32px] font-bold mb-3">STEP 8</h2>
                          <h3 className="text-[13px] font-light">
                            Should extend the validity of passport to 5-10 years
                          </h3>
                        </div>
                        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 mt-12">
                          <div className="mt-8">
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland8-1.png"
                                alt="hero"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland8-2.png"
                                alt="hero"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="lg:mx-8 mx-3">
                        <div className="flex-col justify-center items-center text-center">
                          <h2 className="text-[32px] font-bold mb-3">STEP 9</h2>
                        </div>
                        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 mt-12">
                          <div className="">
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland9-1.png"
                                alt="hero"
                              />
                            </div>
                            <h3 className="mt-5 text-[13px] font-bold">
                              For Students
                            </h3>
                            <ul className="max-w-[405px] text-[13px] font-normal space-y-2 list-disc list-inside mt-3">
                              <li>Choose Secondary Education</li>
                              <li>Choose General upper secondary</li>
                              <li>
                                Type of studies: choose Studies leading to a
                                degree or vocational qualification
                              </li>
                              <li>
                                Choose Matriculation examination (for High
                                School Students)
                              </li>
                              <li>Language is Finnish</li>
                              <li>
                                The start date of the program written on the
                                acceptance letter (E.g. 01.08.202x)
                              </li>
                              <li>
                                The estimated duration of Highschool is 3 years
                              </li>
                            </ul>
                          </div>
                          <div>
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland9-2.png"
                                alt="hero"
                              />
                            </div>
                            <h3 className="lg:mt-20 mt-5 text-[13px] font-bold">
                              For Vocational Students
                            </h3>
                            <ul className="max-w-[405px] text-[13px] font-normal space-y-2 list-disc list-inside mt-3">
                              <li>Choose Higher Education</li>
                              <li>
                                Choose The Finnish institution from the list.
                                Note: If you find the vocational school in the
                                list of Schools, choose it. If not (Like STEP),
                                choose "Other educational institutions" and it
                                will appear an option to specify the school
                                name.
                              </li>
                              <li>
                                Type of studies: choose Studies leading to a
                                degree or vocational qualification
                              </li>
                              <li>
                                Choose Vocational qualification (for Vocational
                                School Students)
                              </li>
                              <li>Language is Finnish</li>
                              <li>
                                The start date of the program written on the
                                acceptance letter (E.g. 01.08.202x)
                              </li>
                              <li>
                                The estimated duration of Vocational school is 3
                                years
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="lg:mx-8 mx-3">
                        <div className="flex-col justify-center items-center text-center">
                          <h2 className="text-[32px] font-bold mb-3">
                            STEP 10
                          </h2>
                          <h3 className="text-[13px] font-light">
                            Should extend the validity of passport to 5-10 years
                          </h3>
                        </div>
                        <div className="flex lg:flex-row lg:justify-between flex-col gap-8 mt-12">
                          <div className="mt-8">
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland8-1.png"
                                alt="hero"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="place-self-center w-full">
                              <img
                                src="/images/Dashboard/EnterFinland8-2.png"
                                alt="hero"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnterFindland;
