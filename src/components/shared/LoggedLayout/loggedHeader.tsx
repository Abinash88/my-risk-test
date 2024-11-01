import { Link, useLocation } from "react-router-dom";
import MobileNav from "../HomeLayout/mobile-nav";
import LoggedMenu from "./Menu";
import LoggedHeadSide from "./logged-head-right";
import HeadSearchFilter from "./head-search-filter";

const LoggedHeader = () => {
  const location = useLocation();
  const isShow =
    location?.pathname.endsWith("engage-t-o-standing") ||
    location?.pathname.endsWith("view-generated-risks");
  return (
    <div className=" lg:overflow-hidden bg-white  shadow-sm px-4 md:px-[2rem] lg:h-20 lg:px-[2rem] py-[1rem] flex items-center justify-between gap-2 w-full relative">
      <div className="flex gap-4 md:gap-6 items-center">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className=" w-[8rem] md:block hidden md:w-[11rem]"
          />
          <img
            src="/images/logo-png-icon.png"
            alt="logo"
            className=" w-[3rem] md:hidden block md:w-[3rem]"
          />
        </Link>
      </div>
      {!isShow && (
        <div className="fixed  md:relative hidden md:flex items-center justify-center">
          <LoggedMenu />
        </div>
      )}
      {isShow && (
        <div className="md:scale-100  scale-90">
          <HeadSearchFilter />
        </div>
      )}
      <div className="md:block hidden ">
        <LoggedHeadSide />
      </div>
      <MobileNav colorChange />
    </div>
  );
};

export default LoggedHeader;
