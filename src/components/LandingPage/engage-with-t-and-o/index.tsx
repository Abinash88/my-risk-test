import SelectComp from "@/components/shared/ReuseAble/select";

import ScrollTop from "@/lib/hooks/scroll-top";
import { useState } from "react";
import TAndOMap from "./main-map";
import SectorSlider from "./sector-slider";
import TableData from "./table-data";
import { LocationsData } from "./t-and-o-data";
import { cn } from "@/lib/utils";
const FilterByLastMonth = [
  {
    label: "Past 24hrs",
    value: "Past 24hrs",
  },
  {
    label: "Past 48hrs",
    value: "Past 48hrs",
  },
  {
    label: "Past week",
    value: "Past week",
  },
  {
    label: "Past 24hrs",
    value: "Past 24hrs",
  },
];

const RisksStatus = [
  {
    label: "All Risks",
    value: "All Risks",
  },
  {
    label: "Open Risks",
    value: "Open Risks",
  },
  {
    label: "Closed Risks",
    value: "Closed Risks",
  },
  {
    label: "Deleted Risks",
    value: "Deleted Risks",
  },
];

export type LocationType = {
  id: number;
  country: string;
  flag: string;
  risk: { totalRisk: number; totalRiskSector: number };
  threatOpportunities: { threats: number; Opportunities: number };
  coordinates: [number, number];
  continent: string;
  style?: Record<string, string>;
};


const ReportReason = [
  {
    label: "Unprofessional",
    value: "Unprofessional",
  },
  {
    label: "Spam Content",
    value: "Spam Content",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const Map = () => {
  ScrollTop();

  const [status, setStatus] = useState(false);
  return (
    <div className="  z-50 pt-4 mb-20">
      <SectorSlider />
      <div className="h-2" />
      <div className=" min-h-[70vh]   border w-full relative">
        <button
          onClick={() => {
            setStatus(!status);
          }}
          className="rounded-full -left-[43px] bg-blue-600 absolute z-10 rotate-[-90deg] text-white top-1/2 text-xs block md:hidden w-28 p-2"
        >
          {status ? "Show Status" : "Hide Status"}
        </button>
        <div className=" z-10  md:flex hidden absolute top-5 flex-row m-auto gap-3 right-1/3 ">
          <SelectComp
            label="Last Month"
            className="border border-white/50 shadow-lg "
            options={FilterByLastMonth}
          />
          <SelectComp
          label="Last Month"
          className="border border-white/50 shadow-lg "
          containerClass="relative z-50"
          options={ReportReason}
        />
          <SelectComp
            label="Open Risks"
            className="border border-white/50 shadow-lg "
            options={RisksStatus}
          />
        </div>
        <div
          className={cn(
            ` md:scale-100 scale-75 absolute z-10 top-20 md:top-5 md:block  space-y-2 md:left-12`,
            status ? "block" : "hidden"
          )}
        >
          <div className="bg-white text-center mt-1 border-2 rounded-lg border-purple-500 px-6 py-4 text-lg font-bold text-purple-900 z-10">
            Total Risk <br />
            999
          </div>
          <div className="text-white  border-2 text-center rounded-lg border-purple-500 p-2 text-xs md:text-sm font-bold bg-purple-900">
            All
          </div>
        </div>
        <div
          className={cn(
            `  md:flex scale-75 md:scale-100  absolute z-10 right-0 md:right-10 top-5 flex-col gap-2`,
            status ? "block" : "hidden"
          )}
        >
          <div className="w-[150px] flex flex-col gap-1 bg-[#6666B3] text-white py-3 px-2 rounded-xl text-center md:text-sm text-xs border border-white/70 ">
            <span>Total User Risk</span>
            <span className="md:text-lg font-semibold">999</span>
          </div>
          <div className="w-[150px] flex flex-col gap-1 bg-[#6666B3] text-white py-3 px-2 rounded-xl text-center md:text-sm text-xs border border-white/70 ">
            <span>Total User Comment</span>
            <span className="md:text-lg font-semibold">999</span>
          </div>
          <div className="w-[150px] flex flex-col gap-1 bg-[#6666B3] text-white py-3 px-2 rounded-xl text-center md:text-sm text-xs border border-white/70 ">
            <span>Total User Likes</span>
            <span className="md:text-lg font-semibold">999</span>
          </div>
          <div className="w-[150px] flex flex-col gap-1 bg-[#6666B3] text-white py-3 px-2 rounded-xl text-center md:text-sm text-xs border border-white/70 ">
            <span>Total User Dislikes</span>
            <span className="md:text-lg font-semibold">999</span>
          </div>
        </div>
        {/* <MainMap /> */}
        <TAndOMap
          locations={LocationsData}
          zoom={2}
          height="80vh"
          onChange={() => {}}
          width="100%"
        />
      </div>
      <TableData />
    </div>
  );
};

export default Map;
