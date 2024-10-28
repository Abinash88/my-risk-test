import { Rating } from "@mui/material";
import { useState } from "react";
import HeatMap from "../HeatMap";
import Score from "../Score";

const DownloadableReport = ({
  handleStepClick,
}: {
  handleStepClick: (id: number) => void;
}) => {
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
        <div className=" gap-3 grid grid-cols-2  my-5 w-full justify-center mt-4">
          <div className="flex flex-col w-full gap-3">
            <button className="p-3 rounded-xl text-white bg-[#1D98F0]">
              Causes
            </button>
            <input
              type="text"
              className=" outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-xl"
            />
            <input
              type="text"
              className=" outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-xl"
            />{" "}
          </div>

          <div className="flex flex-col w-full gap-3">
            <button className="p-3 rounded-xl text-white bg-[#1D98F0]">
              Effect
            </button>
            <input
              type="text"
              className=" outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-xl"
            />{" "}
            <input
              type="text"
              className=" outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-xl"
            />
          </div>
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
          {result === "score" && <Score handleStepClick={handleStepClick} />}
          {result === "rating" && <Rating />}
          {result === "heat" && <HeatMap />}
        </div>
      </div>
    </div>
  );
};

export default DownloadableReport;
