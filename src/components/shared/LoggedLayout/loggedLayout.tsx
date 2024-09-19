import { Outlet } from "react-router-dom";
import LoggedHeader from "./loggedHeader";
import LoggedSidebar from "./loggedSidebar";
import Footer from "../HomeLayout/footer";
import "./forced.css";

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
// <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
// 	<LoggedSidebar />
// 	<div className="flex flex-col flex-1">
// 		<LoggedHeader />
// 		<div className="flex-1 p-4 min-h-0 overflow-y-auto">{<Outlet />}</div>
// 	</div>
// </div>;
