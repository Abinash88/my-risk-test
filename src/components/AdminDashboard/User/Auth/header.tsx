import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface HeaderSection {
	children: ReactNode;
}
const Authheader = ({ children }: HeaderSection) => {
	return (
		<div
			className="relative w-full min-h-screen bg-cover bg-center"
			style={{ backgroundImage: `url('/images/ai.png')` }}
		>
			<div className="relative inset-0 bg-black bg-opacity-60 flex flex-col  gap-3 text-white text-center p-3 md:p-6 min-h-screen">
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Authheader;
