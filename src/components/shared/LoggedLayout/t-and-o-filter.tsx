import { DatePicker } from "antd";
import { ChevronDown } from "lucide-react";
import CustomPopover from "../ReuseAble/custom-popover";
import { DropDownBox } from "../custom-dropdown";
import { cn, dropDownData } from "@/lib/utils";
import { useState } from "react";

const TAndOFilter = () => {
  const [country, setCountry] = useState("");
  const [select, setSelect] = useState("");
  return (
    <div className="w-full p-4 border rounded-xl h-full">
      <div className="">
        <h3 className="font-medium md:text-base text-sm my-2">Risk Type</h3>
        <div className="flex gap-4 items-center justify-between">
          <button
            onClick={() => setSelect("Threats")}
            className={cn(
              ` py-1.5 w-[50%] text-white bg-red-600/80 text-center rounded-lg `,
              select === "Threats" && "bg-red-700"
            )}
          >
            Threats
          </button>
          <button
            onClick={() => setSelect("Opportunities")}
            className={cn(
              ` py-1.5 w-[50%] text-white bg-blue-600/80 text-center rounded-lg `,
              select === "Opportunities" && "bg-blue-700"
            )}
          >
            Opportunities
          </button>
        </div>
      </div>
      <div className="h-3" />
      <div className="">
        <h3 className="font-medium md:text-base text-sm my-2">Region</h3>
        <div className="flex gap-4 items-center justify-between">
          <button
            onClick={() => {
              setCountry("global");
            }}
            className="  py-1.5 w-[50%] text-white bg-[#00C7BE] text-center rounded-lg "
          >
            Global
          </button>
          <div className="w-[50%]">
            <CustomPopover
              btnClassName="w-full "
              popIcon={
                <button className=" flex   w-full gap-2 font-normal border justify-center py-1.5  text-white bg-[#A2845E] text-center rounded-lg ">
                  <span>{country || "Select Country"}</span> <ChevronDown />
                </button>
              }
            >
              <DropDownBox
                onChange={(data) => {
                  setCountry(data);
                }}
                value={country}
                options={dropDownData}
              />
            </CustomPopover>
          </div>
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
