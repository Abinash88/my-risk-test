import { BgSection } from "@/components/shared/ReuseAble";
import HandleParams from "@/lib/hooks/handle-params";

const ChooseServices = () => {
  const { handlePageChange } = HandleParams();

  return (
    <BgSection image="/images/background.png">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12  md:py-0 py-20">
        <button
          onClick={() => {
            handlePageChange({ next: "generate-download" });
          }}
          className="bg-white  px-6 py-8 rounded-2xl text-black w-full "
        >
          <img
            src="/images/Engage.png"
            alt="Ai-Powered-Risk"
            className="md:w-[30%] w-[40%] mr-auto ml-auto"
          />
          <h3 className="font-[600] text-xl md:text-3xl">
            AI Powered Risk Profile
          </h3>
        </button>
        <button
          onClick={() => {
            // handlePageChange({ next: "" });
          }}
          className="bg-white  px-6 py-8 rounded-2xl text-black w-full "
        >
          <img
            src="/images/mechanical.png"
            alt="Mechanical"
            className="w-[30%] mr-auto ml-auto"
          />
          <h3 className="font-[600] text-xl md:text-3xl">
            Engage with T & O Standing
          </h3>
        </button>

        <button
          onClick={() => {
            // handlePageChange({ next: "", previous: "" });
          }}
          className="bg-white  px-6 py-8 rounded-2xl text-black w-full "
        >
          <img
            src="/images/magic-pencil.png"
            alt="Mechanical"
            className="w-[30%] mr-auto ml-auto"
          />
          <h3 className="font-[600] text-xl md:text-3xl">
            View Generated Risks
          </h3>
        </button>
      </div>
    </BgSection>
  );
};

export default ChooseServices;