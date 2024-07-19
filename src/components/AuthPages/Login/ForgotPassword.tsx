import { FormEvent } from "react";

interface ForgotPasswordProps {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}
const ForgotPassword = ({ onSubmit }: ForgotPasswordProps) => {
	return (
		<>
			<h4 className="text-[22px] font-[600] text-black text-center mb-6">
				Reset Password
			</h4>
			<form
				action=""
				className="w-full flex flex-col gap-4"
				onSubmit={onSubmit}
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
						className="border rounded-lg p-3 w-full border-[#777] outline-none"
					/>
					<span className="text-[#000080] font-[400] text-center block">
						Receive Link to Reset Password in Email
					</span>
				</div>
				<button
					type="submit"
					className="bg-[#000080] text-center text-white rounded-lg py-5 mt-4"
				>
					Reset Password
				</button>
				<span className="text-[#6666B3] font-[400] mt-5 block">
					Terms and condition, privacy policy, cookie policy
				</span>
			</form>
		</>
	);
};

export default ForgotPassword;
