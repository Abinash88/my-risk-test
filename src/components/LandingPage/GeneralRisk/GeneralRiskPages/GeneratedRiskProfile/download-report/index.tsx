import { Rating } from "@mui/material";
import { useState } from "react";
import HeatMap from "../HeatMap";
import Score from "../Score";

const DownloadReport = () => {
  const [result, setResult] = useState<"score" | "rating" | "heat">("score");
  return (
    <div>
      <div className="text-left ">
        <h4 className="p-3 bg-[#1D98F0] text-white rounded-lg w-full font-[600] text-[18px] mb-3">
          Risk Details
        </h4>
        <p>
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
      <div className="w-full mt-3">
        <div className="flex items-center justify-center gap-3 w-full">
          <button className="p-3 rounded-lg text-white bg-[#1D98F0] w-[50%]">
            Causes
          </button>
          <button className="p-3 rounded-lg text-white bg-[#1D98F0] w-[50%]">
            Effect
          </button>
        </div>
        <div className="flex gap-3 flex-wrap w-full justify-center mt-4">
          <input
            type="text"
            className="w-[45%] outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-lg"
          />
          <input
            type="text"
            className="w-[45%] outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-lg"
          />{" "}
          <input
            type="text"
            className="w-[45%] outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-lg"
          />{" "}
          <input
            type="text"
            className="w-[45%] outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-lg"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full overflow-x-auto mb-4">
          {" "}
          <div className="flex gap-3 justify-between mb-4">
            <button
              className={`p-2 md:p-3 rounded-md shadow-md w-[100%] md:w-[50%] font-[600] ${
                result === "score"
                  ? "bg-[#000080] text-white"
                  : "bg-white text-[rgba(0,0,0,0.7)]"
              }`}
              onClick={() => setResult("score")}
            >
              Risk Scoring
            </button>
            <button
              className={`p-2 md:p-3 rounded-md shadow-md w-[100%] md:w-[50%] font-[600] ${
                result === "rating"
                  ? "bg-[#000080] text-white"
                  : "bg-white text-[rgba(0,0,0,0.7)]"
              }`}
              onClick={() => setResult("rating")}
            >
              Change Rating Type
            </button>
            <button
              className={`p-2 md:p-3 rounded-md shadow-md w-[100%] md:w-[50%] font-[600] ${
                result === "heat"
                  ? "bg-[#000080] text-white"
                  : "bg-white text-[rgba(0,0,0,0.7)]"
              }`}
              onClick={() => setResult("heat")}
            >
              View Heat Map
            </button>
          </div>
        </div>

        <div className="w-full px-2 md:px-0">
          {result === "score" && <Score />}
          {result === "rating" && <Rating />}
          {result === "heat" && <HeatMap />}
        </div>
      </div>
    </div>
  );
};

export default DownloadReport;
