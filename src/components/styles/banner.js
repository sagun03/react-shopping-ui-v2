import styled, { keyframes } from "styled-components";
import {
  mobileS,
  mobile,
  ScreenWith1200px,
  ScreenWith1470px,
  ScreenWith670px,
  ScreenWith960px
} from "../../responsive";

const BannerContainer = styled.div`
position: relative;
cursor: pointer;
display: inline-block;
margin: 8rem 20rem;
border-radius: 10px;
overflow: hidden;
transition: transform 0.3s ease;
background: url("path-to-background-image.jpg");

&:hover {
  transform: scale(1.05);
}
${ScreenWith1470px({ margin: "5rem 15rem" })}
${ScreenWith1200px({ margin: "3rem 12rem" })}
${ScreenWith960px({ margin: "3rem 8rem" })}
${ScreenWith670px({ margin: "3rem 6rem" })}
${mobile({ margin: "2rem 5rem" })}
${mobileS({ margin: "2em 1rem" })}
`;

const BannerImage = styled.img`
width: 100%;
height: auto;
display: block;
`;

const BannerInfo = styled.div`
position: absolute;
bottom: 10px;
left: 20px;
color: white;
text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
z-index: 2;
`;

const infiniteScroll = keyframes`
from { transform: translateX(0); }
to { transform: translateX(-50%); }
`;

const Container = styled.div`
border-top: 3px solid #000;
border-bottom: 3px solid #000;
background-color: #ffd700;
margin: 10px 0;
width: 100%;
overflow: hidden;
`;

const HorizontalScrollingItems = styled.div`
display: flex;
font-size: 40px;
animation: ${infiniteScroll} 10s linear infinite;
width: 2600px;
${ScreenWith960px({ fontSize: "30px" })}
${ScreenWith670px({ fontSize: "20px" })}
`;

const HorizontalScrollingItem = styled.div`
white-space: nowrap;
flex-shrink: 0;
font-weight: bold;
color: #ff4500;
text-transform: uppercase;
`;

const BannerWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.5s;
  z-index: 2;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const DialogBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  animation: slideIn 0.5s;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
    h2 {
    margin-bottom: 10px;
    }
`;

const ShopNowButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff4500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #de3b00;
    transform: scale(1.05);
  }
`;

export {
  BannerContainer,
  BannerImage,
  BannerInfo,
  BannerWrapper,
  Container,
  HorizontalScrollingItems,
  HorizontalScrollingItem,
  DialogOverlay,
  DialogBox,
  ShopNowButton
};
