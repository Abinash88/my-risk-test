import { BgSection } from "@/components/shared/ReuseAble";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Upload = () => {
  const [option, setOption] = useState(false);

  const handleClick = () => {
    setOption(true);
  };

  const navigate = useNavigate();
  return (
    <BgSection image="/images/background.png">
      {!option && (
        <div className="flex flex-col gap-4 justify-center items-center w-full md:w-[50%]">
          <div className="w-full">
            {" "}
            <h3 className="mb-5 text-[22px]">Enter Duration</h3>
            <input
              type="number"
              placeholder="Type here"
              className="w-full px-3 py-4 rounded-lg outline-none text-[rgba(51,51,51,0.5)]"
            />
            <div className="flex justify-between gap-3 mt-6 items-center">
              <button onClick={() => navigate(-1)} className="">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                Go back{" "}
              </button>
              <button
                className="bg-[#000080] text-white px-4 py-2 rounded w-[35%]"
                onClick={handleClick}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
      {option && (
        <div className="flex flex-col gap-4 justify-center items-center w-full md:w-[50%]">
          <Link
            to="/ai-model"
            className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg"
          >
            Type Texts
          </Link>
          <Link
            to="/ai-model"
            className="bg-white text-[#000080] p-5 font-[600] text-[20px] text-center w-full rounded-lg"
          >
            Use AI
          </Link>
          <Link to="/home-page" className="mt-5">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Go back{" "}
          </Link>
        </div>
      )}
    </BgSection>
  );
};
