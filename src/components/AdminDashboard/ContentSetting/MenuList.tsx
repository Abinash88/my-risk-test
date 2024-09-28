import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { menuData } from "@/lib/fakedata";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

const MenuList = () => {
    const [activeMenu,setActiveMenu]=useState(1)

	return (
		<Carousel className="flex items-center justify-between">
			<CarouselContent className="flex items-center justify-between">
                {menuData.map((item)=>(
                    <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/5">
					<button className={`w-[209px] ${activeMenu===item.id
                    ?"flex mx-5 bg-[#3838F0] px-10 py-3 text-white"
                        :"flex border border-[#C7C8C9] mr-5 bg-[#ECECEE] px-10 py-3 text-black"}`}>
                    {activeMenu===item.id&&          <LeftOutlined className="mr-3" /> }
                       {item.name} <RightOutlined className="ml-3" />
                    </button>
				</CarouselItem>
                ))}
				
				
			</CarouselContent>
			{/* <CarouselPrevious className="bg-blue-800 text-white mx-5 h-10 w-10" />
			<CarouselNext className="bg-blue-800 text-white mx-5 h-10 w-10" /> */}
		</Carousel>
	);
};

export default MenuList;
