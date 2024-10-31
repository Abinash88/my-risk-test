import { useState } from "react";
import Section1 from "../Sections/Section1 Opportunity";

const Opportunity = () => {
  const [section, setSection] = useState("1");

  const sections = ["1", "2", "3", "4", "5", "6"];

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="flex gap-5 mb-6  flex-wrap md:flex-nowrap md:min-w-max">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setSection(sec)}
              className={`py-4 rounded-md shadow-lg border md:w-[23%] w-24 font-[600] ${
                section === sec
                  ? "bg-[#000080] text-white"
                  : "bg-white text-[rgba(0,0,0,0.7)]"
              }`}
            >
              Sector {sec}
            </button>
          ))}
        </div>
      </div>
      <div>
        {section === "1" && <Section1 />}
        {section === "2" && <Section1 />}
        {section === "3" && <Section1 />}
        {section === "4" && <Section1 />}
        {section === "5" && <Section1 />}
        {section === "6" && <Section1 />}
      </div>
    </div>
  );
};

export default Opportunity;
