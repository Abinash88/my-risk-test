import { TruncatedText } from "@/components/shared/ReuseAble";
import { TandOData } from "@/lib/fakedata";

const PublicStanding = () => {
  const getRiskRatingColor = (rating: number) => {
    if (rating >= 90 && rating <= 100) return "bg-red-800";
    if (rating >= 80 && rating <= 90) return "bg-red-600";
    if (rating >= 70 && rating <= 80) return "bg-yellow-800";
    if (rating >= 60 && rating <= 70) return "bg-yellow-500";
    if (rating >= 50 && rating <= 60) return "bg-green-500";
    return "";
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-[#6095C9] text-white text-md">
          <tr>
            <th className="py-4 px-4 border">Rank</th>
            <th className="py-4 px-4 border">Vote</th>
            <th className="py-4 px-4 border bg-[#6095c9] w-full">
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
                  <button className="bg-blue-600 w-20 text-white text-xs py-1 px-2 rounded-md">
                    👍 <br /> Up Vote
                  </button>
                  <button className="bg-red-600 text-white text-xs py-1 px-2 rounded-md">
                    👎 <br /> Down Vote
                  </button>
                </div>
              </td>
              <td className="py-2 px-4 border fixed-width ">
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
  );
};

export default PublicStanding;
