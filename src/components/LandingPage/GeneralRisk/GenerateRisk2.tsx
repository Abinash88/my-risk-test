const GenerateRisk2 = () => {
	return (
		<>
			<div className="w-full ">
				<div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-3">
					<h4>Uncertainty/ Event</h4>
				</div>
				<div className="w-full">
					<textarea
						name="postContent"
						rows={9}
						className="w-full outline-none text-black rounded-lg mt-4 border-2 border-[#6666] p-3"
					/>
				</div>
				<div className="flex items-center gap-2 mt-4">
					<input
						type="text"
						placeholder="Enter uncertainly/event"
						className="p-3 bg-[#F1F1F1] outline-none border-none rounded-lg flex-[1]"
					/>
					<button className="p-3 text-white rounded-lg bg-[#000080]">
						Submit
					</button>
				</div>
			</div>
		</>
	);
};

export default GenerateRisk2;
