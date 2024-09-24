import React, { useState } from "react";
import HelpCenterGroup from "./HelpCenterGroup";
import HelpCenterQAndA from "./HelpCenterQAndA";

const enum tabs {
  GROUP = "group",
  QA = "qa",
}

const HelpCenter = () => {
    const [type, setType] = useState(tabs.GROUP);

  return (
    <div className="flex flex-col md:p-3 p-2 mt-5 rounded-lg bg-white">
      <div className=" flex justify-between mt-4">
        <button
      className={`${
        type == tabs.GROUP
          ? "bg-[#000080] text-white"
          : "bg-white text-black"
      } rounded-lg md:w-2/5 py-3 shadow-md shadow-black px-1`}
      onClick={() => setType(tabs.GROUP)}
    >
     Help Center Group
    </button>
    <button
      className={`${
        type == tabs.QA ? "bg-[#000080] text-white" : "bg-white text-black"
      } rounded-lg md:w-2/5 py-3 px-1 shadow-md shadow-black shadow-opacity-10`}
      onClick={() => setType(tabs.QA)}
    >
      Help Center QA
    </button>
  </div>
      {type == tabs.GROUP && <HelpCenterGroup />}
      {type==tabs.QA && <HelpCenterQAndA/>}
    </div>
  );
};

export default HelpCenter;
