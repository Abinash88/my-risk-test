import { useState } from "react";
import StartVerification from "./StartVerification";
import VerificationSteps from "./VerificationSteps";

const Verification = () => {
  const [progress, setProgress] = useState(false);
  const setProg = () => {
    setProgress(true);
  };
  return (
    <div>
      <h4 className="font-[600] text-2xl">Verification</h4>
        {progress ? (
			<VerificationSteps />
        ) : (
			<div className="flex items-center justify-center mt-5">
          <div className=" rounded-md w-full md:w-[90%] lg:w-[45%] text-center">
            <StartVerification setProgress={setProg} />
          </div>
      </div>
        )}
        {/* <VerificationReview /> */}
        {/* <VerificationSuccess /> */}
    </div>
  );
};

export default Verification;
