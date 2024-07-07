import { allrisk } from "../../../lib/fakedata";
import { TruncatedText } from "../../shared/ReuseAble";

const GeneratedRisk = () => {
	return (
		<div className="mt-5 bg-white rounded-md px-9 py-9 h-[90vh] overflow-y-auto scrollBar">
			<div className="flex flex-col gap-8">
				<h3 className="font-[600] text-[25px]">Generated Risks</h3>
				{allrisk.map((risk, i) => (
					<div key={i + 3} className="flex items-start justify-between gap-3">
						<div className="w-[60%]">
							<TruncatedText
								text={risk.text}
								maxLength={50}
								title={risk.title}
							/>
						</div>
						<div className="flex gap-4 text-white font-[500] text-[13px]">
							<button className="px-6 py-3 bg-[#000080]">Download</button>
							<button className="px-6 py-3 bg-[#6666B3]">Upload T&O</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GeneratedRisk;
