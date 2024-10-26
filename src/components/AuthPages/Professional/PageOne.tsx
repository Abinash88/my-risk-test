import InputErrorMessage from "@/components/shared/ReuseAble/input-error-message";
import { TprofessionalAuthRegister } from "@/lib/schemas/auth-schema";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

const PageOne = ({ onNext }: { onNext: () => void }) => {
  const {
    register,
    formState: { errors, dirtyFields },
    watch,
  } = useFormContext<TprofessionalAuthRegister>();

  const isDirty =
    dirtyFields?.name &&
    dirtyFields.surname &&
    dirtyFields?.email &&
    watch("email").includes("@gmail.com");
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="text-black text-left">
          <label
            htmlFor="name"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            name="name"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="name" />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="surname"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Surname
          </label>
          <input
            type="text"
            {...register("surname")}
            id="surname"
            name="surname"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="surname" />
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="email"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            name="email"
            id="email"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="email" />
        </div>
        <button
          type="button"
          onClick={onNext}
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

export default PageOne;
