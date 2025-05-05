import React from "react";

const ParentGuardianForm = ({ userData, handleInputChange, onSubmit, onSkip, loading }:any) => {
  const handleSubmit = (e:any) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Parents/Guardian Information</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Parent/Guardian Full Name
          </label>
          <input
            type="text"
            name="parent_fullname"
            value={userData.parent_fullname}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Relationship to Student
          </label>
          <select
            name="relationship"
            value={userData.relationship}
            onChange={handleInputChange}
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
            required
          >
            <option value="">Select Relationship</option>
            <option value="Parent">Parent</option>
            <option value="Guardian">Guardian</option>
            <option value="Sibling">Sibling</option>
            <option value="Other Family Member">Other Family Member</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Information
          </label>
          <input
            type="text"
            name="contact_information"
            value={userData.contact_information}
            onChange={handleInputChange}
            placeholder="Email or Phone Number"
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address (if different)
          </label>
          <textarea
            name="parent_address"
            value={userData.parent_address}
            onChange={handleInputChange}
            placeholder="Complete address if different from yours"
            className="w-full border border-[#D7F5DC] shadow-sm rounded-lg p-3 h-24"
          ></textarea>
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

export default ParentGuardianForm;