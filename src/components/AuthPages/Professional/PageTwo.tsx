import { useState } from "react";
import Process from "./Process";
import Success from "./Success";

const PageTwo = ({ onNext }: { onNext: () => void }) => {
	const [showLoader, setShowLoader] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setShowLoader(true);

		setTimeout(() => {
			setShowLoader(false);
			setShowSuccess(true);
		}, 2000);
	};
	return (
		<>
			{!showLoader && !showSuccess && (
				<form
					action=""
					className="w-full flex flex-col gap-4"
					onSubmit={handleSubmit}
				>
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
							className="border rounded-lg p-3 w-full border-[#777] outline-none"
						/>
					</div>
					<div className="text-black text-left">
						<label
							htmlFor="current-company"
							className="mb-2 block font-[600] text-black text-[18px]"
						>
							Current Company
						</label>
						<input
							type="text"
							id="current-company"
							className="border rounded-lg p-3 w-full border-[#777] outline-none"
						/>
					</div>
					<div className="text-black text-left">
						<label
							htmlFor="refer"
							className="mb-2 block font-[600] text-black text-[18px]"
						>
							Referral Code{" "}
							<span className="text-[14px] text-[#000080] mr-1">
								(You need a referral code)
							</span>
						</label>
						<input
							type="text"
							id="refer"
							className="border rounded-lg p-3 w-full border-[#777] outline-none"
						/>
					</div>
					<button
						type="submit"
						className="bg-[#000080] text-center text-white rounded-lg py-5 mt-4"
					>
						Continue
					</button>
				</form>
			)}
			{showLoader && <Process />}

			{showSuccess && <Success onNext={onNext} />}
		</>
	);
};

export default PageTwo;
