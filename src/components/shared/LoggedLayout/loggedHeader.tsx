import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../../lib/const/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faXmark } from "@fortawesome/free-solid-svg-icons";
import GridSidebar from "./GridSidebar";

const LoggedHeader = () => {
	const [nav, setNav] = useState(false);
	const [openGrid, setOpenGrid] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="bg-white shadow-lg px-[2rem] lg:px-[2rem] py-[1rem] flex items-center gap-4 w-full relative">
			<Link to="/">
				<img
					src="/images/logo.png"
					alt="logo"
					className="w-[8rem] md:w-[12rem]"
				/>
			</Link>

			<ul className="text-black hidden md:flex items-center justify-center gap-6 lg:gap-8 ml-8 ">
				{navItems.map((item) => (
					<li key={item.id}>
						<Link to={item.path}>{item.text}</Link>
					</li>
				))}
			</ul>
			<div onClick={handleNav} className="hidden">
				{nav ? (
					<FontAwesomeIcon
						icon={faXmark}
						className="text-[2rem] text-[#000080]"
					/>
				) : (
					<FontAwesomeIcon
						icon={faBars}
						className="text-[2rem] text-[#000080]"
					/>
				)}
			</div>
			<ul
				className={
					nav
						? "fixed md:hidden left-0 top-0 w-[60%] h-full bg-[#fff] ease-in-out duration-500 z-50"
						: "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50"
				}
			>
				{/* Mobile Logo */}
				<Link to="/">
					{" "}
					<img
						src="/images/logo.png"
						alt="logo"
						className="w-[10rem] mt-3 ml-4 mb-6"
					/>
				</Link>

				{/* Mobile Navigation Items */}
				{/* {navItems.map((item) => (
					<li
						key={item.id}
						className="text-black py-2 px-4 hover:bg-[#000080] duration-300 hover:text-white cursor-pointer"
					>
						<Link to={item.path} onClick={handleNav}>
							{item.text}
						</Link>
					</li>
				))} */}
				{/* <li className="bg-[#000080] text-white ml-4 p-4 mt-4 w-[50%] rounded-md">
					Login
				</li> */}
			</ul>
			<div className="flex items-center gap-4 ml-auto">
				<div className="relative">
					<FontAwesomeIcon
						icon={faBell}
						className="text-[18px] md:text-[25px] animate-wiggle"
					/>
					<div className="px-1 bg-[#AB2626] rounded-full text-center text-white text-[10px] absolute -top-2 -end-1">
						3
						<div className="absolute top-0 start-0 rounded-full -z-10 animate-ping bg-[#AB2626] w-full h-full"></div>
					</div>
				</div>

				<img
					src="/images/grid.png"
					alt="grid"
					className=" w-[19px] md:w-[25px] cursor-pointer"
					onClick={() => setOpenGrid(!openGrid)}
				/>
				<div className="flex items-center gap-1">
					<img
						src="/images/profile-image.jpeg"
						alt="profile-image"
						className="rounded-full aspect-square object-cover h-[40px] w-[40px] md:h-[53px] md:w-[53px]"
					/>
					<div className="hidden md:flex gap-1 items-center">
						<h3 className="text-[#000080] text-[13px] font-[600]">
							Uther Martin
						</h3>
						<img src="/images/badge.png" alt="badge" />
					</div>
				</div>
			</div>
			{openGrid && <GridSidebar />}
		</div>
	);
};

export default LoggedHeader;
