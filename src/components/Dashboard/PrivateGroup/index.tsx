import { useState } from "react";
import GroupCreated from "./GroupCreated";
import GroupJoined from "./GroupJoined";
import GroupSettings from "./GroupSettings";

const PrivateGroup = () => {
  const [page, setPage] = useState<"created" | "joined" | "settings">(
    "created"
  );
  return (
    <div>
      <h3 className="font-[500] text-2xl mb-5">Private T & O Group</h3>
      <div className="flex gap-5">
        <button
          className={`p-2 px-6 rounded-md shadow-md text-sm font-[600] ${
            page === "created"
              ? "bg-[#000080] text-white"
              : "bg-white text-[rgba(0,0,0,0.7)]"
          }`}
          onClick={() => setPage("created")}
        >
          Groups Created
        </button>
        <button
          className={`p-2 px-6 rounded-md shadow-md text-sm font-[600] ${
            page === "joined"
              ? "bg-[#000080] text-white"
              : "bg-white text-[rgba(0,0,0,0.7)]"
          }`}
          onClick={() => setPage("joined")}
        >
          Groups Joined
        </button>
      </div>
      <div>
        {page === "created" && <GroupCreated />}
        {page === "joined" && <GroupJoined />}
        {page === "settings" && <GroupSettings />}
      </div>
    </div>
  );
};

export default PrivateGroup;
