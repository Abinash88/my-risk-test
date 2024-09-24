import { Link, useLocation } from "react-router-dom";
import {
  ADMIN_DASHBOARD_SIDEBAR_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../../lib/const/sidebarNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AdminDashboardSidebar = ({
  setOpenSidebar,
}: {
  setOpenSidebar: Function;
}) => {
  return (
    <div className="h-screen">
      <div className="flex justify-between">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[8rem] md:w-[10rem]"
          />
        </Link>
        <FontAwesomeIcon
          icon={faClose}
          className="md:hidden text-white cursor-pointer"
          onClick={(e) => setOpenSidebar(false)}
        />
      </div>
      <div className="h-full py-8 flex flex-1 flex-col gap-3 overflow-y-auto overflow-hidden">
        {ADMIN_DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div className="mb-4 flex items-center gap-2 font-[400] px-4 py-3 hover:bg-[#000080c8] text-white hover:no-underline active:bg-[#000080] rounded-lg cursor-pointer text-[rgba(0,0,0,0.7)]">
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
  const [isOpen, setIsOpen] = useState(false); // State to track if child items are open

  const hasChildren = item.child && item.child.length > 0;

  const handleToggle = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div
        className={`flex items-center justify-between gap-2 font-[300] px-4 py-1 hover:bg-[#000080c8] hover:text-white hover:no-underline active:bg-[#000080] rounded-lg cursor-pointer ${
          isActive ? "bg-[#000080] text-white" : "text-white"
        }`}
        onClick={handleToggle} // Toggle child dropdown on click
      >
        {hasChildren ? (
          <div className="flex items-center gap-2">
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </div>
        ) : (
          <Link
            key={item.key}
            to={item.path}
            className={`flex items-center gap-2 font-[300]  py-1 hover:bg-[#000080c8] hover:text-white hover:no-underline active:bg-[#000080] rounded-lg ${
              pathname === item.path ? "bg-[#000080] text-white" : "text-white"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        )}
        {hasChildren && (
          <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
        )}
      </div>

      {/* Render child links if isOpen */}
      {hasChildren && isOpen && (
        <div className="pl-8">
          {item.child.map((childItem: any) => (
            <Link
              key={childItem.key}
              to={childItem.path}
              className={`flex items-center gap-2 font-[300] px-4 py-1 hover:bg-[#000080c8] hover:text-white hover:no-underline active:bg-[#000080] rounded-lg ${
                pathname === childItem.path
                  ? "bg-[#000080] text-white"
                  : "text-white"
              }`}
            >
              {/* <span className="text-lg">{childItem.icon}</span> */}
              {childItem.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default AdminDashboardSidebar;
