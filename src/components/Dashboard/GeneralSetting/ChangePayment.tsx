import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChangePayment = () => {
	return (
		<>
			<h4 className="font-[600] text-[22px]">Change Payment</h4>
			<div className="flex flex-col gap-2 items-center justify-center mt-8 text-center">
				<h4 className="font-[600] text-[24px]">Manage Payment Method</h4>
				<p className="font-[400] text-[18px]">
					Control how to pay for your subscription
				</p>
			</div>
			<div className="border border-[rgba(0,0,0,0.51)] p-4 flex items-center justify-between gap-3 w-full md:w-[90%] mr-auto ml-auto mt-6">
				<div className="flex items-center gap-3 flex-wrap">
					<img src="/images/master-card.png" alt="master-card" />
					<h4 className="font-[600] text-[20px]">
						Master Card{" "}
						<span className="font-[400] text-[18px] ml-3">xxx7389</span>
					</h4>
				</div>
				<div className="text-white bg-[rgba(160,11,11,0.8)] shadow-custom-all-sides py-2 px-3 flex flex-col gap-1 items-center justify-center rounded-md cursor-pointer">
					<FontAwesomeIcon icon={faTrashCan} className="font-light " />
					<p className="text-[11px] font-[600]">Delete</p>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<button className="bg-[#6666B3] text-white py-3 px-4 text-[19px]  rounded-lg mt-6 text-center">
					+Add Payment Method
				</button>
			</div>
		</>
	);
};

export default ChangePayment;
