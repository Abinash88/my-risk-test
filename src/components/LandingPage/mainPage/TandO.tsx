import { useState } from "react";
import Container from "../../shared/HomeLayout/container";
import Threat from "./Global/Threat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Opportunity from "./Global/Opportunity";
import { Box, Modal } from "@mui/material";
import { X } from "lucide-react";
import Continents from "../../shared/continents.json";
import Countries from "../../shared/countries.json";
import { cn } from "@/lib/utils";

const TandO = () => {
  const [page, setPage] = useState<"threat" | "opport">("threat");
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
    <div
      style={{
        backgroundImage: `url('/images/tno.png')`,
        marginTop: -50,
        zIndex: 1,
      }}
    >
      <div
        className="my-[3rem] scale-90 rounded-lg md:scale-[85%] bg-white pb-20"
        // style={{ backgroundImage: `url('/images/tno.png')` }}
      >
        <Container>
          <div className="flex items-center justify-between pt-20 pb-20 mb-5 flex-wrap">
            <h2 className=" text-2xl md:text-3xl font-[700]">Top 15 T & O</h2>
            <div className="flex flex-row gap-2 mt-4 md:mt-1">
              <button className="bg-[#6666B3] text-white px-9 py-2 rounded-lg text-md">
                Global
              </button>
              <button
                name="top"
                onClick={() => setIsOpen(true)}
                id="top"
                className="py-3  px-5 w-full justify-between flex rounded-lg bg-white border-[1px] outline-none border-[black]"
              >
                {countryx ? countryx : "Select Country"}&nbsp;&nbsp;
                <FontAwesomeIcon icon={faAngleDown} />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 mb-6">
            <button
              onClick={() => setPage("threat")}
              className={cn(
                `w-[48%] bg-[#000080] text-white p-3  rounded-[16px] text-md md:text-[23px]`,
                page === "threat" && "shadow-xl"
              )}
            >
              Threat
            </button>
            <button
              onClick={() => setPage("opport")}
              className={cn(
                ` w-[48%] bg-[#1D98F0] text-white p-3 rounded-[16px] text-md md:text-[23px]`,
                page === "opport" && "shadow-xl"
              )}
            >
              Opportunity
            </button>
          </div>
          <div>
            {page === "threat" && <Threat />}
            {page === "opport" && <Opportunity />}
          </div>
        </Container>
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
      </div>
    </div>
  );
};

export default TandO;
