import Container from "../../shared/HomeLayout/container";
import LinkCarousel from "./LinksCarousel";

// const services = [
//   {
//     image: "images/Engage.png",
//     text: `AI Powered Risk Profile`,
//   },
//   {
//     image: "images/Analysis.png",
//     text: `Engage with T & O Standing`,
//   },
// ];

const ServiceType = () => {
  return (
    <div className="py-[4rem] w-full bg-[#000080] text-white">
      <Container>
        <h2 className="text-center text-2xl md:text-3xl font-[500]">Quick Links</h2>
        <p className="text-center text-sm md:text-lg mt-3 ">
          Easily navigate the platform from any of this options
        </p>
        <div className="h-10"/>
        <LinkCarousel />
      </Container>
    </div>
  );
};

export default ServiceType;
