import { useEffect, useState } from "react";
import { RegContainer } from "@/components/shared/ReuseAble";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import ProgressBar from "./ProgressBar";
import PageFour from "./PageFour";
import PageThree from "./PageThree";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Process from "./Process";
import Success from "./Success";
import { useMediaQuery } from "@mui/material";
import {
  TbusinessAuthRegister,
  businessAuthRegister,
} from "@/lib/schemas/auth-schema";
import { useRegisterMutation } from "@/store/auth/auth-api";
import { ToastContainer, toast } from "react-toastify";

const BusinessRegister = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showLoader, setShowLoader] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<TbusinessAuthRegister>({
    resolver: zodResolver(businessAuthRegister),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      ceoName: "",
      businessName: "",
      country: "",
      acceptedTerms: false,
      houseNo: "",
      city: "",
      streetName: "",
      surname: "",
      town: "",
      zipCode: "",
    },
  });

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };
  const [registerBusiness] = useRegisterMutation({});

  const renderPage = () => {
    switch (currentStep) {
      case 1:
        return <PageOne onNext={handleNextStep} />;
      case 2:
        return <PageTwo onNext={handleNextStep} />;
      case 3:
        return <PageThree />;
      case 4:
        return;
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

  const onSubmit: SubmitHandler<TbusinessAuthRegister> = async (data) => {
    setShowLoader(true);
    const res = await registerBusiness({
      data: {
        name: data?.name,
        surname: data?.surname,
        businessAddress: `${data?.country} ${data?.city} ${data?.town} ${data?.houseNo} ${data?.zipCode} ${data?.streetName} `,
        email: data?.email,
        ceoName: data?.ceoName,
        businessName: data?.businessName,
        acceptedTerms: data?.acceptedTerms,
        userType: "Business",
      },
    });
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    console.log(res);
    if (res.data) {
      setShowSuccess(true);
      console.log();
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
        {!showLoader && !showSuccess && (
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>{renderPage()}</form>
          </FormProvider>
        )}
        {currentStep === 4 && <PageFour />}
        {showLoader && <Process />}

        {showSuccess && (
          <Success setShowSuccess={setShowSuccess} onNext={handleNextStep} />
        )}
      </RegContainer>
      <ToastContainer />
    </>
  );
};

export default BusinessRegister;
