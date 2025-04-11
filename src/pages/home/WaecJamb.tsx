import React from "react";

const WaecJamb = () => {
  return (
    <div>
      <section className="py-10 px-8 bg-white font-[\'Great Sailor\']">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="">
            <img
              src="/images/home/waec.svg"
              alt="Study Abroad Illustration"
              className=""
            />
          </div>
          <div className="relative">
            <h4 className="absolute text-[#000227]/[5%] text-[250px] font-[\'Great Sailor\'] bottom-0">
              04
            </h4>
            <p className="text-[#000227]/[50%]  text-[20px]">Features</p>
            <h3 className="text-[36px] font-bold text-primary">
              WAEC & JAMB Test
            </h3>
            <p className="text-[#333333] text-[14px] mt-4 max-w-[419px]">
              Get ready to ace your WAEC and JAMB exams with AfriProEdu! Access
              top-notch resources and practice tools tailored to your needs.
              <br /> Stay confident with expert guidance and personalized
              support. Achieve your goals and unlock your path to success!
            </p>
            <button className="mt-6 bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-primary/[70%]">
              Explore Tech Courses →
            </button>
          </div>
          </div>
      </section>
    </div>
  );
};

export default WaecJamb;
