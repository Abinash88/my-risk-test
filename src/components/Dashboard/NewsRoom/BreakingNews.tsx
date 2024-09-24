import { Link } from "react-router-dom";
import { breakingNews } from "../../../lib/const/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";

const ITEMS_PER_PAGE = 1;
const BreakingNews = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [direction, setDirection] = useState("");
	const totalPages = Math.ceil(breakingNews.length / ITEMS_PER_PAGE);

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentItems = breakingNews.slice(startIndex, endIndex);

	const handleNext = () => {
		setDirection("right");
		setTimeout(() => {
			setCurrentPage((prev) => Math.min(prev + 1, totalPages));
			setDirection("");
		}, 300);
	};
	const handlePrevious = () => {
		setDirection("left");
		setTimeout(() => {
			setCurrentPage((prev) => Math.max(prev - 1, 1));
			setDirection("");
		}, 300);
	};
	return (
		<div className="my-[8rem]">
			<h2 className="font-[600] text-[30px] text-center lg:text-left lg:text-[45px] mb-8">
				Breaking News
			</h2>
			<div
				className={`transition-all duration-300 overflow-hidden ${
					direction === "right" ? "slide-left" : ""
				} ${direction === "left" ? "slide-right" : ""}`}
			>
				{currentItems.map((news, i) => (
					<div
						className="bg-white shadow-lg flex flex-col lg:flex-row items-start gap-4 rounded-lg border-2 border-gray-50 w-full"
						key={i}
					>
						<img
							src={news.image}
							alt={news.image + i}
							className="w-full lg:w-[50%] rounded-lg shadow-custom-2"
						/>
						<div className="px-6 py-3">
							<span className="block text-right text-[rgba(0,0,0,0.6)] text-[12px]">
								{news.date}
							</span>
							<h3 className="text-[#000080]  text-[25px] lg:text-[40px] font-[600] my-4">
								{news.title}
							</h3>
							<p>{news.paragraph}</p>
							<div className="flex justify-end ">
								<Link
									to={news.title}
									className="py-2 px-5 bg-[rgba(102,102,179,1)] text-white mt-9 rounded-md"
								>
									Read News
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex gap-2 justify-end mt-8 items-center">
				<button
					onClick={handlePrevious}
					disabled={currentPage === 1}
					className={`p-2 rounded-md ${
						currentPage > 1 ? "bg-[#000080] text-white" : "bg-gray-200"
					}`}
				>
					<FontAwesomeIcon icon={faLessThan} />
				</button>
				<p className="font-[600]">{`${currentPage} / ${totalPages}`}</p>
				<button
					onClick={handleNext}
					disabled={currentPage === totalPages}
					className={`p-2 rounded-md ${
						currentPage < totalPages ? "bg-[#000080] text-white" : "bg-gray-200"
					}`}
				>
					<FontAwesomeIcon icon={faGreaterThan} />
				</button>
			</div>
		</div>
	);
};

export default BreakingNews;
