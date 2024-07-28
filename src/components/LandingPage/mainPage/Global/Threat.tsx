import { useState } from "react";
import Section1 from "../Sections/Section1";

const Threat = () => {
	const [section, setSection] = useState("1");

	const sections = ["1", "2", "3", "4", "5", "6"];

	return (
		<div>
			<div className="overflow-x-auto">
				<div className="flex gap-3 mb-6 min-w-max">
					{sections.map((sec) => (
						<button
							key={sec}
							onClick={() => setSection(sec)}
							className={`py-4 rounded-md shadow-md md:w-[23%] w-[150px] font-[600] ${
								section === sec
									? "bg-[#000080] text-white"
									: "bg-white text-[rgba(0,0,0,0.7)]"
							}`}
						>
							Section {sec}
						</button>
					))}
				</div>
			</div>
			<div>
				{section === "1" && <Section1 />}
				{section === "2" && (
					<div className="font-[600] text-[30px]">Section 2</div>
				)}
				{section === "3" && (
					<div className="font-[600] text-[30px]">Section 3</div>
				)}
				{section === "4" && (
					<div className="font-[600] text-[30px]">Section 4</div>
				)}
				{section === "5" && (
					<div className="font-[600] text-[30px]">Section 5</div>
				)}
				{section === "6" && (
					<div className="font-[600] text-[30px]">Section 6</div>
				)}
			</div>
		</div>
	);
};

export default Threat;
