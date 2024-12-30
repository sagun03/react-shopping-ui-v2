import {
  mobile,
  ScreenWith670px,
  ScreenWith960px,
  mobileS
} from "@/responsive";
import styled from "styled-components";

const VirtualContainer = styled.div`
  margin: 5rem auto 0rem;
  padding: 5rem 2rem 10rem;
  display: flex;
  justify-content: space-around;
  background: rgb(248, 250, 255);
  ${ScreenWith960px({
    gap: "1rem",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "2rem 0",
    padding: "1rem",
    textAlign: "center"
  })}
  ${mobile({
    margin: "3rem 0",
    padding: "4rem 2rem 3rem"
  })}
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  justify-content: center;
`;
const LeftHeading = styled.span`
  font-size: 2rem;
  text-transform: uppercase;
  display: block;
  font-family: Roboto;
  font-size: 48px;
  font-weight: 400;
`;
const LeftDescription = styled.span`
  font-size: 1.4rem;
  display: block;
  width: 20rem;
  font-family: Roboto;
  font-weight: 300;
`;
const LeftBuyNow = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  font-family: Roboto;
  ${mobile({
    fontSize: "28px",
    fontWeight: "400",
    paddingTop: "2rem"
  })}
`;
const Image = styled.img`
  position: absolute;
  width: 4rem;
  bottom: 4.1rem;
  left: 6.8rem;

  ${ScreenWith960px({
    width: "2rem",
    bottom: "1.8rem",
    left: "8.9rem"
  })}
`;

const RightWrapper = styled.div``; const ImageContainer = styled.div`
  width: 30rem;

  ${ScreenWith960px({
    margin: "2rem auto 4rem"
  })}

  ${ScreenWith670px({
    width: "25rem"
  })}
  ${mobile({
    width: "20rem"
  })}
  ${mobileS({
    width: "18rem"
  })}
`;

const Svg = styled.svg`
  position: relative;
  right: 0px;
  z-index: 0;
  width: 100%;
  height: auto;
  top: auto;
  bottom: 4rem;
  transform: rotateZ(-180deg);
`;

export {
  VirtualContainer,
  LeftWrapper,
  LeftHeading,
  LeftDescription,
  LeftBuyNow,
  Image,
  RightWrapper,
  ImageContainer,
  Svg
};
