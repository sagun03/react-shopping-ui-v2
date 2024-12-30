import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { v4 as uuidv4 } from "uuid";
import "./styles/selector.css";
// import required modules
import { Autoplay } from "swiper";
import { ClouserItems } from "@/utils/data";
import { Link } from "react-router-dom";
import {
  Container,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button
} from "./styles/component"

const Crousel = () => {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Swiper
        effect={"fade"}
        pagination={{
          clickable: true
        }}
        speed={1000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        loop={true}
        modules={[Autoplay]}
        className="myCrousel"
      >
        {ClouserItems.map(
          ({ img, title, desc, name, categoryTitle }, index) => (
            <SwiperSlide className={`slide${index + 1}`} key={uuidv4()}>
              <Slide>
                <ImgContainer className="img">
                  <Image src={img} />
                </ImgContainer>
                <InfoContainer className="info">
                  <Title className="title">{title}</Title>
                  <Desc className="desc">{desc}</Desc>
                  <Link to={`/products?name=${name}&title=${categoryTitle}`}>
                    <Button className="buttton">SHOP NOW</Button>
                  </Link>
                </InfoContainer>
              </Slide>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </Container>
  );
};

export default Crousel;
