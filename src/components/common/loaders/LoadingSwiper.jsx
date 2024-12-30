import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Skeleton from "@mui/material/Skeleton";

const LoadingSwiper = () => (
  <Swiper
    slidesPerView={1}
    spaceBetween={30}
    breakpoints={{
      400: {
        slidesPerView: 1,
        spaceBetween: 5
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1500: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }}
  >
    {[...Array(4)].map((_, index) => (
      <SwiperSlide key={index}>
        <Skeleton variant="rectangular" animation="wave" width="100%" height={300} />
        <Skeleton animation="wave" width="60%" height={100} />
        <Skeleton animation="wave" width="40%" height={50} />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default LoadingSwiper;
