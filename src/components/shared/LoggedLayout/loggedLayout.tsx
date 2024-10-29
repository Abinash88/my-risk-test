import { Outlet } from "react-router-dom";
import Footer from "../HomeLayout/footer";
import "./forced.css";
import LoggedHeader from "./loggedHeader";
import LoggedSidebar from "./loggedSidebar";

const LoggedLayout = () => {
  return (
    <div>
      <LoggedHeader />
      <div className="flex flex-row h-[100vh] overflow-hidden">
        <LoggedSidebar />
        <div className="invisible lg:visible lg:w-2/12 lg:mb-10"></div>
        <div className="nobar lg:ml-10 lg:mt-[-30px] flex-1 p-4 pb-56 lg:p-[4rem] lg:h-[110vh] overflow-y-auto bg-[#F3F3F3]">
          {<Outlet />}
          <div className="lg:h-20" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoggedLayout;
