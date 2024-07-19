import { Eye, EyeSlash } from "@phosphor-icons/react";
import { useState } from "react";

const ResetPassword = () => {
	const [viewPassword, setViewPassword] = useState(false);
	const [viewConfirmPassword, setViewConfirmPassword] = useState(false);
	return (
		<>
			<h4 className="text-[22px] font-[600] text-black text-center mb-6">
				Reset Password
			</h4>
			<form action="" className="w-full flex flex-col gap-4">
				<div className="text-black text-left">
					<label
						htmlFor="password"
						className="mb-2 block font-[600] text-black text-[18px]"
					>
						Enter Password
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
				<div className="text-black text-left">
					<label
						htmlFor="c-password"
						className="mb-2 block font-[600] text-black text-[18px]"
					>
						Reconfirm Password{" "}
						<span className="text-[#777] font-[400] text-[12px] block">
							(One upper case, one lower case, minimum 7 characters)
						</span>
					</label>
					<div className="flex w-full relative">
						<input
							type={!viewConfirmPassword ? "password" : "text"}
							id="c-password"
							className="border rounded-lg p-3 w-full border-[#777] outline-none"
						/>
						<button
							type="button"
							className="absolute w-[5%] right-2 top-1/3 bottom-1/3"
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

export default ResetPassword;
