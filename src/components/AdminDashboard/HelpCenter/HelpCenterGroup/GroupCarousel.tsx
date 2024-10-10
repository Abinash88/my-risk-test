import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { ArrowLeft, MoveLeft, MoveLeftIcon } from "lucide-react";
import { Switch } from "antd";
import RemoveGroup from "./RemoveGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

const groups = [
  { id: 1, name: "Group 1" },
  { id: 2, name: "Group 2" },
  { id: 3, name: "Group 3" },
  { id: 4, name: "Group 4" },
  { id: 5, name: "Group 5" },
  { id: 6, name: "Group 6" },
  { id: 7, name: "Group 7" },
  { id: 8, name: "Group 8" },
  { id: 9, name: "Group 9" },
  { id: 10, name: "Group 10" },
];

const GroupCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(1); // Number of items visible at a time

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

  const handlePrev = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === 0 ? groups.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex: any) =>
      prevIndex === groups.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCardClick = (id: any) => {
    setSelectedGroupId(id);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mx-5">
      {/* Left Arrow */}

      <FontAwesomeIcon
        icon={faCaretLeft}
        onClick={handlePrev}
        className="text-blue-600 text-lg md:text-2xl lg:text-3xl hover:cursor-pointer"
      />
      {/* Cards Container */}
      <div className="flex justify-between gap-4 w-full">
        {groups
          .slice(currentIndex, currentIndex + itemsPerView)
          .map((group) => (
            <div
              key={group.id}
              className={`p-4 rounded-xl border shadow-md space-y-4 cursor-pointer ${
                selectedGroupId === group.id
                  ? "border-2 border-blue-600"
                  : "border-transparent"
              }`}
              style={{ flex: `0 0 ${100 / itemsPerView - 2}%` }}
              onClick={() => handleCardClick(group.id)}
            >
              <div className="bg-[#000080] text-white p-3 rounded-lg">
                <h3 className="text-sm font-bold text-center">{group.name}</h3>
              </div>
              <div className="flex items-center space-x-2 justify-around">
                <Switch defaultChecked />
                <button className="bg-orange-500 text-sm text-white px-4 py-1 rounded-md">
                  Archive
                </button>
              </div>
              <RemoveGroup />
            </div>
          ))}
      </div>

      {/* Right Arrow */}

      <FontAwesomeIcon
        icon={faCaretRight}
        onClick={handleNext}
        className="text-blue-600 text-lg md:text-2xl lg:text-3xl hover:cursor-pointer"
      />
    </div>
  );
};

export default GroupCarousel;
