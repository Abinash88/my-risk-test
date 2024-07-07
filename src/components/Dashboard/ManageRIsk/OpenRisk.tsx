import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allrisk } from "../../../lib/fakedata";
import { TruncatedText } from "../../shared/ReuseAble";
import { faCircleXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const OpenRisk = () => {
	return (
		<div className="flex flex-col gap-8">
			{allrisk.map((risk, i) => (
				<div key={i + 3} className="flex items-start justify-between gap-3">
					<div className="w-[60%]">
						<TruncatedText text={risk.text} maxLength={50} title={risk.title} />
						<button className="mt-2 text-[rgba(0,0,0,0.4)] font-[600]">
							View All Comments
						</button>
					</div>
					<div className="flex gap-4">
						<div className="text-[rgba(0,0,0,0.64)] bg-white shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer">
							<FontAwesomeIcon icon={faCircleXmark} className="font-light " />
							<p className="text-[11px] font-[600]">Close</p>
						</div>
						<div className="text-white bg-[rgba(160,11,11,0.8)] shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer">
							<FontAwesomeIcon icon={faTrashCan} className="font-light " />
							<p className="text-[11px] font-[600]">Delete</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default OpenRisk;
