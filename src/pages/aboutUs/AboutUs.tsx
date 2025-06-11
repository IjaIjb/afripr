import React from "react";
// @ts-ignore
import Carousel from "react-grid-carousel";
import { Link, NavLink } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";


function AboutUs() {
  const images = [
    { url: "/images/about/Image1.jpg" },
    { url: "/images/about/Image2.jpg" },
    { url: "/images/about/Image3.jpg" },
    { url: "/images/about/Image4.jpg" },
    { url: "/images/about/Image5.jpg" },
    { url: "/images/about/Image6.jpg" },
  ];
  return (
    <>
      <Navbar />

      {/* <!-- Start block --> */}
      <section className="bg-gradient-to-r from-[#F4FAF5] to-[#FBFBFB] body-font font-poppins md:pt-20 pt-[75px]">
        <div className=" mx-auto text-center md:py-10 pt-4">
          <h1 className="text-[#000000] md:text-[32px] text-[28px] px-6 font-[700]">
            About Us
          </h1>
        </div>
        <div className="hidden md:flex justify-center mx-auto text-center md:py-4 ">
          <h1 className="text-[#000000] md:text-[48px] max-w-[1200px] text-[32px] px-6 font-[700]">
          Building a Bridge Connecting African Students to World-Class Education
          </h1>
        </div>
        {/* <div className="md:hidden bg-[#00461C] py-8 flex justify-center w-full">
          <h1 className="text-[32px] text-[#ffffff] font-[600]">About Us</h1>
        </div> */}
        <div className="md:hidden block px-8 mt-8">
          <img
            src="/images/about/about1.svg"
            alt="location"
            className="rounded-[10px]"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between max-w-screen-xl px-8 lg:px-14 md:pt-16 pt-5 pb-8 mx-auto lg:gap-20 ">
          <div className="hidden md:block my-6 lg:mt-0 px-6">
            <img
              src="/images/about/about1.svg"
              alt="about-us"
              className="rounded-[10px]"
            />
          </div>
          <div className="mr-auto place-self-center mb-10">
            <div className="hidden md:block">
              {/* <h1 className="max-w-2xl text-[20px] text-[#000000] font-semibold md:text-[30px]">We Build bridges<span className="text-[#48B774]"> between</span>  African </h1>
            <h1 className="max-w-2xl text-[20px] text-[#000000] font-semibold  md:text-[30px]">students<span className="text-[#48B774]"> and</span> Finnish education</h1>
             */}
              <h1 className="max-w-2xl text-[20px] text-[#000000] font-semibold md:text-[30px]">
                Who We Are{" "}
              </h1>
            </div>
            <div className="block md:hidden">
              <h1 className="max-w-2xl text-[22px] text-[#000000] font-semibold ">
                We Build bridges{" "}
              </h1>
              <h1 className="max-w-2xl text-[22px] text-[#000000] font-semibold">
                <span className="text-[#48B774]"> connecting</span> African
                students
              </h1>
              <h1 className="max-w-2xl text-[22px] text-[#000000] font-semibold ">
                <span className="text-[#48B774]"> and</span> Finnish education
              </h1>
            </div>

            <div className=" lg:px-0">
              <p className="max-w-2xl mb-2 mt-6 font-light text-[#666666]  text-sm md:leading-relaxed">
                {/* AfriProEdu is an Edtech platform providing educational
                consulting services for African students to study in Finland and
                also empowering African students to learn the Finnish language
                to study in Finland tuition free. */}
                AfriProEdu is a leading EdTech platform dedicated to empowering African students to study abroad. We offer consulting services for studying in Finland, providing end-to-end guidance to make your academic dreams a reality.

              </p>
              <h3 className="text-[#098A3C] text-[14px] font-bold mt-6">
                {/* AfriProEdu provides two academic pathways: */}
                Academic Pathway We Offer
              </h3>
              <p className="max-w-2xl mb-2 mt-3 font-light text-[#666666]  text-sm md:leading-relaxed">
                <span className="font-bold text-[#000000]">
                  {/* Study in Finnish: */}
                  Study in Finland
                </span>{" "}
     
              </p>
              <p className="max-w-2xl mb-2  font-light text-[#666666]  text-sm md:leading-relaxed">
                {/* This pathway is open to categories of students: those 

                 individuals
                aged 18 and above who can explore vocational education programs. */}
                           Tuition-Free Pathway: Learn Finnish online for 8-10 months and access tuition-free vocational and degree programs.<br />
English-Taught Programs: Fee-paying programs with simple English proficiency tests, offering globally recognized degrees.

              </p>
              {/* <p className="max-w-2xl mb-2 mt-6 font-light text-[#666666]  text-sm md:leading-relaxed">
                <span className="font-bold text-[#000000]">
              
                  Study in Lithuania

                </span>
              </p>

              <p className="max-w-2xl mb-2 font-light text-[#666666]  text-sm md:leading-relaxed">
              High-Quality Education: Over 500 English-taught Bachelor’s and Master’s programs are available at prestigious institutions in Lithuania.<br />
Affordable Costs: Lithuania combines excellent education with affordable tuition and living expenses.<br />
Post-Graduation Opportunities: A growing economy and startup-friendly environment offer career prospects.<br />
No IELTS Required: Flexible admission requirements make Lithuania accessible to a broader range of students.

              </p> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-gradient-to-r from-[#F4FAF5] to-[#FBFBFB] body-font font-poppins ">
        <div className="flex flex-col lg:flex-row lg:justify-between max-w-screen-xl px-8 lg:px-14 md:pt-20 pb-10 md:pb-16 mx-auto lg:gap-20 ">
          <div className=" md:my-6 my-3 lg:mt-0   ">
            {/* <img src="/images/about2.svg" alt="location" /> */}
            <h1 className="md:text-[38px] text-[30px] font-semibold mt-5">
              Why Choose us?
            </h1>
            <p className="md:text-[16px] text-[14px] text-[#666666] mt-6">
              {/* AfriProEdu is the best choice for African students who want to
              study in Finland because it offers a unique combination of
              features and benefits that are specifically designed to support
              their success. */}
              AfriProEdu provides full support, from admission to visa guidance, ensuring a seamless process for African students pursuing education in Finland.
            </p>
            <p>Start your journey today at Afriproedu.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white px-[20px] pt-[40px] pb-4 rounded-[10px] md:mt-0 mt-10 shadow-md relative">
              {/* <div className="w-[70px] h-[70px] rounded-[7px] bg-white border border-[#1DB459] absolute top-[-35px]"></div> */}
              <h3 className="text-[20px] font-semibold mt-[6px]">
                Tuition-free Education
              </h3>
              <p className="mt-[6px] max-w-[300px] text-[12px] text-[#777777]">
              AfriProEdu connects African students to affordable study opportunities in Finland. Finland offers tuition-free education through an 8-10 month Finnish language program. The pathway ensure high-quality, globally recognized degrees at minimal expense, empowering students to achieve their academic goals.
              </p>
            </div>
            <div className="bg-white px-[20px] pt-[40px] pb-4 rounded-[10px] md:mt-0 mt-10 shadow-md relative">
              {/* <div className="w-[70px] h-[70px] rounded-[7px] bg-white border border-[#1DB459] absolute top-[-35px]"></div> */}
              <h3 className="text-[20px] font-semibold mt-[6px]">
                High-quality Education
              </h3>
              <p className="mt-[6px] text-[12px] text-[#777777]">
              Finland is globally recognized for their exceptional education systems, offering diverse programs designed to meet the needs of international students.
              </p>
            </div>
            <div className="bg-white px-[20px] pt-[40px] pb-4 rounded-[10px] md:mt-8 mt-10 shadow-md relative">
              {/* <div className="w-[70px] h-[70px] rounded-[7px] bg-white border border-[#1DB459] absolute top-[-35px]"></div> */}
              <h3 className="text-[20px] font-semibold mt-[6px]">
                Support for African Students
              </h3>
              <p className="mt-[6px] text-[12px] text-[#777777]">
              AfriProEdu is dedicated to empowering African students by providing tailored support to make studying abroad in Finland accessible and seamless.
              </p>
            </div>
            <div className="bg-white px-[20px] pt-[40px] pb-4 rounded-[10px] md:mt-8 mt-10 shadow-md relative">
              {/* <div className="w-[70px] h-[70px] rounded-[7px] bg-white border border-[#1DB459] absolute top-[-35px]"></div> */}
              <h3 className="text-[20px] font-semibold mt-[6px]">
                Bright Future
              </h3>
              <p className="mt-[6px] text-[12px] text-[#777777]">
              Studying abroad in Finland offers African students life-changing opportunities to build a successful future. Both countries are recognized for their outstanding education systems, thriving economies, and global career prospects.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-[#F2F7F3] body-font font-poppins pt-5 pb-7">
        <div className="flex w-full justify-center">
          <div>
            <div className=" text-center mb-5 mt-5">
              <h1 className="text-[#0E0E0E] md:text-3xl text-2xl px-6 font-semibold">
                Our Team
              </h1>
              <p className="text-[#777777] text-[14px] font-light mt-3">
                Meet a team that has your best interest at heart.
              </p>
            </div>
            <div className="flex text-center w-full justify-center">
              <div className="lg:max-w-screen-xl px-8 lg:px-14  pb-8   ">
                <div className="flex justify-center">
                <div className=" pt-[250px] relative">
                      <div className=" bg-white shadow-lg pt-[32px] px-4 pb-4 rounded-[10px]">
                        <div className="flex justify-center -mt-[264px]">
                          <img
                            src="/images/about/john.svg"
                            alt="location"
                            className=""
                          />
                        </div>

                        <div className="flex justify-center">
                          <div className="">
                            <h4 className="text-[#000000] text-center text-[22px] font-medium pb-2">
                              John Samuel
                            </h4>
                            <div className="flex justify-center">
                              <div className="bg-[#1DB459] w-[268px] text-center rounded-[5px] py-1 mb-3">
                                <h5 className="text-[#303030] text-[14px]">
                                  CEO/Founder AfriProEdu
                                </h5>
                              </div>
                            </div>
                            <div className="flex justify-center text-center pb-8">
                              <h5 className="text-[#777777] text-[12px] max-w-[420px]">
                                Experienced Founder proficient in IT services,
                                with a strong track record in business
                                development, marketing, and sales. Expert in
                                connecting European and African markets.
                              </h5>
                            </div>
                            <div className="flex justify-center">
                              <a
                                target="_blank"
                                href="https://www.linkedin.com/in/john-samuel-b0818720/"
                                className=" "
                              >
                                <img
                                  src="/images/about/bi_linkedin.svg"
                                  alt="location"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

<div className="flex flex-col md:flex-row  gap-6 justify-center md:justify-between">
              <div className="flex justify-center">
                <div className="pt-[200px] relative">
                      <div className=" bg-white shadow-lg md:w-full w-[400px] pt-[1px] px-4 pb-4 rounded-[10px]">
                        <div className=" flex justify-center -mt-[100px] rounded-[20px] overflow-hidden">
                          <img
                            src="/images/about/wisdom.jpg"
                            alt="location"
                            className="w-[265px] rounded-[20px]  h-[265px]"
                          />
                        </div>

                        <div className="flex justify-center">
                          <div className="">
                            <h4 className="text-[#000000] text-center text-[22px] font-medium pb-2">
                           Wisdom Osahenoma 
                            </h4>
                            <div className="flex justify-center">
                              <div className="bg-[#1DB459] w-[268px]  text-center rounded-[5px] py-1 mb-3">
                                <h5 className="text-[#303030] text-[14px]">
                                Chief Finance Manager
                                </h5>
                              </div>
                            </div>
                            <div className="flex justify-center text-center pb-8">
                              <h5 className="text-[#777777] text-[12px] max-w-[300px] md:max-w-[260px]">
                              An experienced Chief Financial Manager with a proven track record in financial strategy and management.
                              </h5>
                            </div>
                            {/* <div className="flex justify-center">
                              <a
                                target="_blank"
                                href="https://www.linkedin.com/in/stephanieosayameh/"
                                className=" "
                              >
                                <img
                                  src="/images/about/bi_linkedin.svg"
                                  alt="location"
                                />
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="flex justify-center">
                    <div className="pt-[200px] md:w-full relative">
                      <div className=" bg-white shadow-lg pt-[1px] px-4 pb-4 rounded-[10px]">
                        <div className=" flex justify-center -mt-[100px] rounded-[20px] overflow-hidden">
                          <img
                            src="/images/about/Roseline.svg"
                            alt="location"
                            className=""
                          />
                        </div>

                        <div className="flex justify-center">
                          <div className="">
                            <h4 className="text-[#000000] text-center text-[22px] font-medium pb-2">
                            Roseline Ibeosu
                            </h4>
                            <div className="flex justify-center">
                              <div className="bg-[#1DB459] w-[268px]  text-center rounded-[5px] py-1 mb-3">
                                <h5 className="text-[#303030] text-[14px]">
                                Customer Success Lead
                                </h5>
                              </div>
                            </div>
                            <div className="flex justify-center text-center pb-8">
                              <h5 className="text-[#777777] text-[12px] max-w-[260px]">
                                {/* Experienced in overseeing daily operations, optimizing business processes, and driving strategic initiatives.  */}
                                Champions customer satisfaction and retention by driving success strategies and nurturing client relationships.
                                {/* Ensures customers achieve their goals with the product or service. */}
                              </h5>
                            </div>
                            {/* <div className="flex justify-center">
                              <a
                                target="_blank"
                                href="https://www.linkedin.com/in/stephanieosayameh/"
                                className=" "
                              >
                                <img
                                  src="/images/about/bi_linkedin.svg"
                                  alt="location"
                                />
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>

                    <div className="flex justify-center">
                    <div className="pt-[200px] md:w-full relative">
                      <div className=" bg-white shadow-lg pt-[1px] px-4 pb-4 rounded-[10px]">
                        <div className=" flex justify-center -mt-[100px] rounded-[20px] overflow-hidden">
                          <img
                            src="/images/about/Odoemenem.svg"
                            alt="location"
                            className=""
                          />
                        </div>

                        <div className="flex justify-center">
                          <div className="">
                            <h4 className="text-[#000000] text-center text-[22px] font-medium pb-2">
                            John Odoemenem
                            </h4>
                            <div className="flex justify-center">
                              <div className="bg-[#1DB459] w-[268px]  text-center rounded-[5px] py-1 mb-3">
                                <h5 className="text-[#303030] text-[14px]">
                                Product Lead
                                </h5>
                              </div>
                            </div>
                            <div className="flex justify-center text-center pb-8">
                              <h5 className="text-[#777777] text-[12px] max-w-[260px]">
                                {/* Experienced in overseeing daily operations, optimizing business processes, and driving strategic initiatives.  */}
                                Leads product strategy and execution, aligning user needs with business goals.
                                Ensures successful product delivery.
                              </h5>
                            </div>
                            {/* <div className="flex justify-center">
                              <a
                                target="_blank"
                                href="https://www.linkedin.com/in/stephanieosayameh/"
                                className=" "
                              >
                                <img
                                  src="/images/about/bi_linkedin.svg"
                                  alt="location"
                                />
                              </a>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-[#ffffff] body-font font-poppins md:pt-3 pt-5 pb-16">
        <div className="mx-auto text-center mt-6">
          <h1 className=" flex-shrink font-semibold text-[#171717] md:text-[38px] text-[32px]">
            Our Gallery
          </h1>
          <p className="hidden md:block text-[#838383]">
            We are empowering African students with the best education system in
            the world <br />
            (the Finnish education) to build a future and a better Africa.
          </p>
          <p className="md:hidden block text-[#838383]">
            We are empowering African students with the best education system in
            the world (the Finnish education) to build a future and a better
            Africa.
          </p>
        </div>
        <div className="max-w-screen-xl px-8 lg:px-14 md:pt-10 grid md:grid-cols-3 grid-cols-1  pb-5 mx-auto lg:gap-20">
          <div className="mt-[50px] md:mt-0">
            <img
              src="/images/about/gallery1.jpeg"
              alt="location"
              className=" group-hover:scale-110 transition duration-300 ease-in-out"
            />
          </div>
          <div className="mt-[30px] md:mt-0">
            <img src="/images/about/gallery2.jpeg" alt="location" />
          </div>
          <div className="mt-[30px] md:mt-0">
            <img src="/images/about/gallery3.jpeg" alt="location" />
          </div>
        </div>
        <div className="px-8 lg:px-14 max-w-screen-xl mx-auto flex justify-end">
          <NavLink to={"/gallery"} className="flex cursor-pointer">
            <h3 className="text-[#1DB459] hover:text-[#1C8B48] font-medium">
              See More{" "}
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#1db459"
                fill-rule="evenodd"
                d="m6.5 17.5l8.25-5.5L6.5 6.5l1-1.5L18 12L7.5 19z"
              />
            </svg>
          </NavLink>
        </div>
      </section>

      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-[#FBFBFB] body-font font-poppins">
        <div className="flex flex-col lg:flex-row lg:justify-between max-w-screen-xl px-8 lg:px-14 md:pt-16 pt-8 pb-8 mx-auto lg:gap-20 ">
          <div className=" my-6 lg:mt-0 flex justify-center ">
            {/* <img src="/images/about/about2.svg" alt="location" /> */}
            <div className="md:flex hidden px-6">
              <SimpleImageSlider
                width={400}
                height={330}
                images={images}
                showBullets={false}
                showNavs={false}
                autoPlay={true}
              />
            </div>
            <div className="flex md:hidden px-6">
              <SimpleImageSlider
                width={330}
                height={330}
                images={images}
                showBullets={false}
                showNavs={false}
                autoPlay={true}
              />
            </div>
          </div>

          <div className="mr-auto place-self-center lg:mb-20 lg:px-6">
            <h1 className="max-w-2xl text-2xl text-[#000000] font-semibold leading-10 md:text-3xl xl:text-4xl">
              Our <span className="text-[#48B774]">Gallery</span>
            </h1>
            <p className="max-w-2xl mb-2 md:mt-2 font-semibold text-[#000000]  text-base md:leading-relaxed">
              We go round the globe trying to impact as much lives as we can
            </p>
            <p className="max-w-2xl mt-3 font-light text-[#838383]  text-sm leading-relaxed">
              We are empowering African students with the best education system
              in the world (the Finnish education) to build a future and a
              better Africa.
            </p>
            <p className="max-w-2xl mt-4 font-light text-[#838383]  text-sm leading-relaxed">
              We aim to empower African youths with the opportunities to
              graduate from a Finnish vocational school for FREE! You can
              develop your professional
            </p>
          </div>
        </div>
      </section>
      {/* <!-- End block --> */}

      {/* <!-- Start block --> */}
      <section className="bg-[#000000] body-font font-poppins ">
        <div className="flex  flex-col-reverse lg:flex-row lg:justify-between max-w-screen-xl px-8 lg:px-14 md:pt-20 pt-8 pb-8 mx-auto lg:gap-20 ">
          <div className="mr-auto place-self-center lg:mb-20">
            <h1 className="max-w-2xl md:mb-2 text-2xl text-white font-semibold md:leading-10 md:text-3xl xl:text-4xl">
              Have a question ?
            </h1>
            <h1 className="max-w-2xl md:mb-2 text-2xl text-[#48B774] font-semibold md:leading-10 md:text-3xl xl:text-4xl">
              Our team is happy
            </h1>
            <h1 className="max-w-2xl md:mb-4 text-2xl text-white font-semibold md:leading-10 md:text-3xl xl:text-4xl">
              to assist you
            </h1>
            <div className=" lg:px-0">
              <p className="max-w-2xl  mt-6 mb-6 font-light text-white  text-sm leading-relaxed">
                If you have any questions or would like to to learn more about
                studying in Finland, please don't hesitate to contact us. Our
                team is dedicated to helping you achieve your academic goals and
                providing you with the information you need to make an informed
                decision about your education. Contact us today via email or by
                filling out the contact form on this page.
              </p>
            </div>
            <hr className="hidden md:block h-px my-10 bg-[#D9D9D9] border-0 " />

            <NavLink to="/contact-us" className="mt-6">
              <button
                type="button"
                className="py-2.5 px-6  text-sm font-medium text-[#48B774] bg-white rounded-lg border border-white "
              >
                Contact Us
              </button>
            </NavLink>
          </div>
          <div className=" my-6 lg:mt-0 ">
            <img src="/images/about/about-fineboy.svg" alt="location" />
          </div>
        </div>
      </section>

      {/* <!-- End block --> */}
      <section>
        <Footer />
      </section>
    </>
  );
}

export default AboutUs;
