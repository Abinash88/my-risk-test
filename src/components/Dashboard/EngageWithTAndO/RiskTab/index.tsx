import { useState } from "react";
import Public from "./Public";
import Private from "./Private";
import Select from "antd/es/select";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { UserPlus2 } from "lucide-react";
import Continents from "@react-map/continents";
import SectorSlider from "./SectorSlider";

const RiskTab = () => {
	const [page, setPage] = useState<"public" | "private">("public");
	return (
		<div>
      <SectorSlider/>
      
      <div className="w-full my-5">
        <Continents type="select-multiple" mapColor="#A2E2C6" size={700}/>
        </div>
			<div className="flex gap-5">
				<button
					className={`p-3 rounded-md shadow-md w-[23%] font-[600] ${
						page === "public"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
					onClick={() => setPage("public")}
				>
					Public T & O Standing
				</button>
				<button
					className={`p-3 rounded-md shadow-md w-[23%] font-[600] ${
						page === "private"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
					onClick={() => setPage("private")}
				>
					Private T & O Group
				</button>

            <Select
              defaultValue="Filter By"
              className="h-10 w-32"
              // onChange={}
              options={[
                { value: "Sectors", label: "Sectors" },
                { value: "Risk Status", label: "Risk Status" },
                { value: "Exposure  Date", label: "Exposure  Date" },
                { value: "Country", label: "Country" },
                { value: "Risk Rating", label: "Risk Rating" },
              ]}
            />
			</div>
			<div>
				{page === "public" && <Public />}
				{page === "private" && <Private />}
			</div>
            <div className="flex justify-between items-center mt-5 mb-5">
                <button className="flex flex-col items-center text-[#000080] p-3 font-[600]">
                    <img src="/icons/add_users.png" alt="add" className="w-[80px] h-[61px]"/>
                    {/* <UsergroupAddOutlined className="text-4xl bg-[#D1D1FE] rounded-md p-2" /> */}
                    Invite Participants
                </button>

                <button className="flex flex-col items-center text-[#000080] p-3 font-[600]">
                <img src="/icons/warning_plus.png" alt="add" className="w-[80px] h-[61px]"/>
                Add New Risk
                </button>
                <button className="flex flex-col items-center text-[#000080] p-3 font-[600]">
                <img src="/icons/users.png" alt="add" className="w-[80px] h-[61px]"/>
                Groups
                </button>
                <button className="flex flex-col items-center text-[#000080] p-3 font-[600]">
                <img src="/icons/add_users3.png" alt="add" className="w-[80px] h-[61px]"/>
                Create New Group
                </button>
            </div>
		</div>
	);
};

export default RiskTab;
