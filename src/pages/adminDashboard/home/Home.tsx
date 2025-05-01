import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
import StatsCards from './components/StatsCards';
import RevenueChart from './components/RevenueChart';
import BusyHoursGauge from './components/HoursGuage';
import UserTable from './components/UserTable';
import CalendarBooking from './components/CalendarBooking';
import StatsCircles from './components/StatsCircles';
import PerformanceChart from './components/PerformanceChart';
import StudentStats from './components/StudentStats';
import TimePeriodSelector from './components/TimePeriodSelector';
import AdminDashboardLayout from '../../../component/AdminDashboardLayout';

// Sample data
const dashboardData = {
  stats: {
    visits: 4285,
    orders: 2342,
    completedOrders: 385,
    cancelledOrders: 258
  },
  revenue: [
    { day: "Mon", value: 2000 },
    { day: "Tue", value: 1800 },
    { day: "Wed", value: 2200 },
    { day: "Thu", value: 2500 },
    { day: "Fri", value: 2300 },
    { day: "Sat", value: 3000 },
    { day: "Sun", value: 3200 }
  ],
  busyHours: {
    percentage: 100,
    metrics: [
      { name: "Occupancy", value: 76 },
      { name: "Waiting t.", value: 2 },
      { name: "Served", value: 241 }
    ]
  },
  users: [
    { id: 1, student: "Karin Evelyn", email: "karin.evelyn@example.com", date: "13/10/23", time: "10:42am", phone: "1234567890", status: "Active" },
    { id: 2, student: "Karin Evelyn", email: "karin.evelyn@example.com", date: "13/10/23", time: "10:42am", phone: "1234567890", status: "Cancelled" },
    { id: 3, student: "Karin Evelyn", email: "karin.evelyn@example.com", date: "13/10/23", time: "10:42am", phone: "1234567890", status: "Completed" },
    { id: 4, student: "Tyrell Victor", email: "tyrell.victor@example.com", date: "13/10/23", time: "10:42am", phone: "1234567890", status: "Active" }
  ],
  statsCircles: {
    occupied: { value: 20, color: "blue" },
    availability: { value: 80, color: "purple" },
    performance: [
      { value: 84, label: "Accuracy" },
      { value: 65, label: "Speed" }
    ]
  },
  psychometricTest: [
    { day: "Mon", value: 30 },
    { day: "Tue", value: 40 },
    { day: "Wed", value: 35 },
    { day: "Thu", value: 50 },
    { day: "Fri", value: 45 },
    { day: "Sat", value: 60 },
    { day: "Sun", value: 55 }
  ],
  students: [
    { value: 53, color: "red", change: "+1.2%" },
    { value: 27, color: "blue", change: "+0.7%" },
    { value: 20, color: "green", change: "+0.4%" }
  ]
};

const Dashboard = () => {
  const [data, setData] = useState(dashboardData);
  const [timePeriod, setTimePeriod] = useState('day');
  
  // Mock data for different time periods
  const dayData = {
    ...dashboardData,
    stats: {
      visits: 4285,
      orders: 2342,
      completedOrders: 385,
      cancelledOrders: 258
    },
    revenue: [
      { day: "Mon", value: 2000 },
      { day: "Tue", value: 1800 },
      { day: "Wed", value: 2200 },
      { day: "Thu", value: 2500 },
      { day: "Fri", value: 2300 },
      { day: "Sat", value: 3000 },
      { day: "Sun", value: 3200 }
    ]
  };
  
  const weekData = {
    ...dashboardData,
    stats: {
      visits: 28950,
      orders: 15689,
      completedOrders: 2347,
      cancelledOrders: 1102
    },
    revenue: [
      { day: "Week 1", value: 14000 },
      { day: "Week 2", value: 16500 },
      { day: "Week 3", value: 18200 },
      { day: "Week 4", value: 21000 }
    ]
  };
  
  const monthData = {
    ...dashboardData,
    stats: {
      visits: 125430,
      orders: 68294,
      completedOrders: 9876,
      cancelledOrders: 4532
    },
    revenue: [
      { day: "Jan", value: 45000 },
      { day: "Feb", value: 48000 },
      { day: "Mar", value: 51000 },
      { day: "Apr", value: 54000 },
      { day: "May", value: 57000 },
      { day: "Jun", value: 62000 }
    ]
  };
  
  // Update data when time period changes
  useEffect(() => {
    switch(timePeriod) {
      case 'day':
        setData(dayData);
        break;
      case 'week':
        setData(weekData);
        break;
      case 'month':
        setData(monthData);
        break;
      default:
        setData(dayData);
    }
  }, [timePeriod]);
  
  const handleTimePeriodChange = (period:any) => {
    setTimePeriod(period);
  };
  
  return (
    <AdminDashboardLayout>
    <div className="min-h-screen ">
      {/* <Header /> */}
      <div className="container mx-auto ">
        <TimePeriodSelector 
          activePeriod={timePeriod} 
          onChange={handleTimePeriodChange} 
        />
        <StatsCards stats={data.stats} />
        
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-8 bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">$2,000</h2>
              <div className="bg-gray-100 rounded-lg px-2 py-1">
                <select className="bg-transparent text-sm">
                  <option>Today</option>
                  <option>Yesterday</option>
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                </select>
              </div>
            </div>
            <RevenueChart data={data.revenue} />
          </div>
          <div className="col-span-4 bg-green-500 rounded-lg shadow p-4">
            <BusyHoursGauge data={data.busyHours} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow mt-4 p-4">
          <UserTable users={data.users} />
        </div>
        
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-4 bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Cancellation booking</h2>
            <CalendarBooking />
          </div>
          <div className="col-span-4 bg-white rounded-lg shadow p-4 flex flex-col">
            <StatsCircles data={data.statsCircles} />
          </div>
          <div className="col-span-4 bg-white rounded-lg shadow p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">R210160430</h2>
              <div className="bg-gray-100 rounded-lg px-2 py-1">
                <select className="bg-transparent text-sm">
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Daily</option>
                </select>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="relative h-48 w-48 mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-lg font-bold">80%</div>
                </div>
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
                    stroke="#8B5CF6" 
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="50.24"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-6 bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Psychometrics test</h2>
              <div className="flex items-center">
                <div className="w-4 h-1 bg-purple-500 mr-1"></div>
                <span className="text-sm text-gray-500">Total</span>
              </div>
            </div>
            <PerformanceChart data={data.psychometricTest} />
          </div>
          <div className="col-span-6 bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Students</h2>
            <StudentStats students={data.students} />
          </div>
        </div>
      </div>
    </div>
    </AdminDashboardLayout>
  );
};

export default Dashboard;