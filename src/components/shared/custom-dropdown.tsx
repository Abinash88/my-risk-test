import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";
import type { DropdownTypes } from "../LandingPage/engage-with-t-and-o/sector-slider";
import SelectComp from "./ReuseAble/select";

type CustomDropdownType = {
  options: DropdownTypes[];
  onChange: (data: string) => void;
  value?: string;
};

const DropDownBox = ({ options, onChange, value }: CustomDropdownType) => {
  const [search, setSearch] = useState("");
  const searchSector = options.filter((item) =>
    item.value.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" w-full min-w-[200px] border rounded-lg p-4">
      <div className="relative flex w-[90%] mx-auto md:w-full">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search & Add Sector "
          className="border rounded-lg px-2 w-full py-2 placeholder:text-xs text-xs"
          type="text"
        />
        <Search className="absolute size-4 cursor-pointer top-1/3 right-3" />
      </div>
      <div className=" scrollBar flex flex-col items-start px-2 text-left w-full  max-h-[200px] overflow-y-auto mt-3">
        {searchSector?.map((item, index) => (
          <button
            onClick={() => {
              onChange(item?.value);
            }}
            key={index}
            className={cn(
              `md:text-base py-1 px-2 rounded-md w-full text-left hover:bg-blue-50  text-sm`,
              item?.value === value && "bg-gray-100"
            )}
            title={item?.value}
          >
            {item?.value.length > 20
              ? item?.value.substring(0, 20) + "..."
              : item?.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export const CustomDropdown = ({
  options,
  onChange,
  value,
  className,
}: CustomDropdownType & { containerClass: string; className?: string }) => {
  return (
    <SelectComp
      label="Select Country"
      className={cn(`border border-white/50  shadow-lg `, className)}
      Component={
        <DropDownBox onChange={onChange} options={options} value={value} />
      }
    />
  );
};

export default CustomDropdown;
