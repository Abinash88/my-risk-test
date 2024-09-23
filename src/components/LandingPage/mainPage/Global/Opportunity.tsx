import { useState } from "react";
import Section1 from "../Sections/Section1 Opportunity";

const Opportunity = () => {
  const [section, setSection] = useState("1");

  const sections = ["1", "2", "3", "4", "5", "6"];

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex gap-3 mb-6 flex-wrap md:flex-nowrap md:min-w-max">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setSection(sec)}
              className={`py-2 rounded-md shadow-md md:w-[23%] w-24 font-[600] ${
                section === sec
                  ? "bg-[#000080] text-white"
                  : "bg-white text-[rgba(0,0,0,0.7)]"
              }`}
            >
              Section {sec}
            </button>
          ))}
        </div>
      </div>
      {/* <div className="flex w-[100vw] items-center justify-center">
        <div className="flex w-[90vw] flex-wrap gap-3 mb-6">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setSection(sec)}
              className={`py-2 rounded-md  shadow-md md:w-[23%] w-32 font-[600] ${
                section === sec
                  ? "bg-[#000080] text-white"
                  : "bg-white text-[rgba(0,0,0,0.7)]"
              }`}
            >
              Section {sec}
            </button>
          ))}
        </div>
      </div> */}
      <div>
        {section === "1" && <Section1/>}
        {section === "2" && <div className="font-[600] text-md">Section 2</div>}
        {section === "3" && <div className="font-[600] text-md">Section 3</div>}
        {section === "4" && <div className="font-[600] text-md">Section 4</div>}
        {section === "5" && <div className="font-[600] text-md">Section 5</div>}
        {section === "6" && <div className="font-[600] text-md">Section 6</div>}
      </div>
    </div>
  );
};

export default Opportunity;
