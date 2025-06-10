import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaDollarSign,
  FaChartPie,
  FaCog,
  FaQuestion,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import UserDashboardLayout from "../../../component/UserDashboardLayout";
import { useSelector } from "react-redux";
import { UserApis } from "../../../apis/userApi/userApi";
import LatestUpdatesUpskillSection from "./LatestUpdatesUpskillSection";

export default function Dashboard() {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState(1); // Feb
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const TimerDigit = ({ value, label }: any) => {
    return (
      <div className="flex flex-col items-center font-[share Tech]">
        <span className="text-white text-[45px] ">{value}</span>
        <span className="text-[#48B774] text-[12px] mt-1">{label}</span>
      </div>
    );
  };

  const Separator = () => {
    return <span className="text-[#48B774] text-[45px] mb-6 font-bold mx-2">:</span>;
  };

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

  const moveMonth = (direction: any) => {
    setCurrentMonth((prev) => prev + direction);
  };
  
  const userLoginData = useSelector((state: any) => state.data.login.value);
  console.log(userLoginData);

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
  const firstName =
    userData?.first_name || userLoginData?.data?.first_name || "Student";

  // Navigation handler for NavItems
  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <UserDashboardLayout>
      <div className="flex flex-col h-screen ">
        {/* Header */}
        <div className="bg-primary mt-16 mb-10 relative text-white py-4 px-6 rounded-lg">
          <h1 className="text-[36px] font-bold">Hello, {firstName}!</h1>
          <p className="text-[14px] max-w-[340px]">
            Welcome back to your student dashboard, Here are all the things you
            can do
          </p>
          <div className="absolute -top-14 right-6 ">
            <img src="/images/userDashboard/dashboardHero.svg" alt="" />
          </div>
        </div>

        {/* Navigation Icons */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4  mt-6">
          <NavItem
            icon="/images/userDashboard/homedash.svg"
            text="Explore Courses"
            route="/user/dashboard/explore-programs"
            // active
            onClick={handleNavigation}
          />
          <NavItem
            icon="/images/userDashboard/loanhome.svg"
            text="Loan Application"
            route="/user/loan-application"
            onClick={handleNavigation}
          />
          <NavItem 
            icon="/images/userDashboard/waec.svg" 
            text="WAEC & JAMB"
            route="/user/waec-jamb"
            onClick={handleNavigation}
          />
          <NavItem
            icon="/images/userDashboard/psycho.svg"
            text="Psychometric Test"
            route="/psychometric-test"
            onClick={handleNavigation}
          />
          <NavItem 
            icon="/images/userDashboard/consult.svg" 
            text="Consultation"
            route="/user/consultation"
            onClick={handleNavigation}
          />
        </div>

        <div className="grid lg:grid-cols-3  mt-4 md:grid-cols-2 gap-3">
          {/* Repayment Info */}
          <div className=" w-full bg-white flex flex-col justify-between rounded-lg p-4 shadow">
            <h2 className="font-medium text-medium text-center text-[#01002E]">
              Repayment Ratio
            </h2>
            <div className="flex w-full gap-2 ">
              <img
                src="/images/userDashboard/paymentRatio.svg"
                className=""
                alt=""
              />
              <div className="w-full">
                <div className="flex w-full justify-between items-center">
                  <div className="flex space-x-1">
                    <span className="text-[14px] text-[#01002E]">Paid</span>
                    {/* <FaQuestion size={16} className="text-gray-400" /> */}
                  </div>
                  <span className="text-[14px] font-bold text-[#000000]">
                    2
                  </span>
                </div>

                <div className=" mt-2">
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div className="w-1/3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-[11px] text-gray-600">
                    You have paid back 20% of your Course{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Amount */}
          <div className=" w-full bg-white flex flex-col justify-between rounded-lg p-4 shadow">
            <h2 className="font-medium text-medium text-center text-[#01002E]">
              Next Payment Amount
            </h2>
            <div className="flex w-full gap-2 items-end">
              <img
                src="/images/userDashboard/paymentRatio.svg"
                className=""
                alt=""
              />
              <div className="w-full">
                <h4 className="text-[#01002E] text-[36px] font-bold">$1,031.25</h4>

                <div className=" ">
                  <span className="text-[11px] text-gray-600">
                    You have paid back 20% of your Course{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Due Date */}
          <div className="bg-green-900 rounded-lg p-6 shadow-lg" style={{ backgroundColor: '#05401C' }}>
            <h2 className="text-white text-[18px] font-semibold mb-4">
              Next Payment Due Date
            </h2>
            <div className="flex items-center justify-center">
              <TimerDigit value="10" label="DAYS" />
              <Separator />
              <TimerDigit value="23" label="HOURS" />
              <Separator />
              <TimerDigit value="15" label="MINUTES" />
              <Separator />
              <TimerDigit value="05" label="SECONDS" />
            </div>
          </div>
        </div>
        <LatestUpdatesUpskillSection />
        {/* Calendar */}
        {/* <div className=" mt-4 mb-4 bg-white rounded-lg p-4 shadow flex-grow">
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
            {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
              <div
                key={`header-${i}`}
                className="text-center text-xs font-medium text-gray-500 h-8 flex items-center justify-center"
              >
                {day}
              </div>
            ))}

            {prevMonthDays.map((day, i) => (
              <div
                key={`prev-${i}`}
                className="text-center text-xs text-gray-400 h-8 flex items-center justify-center"
              >
                {day}
              </div>
            ))}

            {calendarDays.map((day, i) => (
              <div
                key={`day-${i}`}
                className={`text-center text-xs h-8 flex items-center justify-center
                ${
                  day === 13
                    ? "bg-green-500 text-white rounded-full"
                    : "text-gray-700"
                }
              `}
              >
                {day}
              </div>
            ))}

            {nextMonthDays.map((day, i) => (
              <div
                key={`next-${i}`}
                className="text-center text-xs text-gray-400 h-8 flex items-center justify-center"
              >
                {day}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </UserDashboardLayout>
  );
}

function NavItem({ icon, text, route, active, onClick }: any) {
  return (
    <div 
      className="flex flex-col items-center justify-between bg-white rounded-lg p-5 cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={() => onClick(route)}
    >
      <div className={` rounded-lg mb-1 relative `}>
        <img src={icon} alt="" />
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

function TimerDigit({ value, label }: any) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-800 text-white rounded px-2 py-1 text-xl font-bold">
        {value}
      </div>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );
}