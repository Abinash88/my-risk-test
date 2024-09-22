import { useState } from "react";
import Container from "../../shared/HomeLayout/container";
import Threat from "./Global/Threat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


const TandO = () => {
  const [page, setPage] = useState<"threat" | "opport">("threat");

  return (
    <div className="my-[3rem] md:scale-[85%]">
      <Container>
        <div className="flex items-center justify-between  mb-5 flex-wrap">
          <h2 className=" text-3xl font-[700]">Top 15 T & O</h2>
          <div className="flex flex-row gap-2 mt-4 md:mt-1">
            <button className="bg-[#6666B3] text-white px-9 py-2 rounded-lg text-md">
              Global
            </button>
            <button
              name="top"
              id="top"
              className="py-3 md:hidden px-5 w-full justify-between flex rounded-lg bg-white border-[1px] outline-none border-[black]"
            >
              Select Country&nbsp;&nbsp;
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <button
              name="top"
              id="top"
              className="py-3 px-5 hidden w-full justify-between md:flex rounded-lg bg-white border-[1px] outline-none border-[black]"
            >
              Select Country&nbsp;&nbsp;
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 mb-6">
          <button
            onClick={() => setPage("threat")}
            className="w-[48%] bg-[#000080] text-white p-3  rounded-[16px] text-md md:text-[23px]"
          >
            Threat
          </button>
          <button
            onClick={() => setPage("opport")}
            className=" w-[48%] bg-[#1D98F0] text-white p-3 rounded-[16px] text-md md:text-[23px]"
          >
            Opportunity
          </button>
        </div>
        <div>
          {page === "threat" && <Threat />}
          {page === "opport" && (
            <div className="font-[600] text-[30px]">Opportunity Page</div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TandO;
