import { useNavigate } from "react-router-dom";

const PageThree = () => {
	const Navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Add form validation here if needed
		Navigate("/dashboard/account-profile");
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
				onSubmit={handleSubmit}
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
					<input
						type="password"
						id="password"
						className="border rounded-lg p-3 w-full border-[#777] outline-none"
					/>
				</div>
				<div className="text-black text-left">
					<label
						htmlFor="c-password"
						className="mb-2 block font-[600] text-black text-[18px]"
					>
						Confirm Password
					</label>
					<input
						type="password"
						id="c-password"
						className="border rounded-lg p-3 w-full border-[#777] outline-none"
					/>
				</div>
				<div className="flex items-center gap-1">
					<input type="checkbox" />
					<p className="text-black text-[12px]">
						By creating an account you agree with our Terms of Service, Privacy
						Policy.
					</p>
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
