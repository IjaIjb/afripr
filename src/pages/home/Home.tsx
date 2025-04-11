import React from "react";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Gateway from "./Gateway";
import AccelerateYourStudy from "./AccelerateYourStudy";
import Upskill from "./Upskill";
import PsychometricHome from "./PsychometricHome";
import WaecJamb from "./WaecJamb";
import LoanHome from "./LoanHome";
import BecomeAnAgent from "./BecomeAnAgent";
import Testimonial from "./Testimonial";
import ConsultationAndPartner from "./ConsultationAndPartner";
import Footer from "../../component/Footer";
import TopPrograms from "./TopPrograms";

const Home = () => {
  return (
    <div className=" h-full">
      <div className="relative">
        {/* <div
        className="absolute inset-0 bg-cover "
        style={{
          backgroundImage:
            "url('https://cdn.multiversx.com/webflow/Hero%20section%20background.webp')",
          // transform: "rotate(-100deg)", // Rotate the image slightly left
          transformOrigin: "center",
          top: "-20%",
          // backgroundSize: "80%", // Reduce or increase the size of the background image
          left: "-10%", // Push the image to the right side
          position: "absolute", // Ensure it's positioned correctly
        }}
      ></div> */}

        <div className="lg:p-3 p-2 flex w-full  justify-center ">
          <div className=" overflow-hidden z-10  rounded-[50px]  w-full">
            {/* <div className="bg-gradient-to-b from-[#0a0a0a00] via-[#0a0a0a] via-61% from-20% w-full rounded-[15px]  pt-[6px]"> */}
            <div className="flex justify-center">
              <div className="max-w-[2000px] mx-auto z-50 lg:px-14 px-3 w-full">
                <div className=" flex justify-center">
                  <Navbar />
                </div>
           <Hero />
           <Testimonial />
           <TopPrograms />
           <Gateway />
           <AccelerateYourStudy />
           <Upskill />
           <PsychometricHome />
           <WaecJamb />
           <LoanHome />
           <BecomeAnAgent />
           
           <ConsultationAndPartner />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <Footer />

      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
