import { ChevronDown } from "lucide-react";
import CustomPopover from "../ReuseAble/custom-popover";
import TAndOFilter from "./t-and-o-filter";
import ResourcesDropdown from "./resources-dropdown";

const HeadSearchFilter = () => {
  return (
    <div className=" flex items-center gap-9 justify-center">
      <div className="md:block hidden">
        <CustomPopover
          className=" w-full  !max-w-[500px]"
          popIcon={
            <button className="flex gap-3 font-medium text-gray-600 md:text-base text-sm  items-center">
              <span>Resources</span>
              <ChevronDown />
            </button>
          }
        >
          <div className="  w-full min-w-2xl  min-h-[130px] bg-white z-30 relative overflow-hidden rounded-xl  ">
            <ResourcesDropdown />
          </div>
        </CustomPopover>
      </div>

      <div className="flex border w-full justify-between max-w-[400px] pl-3 rounded-full ">
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-base text-gray-600 font-medium text-sm"
        />
        <CustomPopover
          className=" w-full md:!max-w-[450px]"
          popIcon={
            <button className="rounded-full px-5 py-2 gap-2 flex text-white bg-[#000080]">
              <span>filters</span>
              <ChevronDown />
            </button>
          }
        >
          <div className=" w-full md:min-w-2xl min-h-[130px] bg-white z-30 relative overflow-hidden rounded-xl  ">
            <TAndOFilter />
          </div>
        </CustomPopover>
      </div>
    </div>
  );
};

export default HeadSearchFilter;
