import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../../../lib/const/sidebarNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Tour, TourProps } from "antd";
import React from "react";

const LoggedSidebar = () => {
  const refs = useRef(DASHBOARD_SIDEBAR_LINKS.map(() => React.createRef()));
  const [open, setOpen] = useState<boolean>(true);

  const steps: any = DASHBOARD_SIDEBAR_LINKS.map((item, index) => ({
    title: item.label,
    placement: index % 2 === 0 ? 'bottom' : 'right',
    description: item.description,
    target: () => refs.current[index].current,
  }));

  return (
    <div className="nobar w-[20%] absolute overflow-scroll h-[100vh] bg-white shadow-md py-3 px-2 lg:flex flex-col text-black hidden">
      <div className="flex flex-col scale-90 gap-1 justify-center items-center text-center ">
        <img
          src="/images/profile-image.jpeg"
          alt="profile-image"
          className="rounded-full spect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
        />
        <h4 className="mt-2 text-md">UtherMatin</h4>
      </div>
      <div className="mt-[-20px] flex scale-90 flex-1 flex-col gap-2">
        {DASHBOARD_SIDEBAR_LINKS.map((item, index) => (
          <SidebarLink key={item.key} item={item} index={index} ref={refs.current[index]} />
        ))}
        <div className="flex scale-90 items-center gap-2 font-[400]  px-4 py-3 hover:bg-[#000080c8] hover:text-white hover:no-underline active:bg-[#000080] rounded-lg cursor-pointer text-[rgba(0,0,0,0.7)]">
          <span className="text-xl">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
          </span>
          Logout
        </div>
        <div className="h-16" />

      </div>

     <Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={steps}
        type="primary"
        mask={{
          style: {
            boxShadow: 'inset 0 0 15px #333',
          },
          // color: 'rgba(102, 102, 179, 1)',
        }}
        arrow={{
          pointAtCenter: true,
        }}
        
      />
    </div>
  );
};

const SidebarLink = React.forwardRef(({ item, index }: any, ref: any) => {
  const { pathname } = useLocation();
  const isActive = pathname === item.path || pathname.startsWith(item.path);

  return (
    <Link
      key={index}
      to={item.path}
      ref={ref}
      className={`scale-90 flex items-center gap-2 font-[400] px-4 py-3 hover:bg-[#000080c8] hover:text-white hover:no-underline active:bg-[#000080] rounded-lg  ${
        isActive ? "bg-[#000080] text-white" : "text-[rgba(0,0,0,0.7)]"
      }`}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
});

export default LoggedSidebar;
