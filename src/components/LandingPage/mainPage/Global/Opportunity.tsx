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
        {section === "2" && <div className="font-[600] text-md">Sector 2</div>}
        {section === "3" && <div className="font-[600] text-md">Sector 3</div>}
        {section === "4" && <div className="font-[600] text-md">Sector 4</div>}
        {section === "5" && <div className="font-[600] text-md">Sector 5</div>}
        {section === "6" && <div className="font-[600] text-md">Sector 6</div>}
      </div>
    </div>
  );
};

export default Opportunity;
