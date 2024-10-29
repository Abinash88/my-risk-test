import { X } from "lucide-react";
import { BsCaretUpFill } from "react-icons/bs";

type MapPopType = {
  continent?: string;
  country?: string;
  risk?: { totalRisk: number; totalRiskSector: number };
  opportunities?: number;
  threats?: number;
};

const MapPopup = ({
  opportunities,
  continent,
  country,
  risk,
  threats,
}: MapPopType) => {
  return (
    <div className="rounded-2xl scale-[.9] relative ml-52 flex flex-col justify-between w-full border max-w-[300px] min-h-[250px] bg-white">
      <div className="flex items-center px-2 py-[0.5px] justify-between">
        <span className="font-medium text-xs flex-1 md:text-sm text-gray-800 ">
          Continent
        </span>
        <div className="flex-1 flex w-full justify-center items-center ">
          <span className="w-10 h-[4px] bg-gray-600 "></span>
        </div>
        <span className="font-medium text-xs md:text-sm  flex-1  text-gray-800 ">
          {continent || " South America"}
        </span>
      </div>
      <div className="bg-red-700 rounded-b-2xl block flex-1  w-full p-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img src="/images/flag.png" />
            <h3 className="text-white text-sm md:text-base">
              {country || "Argentina"}
            </h3>
          </div>
          <button className="text-white cursor-pointer flex size-6 rounded-full  bg-blue-900 items-center justify-center">
            <X size={17} />
          </button>
        </div>
        <div className="flex justify-between gap-4  mt-5 ">
          <div className=" space-y-2">
            <div className="space-y-1">
              <h3 className="text-white text-xs md:text-sm">Risk:</h3>
              <ul className="space-y-1 text-white text-[10px] md:text-xs">
                <li>Total Number of Risks: {risk?.totalRisk || 99}</li>
                <li>
                  Total Number of Risks Sectors: {risk?.totalRiskSector || 99}
                </li>
              </ul>
            </div>
            <div className="space-y-1">
              <h3 className="text-white text-xs md:text-sm">
                Threats / Opportunities::
              </h3>
              <ul className="space-y-1 text-white text-[10px] md:text-xs">
                <li>Threats: {threats || 99}</li>
                <li>Opportunities: {opportunities || 99}</li>
              </ul>
            </div>
          </div>
          <div className="max-w-[90px] w-full space-y-2 ">
            <button className="bg-white px-5 rounded-md w-full flex justify-center items-center py-1">
              <BsCaretUpFill className="text-red-700  text- xl " />
            </button>
            <button className="bg-[#D7332E] text-white px-2 w-full rounded-md py-1">
              <p className=" md:text-xs text-[10px] font-medium">
                No of Risks:
              </p>
              <h3 className=" text-base font-semibold md:text-sm">99</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPopup;
