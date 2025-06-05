import React from "react";
import { Link } from "react-router-dom";
import {
  icontypesEnum,
  SvgElement,
} from "../../../../component/assets/svgElement";
function ImportantDocuments() {
  return (
    <>
      <div className="mt-5 flex-col justify-center items-start lg:px-32">
        <h3 className="text-center text-[16px] font-bold">
          Important Documents to Bring
        </h3>
        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-5 mt-[25px]">
          {/* <!-- Before Arriving Content --> */}
          <div className="flex justify-center mb-6">
            <span className="bg-[#F4FBF7] text-[#1DB459] rounded-[45px] lg:py-[18px] lg:px-[42px] py-[10px] px-[14px] lg:text-[14px] text-[12px] font-medium">
              For students coming to English Summer Camp
            </span>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/passport.png" alt="hero" />
              <p>
                Original and <br />
                copy of passport
              </p>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/insurance-card.png" alt="hero" />
              <p>Insurance Card</p>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/power-attorney.png" alt="hero" />
              <p className="text-[16px]">Power of Attorney</p>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/parent-consent.png" alt="hero" />
              <p>Parent Consent</p>
            </div>
          </div>
        </div>

        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-5 mt-[25px] rounded-[15px]">
          <div className="flex justify-center mb-6">
            <span className="bg-[#F4FBF7] text-[#1DB459] rounded-[45px] lg:py-[18px] lg:px-[42px] py-[10px] px-[14px] lg:text-[14px] text-[12px] font-medium">
              For students coming to study in Finland
            </span>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/passport.png" alt="hero" />
              <p>
                Original and <br />
                copy of passport
              </p>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/resident-card.png" alt="hero" />
              <p>Residence Permit</p>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/birth-certificate.png" alt="hero" />
              <p className="text-[16px]">
                Birth Certificate <br />
                (if you are under 18)
              </p>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/school-reward.png" alt="hero" />
              <p>School Rewards</p>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/diploma.png" alt="hero" />
              <p className="text-center">Diploma</p>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/insurance-card.png" alt="hero" />
              <p>
                4 x 6 Photo with <br />
                white background
              </p>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/power-attorney.png" alt="hero" />
              <p className="text-[16px]">Health Insurance</p>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/parent-consent.png" alt="hero" />
              <p>
                Acceptance Letter <br />
                from School
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-5 mt-[25px]">
          {/* <!-- Before Arriving Content --> */}
          <div className="flex justify-center mb-6">
            <span className="bg-[#F4FBF7] text-[#1DB459] rounded-[45px] lg:py-[18px] lg:px-[42px] py-[10px] px-[14px] lg:text-[14px] text-[12px] font-medium">
              Download the Forms
            </span>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-6 gap-3">
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/passport.png" alt="hero" />
              <p className="lg:text-[14px] text-[12px] text-center">
                Parent Consent{" "}
              </p>
              <Link to="/files/doc_2.pdf" target="_blank" download>
                <div className="mt-3">
                  <span className=" inline-flex border border-[#1DB459] text-black rounded-[36px] lg:py-[8px] lg:px-[20px] py-[8px] px-[20px]">
                    Download
                    <svg
                      width="24"
                      height="25"
                      className="ml-2"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16.5L7 11.5L8.4 10.05L11 12.65V4.5H13V12.65L15.6 10.05L17 11.5L12 16.5ZM6 20.5C5.45 20.5 4.97933 20.3043 4.588 19.913C4.19667 19.5217 4.00067 19.0507 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.8043 19.521 19.413 19.913C19.0217 20.305 18.5507 20.5007 18 20.5H6Z"
                        fill="#000000"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/insurance-card.png" alt="hero" />
              <p className="lg:text-[14px] text-[12px] text-center">
                Power of Attorney
              </p>
              <Link to="/files/doc_2.pdf" target="_blank" download>
                <div className="mt-3">
                  <span className=" inline-flex border border-[#1DB459] text-black rounded-[36px] lg:py-[8px] lg:px-[20px] py-[8px] px-[20px]">
                    Download
                    <svg
                      width="24"
                      height="25"
                      className="ml-2"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16.5L7 11.5L8.4 10.05L11 12.65V4.5H13V12.65L15.6 10.05L17 11.5L12 16.5ZM6 20.5C5.45 20.5 4.97933 20.3043 4.588 19.913C4.19667 19.5217 4.00067 19.0507 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.8043 19.521 19.413 19.913C19.0217 20.305 18.5507 20.5007 18 20.5H6Z"
                        fill="#000000"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/power-attorney.png" alt="hero" />
              <p className="lg:text-[14px] text-[12px] text-center">
                Parents Aproval form (Migri)
              </p>
              <Link to="/files/doc_2.pdf" target="_blank" download>
                <div className="mt-3">
                  <span className=" inline-flex border border-[#1DB459] text-black rounded-[36px] lg:py-[8px] lg:px-[20px] py-[8px] px-[20px]">
                    Download
                    <svg
                      width="24"
                      height="25"
                      className="ml-2"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16.5L7 11.5L8.4 10.05L11 12.65V4.5H13V12.65L15.6 10.05L17 11.5L12 16.5ZM6 20.5C5.45 20.5 4.97933 20.3043 4.588 19.913C4.19667 19.5217 4.00067 19.0507 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.8043 19.521 19.413 19.913C19.0217 20.305 18.5507 20.5007 18 20.5H6Z"
                        fill="#000000"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
            <div className="place-self-center w-full flex-col justify-center">
              <img src="/images/Dashboard/parent-consent.png" alt="hero" />
              <p className="lg:text-[14px] text-[12px] text-center">
                Parents approval from <br />
                (Police) if you are under 18{" "}
              </p>
              <Link to="/files/doc_2.pdf" target="_blank" download>
                <div className="mt-3">
                  <span className=" inline-flex border border-[#1DB459] text-black rounded-[36px] lg:py-[8px] lg:px-[20px] py-[8px] px-[20px]">
                    Download
                    <svg
                      width="24"
                      height="25"
                      className="ml-2"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 16.5L7 11.5L8.4 10.05L11 12.65V4.5H13V12.65L15.6 10.05L17 11.5L12 16.5ZM6 20.5C5.45 20.5 4.97933 20.3043 4.588 19.913C4.19667 19.5217 4.00067 19.0507 4 18.5V15.5H6V18.5H18V15.5H20V18.5C20 19.05 19.8043 19.521 19.413 19.913C19.0217 20.305 18.5507 20.5007 18 20.5H6Z"
                        fill="#000000"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:mx-10 mx-4 mt-[25px] mb-6">
          <div className="lg:text-[14px] text-[12px] bg-[#FADDDD] text-[#FF3C3C] text-center rounded-[45px] lg:py-[16px] lg:px-[42px] py-[6px] px-[5px] inline-flex">
            <SvgElement type={icontypesEnum.DANGER} />
            <span className="mt-1 mx-2">
              All documents need to be carried in HAND LUGGAGE. Do not put them
              in checked luggage to prevent losing!
            </span>
            <SvgElement type={icontypesEnum.DANGER} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ImportantDocuments;
