import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Failed = ({ onNext }: { onNext: () => void }) => {
	return (
		<div>
			<FontAwesomeIcon
				icon={faCircleXmark}
				className="text-[180px] text-[#6666B3]"
			/>
			<p className="text-[rgba(0,0,0,0.7)] font-[600] mt-6 text-[18px]">
				Your Registration Request has been{" "}
				<span className="text-[#E42828]">Rejected</span>
			</p>
			<button
				className="bg-[#000080] text-white p-3 rounded-lg w-full mt-6"
				onClick={onNext}
			>
				Continue
			</button>
			<span className="block text-[rgba(102,102,179,1)] text-[12px] mt-5">
				{" "}
				Terms and condition, privacy policy, cookie policy
			</span>
		</div>
	);
};

export default Failed;
