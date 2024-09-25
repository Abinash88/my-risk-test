import React, { useEffect, useState } from 'react'
import { GroupImages } from "../../../../lib/fakedata";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function GroupSlider() {
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
    <div>

						<div className="relative flex items-center justify-between flex-wrap md:flex-nowrap">
                        <LeftOutlined onClick={handlePrev} className="text-blue-600 text-lg md:text-2xl lg:text-3xl" />

                            {GroupImages.slice(currentIndex, currentIndex + itemsPerView).map(
								(item, index) => (
                                    <div className='flex flex-col justify-center items-center'>

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
                                    <p className="text-sm font-semibold">{item.group}</p>
                                    </div>
								)
							)}
                                <RightOutlined onClick={handleNext} className="text-blue-600 text-lg md:text-2xl lg:text-3xl " />

						</div>
    </div>
  )
}
