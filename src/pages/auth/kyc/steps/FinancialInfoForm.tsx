import React from "react";

const FinancialInfoForm = ({ userData, handleInputChange, onSubmit, onSkip, loading }:any) => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Financial Information</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Self-financed or Sponsored?
          </label>
          <select
            name="self_funding_or_sponsored"
            value={userData.self_funding_or_sponsored}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
            required
          >
            <option value="">Select an option</option>
            <option value="Self-funding">Self-funding</option>
            <option value="Family-sponsored">Family-sponsored</option>
            <option value="Government-sponsored">Government-sponsored</option>
            <option value="Organization-sponsored">Organization-sponsored</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Annual Family Income Range
          </label>
          <select
            name="annual_family_income_range"
            value={userData.annual_family_income_range}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          >
            <option value="">Select Income Range</option>
            <option value="Less than $10,000">Less than $10,000</option>
            <option value="$10,000 - $30,000">$10,000 - $30,000</option>
            <option value="$30,000 - $50,000">$30,000 - $50,000</option>
            <option value="$50,000 - $75,000">$50,000 - $75,000</option>
            <option value="$75,000 - $100,000">$75,000 - $100,000</option>
            <option value="Above $100,000">Above $100,000</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Funding Plan (Loan, Scholarship, Parent)
          </label>
          <select
            name="funding_plan"
            value={userData.funding_plan}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          >
            <option value="">Select Funding Plan</option>
            <option value="Personal Savings">Personal Savings</option>
            <option value="Family Support">Family Support</option>
            <option value="Scholarship">Scholarship</option>
            <option value="Education Loan">Education Loan</option>
            <option value="Employer Sponsorship">Employer Sponsorship</option>
            <option value="Government Grant">Government Grant</option>
            <option value="Mixed Sources">Mixed Sources</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Willing to take a student loan?
          </label>
          <select
            name="willing_to_take_loan"
            value={userData.willing_to_take_loan}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
          >
            <option value="">Select an option</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Maybe">Maybe</option>
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

export default FinancialInfoForm;