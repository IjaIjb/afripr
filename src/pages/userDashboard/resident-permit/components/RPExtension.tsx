import React from "react";
import { Link } from "react-router-dom";

function RPExtension() {
  return (
    <>
      <div className="mt-5 flex-col justify-center items-start lg:px-32">
        <h3 className="text-center text-[16px] font-bold">
          Resident Permit Extension
        </h3>
        <div className="bg-white lg:mx-10 mx-4 pb-10 lg:px-8 px-6 pt-10 mt-[25px]">
          {/* <!-- Resident Permit Extension Content --> */}
          <div className="block ">
            <div className="">
              <div className="mb-5">
                <ul className="text-[14px] font-normal space-y-1  list-disc list-inside ">
                  <li>
                    Remember to apply for the RP visa extension before your
                    current RP expires
                  </li>
                  <li>
                    The most suitable time for you to start extending your
                    application is 3 months before the expiry date. Annually,
                    both schools and FF will remind you about this process to
                    make sure you are aware of the timeline.
                  </li>
                  <li>
                    One thing you should remember is you should wait until you
                    have your new RP card and then go back to your home country
                    or travel elsewhere. If it expires while you're still in
                    Finland, you will be granted a note saying that you can stay
                    temporarily until you receive your new RP. However, if
                    you're out of the country at the time, you have to do the RP
                    extension application in Finland in advance and wait for it
                    to be delivered to your place before entering Finland again.
                    We DON'T suggest you leave Finland before you receive the
                    new RP because it's time consuming and risky to do it
                    outside of Finland.
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <span className=" bg-[#D6F1E1] text-[#1DB459] lg:py-[15px] lg:px-[44px] py-[10px] px-[16px] lg:text-sm text-[12px] rounded-[43px] ">
                  I. Documents Required for the RP Extension
                </span>
                <div className="mt-6">
                  <ul className="text-[14px] font-normal space-y-1  list-disc list-inside ">
                    <li>Copy of valid passport</li>
                    <li>
                      Certificate of attendance from educational institution
                    </li>
                    <li>
                      Report on the progress of your studies (at least 45
                      credits)
                    </li>
                    <li>
                      Clarification of income (your bank statement: 6720 EUR for
                      one year)
                    </li>
                  </ul>
                  <p className="text-[14px] font-normal mt-3 mb-5">
                    Certificate of insurance. (Read more at:
                    <Link
                      to="https://docs.google.com/presentation/d/1JFWeainz5d4m6t2hVFT_SIXZdxhovCNOoDzVk9QMSxo/edit?usp=sharing"
                      className=" underline"
                    >
                      Insurance
                    </Link>
                    )
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <span className="hidden lg:block bg-[#D6F1E1] text-[#1DB459] lg:py-[15px] lg:px-[44px]  py-[10px] px-[10px] text-sm lg:rounded-[43px] ">
                  II. How to upgrade your Enter Finland account into an account
                  that uses strong identification
                </span>
                <span className="lg:hidden block bg-[#D6F1E1] text-[#1DB459] text-[12px] py-[10px] px-[15px] rounded-[43px] ">
                  II. How to upgrade your Enter Finland account into an account
                  that uses strong identification
                </span>
                <div className="mt-6">
                  <ul className="text-[14px] font-normal space-y-1  list-disc list-inside ">
                    <li>
                      When you apply for an extended permit, you may not need to
                      visit a service point if you use strong identification in
                      Enter Finland. You must use the same account as you
                      previously used when you applied for a permit.
                    </li>
                    <li>
                      Upgrade your account into an account with strong
                      identification before you submit your application. If you
                      submitted your application before updating your account,
                      you would unfortunately have to visit a service point.
                    </li>
                    <li>These are the steps you should follow:</li>
                  </ul>
                  <p className="text-[14px] font-normal mt-3 mb-5">
                    {" "}
                    Log in to your existing Enter Finland account using your
                    email login;
                  </p>
                  <p className="text-[14px] font-normal mt-3 mb-5">
                    {" "}
                    In the main menu, select ‘My Account’;
                  </p>
                  <p className="text-[14px] font-normal mt-3 mb-5">
                    {" "}
                    Select ‘Change now’ to get to the Suomi.fi login page. There
                    you can log in to the online service using strong electronic
                    identification, for example your Finnish online banking
                    credentials, citizen certificate or mobile certificate;
                  </p>
                  <p className="text-[14px] font-normal mt-3 mb-5">
                    After you have logged in to the online service using strong
                    identification, your account will be updated to an account
                    with strong identification. In the future, you must always
                    log into your account using strong electronic
                    identification.
                  </p>
                </div>
                <div className="mt-4">
                  <img src="/images/Dashboard/Rp-1.png" alt="hero" />
                </div>

                <p className="text-[14px] font-normal mt-3 mb-5">
                  Finnish online banking credentials:
                </p>
                <p className="text-[14px] font-normal mt-3 mb-5">
                  Your online banking credentials are the username and password
                  that you use to log into your bank's website. If you don't
                  have an online login, you may need to set up online banking in
                  which case you will need to contact your bank directly.
                </p>
              </div>

              <div className="mt-4">
                <span className=" bg-[#D6F1E1] text-[#1DB459] lg:py-[15px] lg:px-[44px] py-[10px] px-[16px] lg:text-sm text-[12px] rounded-[43px] ">
                  III. Necessary documents to bring to the bank:
                </span>
                <div className="mt-6">
                  <p className="text-[14px] font-normal mt-3">A passport</p>
                  <p className="text-[14px] font-normal ">
                    A proof of address (such as a utility bill or a piece of
                    official government correspondence)
                  </p>
                  <p className="text-[14px] font-normal">
                    Your Finnish personal identification number (called a
                    henkilötunnus)
                  </p>
                  <p className="text-[14px] font-normal">
                    A KELA card (which shows you can be covered by the Finnish
                    social security system)
                  </p>
                  <p className="text-[14px] font-normal">
                    A visa or residence permit
                  </p>

                  <p className="text-[14px] font-normal mt-3 mb-5">
                    Ask your guardian/teacher and read more in details here:
                    <Link
                      to="https://n26.com/en-eu/blog/how-to-open-a-bank-account-in-finland#:~:text=Can%20I%20open%20a%20bank,branch%20to%20finalize%20the%20details."
                      className="underline"
                    >
                      {" "}
                      How to open a bank account
                    </Link>{" "}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <span className=" bg-[#D6F1E1] text-[#1DB459] lg:py-[15px] lg:px-[44px] py-[10px] px-[16px] lg:text-sm text-[12px] rounded-[43px] ">
                  IV. Residence Permit Extension Procedures
                </span>
                <div className="mt-6">
                  <h3 className="text-[14px] font-bold">
                    1. Log in to the online service Enter Finland using strong
                    identifications
                  </h3>

                  <h3 className="text-[14px] font-bold mt-4">
                    2. Fill in the application and choose your service point
                  </h3>
                  <p className="text-[14px] font-normal">
                    Choose “Extended residence permit”
                  </p>
                  <p className="text-[14px] font-normal">
                    {" "}
                    Fill in the application form and add the required
                    attachments
                  </p>
                  <p className="text-[14px] font-normal">
                    Add the retrieval code for your digital passport photo from
                    the photo shop to your application.
                  </p>
                  <p className="text-[14px] font-normal">
                    ✢ To get an official passport photo, go to a photo shop that
                    takes passport photos.
                  </p>
                  <p className="text-[14px] font-normal">
                    ✢ The passport photo may not be more than 6 months old.
                  </p>
                  <p className="text-[14px] font-normal">
                    ✢ Add a paper photo or the photograph retrieval code from
                    the photo shop to your application.
                  </p>

                  <h3 className="text-[14px] font-bold mt-4">
                    3. Pay and submit the application
                  </h3>
                  <p className="text-[14px] font-normal">
                    Applications are subject to a fee (180 EUR if you apply
                    online, 250 EUR if you apply on paper). You can pay the
                    processing fee in Enter Finland with the most common credit
                    cards or using Finnish online banking services.
                  </p>
                  <p className="text-[14px] font-normal mt-3">
                    If you do not pay the processing fee in Enter Finland, you
                    must visit a service point to prove your identity and pay
                    the processing fee there.
                  </p>

                  <h3 className="text-[14px] font-bold mt-4">
                    4. Submit your application
                  </h3>

                  <h3 className="text-[14px] font-bold mt-4">
                    5. Visit the selected authority to prove your identity
                  </h3>
                  <p className="text-[14px] font-normal">
                    After you submit your application, Enter Finland will tell
                    you what you need to do next. If required, visit a service
                    point of the Finnish Immigration Service to prove your
                    identity and present the original copies of the attachments
                    you added to your application.
                  </p>
                  <p className="text-[14px] font-normal mt-3">
                    Book an appointment in advance using the appointment system
                    of the Finnish Immigration Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RPExtension;
