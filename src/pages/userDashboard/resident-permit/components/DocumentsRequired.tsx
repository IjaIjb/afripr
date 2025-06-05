import React from "react";

function DocumentsRequired() {
  const [openTestTab, setOpenTestTab] = React.useState(1);
  return (
    <>
      <div className="mt-5 flex-col justify-center items-start lg:px-32 px-6">
        <h3 className="text-center text-[16px] font-bold">
          Documents Required for Resident Permit
        </h3>
        <p className=" text-center mt-[18px] text-[14px] font-normal">
          Application for a Residence Permit will include many types of
          documents as prescribed by the Immigration Department of Finland. In
          which, documents can be classified into three main categories below.
        </p>
        <div className="bg-white lg:mx-5 mx-4 pb-10 lg:px-8 px-6 pt-10 mt-[25px]">
          <div className="flex lg:flex-row  lg:space-x-5 flex-col space-y-2">
            <div
              onClick={() => setOpenTestTab(1)}
              className={` ${
                openTestTab === 1
                  ? "bg-[#1DB459] text-[#ffffff]"
                  : " bg-[#D6F1E1] text-[#1DB459]"
              }  py-[15px] px-[20px]  text-sm rounded-[43px] cursor-pointer`}
            >
              Personal Documents
            </div>
            <div
              onClick={() => setOpenTestTab(2)}
              className={` ${
                openTestTab === 2
                  ? "bg-[#1DB459] text-[#ffffff]"
                  : " bg-[#D6F1E1] text-[#1DB459]"
              }  py-[15px] px-[44px] text-sm rounded-[43px] cursor-pointer`}
            >
              Academic Documents
            </div>
            <div
              onClick={() => setOpenTestTab(3)}
              className={` ${
                openTestTab === 3
                  ? "bg-[#1DB459] text-[#ffffff]"
                  : " bg-[#D6F1E1] text-[#1DB459]"
              }  py-[15px] px-[44px] text-sm rounded-[43px] cursor-pointer`}
            >
              Financial Documents
            </div>
          </div>

          {/* <!-- Personal Documents Content --> */}
          <div className={openTestTab === 1 ? "block mt-10" : "hidden"}>
            <div className="text-center lg:text-[32px] text-[22px] font-bold">
              Personal Documents
            </div>
            <div className="mt-8">
              <div>
                <h3 className="text-[14px] font-bold">
                  Resident Permit Application (MP_1 form)
                </h3>
                <p className="text-[14px] font-normal">
                  Fill in the EnterFinland website after having all the
                  necessary documents. Print out the completed form after
                  completing the online form.
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[14px] font-normal">
                  Passport photo (size 3.5 x 4.5)
                </p>
                <ul className="text-[14px] font-normal space-y-1  list-disc list-inside ">
                  <li>White wallpaper, no glasses, no open-mouthed smile.</li>
                  <li>
                    Write information on the back of the photo to avoid losing
                    it.
                  </li>
                </ul>
                <p className="text-[14px] font-normal">
                  Passport valid for at least 6 months
                </p>
                <p className="text-[14px] font-normal">
                  Notarized all pages with information (exit, entry, Visa...).
                  For cases where students do not have ID card, they should hire
                  a service to assist in making passports for the students.
                </p>
                <p className="text-[14px] font-normal">
                  Note: The passport must be ready by early May. It is
                  recommended to apply for a new passport if your passport is
                  about to expire because it is quite expensive to get a new
                  passport in Finland
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">Birth Certificate</h3>
                <p className="text-[14px] font-normal">
                  Notarized copy and translated into English.
                </p>
                <p className="text-[14px] font-normal">
                  Legalize the birth certificate (for students under 18 years
                  old).
                </p>
                <p className="text-[14px] font-normal">
                  Step 1: Legalization at the Department of Foreign Affairs
                  (Consular Department)
                </p>
                <p className="text-[14px] font-normal">
                  Step 2: Consular Legalization at the Embassy of Finland
                </p>
                <p className="text-[14px] font-normal">
                  Note: The Embassy does not accept a copy of the birth
                  certificate. The original document is a MUST. In case your
                  students lost the original birth certificate, please double
                  check with your local Embassy. Notarization time should not be
                  too long (within 6 months).
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  International health insurance
                </h3>
                <p className="text-[14px] font-normal">
                  Print the certificate of insurance purchased. Minimum
                  compensation value of 40,000 euros/year.
                </p>
                <p className="text-[14px] font-normal">
                  Among the list of international insurance recommended by
                  Migri, there is only 1 company with an insurance policy for
                  students under 18 years old, which is International Student
                  Insurance.
                </p>
                <p className="text-[14px] font-normal">
                  Name of insurance plan: Patriot Exchange Insurance or Atlas
                  Travel Insurance
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  Guardian’s consent for child’s study abroad
                </h3>
                <ul className="text-[14px] font-normal space-y-1  list-disc list-inside ">
                  <li>
                    Bilingual Form: CLICK HERE → Must be signed by the parents
                    or all legal guardians of the student under the age of 18.
                  </li>
                  <li>
                    Migri Form: CLICK HERE → Parents fill out and sign (This
                    link is invalid)
                  </li>
                </ul>
                <p className="text-[14px] font-normal">
                  Wet-ink signature is required!!!
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  ​Confirmation of saving account balance or bank account with
                  student’s name has ~ 7000 EUR at your disposal
                </h3>
                <p className="text-[14px] font-normal">
                  (the total amount of money saving depends on the validity of
                  your Residence Permit)
                </p>
                <p className="text-[14px] font-normal">
                  The confirmation must be English - bilingual and must have
                  balance conversion equal to Euro at current bank rates
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  Health Certificate / Vaccination Certificate
                </h3>
                <p className="text-[14px] font-normal">
                  Bilingual certified and signed by the hospital . (If the
                  school requests)
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Academic Documents Content --> */}
          <div className={openTestTab === 2 ? "block mt-10" : "hidden"}>
            <div className="text-center lg:text-[32px] text-[22px] font-bold">
              Academic Documents
            </div>
            <div className="mt-8">
              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  Lower Secondary Diploma
                </h3>
                <p className="text-[14px] font-normal">
                  Notarized copy and translated into English.
                </p>
                <p className="text-[14px] font-normal">
                  If the student does not have a Diploma at the time of applying
                  for the Residence Permit, a letter confirming the expected
                  date of graduation from the school is required.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  Lower Secondary Transcript
                </h3>
                <p className="text-[14px] font-normal">
                  Notarized copy and translated into English
                </p>
                <p className="text-[14px] font-normal">
                  *Vocational School Students may skip this step and only
                  present the Secondary school diploma
                </p>
              </div>

              <div className="mt-4">
                {/* <p className='text-[14px] font-normal'>Acceptance Letter From Finnish High School</p> */}
                <p className="text-[14px] font-normal">
                  Print the letter emailed by the school
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  Language Certificate (Finnish B1.1 Certificate or other)
                </h3>
                <p className="text-[14px] font-normal">
                  Notarized copy and translated into English (If the certificate
                  is not English)
                </p>
                <p className="text-[14px] font-normal">
                  Documentation of paid tuition fee or documentation of
                  scholarship
                </p>
                <p className="text-[14px] font-normal">
                  Print the confirmation of tuition fee payment or the
                  scholarship letter sent by the school via email
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[14px] font-normal">
                  <span className="">Note:</span> It is necessary to prepare all
                  other documents to be ready to submit as soon as you receive
                  acceptance letter from the Finnish school.
                </p>
                <p className="text-[14px] font-normal"></p>
              </div>
            </div>
          </div>

          {/* <!-- Financial Documents Content --> */}
          <div className={openTestTab === 3 ? "block mt-10" : "hidden"}>
            <div className="text-center lg:text-[32px] text-[22px] font-bold">
              Financial Documents
            </div>
            <div className="mt-8">
              <div className="mt-4">
                <p className="text-[14px] font-normal">
                  Financial records to prove that a parent or guardian is able
                  to support a student living and studying in Finland, the
                  parent or guardian must provide documentation of the
                  clarification of income and assets.
                </p>
                <p className="text-[14px] font-normal">
                  New updates: Student needs to show financial proof for ONLY 1
                  year, instead of 3 years even if he/she applies for 3 years
                  duration.
                </p>
                <p className="text-[14px] font-normal">
                  Depend on difference of the characteristics of the job, each
                  financial clarification would be different. Commonly, there
                  are 3 types:
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">Notes </h3>
                <ul className="text-[14px] font-normal space-y-1 pl-4  list-disc list-outside ">
                  <li>
                    The completed set of documents must include an original set
                    of documents and a set of copies that have been translated
                    into English for the Embassy to verify. The Embassy may not
                    keep all the documents included in the set.
                  </li>
                  <li>
                    The application process may include an interview with
                    Embassy staff to test students' motivation to study abroad
                    and their ability to communicate in a foreign language.
                  </li>
                  <li>
                    Students must be present to apply in person (accompanied by
                    a guardian for under 18 children) and fingerprints will be
                    collected.
                  </li>
                  <li>
                    Students will be provided with an envelope showing the
                    address to receive their Residence Permit Card. Students can
                    use their own address or authorize other people to collect
                    the card on their behalf.
                  </li>
                  <li>
                    Processing time will not be the same for every student's
                    Residence Permit application. The shortest is a week and the
                    longest is three months depending on the number of
                    applications submitted to Finland Immigration at that time
                  </li>
                  <li>
                    In some cases, the Finland Immigration Office will ask for
                    additional documents or write a financial explanation.
                    Students can add additional documents online in
                    EnterFinland, without having to go to the Embassy again.
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  Office Worker or Employee ✢
                </h3>
                <p className="text-[14px] font-normal">Labor contract</p>
                <p className="text-[14px] font-normal">
                  Official Labor Contract for the most recent job (s).Note:
                  Notarized copy and translated into English
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  ​Bank account statements or Confirmation of the level of
                  income
                </h3>
                <p className="text-[14px] font-normal">
                  If receiving salary via bank account, there must be a
                  statement of salary account for the last 6 months. If
                  receiving salary in cash, a confirmation of the company's
                  income is required. The total recommended monthly income is
                  1200 EUR or more
                </p>
                <p className="text-[14px] font-normal">
                  Note: Notarized copy and translated into English
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">Appointment decision</h3>
                <p className="text-[14px] font-normal">
                  If the parents are public servants and the contract does not
                  specify the salary, there must be a decision to appoint with
                  the salary coefficient.
                </p>
                <p className="text-[14px] font-normal">
                  Note: Notarized copy and translated into English
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[14px] font-normal">
                  <span className="font-bold">Important note:</span> Fake
                  documents are banned immediately and taint students’ profile.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  Owner of a Business/Company{" "}
                </h3>
                <p className="text-[14px] font-normal">Business license</p>
                <p className="text-[14px] font-normal">
                  Business Registration Licenses for currently active
                  businesses.Note: Notarized copy and translated into English
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  Certificate for Tax Code Registration
                </h3>
                <p className="text-[14px] font-normal">
                  Tax code registration of currently active businesses.Note:
                  Notarized copy and translated into English
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  Bank statement of the company
                </h3>
                <p className="text-[14px] font-normal">
                  Bank statement of the company for the last 6 monthsNote: Bank
                  statements must have the stamp of the bank and bilingual
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">Tax receipts</h3>
                <p className="text-[14px] font-normal">
                  Types of tax receipts such as business license tax, value
                  added tax, personal income tax ... depending on the field and
                  business scaleNote: Notarized copy and translated into English
                </p>
              </div>

              <div className="mt-4">
                <p className="text-[14px] font-normal">
                  <span className="font-bold">Important note:</span> Fake
                  documents are banned immediately and taint students’ profile.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">Property Rentals </h3>
                <p className="text-[14px] font-normal">
                  (Real estate, premises, vehicles, etc.)
                </p>
                <p className="text-[14px] font-normal">
                  Certificate of land/asset use rights
                </p>
                <p className="text-[14px] font-normal">
                  Land use rights certificate (real estate), Vehicles ownership
                  certificateNote: Notarized copy and translated into English
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">
                  House/property rental agreement
                </h3>
                <p className="text-[14px] font-normal">
                  House/Car rental contractNote: Notarized copy and translated
                  into English
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">Bank statement</h3>
                <p className="text-[14px] font-normal">
                  Bank statement of the last 6 monthsNote: Bank statements must
                  have the stamp of the bank and bilingual
                </p>
              </div>

              <div className="mt-4">
                <h3 className="text-[14px] font-bold">Tax receipts</h3>
                <p className="text-[14px] font-normal">
                  Types of tax receipts such as business license tax, value
                  added tax, personal income tax … depending on the field and
                  business scaleNote: Notarized copy and translated into English
                </p>
              </div>
              <div className="mt-4">
                <p className="text-[14px] font-normal">
                  Important note: Fake documents are banned immediately and
                  taint students’ profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentsRequired;
