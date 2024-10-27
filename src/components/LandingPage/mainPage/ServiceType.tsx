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
    <div className="py-[4rem] bg-[#000080] text-white">
      <Container>
        <h2 className="text-center text-[30px] font-[500]">Quick Links</h2>
        <p className="text-center text-[18px] mt-3 ">
          Easily navigate the platform from any of this options
        </p>
        <div className="flex w-full justify-between lg:justify-center  gap-3 lg:gap-8 mt-10 ">
          <LinkCarousel />
        </div>
      </Container>
    </div>
  );
};

export default ServiceType;
