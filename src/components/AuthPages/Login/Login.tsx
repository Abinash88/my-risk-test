import { useState } from "react";
import { RegContainer } from "../../shared/ReuseAble";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, TLoginSchema } from "@/lib/schemas/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputErrorMessage from "@/components/shared/ReuseAble/input-error-message";
import { useLoginMutation } from "@/store/auth/auth-api";
import { toast } from "react-toastify";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
  });

  const [loginUser] = useLoginMutation();

  const onsubmit: SubmitHandler<TLoginSchema> = async (data) => {
    const res = await loginUser({
      data: { email: data?.email, password: data?.password },
    });
    if (res.data) {
      toast.success((res?.data as { message: string })?.message);
    }
    if (res.error) {
      toast.error(
        "data" in res.error
          ? (res.error.data as { message: string }).message
          : "Email or password Incorrect"
      );
    }
  };

  return (
    <RegContainer>
      <>
        <h4 className="text-[22px] font-[600] text-black text-center mb-6">
          Login
        </h4>
        <form
          onSubmit={handleSubmit(onsubmit)}
          action=""
          className="w-full flex flex-col gap-4"
        >
          <div className="text-black text-left">
            <label
              htmlFor="email"
              className="mb-2 block font-[600] text-black text-[18px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              name="email"
              className="border rounded-lg p-3 w-full border-[#777] outline-none"
            />
            <InputErrorMessage errors={errors} name="email" />
          </div>
          <div className="text-black text-left">
            <label
              htmlFor="password"
              className="mb-2 block font-[600] text-black text-[18px]"
            >
              Password
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
          <div className="text-black flex items-center justify-between flex-wrap gap-2 md:gap-0">
            <div className="text-[rgba(0,0,0,0.59)] font-[600]">
              <input type="checkbox" id="remember" className="mr-1" />
              <label htmlFor="remember">Remember Password</label>
            </div>
            <Link
              to="/auth/forgot-password"
              className="font-[600] text-[#6666B3]"
            >
              Forgot Password
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#000080] text-center text-white rounded-lg py-5 mt-4"
          >
            Login
          </button>
        </form>
        <span className="text-[#6666B3] font-[400] mt-5 block">
          Terms and condition, privacy policy, cookie policy
        </span>
      </>
    </RegContainer>
  );
};

export default Login;
