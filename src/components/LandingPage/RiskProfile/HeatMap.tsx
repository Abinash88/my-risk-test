import { Heatmap } from "@mui/x-charts-pro/Heatmap";
import { HeatmapValueType } from "@mui/x-charts-pro/models";

export const data: HeatmapValueType[] = [
  [0, 0, 10],
  [0, 1, 20],
  [0, 2, 40],
  [0, 3, 90],
  [0, 4, 70],
  [1, 0, 30],
  [1, 1, 50],
  [1, 2, 10],
  [1, 3, 70],
  [1, 4, 40],
  [2, 0, 50],
  [2, 1, 20],
  [2, 2, 90],
  [2, 3, 20],
  [2, 4, 70],
  [3, 0, 40],
  [3, 1, 50],
  [3, 2, 20],
  [3, 3, 70],
  [3, 4, 90],
  [3, 0, 40],
  [3, 1, 50],
  [3, 2, 20],
  [3, 3, 70],
  [3, 4, 90],
];

const HeatMapPage = () => {
  return (
    <div className="bg-[#FAFAFA] w-full mx-auto rounded-xl py-5 border">
      <div className="  flex justify-center items-center mx-auto">
        <Heatmap
          xAxis={[{ data: [1, 2, 3, 4] }]}
          yAxis={[{ data: ["A", "B", "C", "D", "E"] }]}
          series={[{ data }]}
          margin={{ top: 5, right: 5, left: 20 }}
          height={300}
          width={300}
        />
      </div>
    </div>
  );
};

export default HeatMapPage;
