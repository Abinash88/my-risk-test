import { Link } from "react-router-dom";
import { newsBox } from "../../../lib/const/navigation";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ITEMS_PER_PAGE = 2;
const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(""); // Track animation direction
  const totalPages = Math.ceil(newsBox.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = newsBox.slice(startIndex, endIndex);

  const handleNext = () => {
    setDirection("right");
    setTimeout(() => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      setDirection("");
    }, 300); // Duration matches the CSS animation duration
  };

  const handlePrevious = () => {
    setDirection("left");
    setTimeout(() => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
      setDirection("");
    }, 300);
  };

  return (
    <div className="mt-8 mb-8">
      <div className="relative w-full overflow-hidden">
        <div
          className={`transition-all duration-300 flex flex-col lg:flex-row items-start gap-8 ${
            direction === "right" ? "slide-left" : ""
          } ${direction === "left" ? "slide-right" : ""}`}
        >
          {currentItems.map((news, i) => (
            <div
              className="bg-white text-black rounded-md shadow-md w-full mb-4"
              key={i}
            >
              {/* <div
								className="h-[22rem] bg-cover bg-center rounded-t-md object-contain"
								style={{ backgroundImage: `url(${news.image})` }}
							></div> */}
              <img
                src={news.image}
                alt={news.image + 1}
                className="w-full object-contain rounded-t-md"
              />
              <div className="py-8 px-5 md:px-10">
                <h3 className="text-[#000080] font-semibold text-2xl">
                  {news.title}
                </h3>
                <p className="text-[rgba(0,0,0,0.7)] text-lg font-normal mt-2">
                  {news.paragraph}
                </p>
                <div className="flex flex-col md:flex-row  items-start md:items-center justify-between mt-6 gap-4">
                  <p className="text-[rgba(0,0,0,0.6)] text-md">{news.date}</p>
                  <Link
                    to={news.path}
                    className="py-2 px-4 bg-[rgba(102,102,179,1)] text-white rounded-md"
                  >
                    Read News
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end mt-4">
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

export default News;
