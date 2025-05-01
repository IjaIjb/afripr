import React from 'react';

const StatsCircles = ({ data }:any) => {
  const { occupied, availability, performance } = data;
  
  const createCircle = (percentage:any, color:any, size = 'medium') => {
    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (percentage / 100) * circumference;
    
    const sizeClass:any = {
      small: 'w-24 h-24',
      medium: 'w-28 h-28',
      large: 'w-32 h-32'
    };
    
    const colorClass:any = {
      blue: '#3B82F6',
      purple: '#8B5CF6',
      green: '#10B981',
      red: '#EF4444',
      yellow: '#F59E0B'
    };
    
    return (
      <div className={`relative ${sizeClass[size]}`}>
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
            stroke={colorClass[color] || color} 
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-xl font-bold">{percentage}%</div>
        </div>
      </div>
    );
  };
  
  return (
    <div className="h-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm">Occupied</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <span className="text-sm">Availability</span>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center items-center">
        {createCircle(availability.value, 'purple', 'large')}
        
        <div className="flex justify-center items-center mt-6 space-x-6">
          {performance.map((item:any, index:any) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
              <span className="text-sm">{item.value}%</span>
              <span className="text-xs text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCircles;