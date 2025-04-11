import React, { useEffect, useState, useCallback } from 'react';
import AdminDashboardLayout from '../../../component/AdminDashboardLayout';
import { UserApis } from '../../../apis/userApi/userApi';
import { FiSearch, FiMoreVertical, FiChevronDown } from 'react-icons/fi';
// import { format } from 'date-fns';

const LoanApplication = () => {
  // const [loanData, setLoanData] = useState([]);
  const [enrichedData, setEnrichedData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [loanType, setLoanType] = useState('eduSilver'); // Default loan type
  const [premiumLoanSubType, setPremiumLoanSubType] = useState<any>('premium'); // Default premium sub-type
  const [searchTerm, setSearchTerm] = useState('');
  // const [selectedDate, setSelectedDate] = useState('');
  const [viewMode, setViewMode] = useState('day'); // 'day', 'week', or 'month'
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showPremiumDropdown, setShowPremiumDropdown] = useState(false);

  // Fetch user details for each loan application
  const enrichWithUserData = useCallback(async (loans:any) => {
    try {
      const enrichedLoans = await Promise.all(
        loans.map(async (loan:any) => {
          if (!loan.user_id) return { ...loan, userData: null };
          
          try {
            const userResponse = await UserApis.getUserById(loan.user_id);
            if (userResponse?.data) {
              return {
                ...loan,
                userData: userResponse.data
              };
            }
            return { ...loan, userData: null };
          } catch (error) {
            console.error(`Error fetching user data for ID ${loan.user_id}:`, error);
            return { ...loan, userData: null };
          }
        })
      );
      
      setEnrichedData(enrichedLoans);
    } catch (err) {
      console.error('Error enriching loan data with user information:', err);
      // If enrichment fails, still show the original loan data
      setEnrichedData(loans.map((loan:any) => ({ ...loan, userData: null })));
    }
  }, []);

  // Fetch data based on selected loan type
  const fetchLoanData = useCallback(async (type:any) => {
    setLoading(true);
    setError(null);
    
    try {
      let response;
      
      switch (type) {
        case 'eduSilver':
          response = await UserApis.getAllEduSilver();
          break;
        case 'eduGold':
          response = await UserApis.getAllEduGold();
          break;
        case 'eduPremium':
          if (premiumLoanSubType === 'premium') {
            response = await UserApis.getAllEduPremiumLoan();
          } else if (premiumLoanSubType === 'school') {
            response = await UserApis.getAllEduPremiumSchoolProcessing();
          }
          break;
        default:
          response = await UserApis.getAllEduSilver();
      }
      
      if (response?.data?.records) {
        // setLoanData(response.data.records);
        await enrichWithUserData(response.data.records);
      } else {
        // setLoanData([]);
        setEnrichedData([]);
      }
    } catch (err) {
      console.error('Error fetching loan data:', err);
      setError('Failed to load loan data. Please try again.');
      // setLoanData([]);
      setEnrichedData([]);
    } finally {
      setLoading(false);
    }
  }, [premiumLoanSubType, enrichWithUserData]);

  // Initial data fetch
  useEffect(() => {
    fetchLoanData(loanType);
    
    // Clear active dropdown when changing loan types
    setActiveDropdown(null);
  }, [loanType, premiumLoanSubType, fetchLoanData]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (!event.target.closest('.premium-dropdown')) {
        setShowPremiumDropdown(false);
      }
      setActiveDropdown(null);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle loan type change
  const handleLoanTypeChange = (type:any) => {
    setLoanType(type);
    if (type !== 'eduPremium') {
      setShowPremiumDropdown(false);
    }
  };

  // Handle premium loan sub-type change
  const handlePremiumSubTypeChange = (subType:any) => {
    setPremiumLoanSubType(subType);
    setShowPremiumDropdown(false);
  };

  // Handle search
  const handleSearch = (e:any) => {
    setSearchTerm(e.target.value);
  };

  // Filter data based on search term
  const filteredData = enrichedData.filter((item:any) => {
    // Use userData if available, fallback to direct properties
    const userData = item.userData || {};
    
    const searchString = (userData.first_name || '') + 
                         (userData.last_name || '') + 
                         (userData.email || '') + 
                         (item.admitted_school || '') +
                         (item.course_admitted || '');
    
    // If date is selected, also filter by date
    // if (selectedDate) {
    //   const itemDate = item.created_at ? new Date(item.created_at) : null;
    //   const filterDate = new Date(selectedDate);
      
    //   // Return false if dates don't match
    //   if (!itemDate || 
    //       itemDate.getFullYear() !== filterDate.getFullYear() || 
    //       itemDate.getMonth() !== filterDate.getMonth() || 
    //       itemDate.getDate() !== filterDate.getDate()) {
    //     return false;
    //   }
    // }
    
    return searchString.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Get status badge class
  const getStatusClass = (status:any) => {
    switch (status?.toLowerCase()) {
      case 'granted':
        return 'bg-green-100 text-green-800';
      case 'declined':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Get loan type display name
  const getLoanTypeDisplay = (type:any, subType = null) => {
    switch (type) {
      case 'eduSilver':
        return 'EDUSILVER';
      case 'eduGold':
        return 'EDUGOLD';
      case 'eduPremium':
        if (subType === 'premium') {
          return 'EDUPREMIUM LOAN';
        } else if (subType === 'school') {
          return 'EDUPREMIUM SCHOOL';
        }
        return 'EDUPREMIUM';
      default:
        return type.toUpperCase();
    }
  };
  
  // Toggle Premium dropdown
  const togglePremiumDropdown = (e:any) => {
    e.stopPropagation();
    setShowPremiumDropdown(!showPremiumDropdown);
  };

  return (
    <AdminDashboardLayout>
      <div className="">
        {/* <h1 className="text-2xl font-bold mb-6">Loan Applications</h1> */}
        
        {/* Filters and Controls */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* View Mode Toggle */}
          <div className="flex rounded-md overflow-hidden border border-gray-200">
            <button 
              onClick={() => setViewMode('day')}
              className={`px-4 py-2 ${viewMode === 'day' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'}`}
            >
              Day
            </button>
            <button 
              onClick={() => setViewMode('week')}
              className={`px-4 py-2 ${viewMode === 'week' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'}`}
            >
              Week
            </button>
            <button 
              onClick={() => setViewMode('month')}
              className={`px-4 py-2 ${viewMode === 'month' ? 'bg-green-500 text-white' : 'bg-white text-gray-700'}`}
            >
              Month
            </button>
          </div>

          {/* Date Picker */}
          {/* <div>
            <input
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div> */}
        </div>

        {/* Loan Type Selector and Search */}
        <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleLoanTypeChange('eduSilver')}
              className={`px-4 py-2 rounded-md ${loanType === 'eduSilver' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              EduSilver
            </button>
            <button
              onClick={() => handleLoanTypeChange('eduGold')}
              className={`px-4 py-2 rounded-md ${loanType === 'eduGold' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              EduGold
            </button>
            
            {/* EduPremium with Dropdown */}
            <div className="relative premium-dropdown">
              <button
                onClick={(event:any) => {
                  handleLoanTypeChange('eduPremium');
                  togglePremiumDropdown(event);
                }}
                className={`px-4 py-2 rounded-md flex items-center ${loanType === 'eduPremium' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                EduPremium
                <FiChevronDown className="ml-1" />
              </button>
              
              {showPremiumDropdown && (
                <div className="absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      onClick={() => handlePremiumSubTypeChange('premium')}
                      className={`w-full text-left block px-4 py-2 text-sm hover:bg-gray-100 ${premiumLoanSubType === 'premium' ? 'bg-green-100' : ''}`}
                      role="menuitem"
                    >
                      Premium Loan
                    </button>
                    <button
                      onClick={() => handlePremiumSubTypeChange('school')}
                      className={`w-full text-left block px-4 py-2 text-sm hover:bg-gray-100 ${premiumLoanSubType === 'school' ? 'bg-green-100' : ''}`}
                      role="menuitem"
                    >
                      School Processing
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="relative w-full md:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by user name"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        
        {/* Current View Display */}
        <div className="mb-4">
          <span className="text-gray-500">Viewing: </span>
          <span className="font-medium">
            {loanType === 'eduPremium' 
              ? getLoanTypeDisplay(loanType, premiumLoanSubType)
              : getLoanTypeDisplay(loanType)}
          </span>
        </div>
        
        {/* Loan Applications Table */}
        <div className="bg-white rounded-md shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    S/N
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User Name
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  {/* <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Applied
                  </th> */}
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Loan
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-4 text-center text-sm text-gray-500">
                    <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
        </div>
                    </td>
                  </tr>
                ) : error ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-4 text-center text-sm text-red-500">
                      {error}
                    </td>
                  </tr>
                ) : filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-4 text-center text-sm text-gray-500">
                      No loan applications found.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item:any, index:any) => {
                    // Get user data if available
                    const userData = item.userData || {};
                    
                    return (
                      <tr key={item.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {userData?.first_name && userData?.last_name 
                              ? `${userData?.first_name} ${userData?.last_name}`
                              : ''} {/* Fallback for demo */}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {userData?.email} {/* Fallback for demo */}
                          </div>
                        </td>
                        {/* <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item?.created_at 
                            ? format(new Date(item?.created_at), 'M/d/yyyy h:mm a') 
                            : ''}
                        </td> */}
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {userData?.phone} {/* Fallback for demo */}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {loanType === 'eduPremium' 
                            ? getLoanTypeDisplay(loanType, premiumLoanSubType)
                            : getLoanTypeDisplay(loanType)}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(item.status)}`}>
                            {item.status || 'Active'}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="relative inline-block text-left">
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-600"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveDropdown(activeDropdown === item.id ? null : item.id);
                              }}
                            >
                              <FiMoreVertical className="h-5 w-5" />
                            </button>
                            <div className={`${activeDropdown === item.id ? 'block' : 'hidden'} origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}>
                              <div className="py-1" role="menu" aria-orientation="vertical">
                                <button
                                  // onClick={() => handleStatusChange(item.id, 'Granted')}
                                  className="text-green-700 w-full text-left block px-4 py-2 text-sm hover:bg-gray-100"
                                  role="menuitem"
                                >
                                  Grant
                                </button>
                                <button
                                  // onClick={() => handleStatusChange(item.id, 'Declined')}
                                  className="text-red-700 w-full text-left block px-4 py-2 text-sm hover:bg-gray-100"
                                  role="menuitem"
                                >
                                  Decline
                                </button>
                                <button
                                  // onClick={() => handleStatusChange(item.id, 'Pending')}
                                  className="text-yellow-700 w-full text-left block px-4 py-2 text-sm hover:bg-gray-100"
                                  role="menuitem"
                                >
                                  Mark as Pending
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default LoanApplication;