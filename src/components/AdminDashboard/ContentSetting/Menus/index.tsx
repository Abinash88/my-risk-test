import { useState } from "react";
import Active from "./Active";
import Deleted from "./Deleted";

export default function index() {
  const [type, setType] = useState("active");

  return (
    <div className="flex flex-col p-3">
      <div className=" flex justify-between">
        <button
          
					className={`p-3 rounded-md shadow-md w-[45%] md:w-[23%] font-[600] ${
						type === "active"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
          onClick={() => setType("active")}
        >
          Active
        </button>
        <button
          
					className={`p-3 rounded-md shadow-md w-[45%] md:w-[23%] font-[600] ${
						type === "deleted"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
          onClick={() => setType("deleted")}
        >
          Deleted
        </button>
      </div>
      {type == "active" && <Active />}
      {type == "deleted" && <Deleted />}
    </div>
  );
}
