import { useState } from "react";
import VerificationFormModal from "./VerificationFormModal";

interface VerifyModalProps {
  setProgress: () => void;
}
const StartVerification: React.FC<VerifyModalProps> = ({ setProgress }) => {
  const [openForm, setOpenForm] = useState(false);
  const handleCloseForm = () => {
    setOpenForm(false);
    setProgress();
  };
  return (
    <>
      <div className="bg-white scale-75 -mt-10 py-9 px-7 ">
        <img
          src="/images/verify-status.png"
          alt=""
          className="w-[40%] mr-auto ml-auto mt-7"
        />
        <div className="mt-8">
          <h3 className="font-[600] text-[19px] mb-6">Get Verified!</h3>
          <p className="font-[400] text-[rgba(0,0,0,0.7)] text-[16px]">
            Verified users stand out with a verification badge next to their
            name and double vote feature!
          </p>
          <button
            className="text-white bg-[#000080] font-[400] text-[15px] py-3 px-5 text-center rounded-lg mt-9 w-full md:w-[70%] ml-auto mr-auto"
            onClick={() => setOpenForm(true)}
          >
            Start Verification
          </button>
        </div>
        {/* <VerificationForm open={openForm} close={handleCloseForm} /> */}
      </div>
      <VerificationFormModal
        isModalOpen={openForm}
        closeModal={handleCloseForm}
      />
    </>
  );
};

export default StartVerification;
