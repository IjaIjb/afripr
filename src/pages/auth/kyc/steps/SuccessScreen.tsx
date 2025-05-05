import React from "react";

const SuccessScreen = ({ onProceed }:any) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="bg-[#1DB459] rounded-full w-20 h-20 flex items-center justify-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold text-[#1DB459] mb-3">
        Profile Successfully Completed
      </h2>
      
      <p className="text-gray-600 text-center mb-8">
        You have completed your profile details. Kindly proceed to your dashboard.
      </p>
      
      <button
        onClick={onProceed}
        className="px-8 py-3 bg-[#1DB459] text-white rounded-full hover:bg-green-700 transition-colors"
      >
        Proceed to Dashboard
      </button>
    </div>
  );
};

export default SuccessScreen;