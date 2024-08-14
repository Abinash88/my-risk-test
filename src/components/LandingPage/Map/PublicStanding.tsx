import { TruncatedText } from "@/components/shared/ReuseAble";
import { TandOData } from "@/lib/fakedata";

const PublicStanding = () => {
	const getRiskRatingColor = (rating: number) => {
		if (rating >= 50 && rating <= 100) return "bg-green-500";
		if (rating >= 30 && rating <= 40) return "bg-yellow-500";
		if (rating >= 10 && rating <= 20) return "bg-blue-500";
		return "";
	};

	return (
		<div>
			<div className="overflow-x-auto mt-6">
				<table className="min-w-full bg-white">
					<thead className="bg-[#6095C9] text-white text-[19px]">
						<tr>
							<th className="py-4 px-4 border">Rank</th>
							<th className="py-4 px-4 border">Vote</th>
							<th className="py-4 px-4 border bg-red-600 w-full">
								Risk Title & Description
							</th>
							<th className="py-4 px-4 border">Risk Rating</th>
							<th className="py-4 px-4 border">Up Votes</th>
							<th className="py-4 px-4 border">Down Votes</th>
						</tr>
					</thead>
					<tbody>
						{TandOData.map((risk, index) => (
							<tr key={index}>
								<td className="py-2 px-4 border bg-[#D8E0EC] text-center font-[600]">
									{risk.rank}
								</td>
								<td className="py-2 px-4 border bg-[#D8E0EC] text-center">
									<div className="flex flex-col items-center space-y-2">
										<button className="bg-blue-600 text-white py-1 px-4 rounded-md">
											👍 Up Vote
										</button>
										<button className="bg-red-600 text-white py-1 px-4 rounded-md">
											👎 Down Vote
										</button>
									</div>
								</td>
								<td className="py-2 px-4 border fixed-width">
									<TruncatedText
										text={risk.text}
										maxLength={50}
										title={risk.title}
									/>
									<button className="mt-2 text-[rgba(34,33,33,0.4)] font-[600]">
										View All Comments
									</button>
								</td>
								<td
									className={`py-2 px-4 border text-center ${getRiskRatingColor(
										risk.riskRating
									)}`}
								>
									{risk.riskRating}%
								</td>
								<td className="py-2 px-4 border bg-[#D8E0EC] text-center font-[600]">
									{risk.upVotes}
								</td>
								<td className="py-2 px-4 border bg-[#D8E0EC] text-center font-[600]">
									{risk.downVotes}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="bg-[#B9DBFD] p-4 md:p-10 mt-5 rounded-lgc">
				<button className="bg-[#1D98F0] p-3 rounded-lg text-white flex justify-end ml-auto mb-3">
					Add New Risk
				</button>
				<div className="flex items-center gap-4 flex-wrap">
					<input
						type="search"
						placeholder="Search sector"
						className="w-full lg:w-[30%] bg-white rounded-full px-5 py-3 outline-none"
					/>
					<div className="w-auto  bg-white font-[500] text-[18px] p-3 rounded-lg text-[rgba(0,0,0,0.6)]">
						Sector 1
					</div>
					<div className="w-auto  bg-white font-[500] text-[18px] p-3 rounded-lg text-[rgba(0,0,0,0.6)]">
						Sector 2
					</div>
					<div className="w-auto  bg-white font-[500] text-[18px] p-3 rounded-lg text-[rgba(0,0,0,0.6)]">
						Sector 3
					</div>
					<div className="w-auto  bg-white font-[500] text-[18px] p-3 rounded-lg text-[rgba(0,0,0,0.6)]">
						Sector 4
					</div>
					<div className="w-auto  bg-white font-[500] text-[18px] p-3 rounded-lg text-[rgba(0,0,0,0.6)]">
						Sector 5
					</div>
				</div>
			</div>
		</div>
	);
};

export default PublicStanding;
