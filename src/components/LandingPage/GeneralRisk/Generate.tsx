import CustomDropdown from "@/components/shared/custom-dropdown";
import { Button } from "@/components/shared/ReuseAble/button";
import { cn, dropDownData } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";
import { SectorData } from "../engage-with-t-and-o/sector-slider";

const Generate = ({ onNext }: { onNext: () => void }) => {
  const [selectIndustry, setSelectIndustry] = useState<string | undefined>(
    undefined
  );
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
          <CustomDropdown
            btnClassName="w-full"
            containerClass="w-full "
            btnComp={
              <button className="shadow-sm p-3  border text-gray-400 font-medium bg-[#D9D9D99C] text-sm w-full rounded-lg text-left ">
                {country ? (
                  <span className="text-gray-600">{country}</span>
                ) : (
                  " Select Country"
                )}
              </button>
            }
            options={dropDownData}
            className="text-gray-700 w-full bg-transparent border z-20"
            value={country}
            onChange={(data) => {
              setCountry(data);
            }}
          />
          <Search className="absolute right-5 cursor-pointer top-1/4 " />
        </div>
      </div>
      <div className="w-full   md:px-4 py-2 ">
        <div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-3">
          <h4>Industry</h4>
        </div>
        <div className="flex relative ">
          <CustomDropdown
            btnClassName="w-full"
            containerClass="w-full "
            btnComp={
              <button className="shadow-sm p-3  border text-gray-400 font-medium bg-[#D9D9D99C] text-sm w-full rounded-lg text-left ">
                {selectIndustry ? (
                  <span className="text-gray-600">{selectIndustry}</span>
                ) : (
                  " Select Industry"
                )}
              </button>
            }
            options={SectorData}
            className="text-gray-700 w-full bg-transparent border z-20"
            value={selectIndustry}
            onChange={(data) => {
              setSelectIndustry(data);
            }}
          />
          <Search className="absolute right-5 cursor-pointer top-1/4 " />
        </div>
      </div>
      <div className="flex gap-3 w-full justify-center mt-3">
        <button
          className={cn(
            `text-white p-3 rounded-lg bg-[#000080] w-[40%]`,
            !country && !selectIndustry && "opacity-50"
          )}
          onClick={() => onNext()}
          disabled={!country && !selectIndustry}
        >
          Threat
        </button>
        <button
          disabled={!country && !selectIndustry}
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
