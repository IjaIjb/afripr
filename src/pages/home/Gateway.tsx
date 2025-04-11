import React from "react";

const Gateway = () => {
  const steps = [
    {
      id: 1,
      title: "Find Courses",
      description:
        "Choose from over 30,000 premium courses offered by more than 700 top universities worldwide.",
      image: "/images/home/gateway1.svg",
    },
    {
      id: 2,
      title: "Apply & Get Offer",
      description:
        "Once students decide on a program, AirPedia assists with the application process.",
      image: "/images/home/gateway2.svg",
    },
    {
      id: 3,
      title: "Fly",
      description:
        "After securing admission, AirPedia supports students through the visa application and travel planning process.",
      image: "/images/home/gateway3.svg",
    },
  ];
  return (
    <div>
      <section className="py-12 ">
        <h3 className="text-green-600 text-center font-semibold text-sm">
          How do I get started?
        </h3>
        <h2 className="text-2xl font-bold text-center text-gray-900 mt-2">
          Your Gateway to Global Education
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6  mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="bg-white shadow-md w-full p-6 rounded-lg"
            >
              {/* <p className="text-gray-500 text-xs font-medium">Step 00{index + 1}</p> */}
              <div className="flex gap-3">
                <img src={step.image} alt={step.title} className="mt-3" />
                <div>
                  <h4 className="text-[24px] font-bold text-[#333333] mt-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-[14px] mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="mt-6 bg-primary text-white font-medium py-2 px-6 rounded-full flex items-center gap-2 hover:bg-green-700 transition">
            Explore Courses
            <span className="text-xl">&#8594;</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gateway;
