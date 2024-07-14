import { useState } from "react";
import View from "./View";
import { BgSection } from "@/components/shared/ReuseAble";
import Generate from "./Generate";

const GeneralRisk = () => {
	const [page, setPage] = useState<"generate" | "view">("generate");
	return (
		<BgSection image="/images/background.png">
			<div className="w-[50%] my-10">
				<h3 className="font-[500] text-[25px] mb-5">Progress bar here</h3>
				<div className="flex gap-3 justify-between">
					<button
						className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
							page === "generate"
								? "bg-[#000080] text-white"
								: "bg-white text-[rgba(0,0,0,0.7)]"
						}`}
						onClick={() => setPage("generate")}
					>
						Generate Risk Profile
					</button>
					<button
						className={`p-3 rounded-md shadow-md w-[50%] font-[600] ${
							page === "view"
								? "bg-[#000080] text-white"
								: "bg-white text-[rgba(0,0,0,0.7)]"
						}`}
						onClick={() => setPage("view")}
					>
						Generate Risk Profile
					</button>
				</div>
				<div className="mt-4">
					<div className="bg-white text-black rounded-lg py-4  px-5 flex flex-col gap-3 items-start">
						{page === "generate" && <Generate />}
						{page === "view" && <View />}
					</div>
				</div>
			</div>
		</BgSection>
	);
};

export default GeneralRisk;
