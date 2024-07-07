import { Link } from "react-router-dom";
import { paymentActivities } from "../../../lib/fakedata";

const CurrentPlan = () => {
	return (
		<div>
			<h3 className="font-[600] text-[25px] mb-5">Subscription</h3>
			<div className="mt-5 bg-white rounded-md px-9 py-9 h-[90vh] overflow-y-auto scrollBar">
				<h4 className="font-[600] text-[25px] mb-5">Current Subscription</h4>
				<div className="flex flex-col gap-6 mt-8 w-[60%]">
					<div className="flex items-center gap-2 justify-between">
						<h5 className="font-[600] text-[18px]">Standard Premium Package</h5>
						<Link
							to={"/dashboard/subscription/change-plan"}
							className="text-[#1D98F0] text-[15px] font-[500]"
						>
							Change Plan
						</Link>
					</div>
					<div className="flex items-center gap-2 justify-between">
						<h5 className="font-[600] text-[18px]">Start Date</h5>
						<p className=" text-black text-[18px]">2nd, March, 2022</p>
					</div>
					<div className="flex items-center gap-2 justify-between">
						<h5 className="font-[600] text-[18px]">Next Payment Date</h5>
						<p className=" text-black text-[18px]">2nd, March, 2023</p>
					</div>
				</div>
				<div className="mt-[60px]">
					<h3 className="font-[600] text-[20px] mb-5">Payment Activities</h3>
					<div className="overflow-x-auto w-full rounded-lg">
						<table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-x-auto">
							<thead className="bg-gray-200 text-gray-700">
								<tr>
									<th className="px-6 py-3 text-left text-[16px] font-[600] text-black uppercase min-w-[100px] border-r border-[rgba(0,0,0,0.3)]">
										Date
									</th>
									<th className="px-6 py-3 text-left text-[16px] uppercase min-w-[300px] max-w-[600px] border-r border-[rgba(0,0,0,0.3)]  font-[600] text-black">
										Activity
									</th>
									<th className="px-6 py-3 text-left text-[16px]  font-[600] text-black uppercase min-w-[100px]">
										Last 4 Digit
									</th>
								</tr>
							</thead>
							<tbody>
								{paymentActivities.map((activity, index) => (
									<tr
										key={index}
										className="border-t border-gray-200 hover:bg-gray-100"
									>
										<td className="px-6 py-4 text-[14px] border-r border-[rgba(0,0,0,0.3)]">
											{activity.date}
										</td>
										<td className="px-6 py-4 text-[14px] border-r border-[rgba(0,0,0,0.3)]">
											{activity.activity}
										</td>
										<td className="px-6 py-4 text-[14px]">{activity.digit}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentPlan;
