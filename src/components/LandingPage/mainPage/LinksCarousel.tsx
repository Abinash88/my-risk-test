import React from "react";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { Carousel } from "antd";

const groups = [
  { id: 1, name: "Engage with T&O", image: "images/Analysis.png" },
  { id: 2, name: "AI Powered Risk Profile", image: "images/Engage.png" },
  { id: 3, name: "Engage with T&O", image: "images/Analysis.png" },
  { id: 4, name: "AI Powered Risk Profile", image: "images/Engage.png" },
  { id: 5, name: "Engage with T&O", image: "images/Analysis.png" },
  { id: 6, name: "AI Powered Risk Profile", image: "images/Engage.png" },
  { id: 7, name: "Engage with T&O", image: "images/Analysis.png" },
  { id: 8, name: "AI Powered Risk Profile", image: "images/Engage.png" },
  { id: 9, name: "Engage with T&O", image: "images/Analysis.png" },
];

export default function LinkCarousel() {
  const contentStyle: React.CSSProperties = {
    margin: "50px",
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <Carousel
      arrows
      slidesToShow={3}
      slidesToScroll={1}
      dots={false}
      prevArrow={<ArrowLeftToLine />}
      nextArrow={<ArrowRightToLine />}
      style={{ fontSize: "40px" }}
      infinite
      draggable
      id="quick_link_carousel"
      responsive={[
        {
          breakpoint: 1024, // Medium screens (tablet and up)
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768, // Small screens (portrait tablet and up)
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480, // Extra-small screens (mobile)
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {groups.map((service) => (
        <div
          style={contentStyle}
          className="h-[25vh] w-full flex justify-center items-center lg:h-[45vh]"
        >
          <div
            className="bg-white h-[25vh] lg:h-[45vh] w-[80%] m-auto flex z-50 transition-all  flex-col items-center justify-center lg:px-11 rounded-[30px]  "
            key={service.id}
          >
            <img
              src={service.image}
              alt={service.image + 12}
              className="w-16 lg:w-32 mx-auto"
            />
            <p className="text-[rgba(0,0,0,0.7)] text-lg md:text-2xl  p-4 text-center mt-5 font-semibold">
              {service.name}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
