import React, { useState } from "react";
import Pages from "./Pages";
import MenuHeaders from "./MenuHeaders";

export default function index() {
  const [type, setType] = useState("pages");

  return (
    <div className="flex flex-col px-3 mt-10">
      <div className=" flex justify-around">
        <button
         className={`p-3 rounded-md shadow-md w-[45%] md:w-[23%] font-[600] ${
          type === "pages"
            ? "bg-[#000080] text-white"
            : "bg-white text-[rgba(0,0,0,0.7)]"
        }`}
          onClick={() => setType("pages")}
        >
          Pages
        </button>
        <button
          className={`p-3 rounded-md shadow-md w-[45%] md:w-[23%] font-[600] ${
						type === "menu_headers"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
          onClick={() => setType("menu_headers")}
        >
          Menu Headers
        </button>
      </div>
      {type == "pages" && <Pages />}
      {type == "menu_headers" && <MenuHeaders />}
    </div>
  );
}
