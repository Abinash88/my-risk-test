import { BgSection } from "@/components/shared/ReuseAble";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <BgSection image="/images/background.png">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12  md:py-0 py-20">
        <Link
          to={"/ai-model"}
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
        </Link>
        <Link
          to={"/ai-model"}
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
          to={"/ai-model"}
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

export default HomePage;

export const GenerateDownload = () => {
  return (
    <BgSection image="/images/background.png">
      <div className="flex flex-col gap-4 justify-center items-center w-full md:w-[50%]">
        <button className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg ">
          Generate and Download
        </button>
        <button className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg">
          Upload Risk
        </button>
        <Link to="/home-page" className="mt-5">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Go back{" "}
        </Link>
      </div>
    </BgSection>
  );
};
