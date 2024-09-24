import { useState } from "react";
import Active from "./Active";
import Deleted from "./Deleted";

export default function index() {
  const [type, setType] = useState("active");

  return (
    <div className="p-1 md:p-3 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex">
          <button
            className={`${
              type == "active" ? "text-[#3838F0]" : "text-[#838384]"
            } relative text-lg font-medium mr-2 md:mr-4 px-4 py-2`}
            onClick={() => setType("active")}
          >
            Active
            {type === "active" && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
          <button
            className={`${
              type == "deleted" ? "text-[#3838F0]" : "text-[#838384]"
            } relative text-lg font-medium mr-2 md:mr-4 px-4 py-2`}
            onClick={() => setType("deleted")}
          >
            Deleted
            {type === "deleted" && (
              <span className="absolute left-0 bottom-0 w-full h-1 bg-[#3838F0]"></span>
            )}
          </button>
        </div>
        {/* <Tabs defaultActiveKey="1" items={items} /> */}
        {type == "active" && (
          <button className="rounded-lg py-2 px-8 bg-[#3838F0] text-white">
            Add
          </button>
        )}
      </div>
      <div>
        {type == "active" && <Active />}
        {type == "deleted" && <Deleted />}
      </div>
    </div>
  );
}
