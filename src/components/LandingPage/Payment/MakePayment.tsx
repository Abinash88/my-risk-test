import { useState } from "react";
import { BgSection } from "../../shared/ReuseAble";

const MakePayment = () => {
	const [isChecked, setIsChecked] = useState(true);
	return (
		<>
			<BgSection image="images/background.png">
				<div className="bg-white rounded-lg w-[35%] mr-auto ml-auto py-6">
					<h4 className="text-[#000080] border-b border-[#777] text-left pb-3 pl-5 font-[600]">
						Make Payment
					</h4>
					<div>
						<div className="flex items-center gap-3">
							<input
								type="radio"
								className="border-3 border-red-600"
								id="pay"
							/>
							<label htmlFor="pay" className="block text-black">
								Pay with Credit or Debit Card
							</label>
						</div>
						<div className="flex gap-2">
							<input
								type="radio"
								className="p-8 w-6 h-6  specifyColor"
								id="receive"
								checked={isChecked}
								onClick={() => setIsChecked(!isChecked)}
								readOnly
							/>
							<label htmlFor="receive" className="text-[18px]">
								Receive Promotional Emails, Newsletter updates, Special Offers
							</label>
						</div>
					</div>
				</div>
			</BgSection>
		</>
	);
};

export default MakePayment;
