import InputErrorMessage from "@/components/shared/ReuseAble/input-error-message";
import { TbusinessAuthRegister } from "@/lib/schemas/auth-user-schema";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

const PageThree = () => {
  const {
    register,
    formState: { errors, dirtyFields },
    watch,
  } = useFormContext<TbusinessAuthRegister>();

  const isDisabled =
    dirtyFields?.businessName &&
    dirtyFields.ceoName &&
    dirtyFields?.country &&
    watch("acceptedTerms");
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="text-black text-left">
          <label
            htmlFor="houseNo"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            House No / House Name
          </label>
          <input
            type="text"
            id="houseNo"
            {...register("houseNo")}
            name="houseNo"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="houseNo" />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="streetName"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Street Name
          </label>
          <input
            type="text"
            {...register("streetName")}
            id="streetName"
            name="streetName"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="streetName" />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="town"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Town
          </label>
          <input
            type="text"
            {...register("town")}
            id="town"
            name="town"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="town" />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="city"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            State / City
          </label>
          <input
            type="text"
            {...register("city")}
            id="city"
            name="city"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="city" />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="zipCode"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Zip Code
          </label>
          <input
            type="number"
            {...register("zipCode")}
            id="zipCode"
            name="zipCode"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="zipCode" />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="size-5"
            {...register("acceptedTerms")}
          />
          <p className="text-black text-left  text-[12px]">
            By creating an account you agree with our Terms of Service, Privacy
            Policy.
          </p>
        </div>
        <button
          type="submit"
          disabled={!isDisabled}
          className={cn(
            `bg-[#000080] text-center text-white rounded-lg py-5 mt-4`,
            !isDisabled && "opacity-50"
          )}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default PageThree;
