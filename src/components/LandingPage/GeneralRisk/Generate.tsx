import { Button } from "@/components/shared/ReuseAble/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";

const Generate = ({ onNext }: { onNext: () => void }) => {
  const [toggleCountryDropdown, setToggleCountryDropdown] = useState(false);
  const [toggleIndustryDropdown, setToggleIndustryDropdown] = useState(false);
  const [country, setCountry] = useState<string | undefined>(undefined);

  return (
    <>
      <div className="w-full   md:px-4 py-2 ">
        <div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-3">
          <h4>Select Global/Region</h4>
        </div>
        <Button
          variant={"ghost"}
          onClick={() => {
            setCountry(country === "Global" ? undefined : "Global");
          }}
          className={cn(
            ` p-3 text-black text-sm md:text-base w-full border border-gray-100 h-12 mb-6 rounded-lg text-left justify-start`,
            country === "Global" && "shadow-none bg-blue-100 "
          )}
        >
          Global
        </Button>
        <div className="flex relative ">
          <input
            onFocus={() => {
              setToggleCountryDropdown(true);
            }}
            onBlur={() => {
              setToggleCountryDropdown(false);
            }}
            placeholder="Search Country"
            className="shadow-sm p-3  text-black bg-[#D9D9D99C] text-[20px] w-full rounded-lg text-left "
          />
          <Search className="absolute right-5 cursor-pointer top-1/4 " />
          {toggleCountryDropdown && (
            <div className="absolute top-[52px]  max-h-[200px] overflow-y-auto border shadow-lg w-full left-0 right-0 z-50 p-5  rounded-lg text-center md:text-base text-sm bg-white">
              <p>Search Country</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full   md:px-4 py-2 ">
        <div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-3">
          <h4>Industry</h4>
        </div>
        <div className="flex relative ">
          <input
            onFocus={() => {
              setToggleIndustryDropdown(true);
            }}
            onBlur={() => {
              setToggleIndustryDropdown(false);
            }}
            placeholder="Search Country"
            className="shadow-sm p-3  text-black bg-[#D9D9D99C] text-[20px] w-full rounded-lg text-left "
          />
          <Search className="absolute right-5 cursor-pointer top-1/4 " />
          {toggleIndustryDropdown && (
            <div className="absolute top-[52px] max-h-[200px] overflow-y-auto border shadow-lg w-full left-0 right-0 z-50 p-5  rounded-lg text-center md:text-base text-sm bg-white">
              <p>Search Industry</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-3 w-full justify-center mt-3">
        <button
          className={cn(
            `text-white p-3 rounded-lg bg-[#000080] w-[40%]`,
            !country && "opacity-50"
          )}
          onClick={() => onNext()}
          disabled={!country}
        >
          Threat
        </button>
        <button
          disabled={!country}
          onClick={() => onNext()}
          className={cn(
            `text-white p-3 rounded-lg bg-[#6666B3] w-[40%]`,
            !country && "opacity-50"
          )}
        >
          Opportunity
        </button>
      </div>
    </>
  );
};

export default Generate;
