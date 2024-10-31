import { useState } from "react";
import View from "../View";

const PageThree = ({
  onNext,
  handleStepClick,
}: {
  onNext: () => void;
  handleStepClick: (id: number) => void;
}) => {
  const [page, setPage] = useState<"generate" | "view">("generate");
  return (
    <>
      <div className="flex gap-3 justify-between">
        <button
          className={`p-3 rounded-md shadow-md w-[50%]  text-sm md:text-base  font-[600] ${
            page === "generate"
              ? "bg-[#000080] text-white"
              : "bg-white text-[rgba(0,0,0,0.7)]"
          }`}
          onClick={() => setPage("generate")}
        >
          Generate Risk Profile
        </button>
        <button
          className={`p-3 rounded-md shadow-md w-[50%]  text-sm md:text-base  font-[600] ${
            page === "view"
              ? "bg-[#000080] text-white"
              : "bg-white text-[rgba(0,0,0,0.7)]"
          }`}
          onClick={() => setPage("view")}
        >
          View Risk Profile
        </button>
      </div>
      <div className="mt-4">
        <div className="bg-white text-black rounded-lg py-4  px-5 flex flex-col gap-3 items-start">
          {page === "generate" && (
            <View handleStepClick={handleStepClick} onNext={onNext} />
          )}
          {page === "view" && <div>What to view????</div>}
        </div>
      </div>
    </>
  );
};

export default PageThree;
