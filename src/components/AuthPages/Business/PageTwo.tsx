const PageTwo = ({ onNext }: { onNext: () => void }) => {
	return (
		<>
			<form
				action=""
				className="w-full flex flex-col gap-4"
				onSubmit={(e) => {
					e.preventDefault();
					// Add form validation here if needed
					onNext();
				}}
			>
				<div className="text-black text-left">
					<label
						htmlFor="business"
						className="mb-2 block font-[600] text-black text-[18px]"
					>
						Business Name
					</label>
					<input
						type="text"
						id="business"
						className="border rounded-lg p-3 w-full border-[#777] outline-none"
					/>
				</div>
				<div className="text-black text-left">
					<label
						htmlFor="ceo"
						className="mb-2 block font-[600] text-black text-[18px]"
					>
						CEO Name
					</label>
					<input
						type="text"
						id="ceo"
						className="border rounded-lg p-3 w-full border-[#777] outline-none"
					/>
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
						id="country"
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
		</>
	);
};

export default PageTwo;
