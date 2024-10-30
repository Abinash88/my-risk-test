import HeatMapPage from "@/components/LandingPage/RiskProfile/HeatMap";
import { cn } from "@/lib/utils";
import { DownloadPdf } from "@/utils/download-pdf";
import { LoaderCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { toast } from "react-toastify";
import DownloadReport, { HeaderFooter } from "./download-report";
import HandleParams from "@/lib/hooks/handle-params";

type ScoreType = {
  probability?: number;
  impact?: number;
  currentRating?: number;
  handleStepClick?: (id: number) => void;
  riskMitigation?: { treatCause: ""; treatEffect: "" }[];
  causes?: string[];
  effect?: string[];
  event?: string;
  reportVariant: "DOWNLOAD" | "UPLOAD_AI" | "UPLOAD_TEXT";
};

export const ScoreInput = ({
  value,
  variant,
  className,
  type,
  onChange,
}: {
  value?: number | string;
  variant: "rating" | "scoring" | "input";
  className?: string;
  type?: "text" | "search" | "number";
  onChange?: (value: string | number) => void;
}) => {
  const [change, setChange] = useState(value);

  useEffect(() => {
    setChange(value);
  }, [value]);

  return (
    <input
      value={change}
      onChange={(e) => {
        setChange(e.target.value);
        if (onChange) onChange(e.target.value);
      }}
      disabled={!!value}
      readOnly={!!value}
      type={type}
      className={cn(
        variant === "scoring" && !value && "border ",
        variant === "scoring" &&
          " w-[50px] px-2 py-1 rounded-md border-gray-500",
        variant === "rating" &&
          "border !bg-[#D8E0EC] border-[rgba(0,0,0,0.36)] w-20 py-2 px-6 rounded-xl text-gray-500 font-[600] text-[20px]",
        variant === "input" && "w-full h-11 px-3",
        "inline bg-white",
        className
      )}
    />
  );
};

const Score = ({
  handleStepClick,
  currentRating,
  impact,
  probability,
  riskMitigation,
  causes,
  effect,
  event,
  reportVariant,
}: ScoreType) => {
  const [result, setResult] = useState<"migation" | "type">("migation");
  const [total, setTotal] = useState<number>();
  const [loading, setLoading] = useState(false);

  const { handlePageChange } = HandleParams();

  const contentRef = useRef<HTMLDivElement | null>(null);
  const overlay = useRef<HTMLDivElement | null>(null);
  const reactToPrintFn = useReactToPrint({
    content: () => contentRef.current,
    print: async (content) => {
      await DownloadPdf({
        pdfs: [content],
        overlay: overlay.current,
        setLoading,
      });
    },
    onPrintError: () => {
      toast.error("Failed to export the document");
    },
  });

  useEffect(() => {
    const result = currentRating && impact && currentRating + impact;
    setTotal(result);
  }, [currentRating, impact]);

  return (
    <>
      <div className="w-full overflow-x-auto pb-2 text-center ">
        {" "}
        <div className="flex gap-3 justify-between md:justify-center text-center">
          <p className="p-3 border border-[rgba(0,0,0,0.4)] rounded-lg md:w-[40%] w-[190px] text-center">
            Probability:{" "}
            <ScoreInput type="number" variant="scoring" value={probability} />
          </p>
          <p className="p-3 border border-[rgba(0,0,0,0.4)] rounded-lg md:w-[40%] w-[190px]">
            Impact:{" "}
            <ScoreInput type="number" variant="scoring" value={impact} />
          </p>
          <p className="p-3 border border-[rgba(0,0,0,0.4)] rounded-lg md:w-[40%] w-[190px]">
            Current Rating: {}
            <ScoreInput
              type="number"
              variant="scoring"
              value={currentRating || total}
            />
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h5 className="text-[15px] text-[#6666B3] text-left">
          Share 100 point among Each Action
        </h5>
        <div className="flex gap-4 items-center">
          <button
            className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
              result === "migation"
                ? "bg-[#000080] text-white"
                : "bg-white text-[rgba(0,0,0,0.7)]"
            }`}
            onClick={() => setResult("migation")}
          >
            Risk Migation
          </button>
          <button
            className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
              result === "type"
                ? "bg-[#000080] text-white"
                : "bg-white text-[rgba(0,0,0,0.7)]"
            }`}
            onClick={() => setResult("type")}
          >
            Change Action Type
          </button>
          <h4 className="bg-[#6095C9] p-2 rounded-lg  text-xs text-white">
            Action Rating
          </h4>
        </div>
        <div className="full mt-5 flex flex-col gap-5">
          {riskMitigation?.map((item) => (
            <div className="flex items-center gap-4 w-full">
              <ScoreInput
                type="number"
                variant="input"
                className=" border border-[rgba(0,0,0,0.2)] rounded-md w-[50%]"
                value={item?.treatCause}
              />
              <ScoreInput
                type="number"
                variant="input"
                className=" border border-[rgba(0,0,0,0.2)] rounded-md w-[50%]"
                value={item?.treatCause}
              />

              <ScoreInput type="number" variant="rating" />
            </div>
          ))}
        </div>
      </div>
      {reportVariant === "DOWNLOAD" && (
        <div className="">
          <button className="w-full px-3 py-4 bg-[#1D98F0] text-white rounded-lg mt-6">
            View Bow - Tie
          </button>
          <div className="mt-6 flex flex-col lg:flex-row items-center gap-4 gap-y-4 justify-between font-[600]">
            <div className="w-full md:w-1/2 lg:w-[26%]">
              <p className="text-center">Causes</p>
              <div className="bg-[#6095C9] min-h-[300px] h-full p-5 flex flex-col items-center gap-2 rounded-3xl mt-1">
                {causes?.map((item) => (
                  <div className="flex flex-col gap-3 text-white font-normal">
                    {" "}
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2  lg:w-[26%]">
              <p className="text-center">Uncertainty/Event</p>
              <div className="bg-[#6095C9] min-h-[150px]  rounded-3xl mt-1">
                <div className="bg-[#6095C9]  h-full p-5 flex flex-col items-center gap-2 rounded-3xl mt-1">
                  <div className="flex flex-col gap-3 text-white font-normal">
                    {event}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-[26%]">
              <p className="text-center">Effects</p>
              <div className="bg-[#6095C9] min-h-[300px] rounded-3xl mt-1">
                <div className="bg-[#6095C9]  h-full p-5 flex flex-col items-center gap-2 rounded-3xl mt-1">
                  {effect?.map((item) => (
                    <div
                      key={item}
                      className="flex flex-col gap-3 text-white font-normal"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {(reportVariant === "UPLOAD_AI" || reportVariant === "UPLOAD_TEXT") && (
        <div className=" w-full space-y-5 my-10">
          <button className="p-3 w-full rounded-xl text-white bg-[#1D98F0]">
            View HeatMap
          </button>
          <HeatMapPage />
        </div>
      )}

      <div className="flex mt-[40px] items-center justify-center gap-3 lg:gap-6 w-[80%] mx-auto pb-7 md:flex-nowrap flex-wrap">
        <button
          onClick={() => {
            if (handleStepClick) handleStepClick(4);
          }}
          className="p-4 text-white bg-[#000080] w-full rounded-lg"
        >
          previous
        </button>
        <button
          disabled={loading}
          onClick={() => {
            if (reportVariant === "DOWNLOAD") return reactToPrintFn();
            if (
              reportVariant === "UPLOAD_AI" ||
              reportVariant === "UPLOAD_TEXT"
            ) {
              handlePageChange({
                next: "duration",
                previous: "general-risk",
              });
            }
          }}
          className="p-4 text-white flex justify-center items-center bg-[#000080] w-full rounded-lg"
        >
          {loading ? (
            <LoaderCircle className="animate-spin size-7" />
          ) : reportVariant === "UPLOAD_AI" ||
            reportVariant === "UPLOAD_TEXT" ? (
            "Upload to T & O standing"
          ) : (
            "Download Report"
          )}
        </button>
      </div>
      <div className="flex pb-7 items-center gap-2 justify-center">
        <input type="checkbox" className="border border-l-red-500" />
        <p>Send Copy to Email</p>
      </div>
      <div className="h-0 overflow-hidden">
        <div ref={contentRef} className="">
          <DownloadReport />
        </div>
        <div ref={overlay} className="w-full">
          <HeaderFooter />
        </div>
      </div>
    </>
  );
};

export default Score;
