import { useState } from "react";
import { RegContainer } from "../../shared/ReuseAble";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Login = () => {
	const [viewPassword, setViewPassword] = useState(false);
	return (
		<RegContainer>
			<>
				<h4 className="text-[22px] font-[600] text-black text-center mb-6">
					Login
				</h4>
				<form action="" className="w-full flex flex-col gap-4">
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
							className="border rounded-lg p-3 w-full border-[#777] outline-none"
						/>
					</div>
					<div className="text-black text-left">
						<label
							htmlFor="password"
							className="mb-2 block font-[600] text-black text-[18px]"
						>
							Password
						</label>
						<div className="flex w-full relative">
							<input
								type={!viewPassword ? "password" : "text"}
								id="password"
								className="border rounded-lg p-3 w-full border-[#777] outline-none"
							/>
							<button
								type="button"
								className="absolute w-[5%] right-2 top-1/3 bottom-1/3"
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
						Continue
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
