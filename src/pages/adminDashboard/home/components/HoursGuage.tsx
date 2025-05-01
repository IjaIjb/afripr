import React from 'react';

const BusyHoursGauge = ({ data }:any) => {
  const { percentage, metrics } = data;
  
  // Calculate angle for gauge
  const calculateGaugeAngle = (percent:any) => {
    // 180 degrees is empty, 0 degrees is full
    return 180 - (percent / 100 * 180);
  };
  
  const angle = calculateGaugeAngle(percentage);
  
  return (
    <div className="h-full text-white">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-lg font-semibold">Busy now</h2>
        <div className="bg-green-600 rounded-md px-3 py-1 text-xs font-medium text-white">
          Live Update
        </div>
      </div>
      
      <div className="relative mt-4 mb-6">
        <div className="flex justify-center">
          <div className="relative w-40 h-24">
            {/* Background arc for gauge */}
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 120 60">
              <path
                d="M 10,60 A 50,50 0 0,1 110,60"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Foreground arc for gauge */}
              <path
                d="M 10,60 A 50,50 0 0,1 110,60"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray="157"
                strokeDashoffset={angle}
                transform="rotate(0, 60, 60)"
              />
            </svg>
            <div className="absolute inset-0 flex justify-center items-end pb-2">
              <div className="text-3xl font-bold text-white">
                {percentage}%
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 text-center">
        {metrics.map((metric:any, index:any) => (
          <div key={index} className="p-2">
            <p className="text-lg font-bold">{metric.value}</p>
            <p className="text-xs text-green-100">{metric.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusyHoursGauge;