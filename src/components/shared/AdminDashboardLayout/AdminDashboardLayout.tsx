import { Outlet, useLocation } from "react-router-dom";
import AdminDashboardHeader from "./AdminDashboardHeader";
import AdminDashboardSidebar from "./AdminDashboardSidebar";
import { useEffect, useRef, useState } from "react";

const AdminDashboardLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const sidebarRef: any = useRef(null); // Create a reference for the sidebar
  const location = useLocation();

  console.log("location", location);
  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenSidebar(false);
      }
    };

    if (openSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSidebar]);

  return (
    <div>
      {/* <LoggedHeader /> */}
      <div className="flex flex-row h-auto max-h-screen overflow-hidden">
        <div
          className={`bg-[#000E56] shadow-md w-[18rem] py-3 px-8 lg:flex flex-col text-white hidden`}
        >
          <AdminDashboardSidebar setOpenSidebar={setOpenSidebar}/>
        </div>
        {openSidebar && (
          <div
            ref={sidebarRef} // Reference the sidebar
            className={`bg-[#000E56] shadow-md w-[18rem] py-3 px-8 text-white fixed top-0 left-0 h-full z-50 lg:hidden transition-transform transform ${
              openSidebar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <AdminDashboardSidebar setOpenSidebar={setOpenSidebar}/>
          </div>
        )}

        {/* {openSidebar && <AdminDashboardSidebar />} */}
        <div className="flex flex-col w-full">
          <AdminDashboardHeader
            key={location.pathname}
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />

          <div className="flex-1 p-2 lg:px-[1rem] min-h-0 overflow-y-auto bg-[#F3F3F3]">
            {<Outlet />}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminDashboardLayout;
// <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
// 	<LoggedSidebar />
// 	<div className="flex flex-col flex-1">
// 		<LoggedHeader />
// 		<div className="flex-1 p-4 min-h-0 overflow-y-auto">{<Outlet />}</div>
// 	</div>
// </div>;
