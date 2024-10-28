import { Box, Modal } from "@mui/material";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { GroupImages, type GroupImagesType } from "../../../lib/fakedata";
import PrivateStanding from "./PrivateStanding";
import PublicStanding from "./PublicStanding";

import Container from "@/components/shared/HomeLayout2/container";
import SelectComp from "@/components/shared/ReuseAble/select";
import { cn } from "@/lib/utils";
import { Carousel } from "antd";
import { useState } from "react";
import Continents from "../../shared/continents.json";
import Countries from "../../shared/countries.json";
import TableFooterBtn from "./table-footer-btn";

const TableStatus = [
  {
    label: "Top 40",
    value: "40",
  },
  {
    label: "Top 100",
    value: "100",
  },
  {
    label: "All Time",
    value: "All Time",
  },
];

const TableData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sel, setSel] = useState("");
  const [country, setCountry] = useState("");
  const [groups, setGroups] = useState<GroupImagesType>(GroupImages[0]);
  const [stuff, setStuff] = useState(0);
  const [page, setPage] = useState<"private" | "public">("public");

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
  return (
    <Container>
      <div className="flex  flex-wrap justify-between gap-4 md:gap-9 my-6">
        <button
          className={`p-3 rounded-md text-sm shadow-md flex-1 font-[600] ${
            page === "public"
              ? "bg-[#000080] text-white"
              : "bg-white text-[rgba(0,0,0,0.7)]"
          }`}
          onClick={() => setPage("public")}
        >
          Public T & O Standing
        </button>
        <button
          className={`p-3 rounded-md shadow-md text-sm flex-1 font-[600] ${
            page === "private"
              ? "bg-[#000080] text-white"
              : "bg-white text-[rgba(0,0,0,0.7)]"
          }`}
          onClick={() => setPage("private")}
        >
          Private T & O Standing{" "}
        </button>
        {page === "public" && (
          <SelectComp
            label="Filter by"
            className="border border-blue-600 bg-transparent text-blue-800  shadow-lg "
            options={TableStatus}
          />
        )}
      </div>
      {page === "private" && (
        <Carousel
          arrows
          slidesToShow={9}
          slidesToScroll={1}
          dots={false}
          prevArrow={<ChevronLeft />}
          nextArrow={<ChevronRight />}
          draggable
          id="group_carousel"
          className="w-[90%] my-4 mx-auto"
          responsive={[
            {
              breakpoint: 1024, // Medium screens (tablet and up)
              settings: {
                slidesToShow: 7,
              },
            },
            {
              breakpoint: 768, // Small screens (portrait tablet and up)
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 480, // Extra-small screens (mobile)
              settings: {
                slidesToShow: 3,
              },
            },
          ]}
        >
          {GroupImages.map((item) => (
            <div
              key={item.name}
              className={`relative  flex justify-center items-center h-[17vh]  transition-transform cursor-pointer`}
              title={item.name}
            >
              <div className="flex flex-col m-auto h-full w-[12vh] py-4 md:w-[13vh] justify-center items-center">
                <button
                  onClick={() => {
                    setGroups(item);
                  }}
                  className={cn(
                    groups?.name === item?.name
                      ? "border-purple-400 border-8 m-auto rounded-full"
                      : "m-auto border-8 rounded-full  border-transparent"
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" rounded-full size-full object-cover"
                  />
                </button>
                <p className="md:text-sm text-xs text-center text-[#000080] font-medium ">
                  #Group 333
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      )}

      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
      <div className="h-10"></div>
      <TableFooterBtn />
    </Container>
  );
};

export default TableData;
