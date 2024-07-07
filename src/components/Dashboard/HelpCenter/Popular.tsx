import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { popularTopic } from "../../../lib/const/navigation";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ITEMS_PER_PAGE = 4;

const Popular = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [direction, setDirection] = useState("");
	const totalPages = Math.ceil(popularTopic.length / ITEMS_PER_PAGE);
	const location = useLocation();
	const currentPath = location.pathname;

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentTopics = popularTopic.slice(startIndex, endIndex);

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

	const getNewPath = (title) => {
		const pathSegments = currentPath.split("/").filter(Boolean);
		pathSegments.pop(); // Remove the last segment
		pathSegments.push(title); // Add the new title segment
		return `/${pathSegments.join("/")}`; // Reconstruct the new path
	};

	return (
		<div className="mt-7">
			<h4 className="font-[600] text-[25px] text-black">Popular Topic</h4>
			<div className="relative w-full overflow-hidden">
				<div
					className={`flex flex-wrap gap-5 justify-center transition-all duration-300 ${
						direction === "right" ? "slide-left" : ""
					} ${direction === "left" ? "slide-right" : ""}`}
				>
					{currentTopics.map((topic, i) => (
						<Link
							to={getNewPath(topic.title)}
							className="w-[22%] bg-[#000080] text-white px-8 py-8 rounded-lg text-center mt-5"
							key={topic.title + 3 + i}
						>
							<h4 className="font-[400] text-[25px]">{topic.title}</h4>
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

export default Popular;
