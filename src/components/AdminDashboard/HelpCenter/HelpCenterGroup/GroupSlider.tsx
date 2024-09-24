import React, { useState, useEffect } from "react";
import RemoveGroup from "./RemoveGroup";
import Switch from "antd/es/switch";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Card } from "antd";

const GroupSlider = ({ items }:{items:any}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1); // Number of items visible at a time

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4); // Large devices
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2); // Medium devices
      } else {
        setItemsPerView(1); // Small devices
      }
    };

    // Initial check and set event listener for window resize
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - itemsPerView : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - itemsPerView ? 0 : prevIndex + 1
    );
  };
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const handleCardClick = (id:any) => {
    setSelectedGroupId(id);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
         transform: `translateX(-${(currentIndex / itemsPerView) * 100}%)`,
        }}
      >
                <LeftOutlined onClick={prevSlide} className="text-blue-600 text-lg md:text-2xl lg:text-3xl" />

        {items.map((item:any, index:any) => (
          <div
            key={index}
            className={`w-full sm:w-1/2 lg:w-1/4`}
            style={{ flex: `0 0 ${100 / itemsPerView}%` }}
          >
            <div className="p-4">
                <Card title="hello"/>
            {/* <div
            key={item.id}
            className={`p-4 rounded-xl border shadow-md space-y-4 cursor-pointer ${
              selectedGroupId === item.id
                ? 'border-2 border-blue-600'
                : 'border-transparent'
            }`}
            onClick={() => handleCardClick(item.id)}
          >
            <div className="bg-blue-900 text-white p-4 rounded-lg">
              <h3 className="text-lg font-bold text-center">{item.name}</h3>
            </div>
            <div className="flex items-center space-x-2 justify-around">
              <Switch/>
              <button className="bg-orange-500 text-white px-4 py-1 rounded-md">
                Archive
              </button>
            </div>
            <RemoveGroup/>  

          </div> */}
            </div>
          </div>
        ))}
                <RightOutlined onClick={nextSlide} className="text-blue-600 text-lg md:text-2xl lg:text-3xl " />

      </div>

      {/* Navigation buttons */}
      {/* <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 p-2 text-white"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 p-2 text-white"
        onClick={nextSlide}
      >
        Next
      </button> */}
    </div>
  )
}



export default GroupSlider;