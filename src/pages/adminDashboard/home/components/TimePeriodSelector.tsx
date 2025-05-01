import React from 'react';

const TimePeriodSelector = ({ activePeriod, onChange }:any) => {
  const periods = ['Day', 'Week', 'Month'];
  
  return (
    <div className="flex bg-gray-100 rounded-md p-1 w-fit mb-4">
      {periods.map((period) => (
        <button
          key={period}
          className={`px-4 py-1 text-sm rounded-md ${
            activePeriod === period.toLowerCase() 
              ? 'bg-white text-gray-900 shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onChange(period.toLowerCase())}
        >
          {period}
        </button>
      ))}
    </div>
  );
};

export default TimePeriodSelector;