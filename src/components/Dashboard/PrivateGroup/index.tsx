import { useState } from "react";
import GroupCreated from "./GroupCreated";
import GroupJoined from "./GroupJoined";

const PrivateGroup = () => {
	const [page, setPage] = useState<"created" | "joined">("created");
	return (
		<div>
			<h3 className="font-[500] text-[25px] mb-5">Private T & O Group</h3>
			<div className="flex gap-5">
				<button
					className={`p-3 rounded-md shadow-md w-[23%] font-[600] ${
						page === "created"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
					onClick={() => setPage("created")}
				>
					Group Created
				</button>
				<button
					className={`p-3 rounded-md shadow-md w-[23%] font-[600] ${
						page === "joined"
							? "bg-[#000080] text-white"
							: "bg-white text-[rgba(0,0,0,0.7)]"
					}`}
					onClick={() => setPage("joined")}
				>
					Group Joined
				</button>
			</div>
			<div>
				{page === "created" && <GroupCreated />}
				{page === "joined" && <GroupJoined />}
			</div>
		</div>
	);
};

export default PrivateGroup;
