import { ShareFat } from "@phosphor-icons/react";
import { useState } from "react";
import SuccessfulRefer from "./successful";
import PendingRefer from "./pending";
import InviteMembers from "../PrivateGroup/InviteMembers";
// import { referList } from "../../../lib/fakedata";

const Referral = () => {
  const [pending, setPending] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h4 className="font-[600] text-black text-[20px]">Referral Page</h4>
        <button className="text-white p-3 scale-90 bg-[#6666B3] rounded-lg">
          Generate Referral Code
        </button>
      </div>
      <div className=" flex flex-col gap-7 mt-5 bg-white rounded-md px-4 md:px-9 py-9 h-auto overflow-y-auto scrollBar">
        <div>
          <h3 className="font-[600] text-[20px] text-black mb-4">
            Referral Code
          </h3>
          <div className="flex flex-row gap-4">
            <p className="font-[600] text-[29px] text-black">3DA3A45</p>
            <button
              onClick={() => setOpenModal(true)}
              className="border hover:text-white hover:bg-blue-400 border-blue-400 w-24 px-3 text-blue-400 shadow-lg  p-2 rounded-full"
            >
              <div className="flex justify-between ">
                <div>Share </div>
                <ShareFat weight="fill" />
              </div>
            </button>
          </div>
        </div>

        <div>
          <div className="mt-1 bg-white rounded-md md:px-9 py-4 pt-5">
            <div className="flex flex-row w-full justify-center gap-4">
              <h4
                onClick={() => setPending(false)}
                className={
                  !pending
                    ? "font-[600] rounded-md hover:bg-blue-50 w-[50%] text-center text-lg mb-5 border-b-blue-900 border-b-[5px] py-2"
                    : "font-[600] rounded-md hover:bg-blue-50 w-[50%] text-center text-lg mb-5 border-b-gray-300 border-b-[5px] py-2"
                }
              >
                Successful Referrals
              </h4>
              <h4
                onClick={() => setPending(true)}
                className={
                  pending
                    ? "font-[600] rounded-md hover:bg-blue-50 w-[50%] text-center text-lg mb-5 border-b-blue-900 border-b-[5px] py-2"
                    : "font-[600] rounded-md hover:bg-blue-50 w-[50%] text-center text-lg mb-5 border-b-gray-300 border-b-[5px] py-2"
                }
              >
                Pending Referrals
              </h4>
            </div>
            {!pending ? <SuccessfulRefer /> : <PendingRefer />}
          </div>
        </div>
        <div className="flex items-center scale-90">
          <button className="text-white p-3 bg-[#6666B3] rounded-lg">
            Add New Referrals
          </button>
        </div>
        <InviteMembers open={openModal} close={handleClose} />
      </div>
    </div>
  );
};

export default Referral;
