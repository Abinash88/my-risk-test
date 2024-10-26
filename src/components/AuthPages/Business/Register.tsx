import { useEffect, useState } from "react";
import { RegContainer } from "@/components/shared/ReuseAble";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import ProgressBar from "./ProgressBar";
import PageFour from "./PageFour";
import PageThree from "./PageThree";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, useForm } from "react-hook-form";
import Process from "./Process";
import Success from "./Success";
import { useMediaQuery } from "@mui/material";

const BusinessRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showLoader, setShowLoader] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // const methods = useForm({ resolver: zodResolver() });

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };
  console.log(currentStep);
  const renderPage = () => {
    switch (currentStep) {
      case 1:
        return <PageOne onNext={handleNextStep} />;
      case 2:
        return <PageTwo onNext={handleNextStep} />;
      case 3:
        return <PageThree />;
      case 4:
        return <PageFour />;
      // case 4:
      // 	return <PasswordPage />;
      default:
        return <PageOne onNext={handleNextStep} />;
    }
  };

  const matches = useMediaQuery("(min-width:1080px)");

  const goToTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (matches === true) goToTop();
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoader(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setShowLoader(false);
      setShowSuccess(true);
    }, 2000);
  };

  return (
    <>
      <RegContainer
        bar={
          currentStep < 5 && (
            <ProgressBar
              currentStep={currentStep}
              totalSteps={4}
              onStepClick={handleStepClick}
            />
          )
        }
      >
        <div>
          <h4 className="text-[22px] font-[600] text-black text-center mb-6">
            Business Registration
          </h4>
        </div>
        {/* <FormProvider {...methods}> */}
        {/* <form
          // onSubmit={methods.handleSubmit(onSubmit)}
          > */}
        {!showLoader && !showSuccess && (
          <div className="" onSubmit={onSubmit}>
            {renderPage()}
          </div>
        )}
        {/* </form> */}
        {/* </FormProvider> */}
        {showLoader && <Process />}

        {showSuccess && <Success onNext={handleNextStep} />}
      </RegContainer>
    </>
  );
};

export default BusinessRegister;
