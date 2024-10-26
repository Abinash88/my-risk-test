import InputErrorMessage from "@/components/shared/ReuseAble/input-error-message";
import { TprofessionalAuthRegister } from "@/lib/schemas/auth-schema";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

const PageTwo = () => {
  const {
    register,
    formState: { errors, dirtyFields },
    watch,
  } = useFormContext<TprofessionalAuthRegister>();

  const isDirty =
    dirtyFields?.jobTitle &&
    dirtyFields.currentCompany &&
    dirtyFields?.referralCode &&
    watch("acceptedTerms");

  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="text-black text-left">
          <label
            htmlFor="job"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Job Title
          </label>
          <input
            type="text"
            id="job"
            {...register("jobTitle")}
            name="jobTitle"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="jobTitle" />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="currentCompany"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Current Company
          </label>
          <input
            type="text"
            {...register("currentCompany")}
            id="currentCompany"
            name="currentCompany"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="currentCompany" />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="referralCode"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Referral Code{" "}
            <span className="text-[14px] text-[#000080] mr-1">
              (You need a referral code)
            </span>
          </label>
          <input
            type="text"
            {...register("referralCode")}
            id="referralCode"
            name="referralCode"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="referralCode" />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="size-5"
            {...register("acceptedTerms")}
          />
          <p className="text-black text-left text-[12px]">
            By creating an account you agree with our Terms of Service, Privacy
            Policy.
          </p>
        </div>
        <button
          type="submit"
          disabled={!isDirty}
          className={cn(
            `bg-[#000080] text-center text-white rounded-lg py-5 mt-4`,
            !isDirty && "opacity-50"
          )}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default PageTwo;
