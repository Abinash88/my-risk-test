import SelectComp from "@/components/shared/ReuseAble/select";
import { Carousel } from "antd";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import React, { useState } from "react";

const SectorData = [
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
];



const AddRemoveSector = ({
  setSection,
}: {
  setSection: React.Dispatch<
    React.SetStateAction<{ label: string; value: string }[]>
  >;
}) => {
  const [search, setSearch] = useState("");
  const searchSector = SectorData.filter((item) =>
    item.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" w-full min-w-[200px] rounded-lg p-4">
      <div className="relative flex w-full">
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
                setSection((prev) => {
                  const newData = [...prev];

                  const filterd = newData.filter(
                    (item) => item?.value !== item?.value
                  );
                  return newData.includes(item) ? filterd : [...newData, item];
                });
              }}
              className="rounded-full px-5 bg-blue-700  text-xs py-1 shadow-md text-white "
            >
              {"Add"}
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
  const [select, setSelect] = useState("");
  return (
    <div className="grid relative grid-cols-[90%_15%]">
      <Carousel
        arrows
        slidesToShow={4}
        slidesToScroll={1}
        dots={false}
        prevArrow={<ChevronLeft />}
        nextArrow={<ChevronRight />}
        draggable
        id="sector_carousel"
        className="w-[70%]  mx-auto"
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
        {section?.map((item, index) => (
          <div key={index} className=" h-16 flex justify-center items-center ">
            <button
              style={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 10px" }}
              onClick={() => setSelect(item.value)}
              className={`py-2 rounded-2xl mt-2 w-[90%] my-auto mx-auto flex flex-wrap gap-4 items-center  justify-center p-4 font-medium ${
                select === item.value
                  ? "bg-[#000080] text-white"
                  : "bg-white text-[rgba(0,0,0,0.7)]"
              }`}
            >
              {item.value === select ? "Main Sector" : "Sector " + item.value}
              {item.value !== select && select !== item.value && (
                <X
                  onClick={() => {
                    setSection((prev) =>
                      prev.filter((item) => item.value !== item.value)
                    );
                  }}
                  className="bg-blue-700 rounded-full p-1 text-white"
                />
              )}
            </button>
          </div>
        ))}
        <SelectComp
          label="All Sector"
          className="bg-transparent  text-gray-500 border-none shadow-lg rounded-2xl"
          containerClass=" z-50 top-1"
          Component={<AddRemoveSector section={section} setSection={setSection} />}
        />
      </Carousel>
    </div>
  );
};

export default SectorSlider;
