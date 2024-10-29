import { Link } from "react-router-dom";
import MobileNav from "../HomeLayout/mobile-nav";
import LoggedMenu from "./Menu";
import LoggedHeadSide from "./logged-head-right";

const LoggedHeader = () => {
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
      <div className="  fixed md:relative hidden md:flex items-center justify-center">
        <LoggedMenu />
      </div>

      <LoggedHeadSide />
    </div>
  );
};

export default LoggedHeader;
