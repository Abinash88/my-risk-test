import Container from "@/components/shared/HomeLayout/container";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const IntegratedService = () => {
  const [swiper, setSwiper] = useState(0);

  return (
    <div>
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url("images/integrated-bg.png")` }}
      >
        <div className="absolute lg:pt-20 inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center gap-3 text-white text-center ">
          <div className="container">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              initialSlide={1}
              onSlideChange={(g) => setSwiper(g.activeIndex)}
              onSwiper={(swiper) => console.log(swiper)}
              centeredSlides={true}
              autoplay={{
                disableOnInteraction: true,
              }}
              loopAddBlankSlides={true}
              slidesPerView={2}
              coverflowEffect={{
                rotate: 5,
                stretch: 10,
                depth: 100,
                modifier: 2.5,
                scale: 0.9,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-transparent">
                  <div className="md:w-[50%] h-[80%] w-full flex flex-col items-center justify-center rounded-lg bg-blue-100">
                    <img
                      src="images/gemini.png"
                      className="rounded-full w-[8rem] h-[8rem]"
                      alt="slide_image"
                    />
                    <p className="font-bold text-blue-900 text-lg mt-4  shadow-lg">
                      Gemini
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-transparent">
                  <div className="md:w-[50%] h-[80%] w-full flex flex-col items-center justify-center rounded-lg bg-blue-100">
                    <img
                      src="images/gpt.png"
                      className="rounded-full w-[8rem] h-[8rem]"
                      alt="slide_image"
                    />
                    <p className="font-bold text-blue-900 text-lg mt-4  shadow-lg">
                      GPT 4-o
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-[50%] flex items-center justify-center rounded-lg bg-transparent">
                  <div className="md:w-[50%] h-[80%] w-full flex flex-col items-center justify-center rounded-lg bg-blue-100">
                    <img
                      src="images/claude.png"
                      className="rounded-full w-[8rem] h-[8rem]"
                      alt="slide_image"
                    />
                    <p className="font-bold text-blue-900 text-lg mt-4  shadow-lg">
                      Claude
                    </p>
                  </div>
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
        </div>
      </div>

      <Container>
        <div className=" flex flex-col gap-16 my-10">
          <div className="bg-blue-100 rounded-3xl px-3 sm:px-10 md:px-24 md:py-10 max-w-[700px] w-full md:m-auto md:block">
            <img
              alt="logo"
              src="images/logo.png"
              className="w-52 py-10 m-auto p-2"
            />
            <ul className="ml-5 list-disc border-b-2 font-medium border-2 py-2 space-y-2">
              <p className="text-green-900 font-bold text-lg md:text-xl">
                Pros for {swiper === 2 && "Claude"}
                {swiper === 1 && "GPT 4-o"}
                {swiper === 0 && "Gemini"}
              </p>
              <li className=" text-sm">
                Recorded a usage analysis test score of 98% rating
              </li>
              <li className=" text-sm">
                Recorded a usage analysis test score of 98% rating
              </li>
              <li className=" text-sm">
                Recorded a usage analysis test score of 98% rating
              </li>
            </ul>
            <div className="border-t my-4  border-gray-600  h-2 w-full" />
            <ul className="ml-5 py-2  list-disc font-medium space-y-4 pb-8">
              <p className="text-yellow-500 font-bold text-lg md:text-xl">
                Cons for {swiper === 0 ? "Claude" : "GPT 4-o"}
              </p>
              <li className=" text-sm">
                Much more expensive than other services
              </li>
              <li className=" text-sm">
                Much more expensive than other services
              </li>
              <li className=" text-sm">
                Much more expensive than other services
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IntegratedService;
