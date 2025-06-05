import React from "react";
import { Link } from "react-router-dom";

function BeforeArriving() {
  const [openTestTab, setOpenTestTab] = React.useState(1);
  return (
    <>
      <div className="mt-5 flex-col justify-center items-start lg:px-32">
        <h3 className="text-center text-[16px] font-bold">Before Arriving</h3>
        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-10 mt-[25px]">
          {/* <!-- Before Arriving Content --> */}
          <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-6 gap-3">
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">1</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Book an appointment at{" "}
                  <Link
                    to="https://dvv.fi/en/individuals"
                    className="underline"
                  >
                    DVV
                  </Link>{" "}
                  (Maistraatti) office
                </p>
                <span className="bg-[#1DB459] text-white rounded-[28px] py-[10px] px-[30px] text-[12px]">
                  Click Here
                </span>
              </div>
            </div>

            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">2</h3>
                <p className="text-[13px] mb-4 mt-2">
                  For students under 18 years of age, an Authorized Person
                  (called AiF) is required to accompany the student to the DVV.
                  FF will guide schools in supporting students.
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">3</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Students can make an appointment with any DVV office in
                  Finland, regardless of the city in which they live.
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">4</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Before going to DVV office, fill in this form, print it out,
                  sign it, bring it to DVV appointment
                </p>
                <span className="bg-[#1DB459] text-white rounded-[28px] py-[10px] px-[30px] text-[12px]">
                  Click Here
                </span>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">5</h3>
                <p className="text-[13px] mb-4 mt-2">
                  This process can take 3-5 weeks for the student's information
                  to be entered into the system in Finland.
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">6</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Consult your school for an appointment date, as students under
                  18 need to be accompanied by an adult.
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">7</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Make sure the student and AiF are both available for the
                  appointment (the appointment could be during school hours).
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">8</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Students from the same city should schedule an appointment at
                  the same time (or close to each other) so that the AiF can
                  take you along at the same time.
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-[13px] text-[#FF3C3C] mt-3">
            NOTE. student only needs to book an individual appointment if your
            school does not arrange a joint visit for the bigger group of
            students. Check with your school whether there has been a joint
            visit booked.
          </h3>
        </div>

        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-5 mt-[25px] rounded-[15px]">
          <div>
            <h2 className="lg:text-[32px] text-[22px] text-[#1DB459] font-bold text-center mb-4">
              Arrangement
            </h2>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-6 gap-3">
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">1</h3>
                <p className="text-[13px] mb-4 mt-2">
                  AfriProEdu team will be in charge of picking up the students
                </p>
                <span className="bg-[#1DB459] text-white rounded-[28px] py-[10px] px-[30px] text-[12px]">
                  Click Here
                </span>
              </div>
            </div>

            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">2</h3>
                <p className="text-[13px] mb-4 mt-2">
                  AfriProEdu will also support obtaining SIM cards with internet
                  connections
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">3</h3>
                <p className="text-[13px] mb-4 mt-2">
                  AfriProEdu will provide information on local trains and buses
                  to your destination city
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">4</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Click here to view the recommended schedule for your ticket to
                  your destination city
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-5 mt-[25px] rounded-[15px]">
          <div>
            <h2 className="lg:text-[32px] text-[22px] text-[#1DB459] font-bold text-center ">
              Open a Bank Account
            </h2>
            <p className="text-[16px] text-center text-[#2E353A] mb-4">
              Call to book an appointment at one of the following banks
            </p>
            <div className="hidden md:flex justify-center space-x-5 mb-6">
              <span className="bg-[#1DB459] text-white py-[10px] px-[40px] rounded-[27px]">
                Nordea
              </span>
              <span className="bg-[#1DB459] text-white py-[10px] px-[59px]  rounded-[27px]">
                OP
              </span>
              <span className="bg-[#1DB459] text-white py-[10px] px-[16px] rounded-[27px]">
                Säästöpankki
              </span>
              <span className="bg-[#1DB459] text-white py-[10px] px-[16px] rounded-[27px]">
                Danske Bank
              </span>
            </div>
            <div className="md:hidden flex justify-center space-x-5 mb-4">
              <span className="bg-[#1DB459] text-white py-[10px] px-[40px] rounded-[27px]">
                Nordea
              </span>
              <span className="bg-[#1DB459] text-white py-[10px] px-[59px]  rounded-[27px]">
                OP
              </span>
            </div>
            <div className="md:hidden flex justify-center space-x-5 mb-4">
              <span className="bg-[#1DB459] text-white py-[10px] px-[16px] rounded-[27px]">
                Säästöpankki
              </span>
              <span className="bg-[#1DB459] text-white py-[10px] px-[16px] rounded-[27px]">
                Danske Bank
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-6 gap-3">
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">1</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Students should choose a bank in the city or the place closest
                  to their accommodation.
                </p>
              </div>
            </div>

            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">2</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Each bank in each city will have different policies for
                  international students. Students can consult with the Student
                  Support Department on which bank to choose.
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">3</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Banks will only accept applications when students have
                  registered their residential addresses on the DVV system.
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">4</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Authorized Person (AiF) will accompany the student to the
                  bank, so students from the same city should make an
                  appointment at the same time (or near each other) so that the
                  AiF can take you all at the same time.
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">5</h3>
                <p className="text-[13px] mb-4 mt-2">
                  This process can take 2-3 weeks for banks to process the
                  application and send the bank card to the student's home
                  address in Finland.
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">6</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Documents needed for DVV and at the Bank
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-5 mt-[25px] rounded-[15px]">
          <div>
            <h2 className="lg:text-[32px] text-[22px] text-[#1DB459] font-bold text-center ">
              Transportation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-6 gap-3 mt-4">
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">1</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Download these applications to make your travel in Finland
                  easier. VR Matkalla is for train transport between cities,
                  Bussiliput and OnniBus is for bus transport between cities,
                  and 02 Taksi is a taxi application similar to Bolt/Uber/Grab.
                  NOTE: Taxis in Finland can be expensive, always check the
                  price carefully before requesting for one.
                </p>
              </div>
            </div>

            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">2</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Keep in mind that local city transport will vary between
                  cities, consult your School Teacher or the Student Coordinator
                  for transport information in your city.
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">3</h3>
                <p className="text-[13px] mb-4 mt-2">
                  TIPS: Use Google Maps! They work extremely well, put your
                  location and your destination in the app, and it will show
                  exactly what transportation you will need to use Bus, Train,
                  or Metro. It will also have a text underneath called "Agency
                  info" Once you press this it will also show all the links on
                  how to purchase the tickets.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-5 mt-[25px] rounded-[15px]">
          <div>
            <h2 className="lg:text-[32px] text-[22px] text-[#1DB459] font-bold text-center ">
              Important Notice about Money Transfer (Gift Tax)
            </h2>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-6 gap-3 mt-4">
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">1</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Under Finnish law, if a student receives a gift from the same
                  giver with a total value of €5000 within a three-year period,
                  gift tax will be charged.
                </p>
                <span className="bg-[#1DB459] text-white rounded-[28px] py-[10px] px-[30px] text-[12px]">
                  Click Here
                </span>
              </div>
            </div>

            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">2</h3>
                <p className="text-[13px] mb-4 mt-2">
                  8% - 17% when the recipient of the gift is a relative
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">3</h3>
                <p className="text-[13px] mb-4 mt-2">
                  19% - 33% when the recipient is not a relative
                </p>
              </div>
            </div>
            <div className="border border-[#1DB459] rounded-[10px] pt-3 pb-8 px-4">
              <div className="text-center">
                <h3 className="text-[24px] text-[#1DB459]">4</h3>
                <p className="text-[13px] mb-4 mt-2">
                  Gifts can be real estate, valuable movables, cash, savings
                  deposits, company shares, securities, etc.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-[#F4FBF7] pt-3 pb-6 px-3">
            <h3 className="text-[16px] font-medium">
              How to avoid gift tax? Deposit less than 5000 EUR within 3 years!
            </h3>
            <ul className="text-[12px] font-normal space-y-1  list-disc list-inside mt-2">
              <li>
                Alternate sending from parents (each person deposits less than
                5000 EUR in 3 years, the rest is brought in cash to put in the
                account).
              </li>
              <li>
                If parents pay the rent directly to the home company, it is not
                considered as a Gift, so they do not have to pay taxex.
              </li>
              <li>
                If the student has an account in their own country, then he/she
                can transfer money to Finland in his name and will not be
                subject to gift tax later.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeforeArriving;
