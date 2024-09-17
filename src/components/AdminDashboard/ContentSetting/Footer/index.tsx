import { useState } from "react";
import Active from "./Active";
import Deleted from "./Deleted";

export default function index() {
  const [type, setType] = useState("active");

  return (
    <div className="flex flex-col p-3">
      <div className=" flex justify-between">
        <button
          className={`${
            type == "active" ? "bg-[#000080] text-white" : "bg-white text-black"
          } rounded-lg w-2/5 py-3 shadow-md`}
          onClick={() => setType("active")}
        >
          Active
        </button>
        <button
          className={`${
            type == "deleted"
              ? "bg-[#000080] text-white"
              : "bg-white text-black"
          } rounded-lg w-2/5 py-3 shadow-md`}
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
