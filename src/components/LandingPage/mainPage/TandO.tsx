import { useState } from "react";
import Container from "../../shared/HomeLayout/container";
import Opportunity from "./Global/Opportunity";
import Threat from "./Global/Threat";

import CustomDropdown from "@/components/shared/custom-dropdown";
import { cn } from "@/lib/utils";
import Country from "@/components/shared/countries.json";

const TandO = () => {
  const [page, setPage] = useState<"threat" | "opport">("threat");
  const [data, setData] = useState<string>("");

  const dropDownData = Country?.map((item) => ({
    label: item?.country,
    value: item?.country,
  }));

  return (
    <div
      style={{
        backgroundImage: `url('/images/tno.png')`,
        marginTop: -50,
        zIndex: 1,
      }}
    >
      <div className="my-[3rem] scale-90 rounded-lg md:scale-[85%] bg-white pb-20">
        <Container>
          <div className="flex items-center justify-between pt-20 pb-20 mb-5 flex-wrap">
            <h2 className=" text-2xl md:text-3xl font-[700]">Top 15 T & O</h2>
            <div className="flex flex-row gap-2 mt-4 md:mt-1">
              <button className="bg-[#6666B3] text-white px-9 py-2 rounded-lg text-md">
                Global
              </button>
              <CustomDropdown
                options={dropDownData}
                className="text-gray-700 bg-transparent border z-20"
                value={data}
                onChange={(data) => {
                  setData(data);
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 mb-6">
            <button
              onClick={() => setPage("threat")}
              className={cn(
                `w-[48%] bg-[#000080] text-white p-3  rounded-[16px] text-md md:text-[23px]`,
                page === "threat" && "shadow-xl"
              )}
            >
              Threat
            </button>
            <button
              onClick={() => setPage("opport")}
              className={cn(
                ` w-[48%] bg-[#1D98F0] text-white p-3 rounded-[16px] text-md md:text-[23px]`,
                page === "opport" && "shadow-xl"
              )}
            >
              Opportunity
            </button>
          </div>
          <div>
            {page === "threat" && <Threat />}
            {page === "opport" && <Opportunity />}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TandO;
