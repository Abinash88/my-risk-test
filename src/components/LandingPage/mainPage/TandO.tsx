import { useState } from "react";
import Container from "../../shared/HomeLayout/container";

const TandO = () => {
	const [page, setPage] = useState<"threat" | "opport">("threat");
	return (
		<div className="my-[8rem]">
			<Container>
				<div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
					<h2 className=" text-[30px] lg:text-[55px] font-[700]">
						Top 15 T & O
					</h2>
					<select
						name="top"
						id="top"
						className="py-3 px-5  rounded-lg bg-white border-[1px] outline-none border-[black]"
					>
						<option value="Regional">Regional</option>
						<option value="Global">Global</option>
						<option value="Industry">Industries</option>
					</select>
				</div>
				<div className="flex items-center justify-between gap-3 mb-6">
					<button
						onClick={() => setPage("threat")}
						className="w-[48%] bg-[#000080] text-white py-[18px] md:py-[21px] px-3  rounded-[16px] text-[18px] md:text-[23px]"
					>
						Threat
					</button>
					<button
						onClick={() => setPage("opport")}
						className=" w-[48%] bg-[#1D98F0] text-white py-[18px] md:py-[21px] px-3 rounded-[16px] text-[18px] md:text-[23px]"
					>
						Opportunity
					</button>
				</div>
				<div>
					{page === "threat" && (
						<div className="font-[600] text-[30px]">Threat Page</div>
					)}
					{page === "opport" && (
						<div className="font-[600] text-[30px]">Opportunity Page</div>
					)}
				</div>
			</Container>
		</div>
	);
};

export default TandO;
