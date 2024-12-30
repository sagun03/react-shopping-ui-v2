import React from "react";
import ReactCompareImage from "react-compare-image";
import LiquidIcon from "@/assets/images/products/virtualLd.png";
import Before from "@/assets/images/before.png";
import After from "@/assets/images/after.png";
import {
  VirtualContainer,
  LeftWrapper,
  LeftHeading,
  LeftDescription,
  LeftBuyNow,
  Image,
  RightWrapper,
  ImageContainer
} from "./styles";
import { Svg } from "@/components/home/try-on/styles";

const Virtual = () => {
  return (
    <>
      <VirtualContainer>
        <LeftWrapper>
          <LeftHeading>Virtual Try-On</LeftHeading>
          <LeftDescription>
            Never Buy the wrong Detergent Again!
          </LeftDescription>
          <LeftBuyNow>Try Now!</LeftBuyNow>
          <Image src={LiquidIcon} />
        </LeftWrapper>

        <RightWrapper>
          <ImageContainer>
            <ReactCompareImage leftImage={After} rightImage={Before} />
          </ImageContainer>
        </RightWrapper>
      </VirtualContainer>
      <Svg
        width="1600"
        height="100"
        viewBox="0 0 1600 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M1198 43.1753C1403.45 43.1753 1600 73.398 1600 73.398V0H0.00012207V50.3484C0.00012207 50.3484 225.015 100 477.6 100C756.866 100 883.158 43.1753 1198 43.1753Z"
            fill="#ffff"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0">
            <path d="M0 0H1600V100H0V0Z" fill="white"></path>
          </clipPath>
        </defs>
      </Svg>
    </>
  );
};

export default Virtual;
