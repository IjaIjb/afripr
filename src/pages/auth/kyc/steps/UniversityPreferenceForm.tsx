import React from "react";

const UniversityPreferenceForm = ({ userData, handleInputChange, onSubmit, onSkip, loading }:any) => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">University Preferences</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country of Interest
          </label>
          <select
            name="country_of_interest"
            value={userData.country_of_interest}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          >
            <option value="">Select Country</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Japan">Japan</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Region
          </label>
          <input
            type="text"
            name="preferred_region"
            value={userData.preferred_region}
            onChange={handleInputChange}
            placeholder="e.g., California, Ontario, London"
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Language of Instruction
          </label>
          <select
            name="preferred_language"
            value={userData.preferred_language}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          >
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Spanish">Spanish</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Budget (Approximate in USD)
          </label>
          <input
            type="text"
            name="budget"
            value={userData.budget}
            onChange={handleInputChange}
            placeholder="e.g., 20000"
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Study Mode
          </label>
          <select
            name="preferred_study_mode"
            value={userData.preferred_study_mode}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          >
            <option value="">Select Mode</option>
            <option value="On-Campus">On-Campus</option>
            <option value="Online">Online</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Previous Visa Rejection?
          </label>
          <select
            name="previous_visa_rejection"
            value={userData.previous_visa_rejection}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            type="button"
            onClick={onSkip}
            className="px-6 md:px-10 border border-[#1DB459] text-[#1DB459] py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            Skip
          </button>
          <button
            type="submit"
            className="px-6 md:px-10 bg-[#1DB459] text-white py-3 rounded-full hover:bg-green-700 transition-colors"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save & Continue"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UniversityPreferenceForm;