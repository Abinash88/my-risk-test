import Container from "@/components/shared/HomeLayout/container";
import { BlogHeader } from "@/components/shared/ReuseAble";
import { integratedService } from "@/lib/const/navigation";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';



const IntegratedService = () => {
  return (
    <div>
      <BlogHeader
        title="Integrated AI Services"
        text="Learn more about our integrated AI services"
        showLink={false}
        path="/"
      />
      <div className="container">
        <h1 className="heading">Flower Gallery</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loopAddBlankSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 10,
            depth: 100,
            modifier: 2.5,
            // scale:.5,
            
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-blue-200">

            <img 
            className="w-full"
            src="images/drone.png"
            alt="slide_image" />hi
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-blue-200">

            <img 
            className="w-full"
            src="images/drone.png"
            alt="slide_image" />hi
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-blue-200">

            <img 
            className="w-full"
            src="images/drone.png"
            alt="slide_image" />hi
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-blue-200">

            <img 
            className="w-full"
            src="images/drone.png"
            alt="slide_image" />hi
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-blue-200">

            <img 
            className="w-full"
            src="images/drone.png"
            alt="slide_image" />hi
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-blue-200">

            <img 
            className="w-full"
            src="images/drone.png"
            alt="slide_image" />hi
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-blue-200">

            <img 
            className="w-full"
            src="images/drone.png"
            alt="slide_image" />hi
            </div>
          </SwiperSlide><SwiperSlide>
            <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-blue-200">

            <img 
            className="w-full"
            src="images/drone.png"
            alt="slide_image" />hi
            </div>
          </SwiperSlide>
         

          <div className="slider-controler flex ">
            <div className="swiper-button-prev slider-arrow">
              <FontAwesomeIcon icon={faAngleLeft} className="" />
              {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
            </div>
            <div className="swiper-button-next slider-arrow">
              {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <Container>
        <div className=" flex flex-col gap-16 my-10">
          {integratedService.map((integrated, i) => (
            <div
              className="flex flex-col md:flex-row items-start gap-3 "
              key={i}
            >
              <img src="/images/ai-icon.png" alt="Ai-icon" />
              <div>
                <h2 className="font-[600] text-[20px] text-black mb-2">
                  {integrated.title}
                </h2>
                <p>{integrated.text}</p>
                <Link
                  to={integrated.path}
                  className="text-[#000080] font-[600] mt-2 block"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default IntegratedService;
