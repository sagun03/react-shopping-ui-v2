import styled, { keyframes } from "styled-components";
import {
  mobile,
  ScreenWith1080px,
  ScreenWith1200px,
  ScreenWith670px,
  ScreenWith960px
} from "../../responsive";

// Keyframe for zoom in and out animation
const zoomInOutAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

// Main container style
const Container = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  position: relative;
  overflow: visible;
`;

// Wrapper for layout and background color
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: inherit;
  background-color: #${(props) => props.bg};
  ${mobile({ flexDirection: "column" })}
`;

// Style for image container with animation
const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 27%;
    left: 8%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    animation: ${zoomInOutAnimation} 5s ease infinite;
    height: 20%;
    width: 96%;
    padding-bottom: 60%;
    background-color: #b5daf0;
    z-index: 0;
  }

  ${mobile({ width: "80px", display: "flex", order: "1" })}
`;

// Style for image with responsive size
const Image = styled.img`
  display: block;
  width: 210px;
  height: 100%;
  object-fit: cover;
  padding-left: 2.1rem;
  z-index: 2;
  animation: ${zoomInOutAnimation} 5s ease infinite;

  ${ScreenWith1200px({ width: "170px" })}
  ${ScreenWith1080px({ width: "150px" })}
  ${ScreenWith960px({ width: "210px" })}
  ${ScreenWith670px({ width: "170px" })}
  ${mobile({ width: "80px", paddingLeft: ".8rem" })}
`;

// Style for info container with responsive padding
const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;

  ${ScreenWith1200px({ padding: "25px" })}
  ${ScreenWith1080px({ padding: "20px" })}
  ${ScreenWith960px({ padding: "30px" })}
  ${ScreenWith670px({ padding: "25px" })}
  ${mobile({ padding: "40px", flex: "0" })}
`;

// Style for the title
const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  text-align: center;

  ${ScreenWith1200px({ fontSize: "30px" })}
  ${ScreenWith1080px({ fontSize: "25px" })}
  ${ScreenWith960px({ fontSize: "40px" })}
  ${ScreenWith670px({ fontSize: "30px" })}
  ${mobile({ fontSize: "30px" })}
`;

// Style for the description text
const Desc = styled.p`
  margin: 50px 0;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 3px;
  text-align: center;

  ${ScreenWith1200px({ fontSize: "15px", margin: "30px 0" })}
  ${ScreenWith1080px({ fontSize: "10px" })}
  ${ScreenWith960px({ fontSize: "15px" })}
  ${ScreenWith670px({ fontSize: "15px" })}
  ${mobile({ fontSize: "15px" })}
`;

// Style for the button with hover effect
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #333;
  color: white;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 2s;
  transition-timing-function: ease;

  &:hover {
    transform: scale(1.1);
  }

  ${ScreenWith1200px({ fontSize: "15px", padding: "5px" })}
  ${ScreenWith1080px({ fontSize: "10px", padding: "5px" })}
  ${ScreenWith960px({ fontSize: "20px", padding: "10px" })}
  ${ScreenWith670px({ fontSize: "15px", padding: "5px" })}
`;

// Style for button container
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export { Container, ImgContainer, Image, InfoContainer, Wrapper, Title, Desc, Button, ButtonContainer };
