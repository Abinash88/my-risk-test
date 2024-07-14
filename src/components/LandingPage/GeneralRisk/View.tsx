const View = () => {
	return (
		<>
			<div className="w-full ">
				<div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-3">
					<h4>Select Rating Type</h4>
				</div>
				<button className="shadow-sm p-3 text-black text-[20px] w-full mb-6 rounded-lg text-left border border-[#77777743]">
					Qualitative = 00
				</button>
				<button className="shadow-sm p-3 text-black text-[20px] w-full rounded-lg text-left border border-[#77777743]">
					Quantitative = 000
				</button>
			</div>
			<div className="w-full flex flex-col gap-3">
				<div className="bg-[#1D98F0] text-white  p-3 text-left rounded-lg shadow-lg mb-3">
					<h4>Risk Mitgation</h4>
				</div>
				<button className="shadow-sm p-3 text-black text-[20px] w-full mb-6 rounded-lg text-left border border-[#77777743]">
					Enhance
				</button>
				<button className="shadow-sm p-3 text-black text-[20px] w-full rounded-lg text-left border border-[#77777743]">
					Ignore
				</button>
				<button className="shadow-sm p-3 text-black text-[20px] w-full rounded-lg text-left border border-[#77777743]">
					Exploit
				</button>
				<button className="shadow-sm p-3 text-black text-[20px] w-full rounded-lg text-left border border-[#77777743]">
					Transfer
				</button>
			</div>
			<p className="text-red-600 self-center">
				Generate Risk Profile(3 attempts left)
			</p>
			<div className="flex gap-3 w-full justify-center mt-3">
				<button className="text-white p-3 rounded-lg bg-[#000080] w-[40%]">
					Resubmit
				</button>
				<button className="text-white p-3 rounded-lg bg-[#000080] w-[40%]">
					Generate
				</button>
			</div>
		</>
	);
};

export default View;
