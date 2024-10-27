import { BgSection } from "@/components/shared/ReuseAble";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <BgSection image="/images/background.png">
      <div className="flex flex-col md:flex-row gap-12 justify-center">
        <Link
          to={"/ai-model"}
          className="bg-white  px-6 py-8 rounded-2xl text-black w-full md:w-[40%]"
        >
          <img
            src="/images/Engage.png"
            alt="Ai-Powered-Risk"
            className="md:w-[30%] mr-auto ml-auto"
          />
          <h3 className="font-[600] text-[30px]">AI Powered Risk Profile</h3>
        </Link>
        <Link
          to={"/ai-model"}
          className="bg-white  px-6 py-8 rounded-2xl text-black w-full md:w-[40%]"
        >
          <img
            src="/images/mechanical.png"
            alt="Mechanical"
            className="w-[30%] mr-auto ml-auto"
          />
          <h3 className="font-[600] text-[30px]">Engage with T & O Standing</h3>
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
