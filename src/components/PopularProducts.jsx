import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AnimateIn from "../customeHooks/AnimateIn";
import { Container, HeadingContainer, EffectCardHeading } from "./styles/PopularProduct";
import { useDataContext } from "../context/DataContext";
import PopularProductItem from "./PopularProductItem";

const PopularProducts = () => {
  const { products } = useDataContext();
  const popularProducts = products.slice(0, 5);
  console.log("products", popularProducts)

  return (
    <>
      <Container>
        <HeadingContainer>
          <AnimateIn
            to={{
              opacity: 1,
              transitionDelay: "0.3s"
            }}
            from={{
              WebkitAnimationDuration: "1s",
              opacity: 0
            }}
            transition="all 1s ease 0s"
          >
            <EffectCardHeading>Popular Products</EffectCardHeading>
          </AnimateIn>
        </HeadingContainer>
        <Swiper
          effect={"fade"}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false
          }}
          speed={6000}
          spaceBetween={40}
          slidesPerView={1}
          navigation={false}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            1600: {
              slidesPerView: 3.5
            },
            990: {
              slidesPerView: 3
            },
            550: {
              slidesPerView: 2
            },
            0: {
              slidesPerView: 1,
              pagination: true
            }
          }}
          className="mySwiper1"
        >
          {popularProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <PopularProductItem {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default PopularProducts;
