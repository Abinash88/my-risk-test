import HeatMap from "@/components/LandingPage/RiskProfile/HeatMap";
import { cn } from "@/lib/utils";
import { Rating } from "@mui/material";
import { useState } from "react";
import Score from "../Score";

export type DownloadableReportType = {
  handleStepClick?: (id: number) => void;
  riskDescription?: string;
  causes?: string[];
  effect?: string[];
  probability?: number;
  impact?: number;
  currentRating?: number;
  riskMitigation?: { treatCause: ""; treatEffect: "" }[];
  reportVariant: "DOWNLOAD" | "UPLOAD_AI" | "UPLOAD_TEXT";
};

const DownloadableReport = ({
  handleStepClick,
  causes,
  effect,
  riskDescription,
  currentRating,
  impact,
  probability,
  riskMitigation,
  reportVariant,
}: DownloadableReportType) => {
  const [result, setResult] = useState<"score" | "rating" | "heat">("score");
  // const [Causes, setCauses] = useState(causes);
  // const [Effect, setEffect] = useState(effect);
  return (
    <div className=" w-full min-h-[100vh]">
      <div className="text-left w-full  ">
        <div className="flex flex-col ">
          <h4 className="p-3 bg-[#1D98F0] text-white rounded-lg w-full font-[600] text-[18px] mb-3">
            Risk Details
          </h4>

          <textarea
            value={riskDescription}
            rows={5}
            className={cn(
              `w-full  focus:ring-0 p-3 focus:outline-none`,
              !riskDescription && "border rounded-lg"
            )}
          />
        </div>
      </div>

      <div className=" gap-3  grid md:grid-cols-2  my-5 w-full mt-4">
        <div className="flex flex-col w-full gap-3">
          <button className="p-3 rounded-xl text-white bg-[#1D98F0]">
            Causes
          </button>
          {causes?.map((item) => (
            <input
              key={item}
              type="text"
              className=" outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-xl"
            />
          ))}
        </div>

        <div className="flex flex-col w-full gap-3">
          <button className="p-3 rounded-xl text-white bg-[#1D98F0]">
            Effect
          </button>
          {effect?.map((item) => (
            <input
              key={item}
              type="text"
              className=" outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-xl"
            />
          ))}
        </div>
      </div>

      <div className="w-full mt-3"></div>
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
          {result === "score" && (
            <Score
              {...{
                probability,
                impact,
                currentRating,
                handleStepClick,
                causes,
                effect,
                riskMitigation,
                reportVariant,
              }}
            />
          )}
          {result === "rating" && <Rating />}
          {reportVariant === "UPLOAD_TEXT" && result === "heat" && <HeatMap />}
        </div>
      </div>
    </div>
  );
};

export default DownloadableReport;
