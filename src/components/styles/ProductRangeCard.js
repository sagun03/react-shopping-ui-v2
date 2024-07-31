import { ScreenWith670px, mobile } from "../../responsive";
import styled from "styled-components";
import { Button } from "@mui/material";

const Info = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
  gap: 2rem;
`;
const WrapperContainer = styled.div`
  height: 22rem;
  margin: 20px;
  position: relative;
  overflow: visible;
  ${ScreenWith670px({
    margin: 0,
    height: "25rem"
  })}
`;

const Content = styled.div`
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
  margin: 10px;
`;

const Container = styled.div`
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: #f5f5f5;
  // background-image linear-gradient(315deg, #e7eff9 0%, #cfd6e6 74%);
  // background-image: linear-gradient(
  //   95.2deg,
  //   rgba(173, 252, 234, 1) 26.8%,
  //   rgba(192, 229, 246, 1) 64%
  // );
  position: relative;
  height: 60%;
  // box-shadow: rgba(50, 50, 93, 0.1) 5px 13px 27px -5px,
  //   rgba(0, 0, 0, 0.2) 0px 8px 16px -8px;

  &:hover ${Info} {
    opacity: 1;
  }
`;
// const Circle = styled.div`
//   width: 8rem;
//   height: 7rem;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;

const Image = styled.img`
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const CustomButton = styled(Button)`
  &.MuiButton-root {
    transition: transform 2s;
    font-size: 11px;
    border-radius: 15px;
    ${mobile({
      fontSize: "13px"
    })}
  }
  &:hover {
    box-shadow: none;
    // background-color: #0062cc;
    // border-color: #0396ff;
    transform: scale(1.1);
  }
`;

export { WrapperContainer, Container, Image, Info, Icon, Content, CustomButton };
