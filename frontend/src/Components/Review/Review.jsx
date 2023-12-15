// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { ReviewCard1 } from "./ReviewCard1";
import { ReviewCard2 } from "./ReviewCard2";
import { ReviewCard3 } from "./ReviewCard3";

export default function Review() {
  return (
    <>
      <div className="mb-4">
        <h2 className="font-bold text-center text-3xl italic ">
          College Review!
        </h2>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ReviewCard1 />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard2 />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard3 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
