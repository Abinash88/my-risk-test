import HandleParams, { type GenerateTypes } from "@/lib/hooks/handle-params";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import DownloadReport from "./download-report";

const GneratedRiskPRofile = () => {
  const [showLoader, setShowLoader] = useState(true);
  setTimeout(() => {
    setShowLoader(false);
  }, 2000);

  const { searchParams, handleClear } = HandleParams();
  const checkType = searchParams.get("type") as GenerateTypes | null;

  useEffect(() => {
    console.log(!checkType);
    if (!checkType || typeof checkType === "undefined") handleClear();
  }, [handleClear, checkType]);

  return (
    <>
      <div className="w-[100%] mr-auto  ml-auto">
        <div className="p-3 bg-[#000080] text-white rounded-lg mt-10 mb-6">
          <h4 className="font-[600] text-[20px]">Risk Profile</h4>
        </div>
        <div className="bg-white text-black rounded-lg py-4  px-5 flex flex-col gap-3 items-start">
          <div className="">
            {!showLoader && checkType === "generate-download" && (
              <DownloadReport />
            )}
            {!showLoader && checkType === "enter-text" && <DownloadReport />}
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
