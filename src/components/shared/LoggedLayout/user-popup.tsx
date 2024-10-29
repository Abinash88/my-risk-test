import { LogOut } from "lucide-react";
import User from "./user";

const UserPopop = () => {
  return (
    <div className="w-full flex flex-col border rounded-xl gap-3 justify-start items-start pl-5 min-h-[200px] py-4 ">
      <div className="scale-90">
        <User email={"uthermartin@gmail.com"} />
      </div>
      <button className="text-[#6666B3] pl-3 hover:bg-gray-50 w-full py-2 text-xs md:text-sm gap-2 font-semibold flex items-center">
        <LogOut className="" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserPopop;
