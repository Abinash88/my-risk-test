import { TruncatedText } from "@/components/shared/ReuseAble";
import CommentModal from "@/components/shared/ReuseAble/CommentModal";
import { GroupImages, TandOData, type GroupImagesType } from "@/lib/fakedata";
import { cn } from "@/lib/utils";
import { Carousel } from "antd";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const PrivateStanding = () => {
  const [groups, setGroups] = useState<GroupImagesType>(GroupImages[0]);

  const getRiskRatingColor = (rating: number) => {
    if (rating >= 90 && rating <= 100) return "bg-red-800";
    if (rating >= 80 && rating <= 90) return "bg-red-600";
    if (rating >= 70 && rating <= 80) return "bg-yellow-800";
    if (rating >= 60 && rating <= 70) return "bg-yellow-500";
    if (rating >= 50 && rating <= 60) return "bg-green-500";
    return "";
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-[92%_8%] ">
      <div className="inline ">
        <Carousel
          arrows
          slidesToShow={9}
          slidesToScroll={1}
          dots={false}
          prevArrow={<ChevronLeft />}
          nextArrow={<ChevronRight />}
          draggable
          id="group_carousel"
          className="w-[90%] my-4 mx-auto"
          responsive={[
            {
              breakpoint: 1024, // Medium screens (tablet and up)
              settings: {
                slidesToShow: 7,
              },
            },
            {
              breakpoint: 768, // Small screens (portrait tablet and up)
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 480, // Extra-small screens (mobile)
              settings: {
                slidesToShow: 3,
              },
            },
          ]}
        >
          {GroupImages.map((item) => (
            <div
              key={item.name}
              className={`relative  flex justify-center items-center h-[17vh]  transition-transform cursor-pointer`}
              title={item.name}
            >
              <div className="flex flex-col m-auto h-full w-[12vh] py-4 md:w-[13vh] justify-center items-center">
                <button
                  onClick={() => {
                    setGroups(item);
                  }}
                  className={cn(
                    groups?.name === item?.name
                      ? "border-purple-400 border-8 m-auto rounded-full"
                      : "m-auto border-8 rounded-full  border-transparent"
                  )}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" rounded-full size-full object-cover"
                  />
                </button>
                <p className="md:text-sm text-xs text-center text-[#000080] font-medium ">
                  #{item?.name}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="overflow-x-auto flex-1">
          <table className="min-w-full bg-white">
            <thead className="bg-[#6095C9] text-white text-md">
              <tr>
                <th className="py-4 px-4 border">Rank</th>
                <th className="py-4 px-4 border">Vote</th>
                <th className="py-4 px-4 border bg-[#6095c9] w-full">
                  Risk Title & Description
                </th>
                <th className="py-4 px-4 border">Risk Rating</th>
                <th className="py-4 px-4 border">Up Votes</th>
                <th className="py-4 px-4 border">Down Votes</th>
              </tr>
            </thead>
            <tbody>
              {TandOData.map((risk, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border bg-[#D8E0EC] text-center font-[600]">
                    {risk.rank}
                  </td>
                  <td className="py-2 px-4 border bg-[#D8E0EC] text-center">
                    <div className="flex flex-col items-center space-y-2">
                      <button className="bg-blue-600 w-20 text-white text-xs py-1 px-2 rounded-md">
                        👍 <br /> Up Vote
                      </button>
                      <button className="bg-red-600 text-white text-xs py-1 px-2 rounded-md">
                        👎 <br /> Down Vote
                      </button>
                    </div>
                  </td>
                  <td className="py-2 px-4 border fixed-width ">
                    <TruncatedText
                      text={risk.text}
                      maxLength={50}
                      title={risk.title}
                    />
                    <CommentModal  />
                  </td>
                  <td
                    className={`py-2 px-4 border text-center ${getRiskRatingColor(
                      risk.riskRating
                    )}`}
                  >
                    {risk.riskRating}%
                  </td>
                  <td className="py-2 px-4 border bg-[#D8E0EC] text-center font-[600]">
                    {risk.upVotes}
                  </td>
                  <td className="py-2 px-4 border bg-[#D8E0EC] text-center font-[600]">
                    {risk.downVotes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-full md:block hidden space-y-10">
        <p className="text-sm font-medium  text-center w-full text-blue-800">
          {groups.name}
        </p>
        <Carousel
          dotPosition="left"
          arrows
          slidesToShow={5}
          slidesToScroll={1}
          dots={false}
          prevArrow={<ChevronUp />}
          nextArrow={<ChevronDown />}
          draggable
          infinite={false}
          id="member_carousel"
          className="w-full inline mx-auto"
          responsive={[
            {
              breakpoint: 1024, // Medium screens (tablet and up)
              settings: {
                slidesToShow: 7,
              },
            },
            {
              breakpoint: 768, // Small screens (portrait tablet and up)
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 480, // Extra-small screens (mobile)
              settings: {
                slidesToShow: 3,
              },
            },
          ]}
        >
          {groups.members.map((item) => (
            <div
              key={item.name}
              className={`relative  flex justify-center items-center h-[17vh] w-[17vh] transition-transform cursor-pointer`}
              title={item.name}
            >
              <div className="flex flex-col m-auto h-full w-[12vh] py-4 md:w-[13vh] justify-center items-center">
                <button
                  onClick={() => {}}
                  className={cn(
                    groups?.name === item?.name
                      ? "border-purple-400 border-8 m-auto rounded-full"
                      : "m-auto border-8 rounded-full  border-transparent"
                  )}
                >
                  <img
                    src={item?.image}
                    alt={item.name}
                    className=" rounded-full size-full object-cover"
                  />
                </button>
                <p className="md:text-sm text-xs text-center text-[#000080] font-medium ">
                  {item?.name}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PrivateStanding;
