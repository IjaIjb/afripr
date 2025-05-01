import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const PerformanceChart = ({ data }:any) => {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12 }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12 }} 
            domain={['dataMin - 5', 'dataMax + 5']}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8B5CF6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-end mt-2">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
          <span className="text-xs text-gray-500">+2.45%</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;