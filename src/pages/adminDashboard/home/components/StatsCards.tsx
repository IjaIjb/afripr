import React from 'react';

const StatsCards = ({ stats }:any) => {
  const { visits, orders, completedOrders, cancelledOrders } = stats;
  
  const cards = [
    {
      title: 'Visits',
      value: visits,
      color: 'bg-white'
    },
    {
      title: 'Orders',
      value: orders,
      color: 'bg-white'
    },
    {
      title: 'Completed',
      value: completedOrders,
      color: 'bg-white',
      textColor: 'text-green-500'
    },
    {
      title: 'Cancelled',
      value: cancelledOrders,
      color: 'bg-white',
      textColor: 'text-red-500'
    }
  ];
  
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className={`${card.color} rounded-lg shadow p-4 flex flex-col justify-center`}
        >
          <h3 className="text-sm text-gray-500">{card.title}</h3>
          <p className={`text-xl font-bold mt-1 ${card.textColor || 'text-gray-900'}`}>
            {card.value.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;