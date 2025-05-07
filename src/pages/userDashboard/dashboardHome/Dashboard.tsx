import React, { useEffect, useState } from 'react';
import { FaHome, FaUser, FaDollarSign, FaChartPie, FaCog, FaQuestion, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import UserDashboardLayout from '../../../component/UserDashboardLayout';
import { useSelector } from 'react-redux';
import { UserApis } from '../../../apis/userApi/userApi';

export default function Dashboard() {
  const [currentMonth, setCurrentMonth] = useState(1); // Feb
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  // Calendar data for February 2025
  const daysInMonth = 29; // February 2025 has 29 days (leap year)
  const firstDayOfMonth = 5; // Saturday (0-indexed where 0 is Sunday)
  
  // Calculate calendar days
  const calendarDays = [];
  const prevMonthDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    prevMonthDays.push(31 - firstDayOfMonth + i + 1); // January days
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }
  
  const nextMonthDays = [];
  const remainingCells = 42 - (prevMonthDays.length + daysInMonth);
  for (let i = 1; i <= remainingCells; i++) {
    nextMonthDays.push(i);
  }

  const moveMonth = (direction:any) => {
    setCurrentMonth(prev => prev + direction);
  };
  const userLoginData = useSelector((state: any) => state.data.login.value);
  console.log(userLoginData)

   // Fetch user data when component mounts
   useEffect(() => {
    const fetchUserData = async () => {
      if (!userLoginData?.data?.id) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        const response = await UserApis.getUserById(userLoginData.data.id);
        
        if (response?.data) {
          console.log("User data fetched successfully:", response.data);
          setUserData(response.data);
        } else {
          console.log("No user data returned");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, [userLoginData]);

  // Get user's first name
  const firstName = userData?.first_name || userLoginData?.data?.first_name || "Student";

  return (
    <UserDashboardLayout>
    <div className="flex flex-col h-screen ">
      {/* Header */}
      <div className="bg-primary mt-16 mb-10 relative text-white py-4 px-6 rounded-lg">
        <h1 className="text-[36px] font-bold">Hello, {firstName}!</h1>
        <p className="text-[14px] max-w-[340px]">Welcome back to your student dashboard, Here are all the things you can do</p>
  <div className='absolute -top-14 right-6 '>
    <img src='/images/userDashboard/dashboardHero.svg' alt='' />
      </div>
      </div>
      
      {/* Navigation Icons */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4  mt-6">
        <NavItem icon='/images/userDashboard/homedash.svg' text="Home" active />
        <NavItem icon='/images/userDashboard/loanhome.svg' text="Loan Application" />
        <NavItem icon='/images/userDashboard/waec.svg' text="Make Payment" />
        <NavItem icon='/images/userDashboard/psycho.svg' text="Transaction Log" />
        <NavItem icon='/images/userDashboard/consult.svg' text="Settings" />
      </div>
      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
      {/* Repayment Info */}
      <div className=" mt-6 bg-white rounded-lg p-4 shadow">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-gray-700">Repayment Ratio</h2>
          <div className="flex space-x-1">
            <span className="text-xs text-gray-500">See history</span>
            <FaQuestion size={16} className="text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center mt-2">
          <div className="w-3/4 h-3 bg-gray-200 rounded-full">
            <div className="w-1/3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-2 text-sm text-gray-600">40% paid</span>
        </div>
      </div>
      
      {/* Payment Amount */}
      <div className=" mt-4 bg-white rounded-lg p-4 shadow">
        <h2 className="font-semibold text-gray-700">Next Payment Amount</h2>
        <div className="flex items-baseline mt-2">
          <span className="text-2xl font-bold">$1,031.25</span>
        </div>
      </div>
      
      {/* Payment Due Date */}
      <div className=" mt-4 bg-white rounded-lg p-4 shadow">
        <h2 className="font-semibold text-gray-700">Next Payment Due Date</h2>
        <div className="flex justify-between mt-2">
          <div className="flex space-x-2">
            <TimerDigit value="10" label="DAYS" />
            <TimerDigit value="23" label="HOURS" />
            <TimerDigit value="15" label="MINS" />
            <TimerDigit value="05" label="SECS" />
          </div>
        </div>
      </div>
      
      </div>
      {/* Calendar */}
      <div className="mx-4 mt-4 mb-4 bg-white rounded-lg p-4 shadow flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-gray-700">February 2025</h2>
          <div className="flex space-x-2">
            <button 
              className="p-1 rounded hover:bg-gray-100" 
              onClick={() => moveMonth(-1)}
            >
              <FaChevronLeft size={20} className="text-gray-600" />
            </button>
            <button 
              className="p-1 rounded hover:bg-gray-100"
              onClick={() => moveMonth(1)}
            >
              <FaChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={`header-${i}`} className="text-center text-xs font-medium text-gray-500 h-8 flex items-center justify-center">
              {day}
            </div>
          ))}
          
          {prevMonthDays.map((day, i) => (
            <div key={`prev-${i}`} className="text-center text-xs text-gray-400 h-8 flex items-center justify-center">
              {day}
            </div>
          ))}
          
          {calendarDays.map((day, i) => (
            <div 
              key={`day-${i}`} 
              className={`text-center text-xs h-8 flex items-center justify-center
                ${day === 13 ? 'bg-green-500 text-white rounded-full' : 'text-gray-700'}
              `}
            >
              {day}
            </div>
          ))}
          
          {nextMonthDays.map((day, i) => (
            <div key={`next-${i}`} className="text-center text-xs text-gray-400 h-8 flex items-center justify-center">
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
    </UserDashboardLayout>
  );
}

function NavItem({ icon, text, active }:any) {
  return (
    <div className="flex flex-col items-center justify-between bg-white rounded-lg p-5">
      <div className={` rounded-lg mb-1 relative `}>
        <img src={icon} alt='' />
        {/* {active && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">4</span>
          </div>
        )} */}
      </div>
      <span className="text-[12px] font-medium text-[#1B1C1E]">{text}</span>
    </div>
  );
}

function TimerDigit({ value, label }:any) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-800 text-white rounded px-2 py-1 text-xl font-bold">
        {value}
      </div>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );
}