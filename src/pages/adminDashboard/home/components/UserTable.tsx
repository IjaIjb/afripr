import React, { useState } from 'react';

const UserTable = ({ users }:any) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredUsers = users.filter((user:any) => 
    user.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusBadgeClass = (status:any) => {
    switch(status) {
      case 'Active':
        return 'bg-green-100 text-green-600';
      case 'Cancelled':
        return 'bg-red-100 text-red-600';
      case 'Completed':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };
  
  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <div className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-900">
          Student Name
        </div>
        <div className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-900">
          Email
        </div>
        <div className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-900">
          Date / hours
        </div>
        <div className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-900">
          Phone
        </div>
        <div className="bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-900">
          Status
        </div>
      </div>
      
      <div className="space-y-3">
        {filteredUsers.map((user:any, index:any) => (
          <div key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg">
            <div className="w-1/5 text-sm">{user.student}</div>
            <div className="w-1/5 text-sm text-gray-600">{user.email}</div>
            <div className="w-1/5 text-sm text-gray-600">{user.date} · {user.time}</div>
            <div className="w-1/5 text-sm text-gray-600">{user.phone}</div>
            <div className="w-1/5">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(user.status)}`}>
                {user.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTable;