import { useState } from "react";
import Score from "./Score";
import Rating from "./Rating";
import HeatMap from "./HeatMap";
import ClipLoader from "react-spinners/ClipLoader";

const GneratedRiskPRofile = () => {
	const [result, setResult] = useState<"score" | "rating" | "heat">("score");
	const [showLoader, setShowLoader] = useState(true);
	setTimeout(() => {
		setShowLoader(false);
	}, 2000);
	return (
		<>
			<div className="w-[100%] mr-auto ml-auto">
				<div className="p-3 bg-[#000080] text-white rounded-lg mb-6">
					<h4 className="font-[600] text-[20px]">Risk Profile</h4>
				</div>
				<div className="bg-white text-black rounded-lg py-4  px-5 flex flex-col gap-3 items-start">
					{!showLoader && (
						<>
							<div className="text-left ">
								<h4 className="p-3 bg-[#1D98F0] text-white rounded-lg w-full font-[600] text-[18px] mb-3">
									Risk Details
								</h4>
								<p>
									Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
									vulputate libero et velit interdum, ac aliquet odio mattis.
									Class aptent taciti sociosqu ad litora torquent per conubia
									nostra, per inceptos himenaeos.
								</p>
							</div>
							<div className="w-full mt-3">
								<div className="flex items-center justify-center gap-3 w-full">
									<button className="p-3 rounded-lg text-white bg-[#1D98F0] w-[50%]">
										Causes
									</button>
									<button className="p-3 rounded-lg text-white bg-[#1D98F0] w-[50%]">
										Effect
									</button>
								</div>
								<div className="flex gap-3 flex-wrap w-full justify-center mt-4">
									<input
										type="text"
										className="w-[45%] outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-lg"
									/>
									<input
										type="text"
										className="w-[45%] outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-lg"
									/>{" "}
									<input
										type="text"
										className="w-[45%] outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-lg"
									/>{" "}
									<input
										type="text"
										className="w-[45%] outline-none border border-[rgba(0,0,0,0.2)] p-3 rounded-lg"
									/>
								</div>
							</div>
							<div className="w-full">
								<div className="flex gap-3 justify-between mb-4">
									<button
										className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
											result === "score"
												? "bg-[#000080] text-white"
												: "bg-white text-[rgba(0,0,0,0.7)]"
										}`}
										onClick={() => setResult("score")}
									>
										Risk Scoring
									</button>
									<button
										className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
											result === "rating"
												? "bg-[#000080] text-white"
												: "bg-white text-[rgba(0,0,0,0.7)]"
										}`}
										onClick={() => setResult("rating")}
									>
										Change Rating Type
									</button>
									<button
										className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
											result === "heat"
												? "bg-[#000080] text-white"
												: "bg-white text-[rgba(0,0,0,0.7)]"
										}`}
										onClick={() => setResult("heat")}
									>
										View Heat Map
									</button>
								</div>
								<div>
									{result === "score" && <Score />}
									{result === "rating" && <Rating />}
									{result === "heat" && <HeatMap />}
								</div>
							</div>
						</>
					)}
					{showLoader && (
						<div className="flex items-center justify-center  h-[50vh] mr-auto ml-auto">
							<ClipLoader
								size={100}
								color="#6666B3"
								cssOverride={{ borderWidth: "5px" }}
							/>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default GneratedRiskPRofile;
