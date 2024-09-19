import React, { useState } from "react";
import CurrentSubscribers from "./CurrentSubscribers";
import FormerSubscribers from "./FormerSubscribers";

export default function index() {
  const [type, setType] = useState("current");

  return (
    <div className="flex flex-col p-3">
      <div className=" flex justify-between">
        <button
          className={`${
            type == "current"
              ? "bg-[#000080] text-white"
              : "bg-white text-black"
          } rounded-lg w-2/5 py-3 shadow-md`}
          onClick={() => setType("current")}
        >
          Current Subscribers
        </button>
        <button
          className={`${
            type == "former" ? "bg-[#000080] text-white" : "bg-white text-black"
          } rounded-lg w-2/5 py-3 shadow-md`}
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
