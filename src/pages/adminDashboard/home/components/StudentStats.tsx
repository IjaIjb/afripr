import React from 'react';

const StudentStats = ({ students }:any) => {
  const getCircleColor = (color:any) => {
    const colorMap:any = {
      'red': '#EF4444',
      'blue': '#3B82F6',
      'green': '#10B981'
    };
    return colorMap[color] || color;
  };
  
  const createCircle = (percentage:any, color:any, change:any) => {
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (percentage / 100) * circumference;
    
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#E5E7EB" 
              strokeWidth="10"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke={getCircleColor(color)} 
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-2xl font-bold">{percentage}%</div>
          </div>
        </div>
        <div className="mt-1 text-sm text-gray-500">{change}</div>
      </div>
    );
  };
  
  return (
    <div className="flex justify-around">
      {students.map((student:any, index:any) => (
        <div key={index}>
          {createCircle(student.value, student.color, student.change)}
        </div>
      ))}
    </div>
  );
};

export default StudentStats;