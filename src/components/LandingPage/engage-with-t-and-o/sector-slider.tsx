import SelectComp from "@/components/shared/ReuseAble/select";
import { cn } from "@/lib/utils";
import { Carousel } from "antd";
import type { CarouselRef } from "antd/es/carousel";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import React, { useRef, useState } from "react";

type DropdownTypes = { label: string; value: string };

const SectorData: DropdownTypes[] = [
  {
    label: "Politics",
    value: "Politics",
  },
  {
    label: "Transport",
    value: "Transport",
  },
  {
    label: "Banking",
    value: "Banking",
  },
  {
    label: "Marketing",
    value: "Marketing",
  },
  {
    label: "Business",
    value: "Business",
  },
  {
    label: "Information",
    value: "Information",
  },
];

const AddRemoveSector = ({
  setSection,
  section,
}: {
  setSection: React.Dispatch<
    React.SetStateAction<{ label: string; value: string }[]>
  >;
  section: DropdownTypes[];
}) => {
  const [search, setSearch] = useState("");
  const searchSector = SectorData.filter((item) =>
    item.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" w-full min-w-[200px] border rounded-lg p-4">
      <div className="relative flex w-[90%] mx-auto md:w-full">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search & Add Sector "
          className="border rounded-lg px-2 w-full py-2 placeholder:text-xs text-xs"
          type="text"
        />
        <Search className="absolute size-4 cursor-pointer top-1/3 right-3" />
      </div>
      <div className="space-y-2 scrollBar pr-2 max-h-[200px] overflow-y-auto mt-3">
        {searchSector?.map((item, index) => (
          <div className="flex items-center justify-between" key={index}>
            <h3 className="md:text-sm text-xs">{item?.value}</h3>
            <button
              onClick={() => {
                setSection((prevSelected) => {
                  if (prevSelected.includes(item)) {
                    // If the value is already in the array, remove it
                    return prevSelected.filter((val) => val !== item);
                  } else {
                    // If the value is not in the array, add it
                    return [...prevSelected, item];
                  }
                });
              }}
              className={cn(
                `rounded-full px-5   text-xs py-1 shadow-md text-white `,
                section.includes(item)
                  ? "bg-gray-100 text-gray-700"
                  : "bg-blue-700 text-white"
              )}
            >
              {section.includes(item) ? "Remove" : "Add"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const SectorSlider = () => {
  const [section, setSection] = useState<{ label: string; value: string }[]>(
    []
  );

  const ref = useRef<CarouselRef | null>(null);

  const [select, setSelect] = useState<string[]>([]);
  return (
    <div className="w-full bg-white">
      <div className=" mx-auto  px-12 md:px-16 ">
        <div className="grid w-full grid-cols-[calc(100%-180px)_170px] justify-between items-center">
          <Carousel
            ref={ref}
            arrows
            slidesToShow={7}
            slidesToScroll={1}
            dots={false}
            prevArrow={<ChevronLeft />}
            nextArrow={<ChevronRight />}
            infinite={false}
            draggable
            id="sector_carousel"
            responsive={[
              {
                breakpoint: 1424, // Medium screens (tablet and up)
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 1024, // Medium screens (tablet and up)
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 768, // Small screens (portrait tablet and up)
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 550, // Extra-small screens (mobile)
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
          >
            <button
              style={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 10px" }}
              className={` md:py-2.5 py-3 rounded-2xl mt-3  bg-[#000080] text-white border border-gray-100 md:text-sm text-xs 
               flex  items-center  justify-center  font-medium`}
            >
              Main Sector
            </button>
            {SectorData?.map((item, index) => (
              <div
                key={index}
                className=" h-16 flex justify-center items-center "
              >
                <button
                  style={{
                    boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 10px",
                  }}
                  onClick={() =>
                    setSelect((prev) => {
                      const newData = [...prev];
                      const filtered = newData.filter((d) => d !== item?.value);
                      return newData.includes(item.value)
                        ? filtered
                        : [...newData, item.value];
                    })
                  }
                  className={`py-2 rounded-2xl mt-3 w-[90%] border border-gray-100 md:text-sm text-xs my-auto mx-auto flex
                     flex-wrap gap-2 md:gap-4 items-center  justify-center p-4 font-medium ${
                       select.includes(item.value)
                         ? "bg-[#000080] text-white"
                         : "bg-white text-[rgba(0,0,0,0.7)]"
                     }`}
                >
                  {item.value}
                  <X
                    onClick={(e) => {
                      e.stopPropagation();
                      setSection((prev) =>
                        prev.filter((item) => item.value !== item.value)
                      );
                    }}
                    className={cn(
                      `bg-blue-700  rounded-full md:text-sm text-xs p-1 text-white`,
                      select.includes(item.value) && "bg-white text-blue-700"
                    )}
                  />
                </button>
              </div>
            ))}
          </Carousel>
          <div className="flex w-full justify-center  items-center gap-3">
            <SelectComp
              label="All Sector"
              className="bg-transparent w-[100%] gap-5  px-7  z-20 md:text-sm text-xs
               text-gray-500 border border-gray-100 shadow-lg rounded-2xl"
              containerClass=""
              Component={
                <AddRemoveSector section={section} setSection={setSection} />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorSlider;
