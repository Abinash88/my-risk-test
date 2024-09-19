import GeneratedRisk from "./GeneratedRisk";

const AiRisk = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="font-[600] text-[25px] mb-5">AI Risks</h3>
        <select
          name="days"
          id="days"
          className="p-2 px-6 text-sm border-2 border-[#000080] rounded-lg bg-transparent outline-none"
        >
          <option value="last-days">Last 7 Days</option>
          <option value="last-week">Last Week</option>
          <option value="last-month">Last Month</option>
        </select>
      </div>
      <GeneratedRisk />
    </div>
  );
};

export default AiRisk;
