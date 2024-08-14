import { useState } from "react";
import { TruncatedText } from "@/components/shared/ReuseAble";
import { TandOData } from "@/lib/fakedata";

const PrivateStanding = () => {
	// Initialize state to track the image index for each participant
	const [imageIndices, setImageIndices] = useState<number[]>(
		new Array(TandOData.length).fill(1) // Default to the first image for each participant
	);

	const getRiskRatingColor = (rating: number) => {
		if (rating >= 50 && rating <= 100) return "bg-green-500";
		if (rating >= 30 && rating <= 40) return "bg-yellow-500";
		if (rating >= 10 && rating <= 20) return "bg-blue-500";
		return "";
	};

	// Function to handle clicking the up arrow
	const handleUpClick = (index: number) => {
		setImageIndices((prevIndices) => {
			const newIndices = [...prevIndices];
			newIndices[index] = newIndices[index] === 70 ? 1 : newIndices[index] + 1; // Cycle to the next image
			return newIndices;
		});
	};

	// Function to handle clicking the down arrow
	const handleDownClick = (index: number) => {
		setImageIndices((prevIndices) => {
			const newIndices = [...prevIndices];
			newIndices[index] = newIndices[index] === 1 ? 70 : newIndices[index] - 1; // Cycle to the previous image
			return newIndices;
		});
	};

	return (
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
						<th className="py-4 px-4 border">Participant</th> {/* New Column */}
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
									<button className="bg-blue-600 text-white py-1 px-2 rounded-md">
										👍 Up Vote
									</button>
									<button className="bg-red-600 text-white py-1 px-2 rounded-md">
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
							<td className="py-2 px-4 border bg-[#D8E0EC] text-center">
								<div className="flex  items-center">
									<img
										src={`https://i.pravatar.cc/150?img=${imageIndices[index]}`}
										alt="Participant"
										className="w-8 h-8 rounded-full"
									/>
									<div>
										<button
											className="text-gray-600"
											onClick={() => handleUpClick(index)}
										>
											↑
										</button>
										<button
											className="text-gray-600"
											onClick={() => handleDownClick(index)}
										>
											↓
										</button>
									</div>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PrivateStanding;
