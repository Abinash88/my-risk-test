import Container from "../../shared/HomeLayout/container";
const services = [
  {
    image: "images/Engage.png",
    text: `AI Powered Risk Profile`,
  },
  {
    image: "images/Analysis.png",
    text: `Engage with T & O Standing`,
  },
];
const ServiceType = () => {
  return (
    <div className="py-[4rem] bg-[#000080] text-white">
      <Container>
        <h2 className="text-center text-[30px] font-[500]">Quick Links</h2>
        <p className="text-center text-[18px] mt-3">
          Easily navigate the platform from any of this options
        </p>
        <div className="flex  justify-between lg:justify-center  gap-3 lg:gap-8 mt-7 ">
          {services.map((service, i) => (
            <div
              className="bg-white py-11 px-5 flex flex-col items-center justify-center lg:px-11 rounded-[30px] w-[45%] lg:w-[27%] lg:h-[50vh]"
              key={i}
            >
              <img
                src={service.image}
                alt={service.image + 12}
                className="w-24 lg:w-32 mr-auto ml-auto"
              />
              <p className="text-[rgba(0,0,0,0.7)] text-center mt-5 font-[600]">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ServiceType;
