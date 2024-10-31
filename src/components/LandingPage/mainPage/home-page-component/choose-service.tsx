import { BgSection } from "@/components/shared/ReuseAble";
import HandleParams from "@/lib/hooks/handle-params";
import { Link } from "react-router-dom";

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
        <Link
          to={"/engage-t-o-standing"}
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
        </Link>

        <Link
          to={"/view-generated-risks"}
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
        </Link>
      </div>
    </BgSection>
  );
};

export default ChooseServices;
