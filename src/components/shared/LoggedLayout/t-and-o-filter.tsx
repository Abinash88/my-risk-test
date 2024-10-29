import { DatePicker } from "antd";
import { ChevronDown } from "lucide-react";

const TAndOFilter = () => {
  return (
    <div className="w-full p-4 border rounded-xl h-full">
      <div className="">
        <h3 className="font-medium md:text-base text-sm my-2">Risk Type</h3>
        <div className="flex gap-4 items-center justify-between">
          <button className=" py-1.5 w-[50%] text-white bg-red-600 text-center rounded-lg ">
            Threats
          </button>
          <button className=" py-1.5 w-[50%] text-white bg-blue-600 text-center rounded-lg ">
            Opportunities
          </button>
        </div>
      </div>
      <div className="h-3" />
      <div className="">
        <h3 className="font-medium md:text-base text-sm my-2">Region</h3>
        <div className="flex gap-4 items-center justify-between">
          <button className=" py-1.5 w-[50%] text-white bg-[#00C7BE] text-center rounded-lg ">
            Global
          </button>
          <button className=" flex gap-2 j  justify-center py-1.5 w-[50%] text-white bg-[#A2845E] text-center rounded-lg ">
            <span>Select Country</span> <ChevronDown />
          </button>
        </div>
      </div>
      <div className="h-3" />
      <div className="">
        <h3 className="font-medium md:text-base text-sm my-2">Exposure</h3>
        <div className="flex gap-4 items-center justify-between">
          <DatePicker className="text py-1.5 w-[50%] text-white bg-[#000080] hover:bg-[#000080] date_picker text-center rounded-lg " />
          <DatePicker className="text py-1.5 w-[50%] text-white bg-[#000080] hover:bg-[#000080] date_picker text-center rounded-lg " />
        </div>
      </div>
      <div className="h-5" />
      <button className=" py-1.5 text-white bg-[#000080] hover:bg-[#000080]/80 w-full text-center rounded-lg ">
        Apply
      </button>
    </div>
  );
};

export default TAndOFilter;
