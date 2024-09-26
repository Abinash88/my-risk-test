import { Button, TabsProps } from "antd";
import React, { useState } from "react";
import ImageVideo from "./ImageVideo";
import Link from "./Links";

export default function index() {
  const [type, setType] = useState("image");

  return (
    <div className="flex flex-col md:p-3">
      <div className="flex justify-between gap-3 mx-3">
        <button
					className={`p-3 rounded-md shadow-md w-[45%] md:w-[23%] font-[600] ${
						type === "image"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
          onClick={() => setType("image")}
        >
          Image/Video Overlay
        </button>
        <button
					className={`p-3 rounded-md shadow-md w-[45%] md:w-[23%] font-[600] ${
						type === "link"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
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
