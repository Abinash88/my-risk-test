import InputErrorMessage from "@/components/shared/ReuseAble/input-error-message";
import {
  finishRegisterationSchema,
  TfinishRegisterationSchema,
} from "@/lib/schemas/auth-schema";
import { useFinishRegisterMutation } from "@/store/auth/auth-api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PageThree = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TfinishRegisterationSchema>({
    resolver: zodResolver(finishRegisterationSchema),
    mode: "onTouched",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const [finishRegister] = useFinishRegisterMutation();

  const onSubmit: SubmitHandler<TfinishRegisterationSchema> = async (data) => {
    const res = await finishRegister({
      data: { token: "", password: data?.password },
    });

    if (res.data) {
      toast.success("Password Created successfully.");
      navigate("/dashboard/account-profile");
    }
    if (res.error) {
      toast.error(
        "data" in res.error
          ? (res.error.data as { error: string }).error
          : "Invalid Token"
      );
    }
  };

  return (
    <>
      <div>
        <h2 className="text-[#000080] font-[600] text-[18px] mb-8">
          Choose Password
        </h2>
      </div>
      <form
        action=""
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-black text-left">
          <label
            htmlFor="password"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Password{" "}
            <span className="text-[#777] font-[400] text-[12px]">
              (One upper case, one lower case, minimum 7 characters)
            </span>
          </label>
          <div className="flex w-full flex-col relative">
            <input
              type={!viewPassword ? "password" : "text"}
              id="password"
              {...register("password")}
              name="password"
              className="border rounded-lg p-3 w-full border-[#777] outline-none"
            />
            <InputErrorMessage errors={errors} name="password" />
            <button
              type="button"
              className="absolute w-[5%] right-3 top-4"
              onClick={() => setViewPassword(!viewPassword)}
            >
              {!viewPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
            </button>
          </div>
        </div>
        <div className="text-black text-left">
          <label
            htmlFor="confirmPassword"
            className="mb-2 block font-[600] text-black text-[18px]"
          >
            Confirm Password
          </label>
          <div className="flex w-full flex-col relative">
            <input
              type={!viewConfirmPassword ? "password" : "text"}
              id="confirmPassword"
              className="border rounded-lg p-3 w-full border-[#777] outline-none"
              {...register("confirmPassword")}
              name="confirmPassword"
            />
            <InputErrorMessage errors={errors} name="confirmPassword" />
            <button
              type="button"
              className="absolute w-[5%] right-3 top-4"
              onClick={() => setViewConfirmPassword(!viewConfirmPassword)}
            >
              {!viewConfirmPassword ? (
                <Eye size={20} />
              ) : (
                <EyeSlash size={20} />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#000080] text-center text-white rounded-lg py-5 mt-4"
        >
          Continue
        </button>
      </form>
    </>
  );
};

export default PageThree;
