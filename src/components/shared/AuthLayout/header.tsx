import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface HeaderSection {
	children: ReactNode;
}
const Authheader = ({ children }: HeaderSection) => {
	return (
		<div
			className="relative w-full min-h-screen bg-cover bg-center"
			style={{ backgroundImage: `url('/images/auth-image.png')` }}
		>
			<div className="relative inset-0 bg-black bg-opacity-60 flex flex-col  gap-3 text-white text-center p-3 md:p-6 min-h-screen">
				<div className="flex items-center justify-between ">
					<img
						src="/images/auth-logo.png"
						alt="logo"
						className="w-[9rem] lg:w-[250px]"
					/>
					<div className="flex items-center gap-3">
						<p className="font-[600] text-[16px] hidden md:block">
							Have an Account?
						</p>
						<Link
							to="/"
							className="bg-[#000080] py-3 px-12 rounded-lg text-white"
						>
							Login
						</Link>
					</div>
				</div>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Authheader;
