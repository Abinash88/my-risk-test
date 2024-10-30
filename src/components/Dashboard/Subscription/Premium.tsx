import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonGroup } from "@mui/material";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Premium1 from "../../../assets/images/premium1.jpg";
import Premium2 from "../../../assets/images/premium2.jpg";
import { paymentActivities } from "../../../lib/fakedata";

const Premium = () => {
  const ITEMS_PER_PAGE = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [history, setHistory] = useState(false);
  const [direction, setDirection] = useState("");
  const premiumBox = [
    {
      title: "AI generated risk Profile",
      img: Premium1,
      desc: "This feature helps you generate fast and well structured AI Risk Profiles.",
    },
    {
      title: "Hold Private T & O Groups",
      img: Premium2,
      desc: "This feature gives you the ability to create your own private threat / opportunities group.",
    },
  ];
  const totalPages = Math.ceil(premiumBox.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentItems = premiumBox.slice(startIndex, endIndex);
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
    <div>
      <div className="absolute"></div>
      <div className="mt-1 bg-white rounded-md px-9 py-3 pt-5">
        <div className="relative w-full overflow-hidden">
          <div className="flex flex-row justify-between">
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={() => handlePrevious()}
              className="mt-32 text-3xl"
            />
            <div
              className={`transition-all duration-300 flex flex-col lg:flex-row items-start gap-2 ${
                direction === "right" ? "slide-left" : ""
              } ${direction === "left" ? "slide-right" : ""}`}
            >
              {currentItems.map((news, i) => (
                <div
                  key={i}
                  className="flex flex-col w-full items-center  justify-center"
                >
                  <h3 className="text-[#000080] font-bold text-xl">
                    {news.title}
                  </h3>
                  <div className="flex flex-row items-center justify-center text-black rounded-md mb-4">
                    <img
                      src={news.img}
                      alt={news.img + 1}
                      className="w-44 object-contain rounded-t-md"
                    />

                    <div className="py-8 px-5 md:px-10">
                      <h3
                        style={{ textShadow: "1px 2px rgba(0,0,0,0.1)" }}
                        className="text-gray-600 font-light text-lg w-72"
                      >
                        {news.desc}
                      </h3>
                      <div className="flex flex-col md:flex-row  items-start md:items-center justify-between mt-6 gap-4"></div>
                    </div>
                  </div>
                  <div className="w-full  mt-12 justify-between flex flex-row items-start">
                    <div className="flex-col flex items-start">
                      <div className="flex-col flex items-center">
                        <h3 className="text-[#000080] font-[500] mb-1 text-md">
                          Quantity
                        </h3>
                        <ButtonGroup
                          variant="outlined"
                          className="scale-90"
                          aria-label="Basic button group"
                        >
                          <Button className="border !border-[#000080]">
                            <Minus className="scale-90 text-[#000080]" />
                          </Button>
                          <Button className="font-bold !border-[#000080] !text-[#000080]">
                            0
                          </Button>
                          <Button variant="contained" className="!bg-[#000080]">
                            <Plus className="scale-75" />
                          </Button>
                        </ButtonGroup>
                      </div>
                      <h3 className="text-[#000080] opacity-80 font-[500] whitespace-nowrap mt-3 ml-3 w-[60%] text-xs">
                        {news.title.indexOf("Profile") !== -1
                          ? "You have 38 AI Risk Generatable Profiles left."
                          : "You have 2 Creatable Private T & O Groups left."}
                      </h3>
                    </div>
                    <div className="flex justify-end h-24 items-end ">
                      <h3 className="text-yellow-600 font-[500] ml-18 mb-1 text-md">
                        Cost: £0
                      </h3>
                    </div>
                    <div className="flex justify-end w-16 items-end " />
                  </div>
                  <button className="font-[600] mt-8 rounded-full scale-75 bg-blue-900 text-white w-[50%] text-center text-lg  shadow-lg border py-2">
                    Purchase
                  </button>
                </div>
              ))}
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={() => handleNext()}
              className="mt-32 text-3xl"
            />
          </div>
        </div>
        <div className="flex border-t  flex-row w-full py-4 mt-8 justify-center">
          <button
            onClick={() => setHistory(false)}
            className={
              history
                ? "font-[600] rounded-full scale-75 text-blue-900 bg-white w-[50%] text-center text-lg mb-5 border shadow-lg py-2"
                : "font-[600] rounded-full scale-75 bg-blue-900 text-white w-[50%] text-center text-lg mb-5 shadow-lg border py-2"
            }
          >
            Current Purchase
          </button>
          <button
            onClick={() => setHistory(true)}
            className={
              !history
                ? "font-[600] rounded-full scale-75 text-blue-900 bg-white w-[50%] text-center text-lg mb-5 border shadow-lg py-2"
                : "font-[600] rounded-full scale-75 bg-blue-900 text-white w-[50%] text-center text-lg mb-5 shadow-lg border py-2"
            }
          >
            Purchase History
          </button>
        </div>
        <div className="mt-6">
          <div className="overflow-x-auto w-full rounded-lg">
            <div className={`transition-all duration-800 items-start `}>
              {history ? (
                <table className="min-w-full overflow-hidden  bg-white border border-gray-200 rounded-lg overflow-x-auto">
                  <thead className="bg-purple-50 text-gray-700">
                    <tr>
                      <th className="p-3 text-left text-sm font-[600] text-black capitalize min-w-[100px] border-r border-[rgba(0,0,0,0.3)]">
                        Date Purchased
                      </th>
                      <th className="p-3 text-center text-sm capitalize min-w-[300px] max-w-[600px] border-r border-[rgba(0,0,0,0.3)]  font-[600] text-black">
                        Package
                      </th>

                      <th className="p-3 text-left text-sm font-[600] text-black capitalize min-w-[100px] border-r border-[rgba(0,0,0,0.3)]">
                        Cancellation Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentActivities.map((activity, index) => (
                      <tr
                        key={index}
                        className={`border-t border-gray-200 hover:bg-gray-100 ${
                          index % 2 !== 0 && "bg-purple-50"
                        }`}
                      >
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.date}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.activity}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          - - - -
                        </td>
                      </tr>
                    ))}
                    {paymentActivities.map((activity, index) => (
                      <tr
                        key={index}
                        className={`border-t border-gray-200 hover:bg-gray-100 ${
                          index % 2 !== 0 && "bg-purple-50"
                        }`}
                      >
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.date}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.activity}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          - - - -
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-x-auto">
                  <thead className="bg-gray-200 text-gray-700">
                    <tr>
                      <th className="p-3 text-left text-sm font-[600] text-black capitalize min-w-[10px] border-r border-[rgba(0,0,0,0.3)]">
                        S/N
                      </th>
                      <th className="p-3 text-left text-sm font-[600] text-black capitalize min-w-[100px] border-r border-[rgba(0,0,0,0.3)]">
                        Date Purchased
                      </th>
                      <th className="p-3 text-center text-sm capitalize min-w-[100px] max-w-[600px] border-r border-[rgba(0,0,0,0.3)]  font-[600] text-black">
                        Premium Feature
                      </th>

                      <th className="p-3 text-center text-sm font-[600] text-black capitalize min-w-[50px] border-r border-[rgba(0,0,0,0.3)]">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentActivities.map((activity, index) => (
                      <tr
                        key={index}
                        className="border-t border-gray-200 hover:bg-gray-100"
                      >
                        <td className="p-3 text-sm text-center border-r border-[rgba(0,0,0,0.3)]">
                          {index}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.date}
                        </td>
                        <td className="p-3 text-sm border-r border-[rgba(0,0,0,0.3)]">
                          {activity.activity}
                        </td>
                        <td className="p-3 text-sm text-center border-r border-[rgba(0,0,0,0.3)]">
                          {index}0
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
