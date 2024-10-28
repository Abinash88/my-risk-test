import { BgSection } from "@/components/shared/ReuseAble";
import HandleParams from "@/lib/hooks/handle-params";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GenerateDownload = () => {
  const { handlePageChange, handleClear } = HandleParams();
  return (
    <BgSection image="/images/background.png">
      <div className="flex flex-col gap-6 justify-center items-center w-full md:w-[50%]">
        <button
          onClick={() => {
            handlePageChange({
              next: "ai-modal",
              previous: "generate-download",
              type: "generate-download",
            });
          }}
          className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg "
        >
          Generate and Download
        </button>
        <button
          onClick={() => {
            handlePageChange({
              next: "upload",
              previous: "generate-download",
              type: "use-ai",
            });
          }}
          className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg"
        >
          Upload Risk
        </button>
        <button onClick={handleClear} className="mt-5">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Go back{" "}
        </button>
      </div>
    </BgSection>
  );
};
