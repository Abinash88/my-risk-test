import { Box, Modal } from "@mui/material";
import { X } from "lucide-react";
import { useState } from "react";
import { GroupImages } from "../../../lib/fakedata";
import PrivateStanding from "./PrivateStanding";
import PublicStanding from "./PublicStanding";

import SelectComp from "@/components/shared/ReuseAble/select";
import Continents from "../../shared/continents.json";
import Countries from "../../shared/countries.json";
import SectorSlider from "./sector-slider";
import MainMap from "./main-map";

const Map = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sel, setSel] = useState("");
  const [country, setCountry] = useState("");
  const [stuff, setStuff] = useState(0);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    borderRadius: "5px",
    boxShadow: 24,
    paddingY: 2,
  };
  const closeModal = () => {
    setIsOpen(false);
    setStuff(0);
  };
  const [page, setPage] = useState<"private" | "public">("public");

  const FilterByLastMonth = [
    {
      label: "Past 24hrs",
      value: "Past 24hrs",
    },
    {
      label: "Past 48hrs",
      value: "Past 48hrs",
    },
    {
      label: "Past week",
      value: "Past week",
    },
    {
      label: "Past 24hrs",
      value: "Past 24hrs",
    },
  ];

  const RisksStatus = [
    {
      label: "All Risks",
      value: "All Risks",
    },
    {
      label: "Open Risks",
      value: "Open Risks",
    },
    {
      label: "Closed Risks",
      value: "Closed Risks",
    },
    {
      label: "Deleted Risks",
      value: "Deleted Risks",
    },
  ];

  return (
    <div className="pt-20 w-full md:pt-32 mb-20">
      <SectorSlider />
      <div className="h-2" />
      <div className="w-full ">
        <div className=" h-[70vh] border w-full relative">
          <div className="flex z-10  absolute top-5 flex-row m-auto gap-3 w-full md:justify-center ">
            <SelectComp
              label="Last Month"
              className="border border-white/50 shadow-lg "
              options={FilterByLastMonth}
            />
            <SelectComp
              label="Open Risks"
              className="border border-white/50 shadow-lg "
              options={RisksStatus}
            />
          </div>
          <div className="absolute z-10 top-5 space-y-2 left-12">
            <div className="bg-white text-center mt-1 border-2 rounded-lg border-purple-500 px-6 py-4 text-lg font-bold text-purple-900 z-10">
              Total Risk <br />
              999
            </div>
            <div className="text-white  border-2 text-center rounded-lg border-purple-500 p-2 text-xs md:text-sm font-bold bg-purple-900">
              All
            </div>
          </div>
          <div className="flex absolute z-10 right-10 top-5 flex-col gap-2">
            <div className="w-[150px] flex flex-col gap-1 bg-[#6666B3] text-white py-3 px-2 rounded-xl text-center md:text-sm text-xs border border-white/70 ">
              <span>Total User Risk</span>
              <span className="md:text-lg font-semibold">999</span>
            </div>
            <div className="w-[150px] flex flex-col gap-1 bg-[#6666B3] text-white py-3 px-2 rounded-xl text-center md:text-sm text-xs border border-white/70 ">
              <span>Total User Comment</span>
              <span className="md:text-lg font-semibold">999</span>
            </div>
            <div className="w-[150px] flex flex-col gap-1 bg-[#6666B3] text-white py-3 px-2 rounded-xl text-center md:text-sm text-xs border border-white/70 ">
              <span>Total User Likes</span>
              <span className="md:text-lg font-semibold">999</span>
            </div>
            <div className="w-[150px] flex flex-col gap-1 bg-[#6666B3] text-white py-3 px-2 rounded-xl text-center md:text-sm text-xs border border-white/70 ">
              <span>Total User Dislikes</span>
              <span className="md:text-lg font-semibold">999</span>
            </div>
          </div>

          <MainMap />
        </div>
        <div className="flex md:gap-3 justify-evenly items-center md:flex-wrap py-4">
          <button
            className={`p-3 rounded-md text-sm shadow-md w-[38%] font-[600] ${
              page === "public"
                ? "bg-[#000080] text-white"
                : "bg-white text-[rgba(0,0,0,0.7)]"
            }`}
            onClick={() => setPage("public")}
          >
            Public T & O Standing
          </button>
          <button
            className={`p-3 rounded-md shadow-md text-sm w-[38%] font-[600] ${
              page === "private"
                ? "bg-[#000080] text-white"
                : "bg-white text-[rgba(0,0,0,0.7)]"
            }`}
            onClick={() => setPage("private")}
          >
            Private T & O Standing{" "}
          </button>
        </div>
        <div className="flex flex-row overflow-auto pt-2 pb-12 mb-6 gap-8 scrollBar">
          {GroupImages.map((item, index) => (
            <div
              key={item.name}
              className={`relative w-[10rem]  h-[40px] rounded-full border-2 border-white transition-transform cursor-pointer`}
              title={item.name} // Tooltip for name
            >
              <div
                className={
                  index === 2 ? "border-purple-400 border-4 rounded-full" : ""
                }
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className=" rounded-full h-full object-cover"
                />
              </div>
              <p className="text-xs">#Group 333</p>
            </div>
          ))}
        </div>
        <select
          name="filter"
          id="filter"
          // disabled
          onClick={() => setIsOpen(true)}
          className={`
            ${page === "private" && "hidden "}
              flex border border-[rgb(217,217,217)] py-3 my-4 px-6 rounded-lg  outline-none text-[#000080] 
          `}
        >
          <option value="Filter by">Filter by</option>
          {/* <option value="Region">Region</option>
          <option value="Country">Country</option> */}
        </select>
        <Modal
          open={isOpen}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          // contentClassName="bg-white rounded-lg w-[50%] pb-4 scale-90 md:w-[35%] max-h-[95vh] overflow-y-auto scrollBar"
        >
          <Box
            sx={style}
            className={`w-[95%] ${!sel ? "md:w-[20%]" : "md:w-[60%]"} `}
          >
            <div className="w-[100%] flex justify-end">
              <X
                onClick={() => {
                  closeModal();
                  setSel("");
                }}
                className="mt-1 mr-2 z-20"
              />
            </div>
            <div className="flex -mt-4 items-start space-y-2 flex-col ml-5 justify-center">
              <p className="text-[#000080] text-lg pb-2 font-bold border-b-2 w-full">
                Select Your Location
              </p>
              <div className="flex md:flex-row flex-col">
                <div
                  className={`flex ${
                    stuff === 1
                      ? "flex-row md:flex-col md:w-fit  md:mr-4 space-x-6"
                      : "flex-col space-x-3"
                  } overflow-x-scroll md:overflow-hidden text-sm md:space-y-3 md:justify-center md:items-start scrollBar py-2 w-[80vw] md:w-fit md:px-12`}
                >
                  {Continents.map((x) => (
                    <p
                      key={x.continent_code}
                      className={`text-md font-bold mt-2 opacity-80 ml-3 ${
                        !sel ? "md:ml-3" : "md:ml-6"
                      } text-nowrap ${
                        sel === x.continent_name && "text-purple-800"
                      }`}
                      onClick={() => {
                        setStuff(1);
                        setSel(x.continent_name);
                      }}
                    >
                      {x.continent_name}
                    </p>
                  ))}
                </div>
                {stuff === 1 && (
                  <div className="h-80 space-y-2 gap-y-4 ml-4 md:ml-0 md:gap-4 flex flex-row flex-wrap w-[100%] overflow-y-scroll overflow-x-hidden scrollBar">
                    {Countries.map((x) => {
                      if (sel === x.continent)
                        return (
                          <p
                            className="text-md md:text-xs w-36 md:w-24 text-wrap mt-4 opacity-80 md:ml-3 "
                            onClick={() => {
                              setCountry(x.country);
                              closeModal();
                            }}
                          >
                            {x.country}
                          </p>
                        );
                    })}
                  </div>
                )}
              </div>
            </div>
          </Box>
        </Modal>
        {page === "public" && <PublicStanding />}
        {page === "private" && <PrivateStanding />}
      </div>
    </div>
  );
};

export default Map;
