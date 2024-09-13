import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../../lib/const/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import AdminDashboardGridSidebar from "./AdminDashboardGridSidebar";
import AdminDashboardSidebar from "./AdminDashboardSidebar";
import { BlockList } from "net";

const AdminDashboardHeader = ({
  setOpenSidebar,
  openSidebar,
}: {
  setOpenSidebar: Function;
  openSidebar: boolean;
}) => {
  const [nav, setNav] = useState(false);
  const [openGrid, setOpenGrid] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="bg-white shadow-lg px-[2rem] lg:px-[2rem] py-[1rem] flex items-center gap-4 w-full relative">
      <button
        onClick={() => setOpenSidebar(!openSidebar)} // Toggle sidebar open/close
        className="block lg:hidden text-xl"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <Link className="hidden lg:block" to="/admin/dashboard">
        {" "}
        {/* Hidden on small screens */}
        Dashboard
      </Link>
      <div className="flex items-center gap-4 ml-auto">
        <p>Good morning, Admin</p>

        <div className="relative">
          <FontAwesomeIcon
            icon={faBell}
            className="text-[18px] md:text-[25px] animate-wiggle"
          />
          <div className="px-1 bg-[#AB2626] rounded-full text-center text-white text-[10px] absolute -top-2 -end-1">
            3
            <div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-[#AB2626] w-full h-full"></div>
          </div>
        </div>
      </div>
      {openGrid && <AdminDashboardGridSidebar />}
    </div>
  );
};

export default AdminDashboardHeader;
