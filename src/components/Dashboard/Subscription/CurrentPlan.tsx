import { useState } from "react";
import Premium from "./Premium";
import Subscription from "./Subscription";

const CurrentPlan = () => {
  const [premium, setPremium] = useState(false);
  return (
    <div>
      <div className="mt-1 bg-white rounded-md px-9 py-9 pt-5">
        <div className="flex flex-row w-full justify-center gap-4">
          <h4
            onClick={() => setPremium(false)}
            className={
              !premium
                ? "font-[600] rounded-md hover:bg-blue-50 w-[50%] text-center text-lg mb-5 border-b-blue-900 border-b-[5px] py-2"
                : "font-[600] rounded-md hover:bg-blue-50 w-[50%] text-center text-lg mb-5 border-b-gray-300 border-b-[5px] py-2"
            }
          >
            Subscription
          </h4>
          <h4
            onClick={() => setPremium(true)}
            className={
              premium
                ? "font-[600] rounded-md hover:bg-blue-50 w-[50%] text-center text-lg mb-5 border-b-blue-900 border-b-[5px] py-2"
                : "font-[600] rounded-md hover:bg-blue-50 w-[50%] text-center text-lg mb-5 border-b-gray-300 border-b-[5px] py-2"
            }
          >
            Premium Features
          </h4>
        </div>
        {!premium ? <Subscription /> : <Premium />}
      </div>
    </div>
  );
};

export default CurrentPlan;
