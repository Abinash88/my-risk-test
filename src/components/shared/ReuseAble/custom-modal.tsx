import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Modal } from "@mui/material";
import { X } from "lucide-react";
import { useState } from "react";
import Continents from "../../shared/continents.json";
import Countries from "../../shared/countries.json";

const CustomModal = ({ Component }: { Component?: React.ReactElement }) => {
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

  return (
    <div className="">
      {
        <button name="top" onClick={() => setIsOpen(true)} id="top">
          {Component || (
            <span className="py-3  px-5 w-full justify-between flex rounded-lg bg-white border-[1px] outline-none border-[black]">
              {countryx ? countryx : "Select Country"}&nbsp;&nbsp;
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          )}
        </button>
      }
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
                {Continents.map((x, index) => (
                  <p
                    key={index}
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
    </div>
  );
};

export default CustomModal;
