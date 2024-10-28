import HeatMap from "@/components/LandingPage/RiskProfile/HeatMap";
import ReportHeader, {
  Disclamer,
  ReportBody,
  ReportTitle,
} from "./report-component";

const DownloadReport = () => {
  return (
    <div className="bg-[#F3F3F3] px-10 py-24">
      <div className=" bg-white max-w-[1500px]  w-full mx-auto p-7 rounded-lg">
        <ReportHeader />
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
        <Disclamer />
      </div>
    </div>
  );
};

export default DownloadReport;
