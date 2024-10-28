import InputErrorMsg from "@/components/shared/ReuseAble/input-error-msg";
import HandleParams from "@/lib/hooks/handle-params";
import {
  PaymentFormSchema,
  TPaymentFormSchema,
} from "@/lib/schemas/payment-schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BgSection } from "../../shared/ReuseAble";

const MakePayment = () => {
  const [isChecked, setIsChecked] = useState(true);

  const form = useForm<TPaymentFormSchema>({
    resolver: zodResolver(PaymentFormSchema),
    mode: "all",
    defaultValues: {
      cardNumber: undefined,
      cvc: "",
      firstName: "",
      lastName: "",
      month: "",
      year: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = form;

  const { handlePageChange, getP } = HandleParams();
  const onSubmit: SubmitHandler<TPaymentFormSchema> = (data) => {
    console.log(data);
  };

  return (
    <>
      <BgSection image="images/background.png">
        <div className="bg-white rounded-lg w-full md:w-[60%] lg:w-[40%] mr-auto ml-auto py-6">
          <h4 className="text-[#000080] border-b border-[#777] text-left pb-3 pl-5 font-[600]">
            Make Payment
          </h4>
          <div className="px-3 my-6">
            <div className="flex items-center gap-2 ml-2 ">
              <input
                type="radio"
                className="p-8 w-5 h-5  specifyColor"
                id="pay"
                checked={isChecked}
                onClick={() => setIsChecked(!isChecked)}
                readOnly
              />
              <label
                htmlFor="pay"
                className="block text-black font-[600] text-[14px] md:text-[19px]"
              >
                Pay with Credit or Debit Card
              </label>
            </div>
            <div className="mt-3 flex items-center gap-4 ml-1 md:ml-8">
              <img src="/images/master.png" alt="" className="w-[50px]" />
              <img src="/images/visa.png" alt="" className="w-[50px]" />
              <img src="/images/maestro.png" alt="" className="w-[50px]" />
              <img src="/images/circus.png" alt="" className="w-[50px]" />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3 mt-5"
              id="payment-form"
            >
              <div className="flex flex-col text-left">
                <input
                  type="number"
                  className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
                  placeholder="Card Number*"
                  {...register("cardNumber")}
                />
                <InputErrorMsg errors={errors} name="cardNumber" />
              </div>
              <div className="flex gap-3 text-left">
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
                    placeholder="MM*"
                    {...register("month")}
                  />
                  <InputErrorMsg errors={errors} name="month" />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
                    placeholder="YY*"
                    {...register("year")}
                  />
                  <InputErrorMsg errors={errors} name="year" />
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
                    placeholder="CVV/CVC*"
                    {...register("cvc")}
                  />
                  <InputErrorMsg errors={errors} name="cvc" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <input
                  type="text"
                  className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
                  placeholder="First Name"
                  {...register("firstName")}
                />
                <InputErrorMsg errors={errors} name="firstName" />
              </div>
              <div className="flex flex-col text-left">
                <input
                  type="text"
                  className="border-2 w-full rounded-lg text-[rgba(0,0,0,0.4)] outline-none p-2.5"
                  placeholder="Last Name"
                  {...register("lastName")}
                />
                <InputErrorMsg errors={errors} name="lastName" />
              </div>
            </form>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                const prev = getP("previous");
                if (prev)
                  handlePageChange({
                    next: prev,
                    previous: "ai-modal",
                  });
              }}
              className="py-3 px-4 text-white rounded-lg bg-[#000080] w-[40%]"
            >
              Back
            </button>
            <button
              form="payment-form"
              type="submit"
              disabled={!isValid}
              onClick={() => {
                handlePageChange({
                  next: "general-risk",
                  previous: "make-payment",
                });
              }}
              className={cn(
                `py-3 px-4 text-white rounded-lg bg-[#000080] w-[40%]`,
                !isValid && "opacity-50"
              )}
            >
              Next
            </button>
          </div>
        </div>
      </BgSection>
    </>
  );
};

export default MakePayment;
