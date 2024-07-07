import { useState } from "react";
import AllRisk from "./AllRisk";
import OpenRisk from "./OpenRisk";
import ClosedRisk from "./ClosedRisk";
import DeletedRisk from "./DeletedRisk";

const ManageRisk = () => {
	const [page, setPage] = useState<"all" | "open" | "close" | "deleted">("all");
	return (
		<div>
			<h3 className="font-[500] text-[25px] mb-5">Manage Risk</h3>
			<div className="flex gap-3 justify-between">
				<button
					className={`p-3 rounded-md shadow-md w-[23%] font-[600] ${
						page === "all"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
					onClick={() => setPage("all")}
				>
					All Risks
				</button>
				<button
					className={`p-3 rounded-md shadow-md w-[23%] font-[600] ${
						page === "open"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
					onClick={() => setPage("open")}
				>
					Open Risk
				</button>
				<button
					className={`p-3 rounded-md shadow-md w-[23%] font-[600] ${
						page === "close"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
					onClick={() => setPage("close")}
				>
					Closed Risk
				</button>
				<button
					className={`p-3 rounded-md shadow-md w-[23%] font-[600] ${
						page === "deleted"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
					onClick={() => setPage("deleted")}
				>
					Deleted Risk
				</button>
			</div>
			<div className="mt-5 bg-white rounded-md px-9 py-9 h-[90vh] overflow-y-auto scrollBar">
				{page === "all" && <AllRisk />}
				{page === "open" && <OpenRisk />}
				{page === "close" && <ClosedRisk />}
				{page === "deleted" && <DeletedRisk />}
			</div>
		</div>
	);
};

export default ManageRisk;
