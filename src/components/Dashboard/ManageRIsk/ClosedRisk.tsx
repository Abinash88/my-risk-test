import { allrisk } from "../../../lib/fakedata";
import { TruncatedText } from "../../shared/ReuseAble";

const ClosedRisk = () => {
	return (
		<div className="flex flex-col gap-5">
			{allrisk.map((risk, i) => (
				<div key={i + 3}>
					<TruncatedText text={risk.text} maxLength={50} title={risk.title} />
					<button className="mt-2 text-[rgba(0,0,0,0.4)] font-[600]">
						View All Comments
					</button>
				</div>
			))}
		</div>
	);
};

export default ClosedRisk;
