import { useState } from "react";

const Score = () => {
	const [result, setResult] = useState<"migation" | "type">("migation");
	return (
		<>
			<div className="w-full overflow-x-auto pb-2 text-center">
				<div className="flex gap-3 justify-between md:justify-center text-center">
					<p className="p-3 border border-[rgba(0,0,0,0.4)] rounded-lg md:w-[40%] w-[190px] font-[600] ">
						Probability: 10
					</p>
					<p className="p-3 border border-[rgba(0,0,0,0.4)] rounded-lg md:w-[40%] w-[190px] font-[600]">
						Impact: 10{" "}
						<span className="text-white bg-[#6095C9] py-2 px-4 rounded-lg ml-3 block">
							Add
						</span>
					</p>
					<p className="p-3 border border-[rgba(0,0,0,0.4)] rounded-lg md:w-[40%] w-[190px] font-[600]">
						Current Rating: 10
					</p>
				</div>
			</div>

			<div className="mt-6">
				<h5 className="text-[15px] text-[#6666B3] text-left">
					Share 100 point among Each Action
				</h5>
				<div className="flex gap-4 items-center">
					<button
						className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
							result === "migation"
								? "bg-[#000080] text-white"
								: "bg-white text-[rgba(0,0,0,0.7)]"
						}`}
						onClick={() => setResult("migation")}
					>
						Risk Migation
					</button>
					<button
						className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
							result === "type"
								? "bg-[#000080] text-white"
								: "bg-white text-[rgba(0,0,0,0.7)]"
						}`}
						onClick={() => setResult("type")}
					>
						Change Action Type
					</button>
					<h4 className="bg-[#6095C9] p-2 rounded-lg text-white">
						Action Rating
					</h4>
				</div>
				<div className="full mt-5 flex flex-col gap-5">
					<div className="flex items-center gap-4 w-full">
						<p className="py-5 px-3 border border-[rgba(0,0,0,0.2)] rounded-md w-[50%]"></p>
						<p className="py-5 px-3 border border-[rgba(0,0,0,0.2)] rounded-md w-[50%]"></p>
						<h4 className="border  bg-[#D8E0EC] border-[rgba(0,0,0,0.36)] py-2 px-3 rounded-lg text-black font-[600] text-[20px]">
							50
						</h4>
					</div>
					<div className="flex items-center gap-4 w-full">
						<p className="py-5 px-3 border border-[rgba(0,0,0,0.2)] rounded-md w-[50%]"></p>
						<p className="py-5 px-3 border border-[rgba(0,0,0,0.2)] rounded-md w-[50%]"></p>
						<h4 className="border  bg-[#D8E0EC] border-[rgba(0,0,0,0.36)] py-2 px-3 rounded-lg text-black font-[600] text-[20px]">
							30
						</h4>
					</div>
					<div className="flex items-center gap-4 w-full">
						<p className="py-5 px-3 border border-[rgba(0,0,0,0.2)] rounded-md w-[50%]"></p>
						<p className="py-5 px-3 border border-[rgba(0,0,0,0.2)] rounded-md w-[50%]"></p>
						<h4 className="border  bg-[#D8E0EC] border-[rgba(0,0,0,0.36)] py-2 px-3 rounded-lg text-black font-[600] text-[20px]">
							20
						</h4>
					</div>
				</div>
			</div>
			<button className="w-full px-3 py-4 bg-[#1D98F0] text-white rounded-lg mt-6">
				View Bow - Tie
			</button>
			<div className="mt-6 flex items-center flex-col lg:flex-row gap-4 justify-between font-[600] gap-y-4">
				<div className="w-full md:w-1/2 lg:w-[26%]">
					<p>Causes</p>
					<div className="bg-[#6095C9] h-[300px] rounded-3xl mt-1"></div>
				</div>
				<div className="w-full md:w-1/2 lg:w-[26%]">
					<p>Uncertainty/Event</p>
					<div className="bg-[#6095C9] h-[150px] rounded-3xl mt-1"></div>
				</div>
				<div className="w-full md:w-1/2 lg:w-[26%]">
					<p>Effects</p>
					<div className="bg-[#6095C9] h-[300px] rounded-3xl mt-1"></div>
				</div>
			</div>
			<div className="flex items-center justify-center gap-3 lg:gap-6 m-2 lg:m-6 md:flex-nowrap flex-wrap">
				<button className="p-4 text-white bg-[#000080] w-full rounded-lg">
					Resubmit
				</button>
				<button className="p-4 text-white bg-[#000080] w-full rounded-lg">
					Download Report
				</button>
			</div>
			<div className="flex items-center gap-2 justify-center">
				<input type="checkbox" className="border border-l-red-500" />
				<p>Send Copy to Email</p>
			</div>
		</>
	);
};

export default Score;
