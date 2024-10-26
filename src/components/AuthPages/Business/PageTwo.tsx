import InputErrorMessage from "@/components/shared/ReuseAble/input-error-message";
import { TbusinessAuthRegister } from "@/lib/schemas/auth-schema";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

const PageTwo = ({ onNext }: { onNext: () => void }) => {
  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext<TbusinessAuthRegister>();

  const isDirty =
    dirtyFields?.businessName && dirtyFields.ceoName && dirtyFields?.country;
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="text-black text-left">
          <label
            htmlFor="businessName"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            {...register("businessName")}
            name="businessName"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="businessName" />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="ceoName"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            CEO Name
          </label>
          <input
            type="text"
            {...register("ceoName")}
            id="ceoName"
            name="ceoName"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="ceoName" />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="country"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Country
          </label>
          <input
            type="text"
            {...register("country")}
            id="country"
            name="country"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="country" />
        </div>
        <button
          onClick={() => onNext()}
          type="button"
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
