import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { ArrowLeft, MoveLeft, MoveLeftIcon } from 'lucide-react';
import { Switch } from 'antd';
import RemoveGroup from '../RemoveGroup';

const groups = [
  { id: 1, name: 'Group 1' },
  { id: 2, name: 'Group 2' },
  { id: 3, name: 'Group 3' },
  { id: 4, name: 'Group 4' },
  // Add more groups as needed
];

const GroupCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < groups.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleCardClick = (id:any) => {
    setSelectedGroupId(id);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mx-5">
      {/* Left Arrow */}
      
    
        <LeftOutlined onClick={handlePrev} className="text-blue-600 text-3xl" />
    

      {/* Cards Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {groups.slice(currentIndex, currentIndex + 4).map((group) => (
          <div
            key={group.id}
            className={`p-4 rounded-xl border shadow-md space-y-4 cursor-pointer ${
              selectedGroupId === group.id
                ? 'border-2 border-blue-600'
                : 'border-transparent'
            }`}
            onClick={() => handleCardClick(group.id)}
          >
            <div className="bg-blue-900 text-white p-4 rounded-lg">
              <h3 className="text-lg font-bold text-center">{group.name}</h3>
            </div>
            <div className="flex items-center space-x-2 justify-around">
              <Switch/>
              <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
                UnArchive
              </button>
            </div>
            <RemoveGroup/>  
          </div>
        ))}
      </div>

      {/* Right Arrow */}
   
        <RightOutlined onClick={handleNext} className="text-blue-600 text-3xl" />
      
    </div>
  );
};

export default GroupCarousel;
