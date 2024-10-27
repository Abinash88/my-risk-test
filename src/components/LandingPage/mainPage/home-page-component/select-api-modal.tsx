import { BgSection } from "@/components/shared/ReuseAble";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type AiModalType = {
  id: number;
  name: string;
  image: string;
  alt: string;
  price: number;
};

const aiModalData: AiModalType[] = [
  {
    id: 1,
    name: "gpt-4-32k-0314",
    image: "/images/blue-logo.png",
    alt: "Risk-forum-logo",
    price: 133,
  },
  {
    id: 2,
    name: "gpt-3.5-turbo-0301",
    image: "/images/blue-logo.png",
    alt: "Risk-forum-logo",
    price: 53,
  },
  {
    id: 3,
    name: "gpt-4-0314",
    image: "/images/blue-logo.png",
    alt: "Risk-forum-logo",
    price: 23,
  },
  {
    id: 4,
    name: "gpt-3.5-turbo-0613",
    image: "/images/blue-logo.png",
    alt: "Risk-forum-logo",
    price: 6,
  },
];

export const AIModel = () => {
  const [selectAiModal, setSelectAiModal] = useState("");
  const navigate = useNavigate();
  return (
    <BgSection image="/images/background.png">
      <div className="bg-white rounded-lg w-full md:w-[50%]">
        <div className="text-left font-[600] text-[20px] mb-6">
          <h4 className="text-[#000080] p-4 border-b border-b-[rgba(0,0,0,0.59)]">
            Select AI model
          </h4>
        </div>
        <div className="p-4 flex justify-center gap-5 flex-wrap text-black">
          {aiModalData?.map((item) => {
            return (
              <div key={item.id} className={`w-[40%]`}>
                <button
                  onClick={() => {
                    setSelectAiModal(
                      selectAiModal === item?.name ? "" : item?.name
                    );
                  }}
                  className={cn(
                    `rounded-lg shadow-md p-3 border-2 border-transparent  bg-white w-full`,
                    item?.name.toLowerCase() === selectAiModal.toLowerCase() &&
                      " border-blue-500 "
                  )}
                >
                  <img
                    src="/images/blue-logo.png"
                    alt="Risk-forum-logo"
                    className="w-[50px] mr-auto ml-auto"
                  />
                  <p>gpt-4-32k-0314</p>
                </button>

                <h5 className="font-600 mt-2">$1400</h5>
              </div>
            );
          })}
        </div>
        <div className="w-full flex gap-4 justify-between p-6">
          <button
            onClick={() => navigate(-1)}
            className="text-white bg-[#000080] p-3 rounded-lg w-[50%]"
          >
            Back
          </button>
          <button
            onClick={() => navigate("/payment-mode")}
            disabled={!selectAiModal}
            className={cn(
              `text-white bg-[#000080] p-3 rounded-lg w-[50%] border `,
              !selectAiModal && "opacity-50"
            )}
          >
            Next
          </button>
        </div>
      </div>
    </BgSection>
  );
};
