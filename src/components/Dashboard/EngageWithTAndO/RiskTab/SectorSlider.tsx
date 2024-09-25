import React, { useEffect, useState } from 'react'
import { sectorData } from "../../../../lib/fakedata";
import { CloseOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function SectorSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // Number of items visible at a time
  const [selectedSector, setSelectedSector] = useState(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(6); // Large devices
      } else if (window.innerWidth >= 640) {
        setItemsPerView(4); // Medium devices
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
    setCurrentIndex((prevIndex:any) => (prevIndex === 0 ? sectorData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex:any) => (prevIndex === sectorData.length - 1 ? 0 : prevIndex + 1));
  };
  const handleCardClick = (id:any) => {
    setSelectedSector(id);
  };
  return (
    <div>

						<div className="relative flex items-center justify-between flex-wrap md:flex-nowrap">
                        <LeftOutlined onClick={handlePrev} className="text-blue-600 text-lg md:text-2xl lg:text-3xl" />

                            {sectorData.slice(currentIndex, currentIndex + itemsPerView).map(
								(item, index) => (
                  <button onClick={()=>handleCardClick(item.id)}
                  className={`flex items-center justify-between ${selectedSector === item.id ? 'bg-[#6666B3] text-white' : 'bg-white'} text-sm md:text-lg lg:text-xl font-semibold px-4 py-2 rounded-md shadow-md`}
                  >{item.name} {selectedSector != item.id ? <CloseOutlined className='ml-4 p-1 rounded-full bg-[#6666B3] text-white'/> : null}</button>

								)
							)}
              <RightOutlined onClick={handleNext} className="text-blue-600 text-lg md:text-2xl lg:text-3xl " />

						</div>
    </div>
  )
}
