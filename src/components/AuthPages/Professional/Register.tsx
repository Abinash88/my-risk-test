import { useEffect, useState } from "react";
import { RegContainer } from "@/components/shared/ReuseAble";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import ProgressBar from "./ProgressBar";
import PageThree from "./PageThree";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  professionalAuthRegister,
  TprofessionalAuthRegister,
} from "@/lib/schemas/auth-schema";
import { useRegisterMutation } from "@/store/auth/auth-api";
import { toast } from "react-toastify";
import Process from "./Process";
import Success from "./Success";

const ProfessionalRegister = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [showLoader, setShowLoader] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
        return <PageTwo />;
      case 3:
        return;
      // case 4:
      // 	return <PasswordPage />;
      default:
        return <PageOne onNext={handleNextStep} />;
    }
  };
  const [registerProfessional] = useRegisterMutation({});

  const form = useForm<TprofessionalAuthRegister>({
    resolver: zodResolver(professionalAuthRegister),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      acceptedTerms: false,
      surname: "",
      currentCompany: "",
      jobTitle: "",
      referralCode: "",
    },
  });

  const onSubmit: SubmitHandler<TprofessionalAuthRegister> = async (data) => {
    setShowLoader(true);
    const res = await registerProfessional({
      data: {
        name: data?.name,
        surname: data?.surname,
        email: data?.email,
        currentCompany: data?.currentCompany,
        acceptedTerms: data?.acceptedTerms,
        jobTitle: data?.jobTitle,
        referralCode: data?.referralCode,
        userType: "Professional",
      },
    });
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    if (res.data) {
      setShowSuccess(true);
      toast.success((res?.data as { message: string })?.message);
    }
    if (res.error) {
      toast.error(
        "data" in res.error
          ? (res.error.data as { error: string }).error
          : "Email already Exist!"
      );
    }
    setShowLoader(false);
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
        {!showLoader && !showSuccess && (
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>{renderPage()}</form>
          </FormProvider>
        )}
        {currentStep === 3 && <PageThree />}
        {showLoader && <Process />}

        {showSuccess && <Success onNext={handleNextStep} />}
      </RegContainer>
    </>
  );
};

export default ProfessionalRegister;
