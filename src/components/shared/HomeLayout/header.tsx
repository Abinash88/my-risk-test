import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../../lib/const/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="bg-white shadow-lg px-[2rem] lg:px-[4rem] py-[1rem] flex justify-between items-center gap-4 w-full ">
			<img
				src="images/logo.png"
				alt="logo"
				className="w-[10rem] md:w-[12rem]"
			/>
			<ul className="text-black hidden md:flex items-center justify-center gap-6 lg:gap-8 flex-[2] ">
				{navItems.map((item) => (
					<li key={item.id}>
						<Link to={item.path}>{item.text}</Link>
					</li>
				))}
			</ul>
			<div onClick={handleNav} className="block md:hidden">
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
				<img
					src="images/logo.png"
					alt="logo"
					className="w-[10rem] mt-3 ml-4 mb-6"
				/>

				{/* Mobile Navigation Items */}
				{navItems.map((item) => (
					<li
						key={item.id}
						className="text-black py-2 px-4 hover:bg-[#000080] duration-300 hover:text-white cursor-pointe"
					>
						<Link to={item.path} onClick={handleNav}>
							{item.text}
						</Link>
					</li>
				))}
				<li className="bg-[#000080] text-white ml-4 p-4 mt-4 w-[50%] rounded-md">
					Login
				</li>
			</ul>
			<div className="hidden md:block">
				<Link
					to="/login"
					className="bg-[#000080] text-white py-3 px-10 rounded-lg"
				>
					Login
				</Link>
			</div>
		</div>
	);
};

export default Header;
