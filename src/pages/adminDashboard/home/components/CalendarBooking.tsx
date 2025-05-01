import React, { useState } from 'react';

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const CalendarBooking = ({ initialViewMode = 'month' }) => {
  // State for calendar
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState(initialViewMode);
  
  // Get current month info
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  // Generate days array with blank spaces for the first week
  const generateMonthDays = () => {
    const blanks = Array(firstDayOfMonth).fill(null);
    const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    return [...blanks, ...monthDays];
  };
  
  // Generate week days
  const generateWeekDays = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek);
    
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      return day.getMonth() === currentMonth ? day.getDate() : null;
    });
  };
  
  // Generate days based on view mode
  const getDays = () => {
    switch (viewMode) {
      case 'day':
        const today = new Date().getDate();
        return [today];
      case 'week':
        return generateWeekDays();
      case 'month':
      default:
        return generateMonthDays();
    }
  };
  
  const days = getDays();
  
  // Weeks calculation for the grid (only needed for month view)
  const getWeeksGrid = () => {
    if (viewMode !== 'month') {
      return [days];
    }
    
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    
    // Ensure we have 6 rows (42 cells) for month view
    while (weeks.length < 6) {
      const lastWeek:any = weeks[weeks.length - 1];
      const remainingDays = 7 - lastWeek.length;
      if (remainingDays > 0) {
        weeks[weeks.length - 1] = [...lastWeek, ...Array(remainingDays).fill(null)];
      } else {
        weeks.push(Array(7).fill(null));
      }
    }
    
    return weeks;
  };
  
  const weeks = getWeeksGrid();
  
  const isCurrentDay = (day:any) => {
    if (day === null) return false;
    const today = new Date();
    return day === today.getDate() && 
           currentMonth === today.getMonth() && 
           currentYear === today.getFullYear();
  };
  
  const isSelected = (day:any) => {
    if (day === null) return false;
    return day === selectedDate.getDate() && 
           currentMonth === selectedDate.getMonth() && 
           currentYear === selectedDate.getFullYear();
  };
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const navigateMonth = (step:any) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + step);
    setCurrentDate(newDate);
  };
  
  const getViewTitle = () => {
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
      day: viewMode === 'day' ? 'numeric' : undefined,
      weekday: viewMode === 'day' ? 'long' : undefined
    });
    
    if (viewMode === 'week') {
      const startOfWeek = new Date(currentDate);
      const dayOfWeek = currentDate.getDay();
      startOfWeek.setDate(currentDate.getDate() - dayOfWeek);
      
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      
      const startMonth = startOfWeek.getMonth();
      const endMonth = endOfWeek.getMonth();
      
      if (startMonth === endMonth) {
        return `${monthNames[startMonth]} ${currentYear}`;
      } else {
        return `${monthNames[startMonth]}-${monthNames[endMonth]} ${currentYear}`;
      }
    }
    
    return formattedDate;
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-semibold">
          {getViewTitle()}
        </h3>
        <div className="flex space-x-1">
          <button 
            className={`text-xs px-2 py-1 rounded-md ${viewMode === 'day' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setViewMode('day')}
          >
            Day
          </button>
          <button 
            className={`text-xs px-2 py-1 rounded-md ${viewMode === 'week' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setViewMode('week')}
          >
            Week
          </button>
          <button 
            className={`text-xs px-2 py-1 rounded-md ${viewMode === 'month' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
            onClick={() => setViewMode('month')}
          >
            Month
          </button>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-2">
        <button 
          onClick={() => navigateMonth(-1)}
          className="text-sm text-gray-500 hover:text-gray-800"
        >
          &lt;
        </button>
        <div>
          <button className="text-sm text-blue-600 bg-blue-100 rounded-full px-3 py-1">
            25 +
          </button>
          <span className="mx-2 text-sm">80%</span>
        </div>
        <button 
          onClick={() => navigateMonth(1)}
          className="text-sm text-gray-500 hover:text-gray-800"
        >
          &gt;
        </button>
      </div>
      
      {viewMode !== 'day' && (
        <div className="grid grid-cols-7 gap-2 text-center mb-2">
          {daysOfWeek.map((day, index) => (
            <div key={index} className="text-xs text-gray-500 font-medium">
              {day}
            </div>
          ))}
        </div>
      )}
      
      <div className={`grid ${viewMode === 'day' ? 'grid-cols-1' : 'grid-cols-7'} gap-2 text-center`}>
        {viewMode === 'day' ? (
          <div 
            className="text-sm p-6 rounded-lg bg-green-500 text-white flex items-center justify-center"
          >
            {currentDate.getDate()}
          </div>
        ) : (
          weeks.flat().map((day, index) => (
            <div 
              key={index} 
              className={`
                text-xs p-2 rounded-full cursor-pointer
                ${day === null ? 'opacity-0' : ''}
                ${isCurrentDay(day) ? 'bg-green-500 text-white' : ''}
                ${isSelected(day) && !isCurrentDay(day) ? 'bg-gray-200' : ''}
                ${!isCurrentDay(day) && !isSelected(day) ? 'hover:bg-gray-100' : ''}
              `}
              onClick={() => day && setSelectedDate(new Date(currentYear, currentMonth, day))}
            >
              {day}
            </div>
          ))
        )}
      </div>
      
      <div className="mt-4 flex justify-center">
        <div className="flex items-center space-x-2 text-sm">
          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
          <span>84%</span>
          <div className="ml-4 bg-yellow-400 rounded-full p-2 h-6 w-6 flex items-center justify-center">
            <span className="text-xs font-bold">T</span>
          </div>
          <span>65</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;