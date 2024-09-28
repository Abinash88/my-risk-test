import Container from "@/components/shared/HomeLayout/container";
import { useState } from "react";
import PublicStanding from "./PublicStanding";
import PrivateStanding from "./PrivateStanding";
import RiskTable from "../mainPage/RiskTable";
import { Box, Modal } from "@mui/material";
import { GroupImages } from "../../../lib/fakedata";
import { X } from "lucide-react";

import Continents from "../../shared/continents.json";
import Countries from "../../shared/countries.json";

const Map = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sel, setSel] = useState("");
  const [countryx, setCountry] = useState("");
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
  const [section, setSection] = useState("1");

  const sections = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="pt-20 md:pt-32 mb-20">
      <div className="overflow-x-auto ml-8">
        <div className="flex gap-3 mb-6 flex-wrap md:flex-nowrap md:min-w-max">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setSection(sec)}
              className={`py-2 rounded-md shadow-md md:w-[23%] w-fit flex flex-wrap gap-4 items-center justify-center p-4 font-[600] ${
                section === sec
                  ? "bg-[#000080] text-white"
                  : "bg-white text-[rgba(0,0,0,0.7)]"
              }`}
            >
              {sec === "1" ? "Main Sector" : "Sector " + sec}
              {sec !== "1" && section !== sec && (
                <X className="bg-blue-700 rounded-full scale-75 text-white" />
              )}
            </button>
          ))}
        </div>
        <div className="flex flex-row m-auto w-full md:justify-center ">
          <select
            name="filter"
            id="filter"
            disabled
            onClick={() => setIsOpen(true)}
            className={`
              flex border text-white py-3 my-4 px-6 rounded-lg  outline-none bg-blue-600  
          `}
          >
            <option value="Filter by">Last Month</option>
            {/* <option value="Region">Region</option>
          <option value="Country">Country</option> */}
          </select>
          <select
            name="filter"
            id="filter"
            disabled
            onClick={() => setIsOpen(true)}
            className={`
              flex border text-white py-3 my-4 px-6 rounded-lg  outline-none bg-blue-600  
          `}
          >
            <option value="Filter by">Open Risk</option>
            {/* <option value="Region">Region</option>
          <option value="Country">Country</option> */}
          </select>
        </div>
      </div>
      <Container>
        {/* <div className="h-[70vh]"/> */}
        <div className=" h-[70vh]">
          <div className="absolute z-10">
            <div className="flex flex-row gap-2">
              <div>
                <div className="bg-white text-center mt-1 border-2 rounded-lg border-purple-500 p-4 text-xs font-bold text-purple-900 z-10">
                  Total Risk <br />
                  999
                </div>
                <div className="text-white  border-2 text-center rounded-lg border-purple-500 p-2 text-xs font-bold bg-purple-900">
                  All
                </div>
              </div>
              <div className="flex md:flex-col md:w-[70vw] md:items-end flex-row gap-2">
                <div>
                  <div className="md:flex flex-nowrap text-white mt-1 w-28 border-2 text-center rounded-lg p-1 border-purple-500 text-xs  bg-purple-900">
                    Total User Risk <br />
                    999
                  </div>
                  <div className=" md:flex text-white mt-1 w-28 border-2 text-center rounded-lg border-purple-500 p-1 text-xs  bg-green-900">
                    Total User Comment <br />
                    999
                  </div>
                </div>
                <div>
                  <div className="md:flex flex-nowrap text-white mt-1 w-28 border-2 text-center rounded-lg p-1 border-purple-500 text-xs  bg-blue-900">
                    Total User Likes <br />
                    999
                  </div>
                  <div className=" md:flex text-white mt-1 w-28 border-2 text-center rounded-lg border-purple-500 p-1 text-xs  bg-red-900">
                    Total User Dislikes <br />
                    999
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=uk&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            style={{
              border: "0",
              width: "86vw",
              height: "70vh",
              position: "absolute",
              zIndex: 1,
            }}
            loading="lazy"
            title="location"
            referrerPolicy="no-referrer-when-downgrade"
          />
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
      </Container>
    </div>
  );
};

export default Map;
