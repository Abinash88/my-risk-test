import { BgSection } from "@/components/shared/ReuseAble";
import HandleParams from "@/lib/hooks/handle-params";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Upload = () => {
  const { handlePageChange, getP } = HandleParams();
  return (
    <BgSection image="/images/background.png">
      <div className="flex flex-col gap-4 justify-center items-center w-full md:w-[50%]">
        <button
          onClick={() => {
            handlePageChange({ next: "general-risk", type: "enter-text" });
          }}
          className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg"
        >
          Enter Texts
        </button>
        <button
          onClick={() => {
            handlePageChange({
              next: "ai-modal",
              previous: "upload",
              type: "use-ai",
            });
          }}
          className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg"
        >
          Use AI
        </button>
        <button
          onClick={() => {
            const prev = getP("previous");
            if (prev) handlePageChange({ next: prev });
          }}
          className="mt-5"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Go back{" "}
        </button>
      </div>
    </BgSection>
  );
};
