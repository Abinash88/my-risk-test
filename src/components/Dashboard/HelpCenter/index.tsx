import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { popularTopic } from "../../../lib/const/navigation";
import { useState } from "react";
import Drone from "../../../assets/images/drone.png";

const ITEMS_PER_PAGE = 8; // Adjust based on your layout

const HelpCenter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState("");
  const totalPages = Math.ceil(popularTopic.length / ITEMS_PER_PAGE);

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

  return (
    <div>
      <div className="bg-[#6666B3] mt-[0] md:-mt-10 w-[100%] flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 text-white p-5 md:pb-0">
        <img src={Drone} alt="" className="w-[30%] md:block" />
        <div>
          <p className="font-[500] text-[17px] mb-4">Help Center</p>
          <h4 className="font-[500] text-[35px]">How can we help you</h4>
          <form action="">
            <input
              type="search"
              placeholder="Search"
              className="px-4 py-3 outline-none rounded-lg text-black w-full mt-3"
            />
          </form>
        </div>
      </div>
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
                to={topic.title}
                className="w-[45%] md:w-[22%] bg-[#000080] text-white px-4 md:px-8 py-8 rounded-lg text-center mt-5"
                key={topic.title + 3 + i}
              >
                <h4 className="font-[400] text-md md:text-lg text-center">
                  {topic.title}
                </h4>
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
              currentPage < totalPages
                ? "bg-[#000080] text-white"
                : "bg-gray-200"
            }`}
          >
            <FontAwesomeIcon icon={faGreaterThan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
