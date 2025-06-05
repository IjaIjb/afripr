import React from 'react';

const LatestUpdatesUpskillSection = () => {
  const latestUpdates = [
    {
      title: "Lithuania 2025 Direct Admission",
      subtitle: "Universities in Lithuania Admission in Progress",
      status: "ONGOING",
      statusColor: "bg-green-500"
    },
    {
      title: "African Students in Diaspora Cry Out",
      subtitle: "Universities in Lithuania Admission in Progress",
      status: "ONGOING",
      statusColor: "bg-green-500"
    },
    {
      title: "Africa Tech Summit 3.0",
      subtitle: "Universities in Lithuania Admission in Progress",
      status: "ONGOING",
      statusColor: "bg-green-500"
    },
    {
      title: "Lithuania 2025 Direct Admission",
      subtitle: "Universities in Lithuania Admission in Progress",
      status: "ONGOING",
      statusColor: "bg-green-500"
    }
  ];

  const upskillCourses = [
    {
      title: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=120&fit=crop&crop=center",
      bgColor: "bg-purple-600"
    },
    {
      title: "Software Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=120&fit=crop&crop=center",
      bgColor: "bg-blue-600"
    },
    {
      title: "Product Management",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=120&fit=crop&crop=center",
      bgColor: "bg-orange-500"
    },
    {
      title: "Quality Assurance",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=120&fit=crop&crop=center",
      bgColor: "bg-teal-600"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6 py-6 min-h-screen">
      {/* Latest Updates Section */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Latest Updates</h2>
        </div>
        
        <div className="space-y-3">
          {latestUpdates.map((update, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 mb-1">
                    {update.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {update.subtitle}
                  </p>
                </div>
                <span className={`bg-[#0C8B01] text-white text-xs px-2 py-1 rounded-full font-medium ml-3`}>
                  See more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upskill Section */}
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Upskill</h2>
          <button className="bg-[#0C8B01] text-white text-xs px-3 py-1 rounded-full font-medium hover:bg-primary transition-colors">
            View all →
          </button>
        </div>

     <div className="grid grid-cols-2 gap-3">
          {upskillCourses.map((course, index) => (
            <div key={index} className=" rounded-lg overflow-hidden  cursor-pointer hover:shadow-md transition-shadow">
              {/* Image at top */}
              <div className="aspect-[5/3] overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Title at bottom */}
              <div className="p-3">
                <h3 className="text-gray-900 text-center font-medium text-sm">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestUpdatesUpskillSection;