import { Check, DotsThree } from "@phosphor-icons/react";
import { useState } from "react";
import Comp from "../../../assets/images/verification-complete.jpg";

const VerificationSteps = () => {
  const [swap, setSwap] = useState(true);
  return (
    <>
      {swap ? (
        <div className="bg-white  w-[100%] md:w-[80%] md:px-10  flex flex-col">
          <img
            src="/images/review.png"
            alt=""
            className="w-32 mr-auto ml-auto mt-7"
          />
          <div className="mt-8" onClick={() => setSwap((x) => !x)}>
            <h3 className="font-[600] mt-2 text-lg text-center mb-6">
              Verification Under Review!
            </h3>
          </div>
          <div className="flex gap-2  flex-row justify-evenly">
            <div className="flex flex-col items-center">
              <input
                type="radio"
                className="p-8 mt-2 scale-75 md:scale-100 w-6 h-6  specifyColor"
                id="receive"
                defaultChecked
                // checked={isChecked.receivePromotions}
                // onClick={() => handleToggle("receivePromotions")}
                readOnly
              />
              <div className="w-[2px] mt-1 h-16 opacity-80 rounded-full bg-[#000080]" />
            </div>
            <label
              htmlFor="receive"
              className="text-sm mt-3 font-extrabold opacity-80 text-[#000080] w-[60%] md:w-[70%] md:ml-5"
            >
              Upload of documents showing proof of ownership or employment under
              a company/business.
            </label>
            <div className="h-16 flex justify-center items-center">
              <Check weight="bold" className="text-2xl text-[#000080] mt-2" />
            </div>
          </div>
          <div className="flex gap-2  flex-row justify-evenly">
            <div className="flex flex-col items-center">
              <input
                type="radio"
                className="p-8 mt-2 scale-75 md:scale-100 w-6 h-6  accent-yellow-700 "
                id="receive"
                defaultChecked
                // checked={isChecked.receivePromotions}
                // onClick={() => handleToggle("receivePromotions")}
                readOnly
              />
              <div className="w-[2px] mt-1 h-16 opacity-80 rounded-full bg-yellow-700" />
            </div>
            <label
              htmlFor="receive"
              className="text-sm mt-3 font-extrabold opacity-80 text-yellow-700 w-[60%] md:w-[70%] md:ml-5"
            >
              Review and confirmation of names on documents and profile.
            </label>
            <div className="h-16 flex justify-center items-center">
              <DotsThree
                weight="bold"
                className="text-2xl text-yellow-700 md:mb-4 animate-bounce"
              />
            </div>
          </div>
          <div className="flex gap-2 mb-14 flex-row justify-evenly">
            <div className="flex flex-col items-center">
              <input
                type="radio"
                className="p-8 mt-2 scale-75 md:scale-100 w-6 h-6"
                id="receive"
                defaultChecked
                // checked={isChecked.receivePromotions}
                // onClick={() => handleToggle("receivePromotions")}
                readOnly
              />
            </div>
            <label
              htmlFor="receive"
              className="text-sm mt-3 font-extrabold opacity-80 text-gray-700 w-[60%] md:w-[70%] md:ml-5"
            >
              Verification of company/business’ existence and work history.
            </label>
            <div className="w-6" />
          </div>
        </div>
      ) : (
        <div className="w-full items-center justify-center h-[80vh] flex">
          <div className="bg-white shadow-lg  md:mt-4  items-center justify-center flex flex-col">
            <img src={Comp} alt="xz" className="w-[40%] mr-auto ml-auto mt-7" />
            <div className="flex items-center gap-2 scale-90 md:scale-75">
              <img
                src="/images/profile-image.jpeg"
                alt="profile-image"
                className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
              />
              <div className="flex gap-1  items-center">
                <h3 className="text-[#000080] text-sm font-[600]">
                  Uther Martin
                </h3>
                <img src="/images/badge.png" alt="badge" />
              </div>
            </div>
            <div className="mt-8" onClick={() => setSwap((x) => !x)}>
              <h3 className="font-[600] text-lg mb-10">
                Congratulations! You are verified.
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerificationSteps;
