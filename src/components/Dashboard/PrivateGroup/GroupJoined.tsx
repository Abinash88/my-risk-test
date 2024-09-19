import { useState } from "react";
import { GroupImages } from "../../../lib/fakedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import JoinGroupModal2 from "./JoinGroupModal2";

const GroupJoined = () => {
  const [showAll, setShowAll] = useState(false);
  const showAll2 = false;
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleToggleView = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <>
      <div className=" flex flex-col gap-4 mt-5 bg-white rounded-md px-2 py-5 h-[52vh] overflow-y-auto scrollBar">
        <div className="w-[96%] ml-2 bg-white shadow-custom-all-sides px-4 py-1 rounded-lg flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center w-[70%] flex-wrap">
            <p className="font-[500] text-md text-[rgba(0,0,0,0.7)]">
              Group #644282
            </p>
            <div className="relative flex items-center flex-wrap">
              {GroupImages.slice(0, showAll ? GroupImages.length : 5).map(
                (item, index) => (
                  <div
                    key={item.name}
                    className={`relative w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white transition-transform ${
                      showAll ? "mr-1" : "-ml-[0.1rem]"
                    } cursor-pointer`}
                    style={{
                      zIndex: showAll ? GroupImages.length - index : 5 - index,
                      transform: showAll
                        ? "translateX(0)"
                        : `translateX(-${index * 15}px)`,
                    }}
                    title={item.name} // Tooltip for name
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
              <div
                className={`relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-[14px] font-bold cursor-pointer ${
                  showAll
                    ? "text-red-400 bg-red-100"
                    : "text-[#000080] ml-[9px]"
                }`}
                onClick={() => handleToggleView()}
                style={{
                  zIndex: 0,
                  transform: showAll
                    ? "translateX(0)"
                    : `translateX(-${5 * 15}px)`,
                }}
                title={showAll ? "C" : `Show ${GroupImages.length - 5} more`}
              >
                {showAll ? "x" : `+${GroupImages.length - 5}`}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-[rgba(0,0,0,0.64)] bg-white shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer">
              <FontAwesomeIcon icon={faCircleXmark} className="font-light " />
              <p className="text-[11px] font-[600]">Leave</p>
            </div>
          </div>
        </div>
        <div className="w-[96%] ml-2 bg-white shadow-custom-all-sides px-4 py-1 rounded-lg flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center w-[70%] flex-wrap">
            <p className="font-[500] text-md text-[rgba(0,0,0,0.7)]">
              Group #644282
            </p>
            <div className="relative flex items-center flex-wrap">
              {GroupImages.slice(0, showAll2 ? GroupImages.length : 5).map(
                (item, index) => (
                  <div
                    key={item.name}
                    className={`relative w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white transition-transform ${
                      showAll2 ? "mr-1" : "-ml-[0.1rem]"
                    } cursor-pointer`}
                    style={{
                      zIndex: showAll2 ? GroupImages.length - index : 5 - index,
                      transform: showAll2
                        ? "translateX(0)"
                        : `translateX(-${index * 15}px)`,
                    }}
                    title={item.name} // Tooltip for name
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
              <div
                className={`relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-[14px] font-bold cursor-pointer ${
                  showAll2
                    ? "text-red-400 bg-red-100"
                    : "text-[#000080] ml-[9px]"
                }`}
                onClick={handleToggleView}
                style={{
                  zIndex: 0,
                  transform: showAll2
                    ? "translateX(0)"
                    : `translateX(-${5 * 15}px)`,
                }}
                title={showAll2 ? "C" : `Show ${GroupImages.length - 5} more`}
              >
                {showAll2 ? "x" : `+${GroupImages.length - 5}`}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-[rgba(0,0,0,0.64)] bg-white shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer">
              <FontAwesomeIcon icon={faCircleXmark} className="font-light " />
              <p className="text-[11px] font-[600]">Leave</p>
            </div>
          </div>
        </div>
        <div className="w-[96%] ml-2 bg-white shadow-custom-all-sides px-4 py-1 rounded-lg flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center w-[70%] flex-wrap">
            <p className="font-[500] text-md text-[rgba(0,0,0,0.7)]">
              Group #644282
            </p>
            <div className="relative flex items-center flex-wrap">
              {GroupImages.slice(0, showAll2 ? GroupImages.length : 5).map(
                (item, index) => (
                  <div
                    key={item.name}
                    className={`relative w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white transition-transform ${
                      showAll2 ? "mr-1" : "-ml-[0.1rem]"
                    } cursor-pointer`}
                    style={{
                      zIndex: showAll2 ? GroupImages.length - index : 5 - index,
                      transform: showAll2
                        ? "translateX(0)"
                        : `translateX(-${index * 15}px)`,
                    }}
                    title={item.name} // Tooltip for name
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
              <div
                className={`relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-[14px] font-bold cursor-pointer ${
                  showAll2
                    ? "text-red-400 bg-red-100"
                    : "text-[#000080] ml-[9px]"
                }`}
                onClick={handleToggleView}
                style={{
                  zIndex: 0,
                  transform: showAll2
                    ? "translateX(0)"
                    : `translateX(-${5 * 15}px)`,
                }}
                title={showAll2 ? "C" : `Show ${GroupImages.length - 5} more`}
              >
                {showAll2 ? "x" : `+${GroupImages.length - 5}`}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-[rgba(0,0,0,0.64)] bg-white shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer">
              <FontAwesomeIcon icon={faCircleXmark} className="font-light " />
              <p className="text-[11px] font-[600]">Leave</p>
            </div>
          </div>
        </div>
        <div className="w-[96%] ml-2 bg-white shadow-custom-all-sides px-4 py-1 rounded-lg flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center w-[70%] flex-wrap">
            <p className="font-[500] text-md text-[rgba(0,0,0,0.7)]">
              Group #644282
            </p>
            <div className="relative flex items-center flex-wrap">
              {GroupImages.slice(0, showAll2 ? GroupImages.length : 5).map(
                (item, index) => (
                  <div
                    key={item.name}
                    className={`relative w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white transition-transform ${
                      showAll2 ? "mr-1" : "-ml-[0.1rem]"
                    } cursor-pointer`}
                    style={{
                      zIndex: showAll2 ? GroupImages.length - index : 5 - index,
                      transform: showAll2
                        ? "translateX(0)"
                        : `translateX(-${index * 15}px)`,
                    }}
                    title={item.name} // Tooltip for name
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
              <div
                className={`relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-[14px] font-bold cursor-pointer ${
                  showAll2
                    ? "text-red-400 bg-red-100"
                    : "text-[#000080] ml-[9px]"
                }`}
                onClick={handleToggleView}
                style={{
                  zIndex: 0,
                  transform: showAll2
                    ? "translateX(0)"
                    : `translateX(-${5 * 15}px)`,
                }}
                title={showAll2 ? "C" : `Show ${GroupImages.length - 5} more`}
              >
                {showAll2 ? "x" : `+${GroupImages.length - 5}`}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-[rgba(0,0,0,0.64)] bg-white shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer">
              <FontAwesomeIcon icon={faCircleXmark} className="font-light " />
              <p className="text-[11px] font-[600]">Leave</p>
            </div>
          </div>
        </div>
        <div className="w-[96%] ml-2 bg-white shadow-custom-all-sides px-4 py-1 rounded-lg flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center w-[70%] flex-wrap">
            <p className="font-[500] text-md text-[rgba(0,0,0,0.7)]">
              Group #644282
            </p>
            <div className="relative flex items-center flex-wrap">
              {GroupImages.slice(0, showAll2 ? GroupImages.length : 5).map(
                (item, index) => (
                  <div
                    key={item.name}
                    className={`relative w-[40px] h-[40px] rounded-full overflow-hidden border-2 border-white transition-transform ${
                      showAll2 ? "mr-1" : "-ml-[0.1rem]"
                    } cursor-pointer`}
                    style={{
                      zIndex: showAll2 ? GroupImages.length - index : 5 - index,
                      transform: showAll2
                        ? "translateX(0)"
                        : `translateX(-${index * 15}px)`,
                    }}
                    title={item.name} // Tooltip for name
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
              <div
                className={`relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-[14px] font-bold cursor-pointer ${
                  showAll2
                    ? "text-red-400 bg-red-100"
                    : "text-[#000080] ml-[9px]"
                }`}
                onClick={handleToggleView}
                style={{
                  zIndex: 0,
                  transform: showAll2
                    ? "translateX(0)"
                    : `translateX(-${5 * 15}px)`,
                }}
                title={showAll2 ? "C" : `Show ${GroupImages.length - 5} more`}
              >
                {showAll2 ? "x" : `+${GroupImages.length - 5}`}
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="text-[rgba(0,0,0,0.64)] bg-white shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer">
              <FontAwesomeIcon icon={faCircleXmark} className="font-light " />
              <p className="text-[11px] font-[600]">Leave</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-9">
        <button
          className="bg-[#6666B3] scale-90 text-white px-9 py-2 rounded-lg text-md"
          onClick={() => setOpenModal(true)}
        >
          Join Group
        </button>
      </div>
      {/* <JoinGroupModal open={openModal} close={handleClose} /> */}
      <JoinGroupModal2 isModalOpen={openModal} closeModal={handleClose} />
    </>
  );
};

export default GroupJoined;
