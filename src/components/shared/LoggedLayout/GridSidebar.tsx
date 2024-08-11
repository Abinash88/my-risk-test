import { DASHBOARD_SIDEBAR_LINKS } from "@/lib/const/sidebarNavigation";
import { Link } from "react-router-dom";

const GridSidebar = () => {
	return (
		<>
			<div className="bg-[#fff] p-4 md:p-5 rounded-lg flex gap-4 w-[60%]  md:w-[50%] lg:w-[35%] flex-wrap absolute top-[4.8rem] md:top-[5.4rem] right-4 justify-between max-h-[90vh] overflow-y-auto z-50 shadow-md border border-[rgba(51,51,51,0.5)]">
				{DASHBOARD_SIDEBAR_LINKS.map((item, i) => (
					<Link
						to={item.path}
						key={i + 1}
						className="bg-white w-[45%] lg:w-[30%] p-3 rounded-lg shadow-lg flex flex-col items-center justify-center text-center text-[15px] text-[#6666B3]"
					>
						<div className="text-[20px]">{item.icon}</div>
						{item.label}
					</Link>
				))}
			</div>
		</>
	);
};

export default GridSidebar;
