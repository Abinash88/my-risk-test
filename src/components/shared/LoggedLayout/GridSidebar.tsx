import { DASHBOARD_SIDEBAR_LINKS } from "@/lib/const/sidebarNavigation";
import { Link } from "react-router-dom";

const GridSidebar = () => {
  return (
    <>
      <div className="bg-[#fff]  p-4 md:p-5 rounded-xl  gap-4 w-full grid grid-cols-3 justify-between max-h-[90vh] overflow-y-auto shadow-md border border-[rgba(51,51,51,0.1)]">
        {DASHBOARD_SIDEBAR_LINKS.map((item, i) => (
          <Link
            to={item.path}
            key={i + 1}
            className="bg-white  px-1 py-3 rounded-xl shadow-lg flex flex-col items-center justify-center text-center text-xs md:text-sm text-[#6666B3]"
          >
            <div className="text-sm md:text-base">{item.icon}</div>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default GridSidebar;
