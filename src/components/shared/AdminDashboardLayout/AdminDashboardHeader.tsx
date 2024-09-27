import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../../../lib/const/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import AdminDashboardGridSidebar from "./AdminDashboardGridSidebar";
import AdminDashboardSidebar from "./AdminDashboardSidebar";
import { BlockList } from "net";
import { Badge, Button, Divider, Popover } from "antd";
import { notifications } from "@/lib/fakedata";
import NotificationItem from "../ReuseAble/NotificationItem";

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
  
  const location = useLocation(); 

  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <div className="bg-white shadow-lg px-[2rem] lg:px-[2rem] flex items-center gap-4 w-full relative h-[60px]">
      <button
        onClick={() => setOpenSidebar(!openSidebar)} // Toggle sidebar open/close
        className="block lg:hidden text-xl"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className="hidden lg:flex items-center space-x-2 text-[#1E3A89]">
        {location.pathname.split('/').filter(Boolean).map((path, index, array) => {
          const url = `/${array.slice(0, index + 1).join('/')}`;
          const isLast = index === array.length - 1;
          const isFirst = index === 0;
          return (
            <React.Fragment key={path}>
              {index > 1 && <span>/</span>}
              
                {!isFirst && <Link to={url} className="capitalize hover:underline">
                  {path.split('-').join(' ')}
                </Link>}
              
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <p>Good morning, Admin</p>

        <div className="relative">
          <Popover
            open={open}
            onOpenChange={handleOpenChange}
            placement="bottomRight"
            title={<p className="text-xl">Notifications</p>}
            content={
              <div className="flex flex-col w-[300px] md:w-[400px] h-[calc(100vh-150px)]">
                <div className="flex flex-col h-full overflow-y-auto">
                {notifications.map((item)=>(
                    <NotificationItem {...item}/>
                ))}
                </div>
                <button className="bg-[#000080] text-white rounded-md py-1 px-3 ml-auto"
                  onClick={() => {
                    hide()
                  }}
                  >Clear Notifications</button>
              </div>
            }
            trigger="click"
          >
            <FontAwesomeIcon
              icon={faBell}
              className="text-[18px] md:text-[25px] animate-wiggle"
            />
            <div className="px-1 bg-[#AB2626] rounded-full text-center text-white text-[10px] absolute -top-2 -end-1">
              3
              <div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-[#AB2626] w-full h-full"></div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHeader;
