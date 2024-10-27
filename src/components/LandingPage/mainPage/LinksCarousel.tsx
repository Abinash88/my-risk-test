import React, { useEffect, useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  ArrowLeft,
  ArrowLeftToLine,
  ArrowRightToLine,
  MoveLeft,
  MoveLeftIcon,
} from "lucide-react";
import { Switch } from "antd";
import RemoveGroup from "./RemoveGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "antd";

const groups = [
  { id: 1, name: "Engage with T&O", image: "images/Analysis.png" },
  { id: 2, name: "AI Powered Risk Profile", image: "images/Engage.png" },
  { id: 3, name: "Engage with T&O", image: "images/Analysis.png" },
  { id: 4, name: "AI Powered Risk Profile", image: "images/Engage.png" },
  { id: 5, name: "Engage with T&O", image: "images/Analysis.png" },
  { id: 6, name: "AI Powered Risk Profile", image: "images/Engage.png" },
  { id: 7, name: "Engage with T&O", image: "images/Analysis.png" },
  { id: 8, name: "AI Powered Risk Profile", image: "images/Engage.png" },
  { id: 9, name: "Engage with T&O", image: "images/Analysis.png" },
];

export default function LinkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(1); // Number of items visible at a time

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Large devices
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2); // Medium devices
      } else {
        setItemsPerView(2); // Small devices
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

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="flex items-center justify-center space-x-4 md:mx-5 w-full md:gap-8">
      {/* Left Arrow */}

      <ArrowLeftToLine
        onClick={handlePrev}
        className="text-white text-xl md:text-2xl lg:text-3xl hover:cursor-pointer"
      />
      {/* Cards Container */}
      <Carousel
        arrows
        infinite
        className="grid grid-cols-2 lg:grid-cols-3  gap-16 w-full"
      >
        {groups
          // .slice(currentIndex, currentIndex + itemsPerView)
          .map((service) => (
            <div
              style={contentStyle}
              // className="bg-white py-11 flex transition-all flex-col items-center justify-center lg:px-11 rounded-[30px] w-full lg:h-[50vh]"
              key={service.id}
            >
              <img
                src={service.image}
                // alt={service.image + 12}
                className="w-16 lg:w-32 mx-auto"
              />
              <p className="text-[rgba(0,0,0,0.7)] text-sm p-4 text-center mt-5 font-[600]">
                {service.name}
              </p>
            </div>
          ))}
      </Carousel>

      {/* Right Arrow */}

      <ArrowRightToLine
        onClick={handleNext}
        className="text-white text-xl md:text-2xl lg:text-3xl hover:cursor-pointer"
      />
    </div>
  );
}
