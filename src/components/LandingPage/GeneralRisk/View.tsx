import { cn } from "@/lib/utils";
import { useState } from "react";

const mitigation = [
  {
    id: 1,
    name: "Enhance",
  },
  {
    id: 2,
    name: "Ignore",
  },
  {
    id: 3,
    name: "Exploit",
  },
  {
    id: 4,
    name: "Transfer",
  },
];

const Rating = [
  {
    id: 1,
    name: "Qualitative",
  },
  {
    id: 2,
    name: "Quantitative",
  },
];

const View = ({ onNext }: { onNext: () => void }) => {
  const [select, setSelect] = useState<{
    rating: string | undefined;
    mitagation: string | undefined;
  }>({
    rating: undefined,
    mitagation: undefined,
  });

  console.log(!!select?.rating && !!select?.mitagation);
  const isDisable = !!select?.rating && !!select?.mitagation;
  return (
    <>
      <div className="w-full md:px-4 py-2  ">
        <div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-5">
          <h4>Select Rating Type</h4>
        </div>
        <div className="flex flex-col gap-3 ">
          {Rating?.map((item) => (
            <button
              onClick={() => {
                setSelect((prev) => ({ ...prev, rating: item?.name }));
              }}
              className={cn(
                `shadow-sm p-3 text-black text-[20px] w-full rounded-lg text-left border border-[#77777743]`,
                select.rating === item?.name && "border-gray-400 shadow-lg"
              )}
            >
              {item?.name}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 md:px-4 py-2 ">
        <div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-3">
          <h4>Risk Mitgation</h4>
        </div>
        {mitigation?.map((item) => {
          return (
            <button
              key={item.id}
              onClick={() => {
                setSelect((prev) => ({ ...prev, mitagation: item?.name }));
              }}
              className={cn(
                `shadow-sm p-3 text-black text-[20px] w-full rounded-lg text-left border border-[#77777743]`,
                select.mitagation === item?.name && "border-gray-400 shadow-lg"
              )}
            >
              {item?.name}
            </button>
          );
        })}
      </div>
      <p className="text-red-600 self-center">
        Generate Risk Profile(3 attempts left)
      </p>
      <div className="flex gap-3 w-full justify-center mt-3">
        <button
          disabled={!isDisable}
          className={cn(
            `text-white p-3 rounded-lg bg-[#000080] w-[40%]`,
            !isDisable && "opacity-50"
          )}
        >
          Previous
        </button>
        <button
          disabled={!isDisable}
          className={cn(
            `text-white p-3 rounded-lg bg-[#000080] w-[40%]`,
            !isDisable && "opacity-50"
          )}
          onClick={() => onNext()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default View;
