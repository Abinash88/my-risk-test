import SectorDropdown from "@/components/shared/ReuseAble/sector-dropdown";
import { Carousel } from "antd";
import { ArrowLeftToLine, ArrowRightToLine, X } from "lucide-react";
import { useState } from "react";

const SectorSlider = () => {
  const [section, setSection] = useState("1");
  const sections = ["1", "2", "3", "4", "5", "6"];
  return (
    <>
      <Carousel
        arrows
        slidesToShow={8}
        slidesToScroll={1}
        dots={false}
        prevArrow={<ArrowLeftToLine />}
        nextArrow={<ArrowRightToLine />}
        draggable
        id="sector_carousel"  
        className="w-[95%] "
        responsive={[
          {
            breakpoint: 1024, // Medium screens (tablet and up)
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768, // Small screens (portrait tablet and up)
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480, // Extra-small screens (mobile)
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {sections.map((item) => (
          <div key={item} className=" h-16 flex justify-center items-center ">
            <button
              style={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              onClick={() => setSection(item)}
              className={`py-2 rounded-2xl mt-2 w-[90%] my-auto mx-auto flex flex-wrap gap-4 items-center  justify-center p-4 font-medium ${
                section === item
                  ? "bg-[#000080] text-white"
                  : "bg-white text-[rgba(0,0,0,0.7)]"
              }`}
            >
              {item === "1" ? "Main Sector" : "Sector " + item}
              {item !== "1" && section !== item && (
                <X className="bg-blue-700 rounded-full p-1 text-white" />
              )}
            </button>
          </div>
        ))}
      </Carousel>
      <SectorDropdown />
    </>
  );
};

export default SectorSlider;
