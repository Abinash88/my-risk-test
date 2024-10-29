import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CustomPopover from "../ReuseAble/custom-popover";
import GridSidebar from "./GridSidebar";
import User from "./user";
import UserPopop from "./user-popup";

const LoggedHeadSide = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const [openGrid, setOpenGrid] = useState(false);
  return (
    <div className="relative">
      <div className="lg:scale-90 flex">
        <div onClick={handleNav} className="hidden">
          {nav ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="text-[2rem] text-[#000080]"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="text-[2rem] text-[#000080]"
            />
          )}
        </div>
        <div className="flex items-center space-x-5 ml-auto ">
          <div className="relative">
            <FontAwesomeIcon
              icon={faBell}
              className="text-[18px] md:text-[25px] animate-wiggle"
            />
            <div className="px-1 bg-[#AB2626] rounded-full text-center text-white text-[10px] absolute -top-2 -end-1">
              3
              <div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-[#AB2626] w-full h-full"></div>
            </div>
          </div>

          <CustomPopover
            popIcon={
              <img
                src="/images/grid.png"
                alt="grid"
                className=" w-[19px] md:w-[25px] cursor-pointer"
                onClick={() => setOpenGrid(!openGrid)}
              />
            }
          >
            <div className="max-w-lg relative z-40">
              <GridSidebar />
            </div>
          </CustomPopover>

          <CustomPopover className=" w-full  !max-w-[260px]" popIcon={<User />}>
            <div className=" w-full max-w-xl h-[130px] bg-white z-30 relative overflow-hidden rounded-xl  ">
              <UserPopop />
            </div>
          </CustomPopover>
        </div>
      </div>
    </div>
  );
};

export default LoggedHeadSide;
