import { Link, useLocation } from "react-router-dom";
import {
  ADMIN_DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../../lib/const/sidebarNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const AdminDashboardSidebar = () => {
  return (
    <div className="bg-[#000E56] shadow-md w-[18rem] py-3 px-8 lg:flex flex-col text-white hidden">
      <Link to="/">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[8rem] md:w-[10rem]"
        />
      </Link>
      <div className="py-8 flex flex-1 flex-col gap-3">
        {ADMIN_DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div className="flex items-center gap-2 font-[400] px-4 py-3 hover:bg-[#000080c8] text-white hover:no-underline active:bg-[#000080] rounded-lg cursor-pointer text-[rgba(0,0,0,0.7)]">
          <span className="text-xl">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

function SidebarLink({ item }: any) {
  const { pathname } = useLocation();
  const isActive = pathname === item.path || pathname.startsWith(item.path);
  return (
    <Link
      to={item.path}
      className={`flex items-center gap-2 font-[300] px-4 py-1 hover:bg-[#000080c8] hover:text-white hover:no-underline active:bg-[#000080] rounded-lg  ${
        isActive ? "bg-[#000080] text-white" : "text-white"
      }`}
    >
      <span className="text-lg">{item.icon}</span>
      {item.label}
    </Link>
  );
}
export default AdminDashboardSidebar;
