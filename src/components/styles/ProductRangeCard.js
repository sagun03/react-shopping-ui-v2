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
  transition: opacity 0.5s ease;
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
  position: relative;
  height: 60%;

  &:hover ${Info} {
    opacity: 1;
  }
`;

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
  transition: background-color 0.5s ease, transform 0.5s ease;
  
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
    transform: scale(1.1);
  }
`;

export { WrapperContainer, Container, Image, Info, Icon, Content, CustomButton };
