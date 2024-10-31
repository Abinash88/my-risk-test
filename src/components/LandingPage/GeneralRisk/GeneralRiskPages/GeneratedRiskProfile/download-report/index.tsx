import HeatMap from "@/components/LandingPage/RiskProfile/HeatMap";
import ReportHeader, {
  Disclamer,
  ReportBody,
  ReportTitle,
} from "./report-component";

const DownloadReport = () => {
  return (
    <div className="max-w-[1500px] w-full px-5 py-24">
      <div className=" bg-white   w-full mx-auto p-7 rounded-lg">
        <div className="h-6" />
        <ReportBody />
        <div className="h-6" />
        <ReportTitle title="Risk Heat Map" />
        <div className="h-6" />
        <div className="h-6" />
        <ReportTitle title="Risk Heat Map" />
        <div className="h-6" />
        <HeatMap />
        <div className="h-6" />
      </div>
    </div>
  );
};

export default DownloadReport;

export const HeaderFooter = () => {
  return (
    <div className="min-h-[1100px] p-7 flex flex-col justify-between  min-w-[764px]">
      <ReportHeader />
      <Disclamer />
    </div>
  );
};
