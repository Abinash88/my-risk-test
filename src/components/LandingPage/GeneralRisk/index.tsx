import ProgressBar from "@/components/AuthPages/Business/ProgressBar";
import { BgSection } from "@/components/shared/ReuseAble";
import HandleParams, { type GenerateTypes } from "@/lib/hooks/handle-params";
import { useEffect, useState } from "react";
import GneratedRiskPRofile from "./GeneralRiskPages/GeneratedRiskProfile";
import PageOne from "./GeneralRiskPages/PageOne";
import PageThree from "./GeneralRiskPages/PageThree";
import PageTwo from "./GeneralRiskPages/PageTwo";

const GeneralRisk = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const { searchParams, handleClear } = HandleParams();
  const checkType = searchParams.get("type") as GenerateTypes | null;

  useEffect(() => {
    if (!checkType || typeof checkType === "undefined") handleClear();
  }, [handleClear, checkType]);

  const renderPage = () => {
    switch (currentStep) {
      case 1:
        return <PageOne onNext={handleNextStep} />;
      case 2:
        return (
          <PageTwo handleStepClick={handleStepClick} onNext={handleNextStep} />
        );
      case 3:
        return (
          <PageThree
            handleStepClick={handleStepClick}
            onNext={handleNextStep}
          />
        );
      case 4:
        return <GneratedRiskPRofile />;
      default:
        return <PageOne onNext={handleNextStep} />;
    }
  };
  return (
    <BgSection image="/images/background.png">
      <div className="w-full md:w-[75%] lg:w-[55%] my-10">
        <div className="mb-4">
          {currentStep < 4 && (
            <ProgressBar
              currentStep={currentStep}
              totalSteps={3}
              onStepClick={handleStepClick}
            />
          )}
        </div>
        <>{renderPage()}</>
      </div>
    </BgSection>
  );
};

export default GeneralRisk;
