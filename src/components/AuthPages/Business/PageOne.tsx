import InputErrorMessage from "@/components/shared/ReuseAble/input-error-message";
import { TbusinessAuthRegister } from "@/lib/schemas/auth-user-schema";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

const PageOne = ({ onNext }: { onNext: () => void }) => {
  const {
    register,
    formState: { errors, dirtyFields },
    watch,
  } = useFormContext<TbusinessAuthRegister>();
  console.log(dirtyFields);

  const isDisabled =
    dirtyFields?.name &&
    dirtyFields.email &&
    dirtyFields?.surname &&
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
            {...register("name")}
            id="name"
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
            id="email"
            name="email"
            className="border rounded-lg p-3 w-full border-[#777] outline-none"
          />
          <InputErrorMessage errors={errors} name="email" />
        </div>
        <button
          onClick={() => {
            onNext();
          }}
          type="button"
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

export default PageOne;
