import { Link, useLocation } from "react-router-dom";
import MobileNav from "../HomeLayout/mobile-nav";
import LoggedMenu from "./Menu";
import LoggedHeadSide from "./logged-head-right";
import HeadSearchFilter from "./head-search-filter";

const LoggedHeader = () => {
  const location = useLocation();
  return (
    <div className=" lg:overflow-hidden bg-white shadow-sm px-[2rem] lg:h-20 lg:px-[2rem] py-[1rem] flex items-center justify-between gap-2 w-full relative">
      <div className="flex gap-6 items-center">
        <MobileNav colorChange />
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className=" w-[9rem] md:w-[11rem]  "
          />
        </Link>
      </div>
      {!location?.pathname.endsWith("map") && (
        <div className="  fixed md:relative  hidden  md:flex items-center justify-center">
          <LoggedMenu />
        </div>
      )}
      {location?.pathname.endsWith("map") && <HeadSearchFilter />}
      <LoggedHeadSide />
    </div>
  );
};

export default LoggedHeader;
