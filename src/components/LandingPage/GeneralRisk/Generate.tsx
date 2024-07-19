const Generate = ({ onNext }: { onNext: () => void }) => {
	return (
		<>
			<div className="w-full ">
				<div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-3">
					<h4>Select Global/Region</h4>
				</div>
				<button className="shadow-sm p-3 text-black text-[20px] w-full mb-6 rounded-lg text-left border border-[#77777743]">
					Global
				</button>
				<button className="shadow-sm p-3 text-black text-[20px] w-full rounded-lg text-left border border-[#77777743]">
					Region
				</button>
			</div>
			<div className="w-full">
				<div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-3">
					<h4>Industry</h4>
				</div>
				<div>
					<input
						type="search"
						placeholder="Search"
						className="shadow-sm p-3 text-black text-[17px] w-full rounded-lg text-left border border-[#77777743] outline-none"
					/>
				</div>
			</div>
			<div className="flex gap-3 w-full justify-center mt-3">
				<button
					className="text-white p-3 rounded-lg bg-[#000080] w-[40%]"
					onClick={() => onNext()}
				>
					Threat
				</button>
				<button className="text-white p-3 rounded-lg bg-[#6666B3] w-[40%]">
					Opportunity
				</button>
			</div>
		</>
	);
};

export default Generate;
