import React from "react";
import { Link } from "react-router-dom";
import AnimateIn from "../customeHooks/AnimateIn";
import Liquid2 from "../pages/images/liquid2.png";
import {
  Container,
  ImgContainer,
  Image,
  InfoContainer,
  Wrapper,
  Title,
  Desc,
  Button,
  ButtonContainer
} from "./styles/LeftFeaturedCategorySection";

const LeftFeaturedCategorySection = () => {
  return (
    <Container>
      <Wrapper bg={"f5fafd"}>
        <ImgContainer>
          <Image src={Liquid2} />
        </ImgContainer>
        <InfoContainer>
          <AnimateIn
            to={{
              transform: "translateY(0)",
              opacity: 1,
              transitionDelay: "0.2s"
            }}
            from={{
              "-webkit-animation-duration": "1s",
              transform: "translateY(-30px)",
              opacity: 0
            }}
            transition="all 1s ease 0s"
          >
            <Title>{"Liquid Detergent"}</Title>
          </AnimateIn>
          <AnimateIn
            to={{
              transform: "translateY(0)",
              opacity: 1,
              transitionDelay: "0.3s"
            }}
            from={{
              "-webkit-animation-duration": "1s",
              transform: "translateY(-30px)",
              opacity: 0
            }}
            transition="all 1s ease 0s"
          >
            <Desc>
              {
                "DON'T COMPROMISE ON CLEANING! GET FLAT 20% ON ORDER ABOVE RS. 200"
              }
            </Desc>
          </AnimateIn>
          <AnimateIn
            to={{
              transform: "translateY(0)",
              opacity: 1,
              transitionDelay: "0.5s"
            }}
            from={{
              "-webkit-animation-duration": "1s",
              transform: "translateY(-30px)",
              opacity: 0
            }}
            transition="all 1s ease 0s"
          >
            <Link to={"/products?name=detergent&title=Liquid Detergent"}>
              <ButtonContainer>
                <Button>SHOP NOW</Button>
              </ButtonContainer>
            </Link>
          </AnimateIn>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default LeftFeaturedCategorySection;
