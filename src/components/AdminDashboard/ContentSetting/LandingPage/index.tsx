import { Button, TabsProps } from "antd";
import React, { useState } from "react";
import ImageVideo from "./ImageVideo";
import Link from "./Links";

export default function index() {
  const [type, setType] = useState("image");

  return (
    <div className="flex flex-col p-3">
      <div className=" flex justify-between">
        <button
          className={`${
            type == "image" ? "bg-[#000080] text-white" : "bg-white text-black"
          } rounded-lg w-2/5 py-3 shadow-md`}
          onClick={() => setType("image")}
        >
          Image/Video Overlay
        </button>
        <button
          className={`${
            type == "link" ? "bg-[#000080] text-white" : "bg-white text-black"
          } rounded-lg w-2/5 py-3 shadow-md` }
          onClick={() => setType("link")}
        >
          Quick Links
        </button>
      </div>
      {type == "image" && <ImageVideo />}
      {type == "link" && <Link />}
    </div>
  );
}
