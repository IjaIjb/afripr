import React, { useState } from 'react';
import AdminDashboardLayout from '../../../component/AdminDashboardLayout';
// import { ChevronLeft, ChevronRight, MoreHorizontal, User } from 'lucide-react';

const ConsultationBooking = () => {
  const [selectedMonth, setSelectedMonth] = useState('October 2019');
  
  // Mock data for appointments
  const appointments = [
    {
      id: 1,
      name: "Duncan Coleman",
      position: "Product Designer",
      time: "10:00 AM to 11:00 PM",
      avatarColor: "bg-blue-500",
      users: [
        { initials: "DC", color: "bg-blue-500" },
        { initials: "JK", color: "bg-green-500" },
        { initials: "MS", color: "bg-purple-500" }
      ]
    },
    {
      id: 2,
      name: "Nadine Fisher",
      position: "UI Designer",
      time: "10:00 AM to 11:00 PM",
      avatarColor: "bg-yellow-500",
      users: [
        { initials: "NF", color: "bg-yellow-500" },
        { initials: "TS", color: "bg-red-500" },
        { initials: "AL", color: "bg-blue-500" }
      ]
    },
    {
      id: 3,
      name: "Staciewicz Doci",
      position: "Art Director • UX • UI Designer",
      time: "10:00 AM to 11:00 PM",
      avatarColor: "bg-purple-500",
      users: [
        { initials: "SD", color: "bg-purple-500" },
        { initials: "JD", color: "bg-blue-500" },
        { initials: "RR", color: "bg-gray-500" }
      ]
    },
    {
      id: 4,
      name: "Elliot Walker",
      position: "Project Manager • Art Director PM",
      time: "10:00 AM to 11:00 PM",
      avatarColor: "bg-green-500",
      users: [
        { initials: "EW", color: "bg-green-500" },
        { initials: "MS", color: "bg-yellow-500" },
        { initials: "KJ", color: "bg-purple-500" }
      ]
    },
    {
      id: 5,
      name: "Allyn Vaden",
      position: "Front End Developer",
      time: "10:00 AM to 11:00 PM",
      avatarColor: "bg-red-500",
      users: [
        { initials: "AV", color: "bg-red-500" },
        { initials: "BC", color: "bg-blue-500" },
        { initials: "TF", color: "bg-green-500" }
      ]
    }
  ];

  // Calendar data - events on specific days
  const calendarEvents:any = {
    4: { title: "Meeting", bgColor: "bg-purple-200" },
    24: { title: "Design Review", bgColor: "bg-pink-200" },
    28: { title: "Workshop", bgColor: "bg-orange-200" }
  };

  // Generate calendar grid
  const generateCalendarDays = () => {
    // Days of the week
    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    
    // Generate previous month days
    const prevMonthDays = [30];
    
    // Generate current month days
    const currentMonthDays = Array.from({ length: 31 }, (_, i) => i + 1);
    
    // Generate next month days
    const nextMonthDays = Array.from({ length: 6 }, (_, i) => i + 1);
    
    // Combine all days
    const allDays = [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];

    return (
      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Days of week header */}
        {daysOfWeek.map((day, index) => (
          <div key={`day-${index}`} className="py-2 text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}
        
        {/* Calendar dates */}
        {allDays.map((day, index) => {
          const isPrevMonth = day === 30 && index === 0;
          const isNextMonth = day <= 6 && index >= 31;
          const isToday = day === 1 && !isPrevMonth && !isNextMonth;
          const hasEvent = calendarEvents[day] && !isPrevMonth && !isNextMonth;
          
          return (
            <div 
              key={`date-${index}`} 
              className={`py-2 relative ${isPrevMonth || isNextMonth ? 'text-gray-400' : 'text-gray-900'} ${isToday ? 'bg-green-500 text-white rounded-full' : ''}`}
            >
              {day}
              {hasEvent && (
                <div className={`absolute bottom-0 left-0 right-0 mx-auto w-3/4 h-1 ${calendarEvents[day].bgColor} rounded-t-md`}></div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <AdminDashboardLayout>
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto bg-white rounded-lg shadow-lg overflow-hidden w-full ">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-green-500 mb-6">Consultation Booking</h1>
          
          <div className="flex flex-row">
            {/* Left section */}
            <div className="w-2/5 pr-6 border-r border-gray-200">
              <button className="w-full bg-green-500 text-white py-2 rounded-md mb-4">
                Upcoming Booking
              </button>
              
              <div className="mb-6">
                <button className="text-center w-full border border-gray-200 py-2 rounded-md">
                  Today
                </button>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-500 mb-4">You are going to:</p>
                
                <div className="space-y-6">
                  {appointments.map(appointment => (
                    <div key={appointment.id} className="flex items-start">
                      <div className={`${appointment.avatarColor} text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-3`}>
                        {/* <User size={20} /> */}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{appointment.name}</h3>
                        <p className="text-gray-500 text-sm">{appointment.position}</p>
                        <p className="text-gray-500 text-xs mt-1">{appointment.time}</p>
                        <div className="flex -space-x-2 mt-2">
                          {appointment.users.map((user, idx) => (
                            <div key={idx} className={`${user.color} text-white w-6 h-6 rounded-full flex items-center justify-center text-xs border border-white`}>
                              {user.initials}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="text-green-500 text-sm mt-6 block">See More</button>
              </div>
            </div>
            
            {/* Right section - Calendar */}
            <div className="w-3/5 pl-6">
              <div className="flex justify-between items-center mb-6">
                <button className="text-gray-500">
                  {/* <ChevronLeft size={20} /> */}
                </button>
                <h2 className="text-lg font-medium">{selectedMonth}</h2>
                <button className="text-gray-500">
                  {/* <ChevronRight size={20} /> */}
                </button>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                  <span className="text-gray-500 text-sm">Thu</span>
                  <span className="text-white bg-green-500 text-sm px-2 rounded">Today</span>
                </div>
                <div>
                  {/* <MoreHorizontal size={20} className="text-gray-500" /> */}
                </div>
              </div>
              
              {generateCalendarDays()}
            </div>
          </div>
        </div>
      </div>
    </div>
    </AdminDashboardLayout>
  );
};

export default ConsultationBooking;