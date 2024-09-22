import Modal from "@/components/shared/ReuseAble/modal";
import RiskTable from "../RiskTable";
import { useState } from "react";
import { X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Section1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stuff, setStuff] = useState(0);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button
        name="filter"
        id="filter"
        onClick={() => setIsOpen(true)}
        //   className="py-3 md:hidden px-5 w-full justify-between flex rounded-lg bg-white border-[1px] outline-none border-[black]"
        className="flex mt-2 md:hidden ml-auto border border-[rgb(217,217,217)] justify-between py-3 px-6 rounded-lg mb-8 outline-none text-[#000080]"
      >
        Filter by&nbsp;&nbsp;
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <button
        name="filter"
        id="filter"
        //   className="py-3 md:hidden px-5 w-full justify-between flex rounded-lg bg-white border-[1px] outline-none border-[black]"
        className="md:flex hidden ml-auto border border-[rgb(217,217,217)] justify-between py-3 px-6 rounded-lg mb-8 outline-none text-[#000080]"
      >
        Filter by&nbsp;&nbsp;
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <div>
        <RiskTable />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        contentClassName="bg-white rounded-lg w-[50%] pb-4 scale-90 md:w-[35%] max-h-[95vh] overflow-y-auto scrollBar"
      >
        <div className="w-[100%] flex justify-end">
          <X
            onClick={() => {
              closeModal();
              setTimeout(() => setStuff(0), 1000);
            }}
            className="mt-1 mr-2"
          />
        </div>
        <div className="flex items-center space-y-2 flex-col justify-center">
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
      </Modal>
    </div>
  );
};

export default Section1;
