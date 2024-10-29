import Background from "@/assets/images/background.png";
import SectorSlider from "../../engage-with-t-and-o/sector-slider";
import RisksTable from "./risks-table";

const ViewGeneratedRisk = () => {
  return (
    <div className="">
      <SectorSlider />
      <div className="w-full min-h-[100vh] py-10">
        <div
          className="fixed -z-10 top-0 w-full ease-in-out duration-500 h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${Background})`,
          }}
        ></div>
        <div className=" w-[95%] md:w-[70%] max-w-[1500px] mx-auto   ">
          <RisksTable />
        </div>
      </div>
    </div>
  );
};

export default ViewGeneratedRisk;
