import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { moreNews } from "../../../lib/const/navigation";
import { useState } from "react";

const ITEMS_PER_PAGE = 4;

const MoreNews = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [direction, setDirection] = useState("");
	const totalPages = Math.ceil(moreNews.length / ITEMS_PER_PAGE);

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentItems = moreNews.slice(startIndex, endIndex);

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
		<div className="my-32">
			<div className="flex justify-between items-center mb-10">
				<h3 className="text-2xl font-semibold">More News</h3>
				<select
					name="days"
					id="days"
					className="border border-gray-400 outline-none p-2 rounded-md"
				>
					<option value="7days">Last 7 days</option>
					<option value="last-week">Last Week</option>
					<option value="last-month">Last Month</option>
				</select>
			</div>
			<div className="relative w-full overflow-hidden">
				<div
					className={`flex flex-col lg:flex-row flex-wrap gap-y-16 justify-between transition-all duration-300 ${
						direction === "right" ? "slide-left" : ""
					} ${direction === "left" ? "slide-right" : ""}`}
				>
					{currentItems.map((news, i) => (
						<Link
							to={news.path || "/"} // Use path if available, otherwise default to "/"
							className="flex flex-col md:flex-row gap-4 items-start md:items-center w-[100%] lg:w-[45%] border border-gray-300 rounded-lg overflow-hidden"
							key={i}
						>
							<img
								src={news.image}
								alt={news.title + i}
								className="w-full md:w-2/5 rounded-lg object-cover"
							/>
							<div className="px-2">
								<h3 className="text-[20px] md:text-[25px] font-semibold mt-">
									{news.title}
								</h3>
								<p className="text-gray-600 text-lg mt-5">{news.date}</p>
							</div>
						</Link>
					))}
				</div>
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

export default MoreNews;
