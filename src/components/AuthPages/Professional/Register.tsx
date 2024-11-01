import { useEffect, useState } from "react";
import { RegContainer } from "@/components/shared/ReuseAble";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import ProgressBar from "./ProgressBar";
import PageThree from "./PageThree";

const ProfessionalRegister = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    goToTop();
  }, []);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const renderPage = () => {
    switch (currentStep) {
      case 1:
        return <PageOne onNext={handleNextStep} />;
      case 2:
        return <PageTwo onNext={handleNextStep} />;
      case 3:
        return <PageThree />;
      // case 4:
      // 	return <PasswordPage />;
      default:
        return <PageOne onNext={handleNextStep} />;
    }
  };

  return (
    <>
      <RegContainer
        bar={
          currentStep < 4 && (
            <ProgressBar
              currentStep={currentStep}
              totalSteps={3}
              onStepClick={handleStepClick}
            />
          )
        }
      >
        <div>
          <h4 className="text-[22px] font-[600] text-black text-center mb-6">
            Professional Registration
          </h4>
        </div>
        <div className="auth_input">{renderPage()}</div>
      </RegContainer>
    </>
  );
};

export default ProfessionalRegister;
