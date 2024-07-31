import React from "react";
import HandWash from "./../pages/images/hw.png";
import FloorCleaner from "./../pages/images/fc.png";
import { Link } from "react-router-dom";
import AnimateIn from "../customeHooks/AnimateIn";
import { Container, ImgContainer, Image, ChildContainer, InfoContainer, Slide, Title, Desc } from "./styles/RightFeaturedCategorySection";

const RightFeaturedCategorySection = () => {
  return (
    <Container>
      <ChildContainer>
        <AnimateIn
          to={{
            opacity: 1,
            scale: "1",
            transitionDelay: "0s"
          }}
          from={{
            "-webkit-animation-duration": "1s",
            scale: "0",
            opacity: 0
          }}
          transition="all 1s ease 0s"
        >
          <Link to={"/products?name=handWash&title=Hand Wash"}>
            <Slide bg={"fcf1ed"}>
              <InfoContainer>
                <Title>{"Premium Liquid Soap"}</Title>
                <Desc>
                  {"DON'T COMPROMISE ON CLEANING! GET FLAT 20% ON ORDER ABOVE RS. 200"}
                </Desc>
              </InfoContainer>
              <ImgContainer>
                <Image src={HandWash} />
              </ImgContainer>
            </Slide>
          </Link>
        </AnimateIn>
      </ChildContainer>
      <ChildContainer>
        <AnimateIn
          to={{
            opacity: 1,
            scale: "1",
            transitionDelay: "0.1s"
          }}
          from={{
            "-webkit-animation-duration": "1s",
            scale: "0",
            opacity: 0
          }}
          transition="all 1s ease 0s"
        >
          <Link to={"/products?name=floorCleaner&title=Floor Cleaner"}>
            <Slide fc={true} bg={"F7F7F7"}>
              <ImgContainer fc={true}>
                <Image fc={true} src={FloorCleaner} />
              </ImgContainer>
              <InfoContainer>
                <Title>{"Floor Cleaner"}</Title>
                <Desc>
                  {"DON'T COMPROMISE ON CLEANING! GET FLAT 20% ON ORDER ABOVE RS. 200"}
                </Desc>
              </InfoContainer>
            </Slide>
          </Link>
        </AnimateIn>
      </ChildContainer>
    </Container>
  );
};

export default RightFeaturedCategorySection;
