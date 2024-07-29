import { referList } from "../../../lib/fakedata";

const Referral = () => {
	return (
		<div>
			<div className="flex items-center justify-between flex-wrap gap-2">
				<h4 className="font-[600] text-black text-[20px]">Referral Page</h4>
				<button className="text-white p-3 bg-[#6666B3] rounded-lg">
					Generate Referral Code
				</button>
			</div>
			<div className=" flex flex-col gap-7 mt-5 bg-white rounded-md px-4 md:px-9 py-9 h-auto overflow-y-auto scrollBar">
				<div>
					<h3 className="font-[600] text-[20px] text-black mb-4">
						Referral Code
					</h3>
					<p className="font-[600] text-[29px] text-black">3DA3A45</p>
				</div>

				<div className="">
					<h3 className="font-[600] text-[20px] text-black mb-4">
						Referral List
					</h3>
					<div className="flex flex-col gap-5">
						<div className="flex  items-start gap-3 mt-5">
							<h3 className="font-[600]  text-black w-[50%]">Referred Name</h3>
							<h3 className="font-[600]  text-black w-[50%]">Referred Date</h3>
						</div>

						{referList.map((refer, i) => (
							<div className="flex item-start gap-3" key={i}>
								<p className="w-[50%]">{refer.name}</p>
								<p className="w-[50%]">{refer.date}</p>
							</div>
						))}
					</div>
				</div>
				<div className="">
					<div className="flex flex-col gap-5">
						<div className="flex  items-start gap-3 mt-5">
							<h3 className="font-[600]  text-black w-[50%]">
								Pending Referrals
							</h3>
							<h3 className="font-[600]  text-black w-[50%]">
								Pending Referrals
							</h3>
						</div>

						{referList.map((refer, i) => (
							<div className="flex item-start gap-3" key={i}>
								<p className="w-[50%]">{refer.name}</p>
								<div className="w-[50%] flex items-center gap-4 md:gap-8 flex-wrap">
									<p className="">{refer.date}</p>
									<button className="text-white bg-[#AB2626] p-2 font-[400] text-[14px] rounded-lg">
										Cancel Invite
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="flex items-center">
					<button className="text-white p-3 bg-[#6666B3] rounded-lg">
						Add New Referrals
					</button>
				</div>
			</div>
		</div>
	);
};

export default Referral;
