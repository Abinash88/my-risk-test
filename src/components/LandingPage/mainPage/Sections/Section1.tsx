import RiskTable from "../RiskTable";
import { useState } from "react";
import { X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@mui/material/Modal";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";

const Section1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
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
  const closeModal2 = () => {
    setIsOpen2(false);
    setStuff(0);
  };
  return (
    <div>
      <button
        name="filter"
        id="filter"
        onClick={() => setIsOpen(true)}
        //   className="py-3 md:hidden px-5 w-full justify-between flex rounded-lg bg-white border-[1px] outline-none border-[black]"
        className="flex mt-2 ml-auto border border-[rgb(217,217,217)] justify-between py-3 px-6 rounded-lg mb-8 outline-none text-[#000080]"
      >
        Filter by&nbsp;&nbsp;
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <div>
        <RiskTable />
      </div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // contentClassName="bg-white rounded-lg w-[50%] pb-4 scale-90 md:w-[35%] max-h-[95vh] overflow-y-auto scrollBar"
      >
        <Box sx={style} className="w-[90%] md:w-72">
          <div className="w-[100%] flex justify-end">
            <X
              onClick={() => {
                closeModal();
              }}
              className="mt-1 mr-2 z-20"
            />
          </div>
          <div className="flex -mt-4 items-center space-y-2 flex-col justify-center">
            <p className="text-[#000080] text-lg pb-2 border-b-2 w-full text-center">
              Filter By
            </p>
            {stuff === 0 && (
              <div>
                <p className="text-lg  mt-2" onClick={() => setStuff(1)}>
                  Days/Time
                </p>
                <p className="text-lg  mt-2" onClick={() => setStuff(2)}>
                  Top Ranking
                </p>
              </div>
            )}
            {stuff === 1 && (
              <div>
                <p className="text-lg  mt-2">Past 24 hrs</p>
                <p className="text-lg  mt-2">Past 48 hrs</p>
                <p className="text-lg  mt-2">Past week</p>
                <p className="text-lg  mt-2">Past month</p>
                <p className="text-lg  mt-2">Past year</p>
              </div>
            )}
            {stuff === 2 && (
              <div>
                <p className="text-lg  mt-2">Top 40</p>
                <p className="text-lg  mt-2">Top 100</p>
                <p className="text-lg  mt-2">All Time</p>
              </div>
            )}
          </div>
        </Box>
      </Modal>
      <Modal
        open={isOpen2}
        onClose={closeModal2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // contentClassName="bg-white rounded-lg w-[50%] pb-4 scale-90 md:w-[35%] max-h-[95vh] overflow-y-auto scrollBar"
      >
        <Box sx={style} className="w-[90%] md:w-72">
          <div className="w-[100%] flex justify-end">
            <X
              onClick={() => {
                closeModal2();
              }}
              className="mt-1 mr-2 z-20"
            />
          </div>
          <div className="flex -mt-4 items-center space-y-2 flex-col justify-center">
            <p className="text-[#000080] text-lg pb-2 border-b-2 w-full text-center">
              Select Region
            </p>
            {stuff === 0 && (
              <div>
                <p className="text-lg  mt-2" onClick={() => setStuff(3)}>
                  Days/Time
                </p>
                <p className="text-lg  mt-2" onClick={() => setStuff(4)}>
                  Top Ranking
                </p>
              </div>
            )}
            {stuff === 1 && (
              <div>
                <p className="text-lg  mt-2">Past 24 hrs</p>
                <p className="text-lg  mt-2">Past 48 hrs</p>
                <p className="text-lg  mt-2">Past week</p>
                <p className="text-lg  mt-2">Past month</p>
                <p className="text-lg  mt-2">Past year</p>
              </div>
            )}
            {stuff === 2 && (
              <div>
                <p className="text-lg  mt-2">Top 40</p>
                <p className="text-lg  mt-2">Top 100</p>
                <p className="text-lg  mt-2">All Time</p>
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Section1;
