import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import PropTypes from "prop-types";
import "swiper/swiper-bundle.min.css";
import ProductRangeCard from "./ProductRangeCard";
import { SwiperCustomPagination, SwiperCustomNavigation } from "./styles/SimilarProductsStyles";
import { v4 as uuidv4 } from "uuid";
import "./styles/similarProductSwiper.css";

const SimilarProductsSwiper = ({ products, type }) => (
  <Swiper
    modules={[Navigation, Pagination]}
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
      el: SwiperCustomPagination
    }}
    navigation={{
      nextEl: SwiperCustomNavigation.next,
      prevEl: SwiperCustomNavigation.prev
    }}
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
    className={`${type}-swiper`}
  >
    {products.length > 0 ? (
      products.map((product) => (
        <SwiperSlide key={uuidv4()}>
          <ProductRangeCard {...product} />
        </SwiperSlide>
      ))
    ) : (
      <p>No products found.</p>
    )}
    <SwiperCustomPagination />
    <SwiperCustomNavigation />
  </Swiper>
);

SimilarProductsSwiper.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.string.isRequired
};

export default SimilarProductsSwiper;
