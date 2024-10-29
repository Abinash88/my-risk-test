import { Carousel } from "antd";
import { ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const groups = [
  {
    id: 1,
    name: "Engage with T&O",
    image: "images/Analysis.png",
    link: "/engage-t-o-standing",
  },
  {
    id: 2,
    name: "AI Powered Risk Profile",
    image: "images/Engage.png",
    link: "/home-page/?page=generate-download",
  },
  {
    id: 3,
    name: "View Generated Risks",
    image: "images/Analysis.png",
    link: "/home-page/view-generated-links",
  },
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
          key={service.id}
          style={contentStyle}
          className="h-[30vh] w-full flex justify-center items-center lg:h-[45vh]"
        >
          <Link
            className="bg-white h-[30vh] lg:h-[45vh] w-[80%] m-auto flex z-50 transition-all  flex-col items-center justify-center lg:px-11 rounded-[30px]  "
            key={service.id}
            to={`${service?.link}`}
          >
            <img
              src={service.image}
              alt={service.image + 12}
              className="w-16 md:w-22 lg:w-32 mx-auto"
            />
            <p className="text-[rgba(0,0,0,0.7)] md:text-lg lg:text-2xl text-base p-4 text-center mt-5 font-semibold">
              {service.name}
            </p>
          </Link>
        </div>
      ))}
    </Carousel>
  );
}
