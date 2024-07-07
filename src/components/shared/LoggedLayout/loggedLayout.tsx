import { Outlet } from "react-router-dom";
import LoggedHeader from "./loggedHeader";
import LoggedSidebar from "./loggedSidebar";
import Footer from "../HomeLayout/footer";

const LoggedLayout = () => {
	return (
		<div>
			<LoggedHeader />
			<div className="flex flex-row h-auto min-h-screen overflow-hidden">
				<LoggedSidebar />
				<div className="flex-1 p-[4rem] min-h-0 overflow-y-auto bg-[#F3F3F3]">
					{<Outlet />}
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
