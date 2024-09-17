import React, { useState } from "react";
import Pages from "./Pages";
import FooterHeaders from "./FooterHeaders";

export default function index() {
  const [type, setType] = useState("pages");

  return (
    <div className="flex flex-col px-3 mt-10">
      <div className=" flex justify-around">
        <button
          className={`${
            type == "pages" ? "bg-[#000080] text-white" : "bg-white text-black"
          } rounded-lg w-1/5 py-3 shadow-md`}
          onClick={() => setType("pages")}
        >
          Pages
        </button>
        <button
          className={`${
            type == "footer_headers"
              ? "bg-[#000080] text-white"
              : "bg-white text-black"
          } rounded-lg w-1/5 py-3 shadow-md`}
          onClick={() => setType("footer_headers")}
        >
          Footer Headers
        </button>
      </div>
      {type == "pages" && <Pages />}
      {type == "footer_headers" && <FooterHeaders />}
    </div>
  );
}
