import { BgSection } from "@/components/shared/ReuseAble";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

export const GenerateDownload = () => {
  const navigate = useNavigate();
  return (
    <BgSection image="/images/background.png">
      <div className="flex flex-col gap-6 justify-center items-center w-full md:w-[50%]">
        <button className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg ">
          Generate and Download
        </button>
        <Link
          to={"/upload"}
          className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg"
        >
          Upload Risk
        </Link>
        <button onClick={() => navigate(-1)} className="mt-5">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Go back{" "}
        </button>
      </div>
    </BgSection>
  );
};
