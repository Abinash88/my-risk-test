import SelectComp from "@/components/shared/ReuseAble/select";
import HandleParams from "@/lib/hooks/handle-params";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BgSection } from "./landingAnimate";
import ScrollTop from "@/lib/hooks/scroll-top";

const ITEMS = [
  {
    label: "Select Duration",
    value: "Select Duration",
  },
  {
    label: "72hrs",
    value: "72hrs",
  },
  {
    label: "7days",
    value: "7days",
  },

  {
    label: "4weeks",
    value: "4weeks",
  },
  {
    label: "8weeks",
    value: "8weeks",
  },
];

const EnterDuration = () => {
  const { handlePageChange, getP } = HandleParams();

  ScrollTop();

  return (
    <BgSection image="/images/background.png">
      <div className="flex flex-col gap-4 justify-center items-center max-w-sm w-full">
        <div className="w-full">
          {" "}
          <h3 className="mb-5 text-[22px]">Enter Duration</h3>
          <div className="scale-110 ">
            <SelectComp
              title="Select Duration"
              label="Last Month"
              className="border max-w-[600px] justify-between bg-white text-gray-700 w-[300px]  border-white/50 shadow-lg "
              containerClass="w-full"
              options={ITEMS}
            />
          </div>
          <div className="flex justify-between gap-3 mt-6 items-center">
            <button
              onClick={() => {
                const prev = getP("previous");
                if (prev)
                  handlePageChange({
                    next: prev,
                    previous: "general-risk",
                  });
              }}
              className=""
            >
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Go back{" "}
            </button>
            <button
              className="bg-[#000080] text-white px-4 py-2 rounded w-[35%]"
              onClick={() => {
                
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </BgSection>
  );
};

export default EnterDuration;
