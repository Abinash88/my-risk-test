import HandleParams, { type GenerateTypes } from "@/lib/hooks/handle-params";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import DownloadableReport from "./downloadable-report";

const GneratedRiskPRofile = ({
  handleStepClick,
}: {
  handleStepClick: (id: number) => void;
}) => {
  const [showLoader, setShowLoader] = useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 2000);

  const { searchParams, handleClear } = HandleParams();
  const checkType = searchParams.get("type") as GenerateTypes | null;

  useEffect(() => {
    if (!checkType || typeof checkType === "undefined") handleClear();
  }, [handleClear, checkType]);

  return (
    <>
      <div className="w-[100%] mr-auto  ml-auto">
        <div className="p-3 bg-[#000080] text-white rounded-lg mt-16 mb-6">
          <h4 className="font-[600] text-[20px]">Risk Profile</h4>
        </div>
        <div className="bg-white text-black rounded-lg py-4  px-5 flex flex-col gap-3 items-start">
          <div className=" w-full">
            {!showLoader && checkType === "generate-download" && (
              <DownloadableReport
                reportVariant="DOWNLOAD"
                riskDescription="Yorem ipsum dolor sit amet Yorem ipsum dolor sit amet Yorem ipsum dolor sit ametYorem ipsum dolor sit amet Yorem ipsum dolor sit amet"
                causes={[
                  "Yorem ipsum dolor sit amet",
                  "Yorem ipsum dolor sit amet",
                  "Yorem ipsum dolor sit amet",
                ]}
                effect={[
                  "Yorem ipsum dolor sit amet",
                  "Yorem ipsum dolor sit amet",
                  "Yorem ipsum dolor sit amet",
                ]}
                probability={5}
                impact={29}
                currentRating={29 + 5}
                handleStepClick={handleStepClick}
              />
            )}
            {!showLoader && checkType === "enter-text" && (
              <DownloadableReport
                reportVariant="UPLOAD_TEXT"
                causes={["", "", ""]}
                effect={["", "", ""]}
                handleStepClick={handleStepClick}
              />
            )}
            {!showLoader && checkType === "use-ai" && (
              <DownloadableReport
                reportVariant="UPLOAD_AI"
                causes={["", "", ""]}
                effect={["", "", ""]}
                probability={5}
                impact={9}
                currentRating={9 + 5}
                riskMitigation={[
                  { treatCause: "", treatEffect: "" },
                  { treatCause: "", treatEffect: "" },
                  { treatCause: "", treatEffect: "" },
                  { treatCause: "", treatEffect: "" },
                ]}
                riskDescription="Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                handleStepClick={handleStepClick}
              />
            )}
          </div>
          {showLoader && (
            <div className="flex items-center justify-center  h-[50vh] mr-auto ml-auto">
              <ClipLoader
                size={100}
                color="#6666B3"
                cssOverride={{ borderWidth: "5px" }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GneratedRiskPRofile;
