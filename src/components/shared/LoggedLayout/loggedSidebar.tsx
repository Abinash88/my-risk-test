import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS } from "../../../lib/const/sidebarNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LoggedSidebar = () => {
	return (
		<div className="bg-white shadow-md w-[20rem] py-3 px-8 lg:flex flex-col text-black hidden">
			<div className=" flex flex-col gap-1 justify-center items-center text-center mb-5">
				<img
					src="/images/profile-image.jpeg"
					alt="profile-image"
					className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
				/>
				<h4 className="font-[500] text-[16px]">UtherMatin</h4>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-3">
				{DASHBOARD_SIDEBAR_LINKS.map((item) => (
					<SidebarLink key={item.key} item={item} />
				))}
				<div className="flex items-center gap-2 font-[400] px-4 py-3 hover:bg-[#000080c8] hover:text-white hover:no-underline active:bg-[#000080] rounded-lg cursor-pointer text-[rgba(0,0,0,0.7)]">
					<span className="text-xl">
						<FontAwesomeIcon icon={faArrowRightFromBracket} />
					</span>
					Logout
				</div>
			</div>
		</div>
	);
};

function SidebarLink({ item }: any) {
	const { pathname } = useLocation();
	const isActive = pathname === item.path || pathname.startsWith(item.path);
	return (
		<Link
			to={item.path}
			className={`flex items-center gap-2 font-[400] px-4 py-3 hover:bg-[#000080c8] hover:text-white hover:no-underline active:bg-[#000080] rounded-lg  ${
				isActive ? "bg-[#000080] text-white" : "text-[rgba(0,0,0,0.7)]"
			}`}
		>
			<span className="text-xl">{item.icon}</span>
			{item.label}
		</Link>
	);
}
export default LoggedSidebar;
