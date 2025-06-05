import React from "react";
import { Link } from "react-router-dom";

function TravelInsurance() {
  const [openTestTab, setOpenTestTab] = React.useState(1);
  return (
    <>
      <div className="mt-5 flex-col justify-center items-start lg:px-32 ">
        <h3 className="text-center text-[16px] font-bold">Travel Insurance</h3>

        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-10 mt-[25px]">
          <div className="flex lg:flex-row  lg:space-x-5 flex-col space-y-2">
            <div
              onClick={() => setOpenTestTab(1)}
              className={` ${
                openTestTab === 1
                  ? "bg-[#1DB459] text-[#ffffff]"
                  : " bg-[#D6F1E1] text-[#1DB459]"
              }  py-[15px] px-[20px]  text-sm rounded-[43px] cursor-pointer`}
            >
              Requirements for the insurance package
            </div>
            <div
              onClick={() => setOpenTestTab(2)}
              className={` ${
                openTestTab === 2
                  ? "bg-[#1DB459] text-[#ffffff]"
                  : " bg-[#D6F1E1] text-[#1DB459]"
              }  py-[15px] px-[48px] text-sm rounded-[43px] cursor-pointer`}
            >
              Insurance Plans
            </div>
          </div>

          {/* <!-- Requirements for the insurance package  Content --> */}
          <div className={openTestTab === 1 ? "block mt-10" : "hidden"}>
            <div className="text-center lg:text-[32px] text-[22px] font-bold">
              Requirements for the Insurance Package{" "}
            </div>
            <div className="mt-8">
              <div>
                <p className="text-[14px] font-normal">
                  Available for students under 18 years old;
                </p>
                <ul className="text-[14px] font-normal space-y-1  list-disc list-inside ">
                  <li>The deductible quote should NOT be more than EUR 300;</li>
                  <li>
                    Insurance should be valid for the entire period of stay in
                    Finland (effective from the date of entry to Finland)
                  </li>
                  <li>
                    If your studies take at least two years, your insurance must
                    cover pharmaceutical expenses up to EUR 40,000.
                  </li>
                </ul>
                <p className="text-[14px] font-normal">
                  Note: The longer the period of residence, the lower the limit
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[14px] font-normal">
                  Notes for Purchasing Insurance
                </p>
                <ul className="text-[14px] font-normal space-y-1  list-disc list-inside ">
                  <li>
                    Purchasing insurance before moving to Finland is COMPULSORY
                  </li>
                  <li>
                    The start date of Insurance must be SIMILAR to the start
                    date of Residence Permit (RP)
                  </li>
                  <li>
                    Purchasing Insurance is the last step before filling in the
                    EnterFinland form. Only purchase the package after
                    finalizing other necessary documents.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Insurance plans  Content --> */}
          <div className={openTestTab === 2 ? "block mt-10" : "hidden"}>
            <div className="text-center lg:text-[32px] text-[22px] font-bold">
              Insurance plans
            </div>
            <div className="mt-8">
              <div className="mt-4">
                <p className="text-[14px] font-normal">
                  Insurance Companies Allowed By Migri​
                </p>
                <ul className="text-[14px] font-normal space-y-1  list-disc list-inside ">
                  <li>
                    <Link to="https://www.acs-ami.com/" className=" underline">
                      The French company Assurances Courtages et Services (ACS)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.students-insurance.eu/en/home/"
                      className=" underline"
                    >
                      AON Students Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.internationalstudentinsurance.com/"
                      className=" underline"
                    >
                      The US company International Student Insurance
                    </Link>
                  </li>
                  <li>
                    <Link to="https://swisscare.com/" className=" underline">
                      The Swiss insurance company Swisscare – ESI Finland plan
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.sipinsurance.eu/"
                      className=" underline"
                    >
                      SIP Integral
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <ul className="text-[14px] font-normal space-y-1 pl-4  list-disc list-outside ">
                  <li>
                    Please be mindful that Patriot Exchange Insurance is the
                    only option that covers mental health care, and the schools
                    in Finland highly recommend students to buy Patriot Exchange
                    Insurance to guarantee their health care.
                  </li>
                  <li>
                    Please contact the Insurance Company directly if you have
                    any other questions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TravelInsurance;
