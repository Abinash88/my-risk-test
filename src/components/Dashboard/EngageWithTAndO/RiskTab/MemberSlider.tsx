import React, { useEffect, useState } from 'react'
import { GroupImages } from "../../../../lib/fakedata";
import { DownOutlined, LeftOutlined, RightOutlined, UpOutlined } from '@ant-design/icons';

export default function MemberSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // Number of items visible at a time
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(11); // Large devices
      } else if (window.innerWidth >= 640) {
        setItemsPerView(7); // Medium devices
      } else {
        setItemsPerView(4); // Small devices
      }
    };

    // Initial check and set event listener for window resize
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  
  const handlePrev = () => {
    setCurrentIndex((prevIndex:any) => (prevIndex === 0 ? GroupImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex:any) => (prevIndex === GroupImages.length - 1 ? 0 : prevIndex + 1));
  };
  const handleCardClick = (name:any) => {
    console.log("name",name)
    setSelectedGroup(name);
    console.log("selectedGroup",selectedGroup)
  };
  return (
    <div className='h-full'>

						<div className="relative flex flex-col items-center justify-between flex-wrap md:flex-nowrap">
                        <UpOutlined onClick={handlePrev} className="text-blue-600 text-lg md:text-2xl lg:text-3xl" />

                            {GroupImages.slice(currentIndex, currentIndex + itemsPerView).map(
								(item, index) => (
									<div
                                        onClick={()=>handleCardClick(item.name)}
										key={item.name}
										className={`relative w-[70px] h-[70px] rounded-full overflow-hidden transition-transform ${
											"mr-1"
										} cursor-pointer ${selectedGroup === item.name ? "border-4 border-[#333399]" : "border-2 border-white "}`}
										style={{
											zIndex: GroupImages.length - index ,
											transform: 
												"translateX(0)",
										}}
										title={item.name} // Tooltip for name
									>
										<img
											src={item.image}
											alt={item.name}
											className="w-full h-full object-cover"
										/>
									</div>
								)
							)}
                                <DownOutlined onClick={handleNext} className="text-blue-600 text-lg md:text-2xl lg:text-3xl " />

						</div>
    </div>
  )
}
