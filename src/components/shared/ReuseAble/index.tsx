import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

interface BlogProps {
	title: string;
	text: string;
	path: string;
	showLink?: boolean;
}

export const BlogHeader = ({
	title,
	text,
	path,
	showLink = true,
}: BlogProps) => {
	return (
		<div
			className="relative w-full h-screen bg-cover bg-center"
			style={{ backgroundImage: `url('images/background.png')` }}
		>
			<div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center gap-3 text-white text-center p-6">
				<h1 className="text-white text-[50px] md:text-[80px] font-bold lg:w-[60%]">
					{title}
				</h1>
				<p className="text-[17px] md:text-[18px] font-[400]">{text}</p>
				{showLink && (
					<Link to={path} className="bg-[#000080] py-4 px-10 rounded-lg mt-5">
						Get Started
					</Link>
				)}
			</div>
		</div>
	);
};

interface TruncatedTextProps {
	text: string;
	maxLength: number;
	title: string;
}
export const TruncatedText = ({
	text,
	title,
	maxLength = 100,
}: TruncatedTextProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleText = () => {
		setIsExpanded(!isExpanded);
	};

	if (text.length <= maxLength) {
		return <p className="font-[500] text-[18px] text-black">{text}</p>; // No need to truncate if text is short
	}

	return (
		<div>
			<p className="font-[500] text-[14px] text-black leading-[23.44px]">
				<span className="font-[600] text-[18px] text-black leading-[23.44px]">
					{title}{" "}
				</span>
				{isExpanded ? text : `${text.slice(0, maxLength)}...`}
				<span onClick={toggleText} className="text-blue-500 cursor-pointer">
					{isExpanded ? "...Show less" : "Show more"}
				</span>
			</p>
		</div>
	);
};

interface BgSectionProps {
	image: string;
	children: ReactNode;
}
export const BgSection = ({ image, children }: BgSectionProps) => {
	return (
		<div
			className="relative w-full min-h-screen bg-cover bg-center"
			style={{ backgroundImage: `url('${image}')` }}
		>
			<div className="relative inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center gap-3 text-white text-center p-6 min-h-screen">
				{children}
			</div>
		</div>
	);
};
