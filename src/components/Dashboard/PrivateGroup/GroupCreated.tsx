import { useState } from "react";
import { GroupImages } from "../../../lib/fakedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import AddGroupModal from "./AddgroupModal";
import DeleteModal from "../ManageRIsk/CommentModal/DeleteModal";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";

const GroupCreated = () => {
  const [showAll, setShowAll] = useState(false);
  const showAll2 = false;
  const [openDelete, setOpenDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleToggleView = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  return (
    <>
      <div className="lg:h-[55vh] h-[100vh] flex flex-col gap-4 mt-5 bg-white rounded-md px-2 py-2 overflow-y-auto scrollBar">
        <div className="w-[96%] ml-2 bg-white shadow-custom-all-sides px-4 py-1 rounded-lg flex justify-between md:gap-2 items-center">
          <div className="flex gap-2 items-center w-[60%] md:w-[70%] flex-wrap">
            <p className="font-[500] text-md text-[rgba(0,0,0,0.7)]">
              Group #827282
            </p>
            <div
              className={`relative flex items-center  ${
                showAll ? "flex-wrap" : "flex-nowrap"
              }`}
            >
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
                onClick={handleToggleView}
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
          <div className="flex flex-nowrap md:gap-3">
            <div className="items-center hidden md:flex">
              <button
                    onClick={() => navigate("/map")}
                    className="bg-white mt-2 scale-90 text-[#6666B3] hover:text-white hover:bg-[#6666B3] border-[#6666B3] border w-40 py-2 h-10 rounded-lg text-sm">
                View Standings
              </button>
            </div>
            <div className="p-3">
              <Popover className="relative">
                <PopoverButton>
                  <FontAwesomeIcon
                    icon={faCog}
                    className="font-light mt-1 text-2xl "
                  />
                </PopoverButton>
                <PopoverPanel
                  anchor="top end"
                  className="flex space-y-4 md:space-y-0 flex-col bg-white px-2 md:px-4 py-2  rounded-lg border border-gray-200"
                >
                  <Link to={"/dashboard/group-settings"} className="text-xs">
                    Group Settings
                  </Link>
                  <p className="text-xs flex md:hidden">View Standings</p>
                  <p className="text-xs text-red-500 flex md:hidden">Delete</p>
                </PopoverPanel>
              </Popover>
            </div>
            <div
              className="text-white  hidden md:flex scale-90 mr-2 bg-[rgba(160,11,11,0.8)] shadow-custom-all-sides py-2 px-3 flex-col gap-1 items-center justify-center rounded-md cursor-pointer"
              onClick={() => setOpenDelete(true)}
            >
              <FontAwesomeIcon icon={faTrashCan} className="font-light " />
              <p className="text-[11px] scale-90 font-[600]">Delete</p>
            </div>
          </div>
        </div>
        <div className="w-[96%] ml-2 bg-white shadow-custom-all-sides px-4 py-1 rounded-lg flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center w-[70%] flex-wrap">
            <p className="font-[500] text-md text-[rgba(0,0,0,0.7)]">
              Group #827282
            </p>
            <div className="relative flex items-center flex-nowrap md:flex-wrap">
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
          <div className="flex flex-nowrap md:gap-3">
            <div className="items-center hidden md:flex">
              <button
                    onClick={() => navigate("./map")}
                    className="bg-white mt-2 scale-90 text-[#6666B3] hover:text-white hover:bg-[#6666B3] border-[#6666B3] border w-40 py-2 h-10 rounded-lg text-sm">
                View Standings
              </button>
            </div>
            <div className="p-3">
              <Popover className="relative">
                <PopoverButton>
                  <FontAwesomeIcon
                    icon={faCog}
                    className="font-light mt-1 text-2xl "
                  />
                </PopoverButton>
                <PopoverPanel
                  anchor="top end"
                  className="flex space-y-4 md:space-y-0 flex-col bg-white px-2 md:px-4 py-2  rounded-lg border border-gray-200"
                >
                  <Link to={"/dashboard/group-settings"} className="text-xs">
                    Group Settings
                  </Link>
                  <p className="text-xs flex md:hidden"
                    onClick={() => navigate("/map")}
                    >View Standings</p>
                  <p className="text-xs text-red-500 flex md:hidden">Delete</p>
                </PopoverPanel>
              </Popover>
            </div>
            <div
              className="text-white  hidden md:flex scale-90 mr-2 bg-[rgba(160,11,11,0.8)] shadow-custom-all-sides py-2 px-3 flex-col gap-1 items-center justify-center rounded-md cursor-pointer"
              onClick={() => setOpenDelete(true)}
            >
              <FontAwesomeIcon icon={faTrashCan} className="font-light " />
              <p className="text-[11px] scale-90 font-[600]">Delete</p>
            </div>
          </div>
        </div>
        <div className="w-[96%] ml-2 bg-white shadow-custom-all-sides px-4 py-1 rounded-lg flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center w-[70%] flex-wrap">
            <p className="font-[500] text-md text-[rgba(0,0,0,0.7)]">
              Group #827282
            </p>
            <div className="relative flex items-center flex-nowrap md:flex-wrap">
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
          <div className="flex flex-nowrap md:gap-3">
            <div className="items-center hidden md:flex">
              <button 
                    onClick={() => navigate("/map")}
                    className="bg-white mt-2 scale-90 text-[#6666B3] hover:text-white hover:bg-[#6666B3] border-[#6666B3] border w-40 py-2 h-10 rounded-lg text-sm">
                View Standings
              </button>
            </div>
            <div className="p-3">
              <Popover className="relative">
                <PopoverButton>
                  <FontAwesomeIcon
                    icon={faCog}
                    className="font-light mt-1 text-2xl "
                  />
                </PopoverButton>
                <PopoverPanel
                  anchor="top end"
                  className="flex space-y-4 md:space-y-0 flex-col bg-white px-2 md:px-4 py-2  rounded-lg border border-gray-200"
                >
                  <Link to={"/dashboard/group-settings"} className="text-xs">
                    Group Settings
                  </Link>
                  <p className="text-xs flex md:hidden"
                    onClick={() => navigate("/map")}
                    >View Standings</p>
                  <p className="text-xs text-red-500 flex md:hidden">Delete</p>
                </PopoverPanel>
              </Popover>
            </div>
            <div
              className="text-white  hidden md:flex scale-90 mr-2 bg-[rgba(160,11,11,0.8)] shadow-custom-all-sides py-2 px-3 flex-col gap-1 items-center justify-center rounded-md cursor-pointer"
              onClick={() => setOpenDelete(true)}
            >
              <FontAwesomeIcon icon={faTrashCan} className="font-light " />
              <p className="text-[11px] scale-90 font-[600]">Delete</p>
            </div>
          </div>
        </div>
        <div className="w-[96%] ml-2 bg-white shadow-custom-all-sides px-4 py-1 rounded-lg flex justify-between gap-2 items-center">
          <div className="flex gap-2 items-center w-[70%] flex-wrap">
            <p className="font-[500] text-md text-[rgba(0,0,0,0.7)]">
              Group #827282
            </p>
            <div className="relative flex items-center flex-nowrap md:flex-wrap">
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
          <div className="flex flex-nowrap md:gap-3">
            <div className="items-center hidden md:flex">
              <button 
                    onClick={() => navigate("/map")}
                    className="bg-white mt-2 scale-90 text-[#6666B3] hover:text-white hover:bg-[#6666B3] border-[#6666B3] border w-40 py-2 h-10 rounded-lg text-sm">
                View Standings
              </button>
            </div>
            <div className="p-3">
              <Popover className="relative">
                <PopoverButton>
                  <FontAwesomeIcon
                    icon={faCog}
                    className="font-light mt-1 text-2xl "
                  />
                </PopoverButton>
                <PopoverPanel
                  anchor="top end"
                  className="flex space-y-4 md:space-y-0 flex-col bg-white px-2 md:px-4 py-2  rounded-lg border border-gray-200"
                >
                  <Link to={"/dashboard/group-settings"} className="text-xs">
                    Group Settings
                  </Link>
                  <p
                    className="text-xs flex md:hidden"
                    onClick={() => navigate("/map")}
                  >
                    View Standings
                  </p>
                  <p className="text-xs text-red-500 flex md:hidden">Delete</p>
                </PopoverPanel>
              </Popover>
            </div>
            <div
              className="text-white  hidden md:flex scale-90 mr-2 bg-[rgba(160,11,11,0.8)] shadow-custom-all-sides py-2 px-3 flex-col gap-1 items-center justify-center rounded-md cursor-pointer"
              onClick={() => setOpenDelete(true)}
            >
              <FontAwesomeIcon icon={faTrashCan} className="font-light " />
              <p className="text-[11px] scale-90 font-[600]">Delete</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-5">
        <button
          className="bg-[#6666B3] scale-90 text-white px-9 py-2 rounded-lg text-md"
          onClick={() => setOpenModal(true)}
        >
          Add New Group
        </button>
      </div>
      <AddGroupModal open={openModal} close={handleClose} />
      {<DeleteModal isModalOpen={openDelete} closeModal={handleCloseDelete} />}
    </>
  );
};

export default GroupCreated;
