import React, { useState } from "react";
import CurrentSubscribers from "./CurrentSubscribers";
import FormerSubscribers from "./FormerSubscribers";

export default function index() {
  const [type, setType] = useState("current");

  return (
    <div className="flex flex-col p-3 bg-white">
      <div className=" flex justify-between mt-4">
        <button
          className={`${
            type == "current"
              ? "bg-[#000080] text-white"
              : "bg-white text-black"
          } rounded-3xl w-[45%] text-sm py-3 shadow-md shadow-gray-400 px-1`}
          onClick={() => setType("current")}
        >
          Current Subscribers
        </button>
        <button
          className={`${
            type == "former" ? "bg-[#000080] text-white" : "bg-white text-black"
          } rounded-3xl w-[45%] text-sm py-3 shadow-md shadow-gray-400 px-1`}
          onClick={() => setType("former")}
        >
          Former Subscribers
        </button>
      </div>
      {type == "current" && <CurrentSubscribers />}
      {type == "former" && <FormerSubscribers />}
    </div>
  );
}
