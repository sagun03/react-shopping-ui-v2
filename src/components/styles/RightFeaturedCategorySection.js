import styled from "styled-components";
import {
  mobile,
  ScreenWith1080px,
  ScreenWith1200px,
  ScreenWith1470px,
  ScreenWith1670px,
  ScreenWith670px,
  ScreenWith960px
} from "../../responsive";

const Container = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  overflow: visible;
  flex-direction: column;
  gap: 2rem;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 230px;
  transition: transform 2s;

  &:hover {
    transform: scale(1.25);
  }
  ${ScreenWith1670px({ height: "180px" })}
  ${ScreenWith1470px({ height: "165px" })}
  ${ScreenWith1200px({ height: "157px" })}
  ${ScreenWith1080px({ height: "123px" })}
  ${ScreenWith960px({ height: "220px" })}
  ${ScreenWith670px({ height: "230px" })}
  ${mobile({ height: "115px" })}
  ${(p) => (p.fc ? mobile({ position: "relative", bottom: "-57px" }) : "")}
`;

const Image = styled.img`
  display: block;
  width: 210px;
  height: 100%;
  bottom: ${(p) => (p.fc ? 0 : 10)}%;
  right: ${(p) => (p.fc ? 0 : 10)}%;
  overflow: hidden;
  position: relative;

  ${ScreenWith1470px({ width: "170px" })}
  ${ScreenWith1200px({ width: "150px" })}
  ${ScreenWith1080px({ width: "130px" })}
  ${ScreenWith960px({ width: "210px" })}
  ${ScreenWith670px({ width: "170px" })}
  ${mobile({ width: "130px" })}
`;

const ChildContainer = styled.div`
  height: 50%;
  display: flex;
  cursor: pointer;
  pointer-events: all;
  transition: transform 2s;

  &:hover ${ImgContainer} {
    transform: scale(1.2);
  }
`;

const InfoContainer = styled.div`
  padding: 2rem;
  ${ScreenWith1670px({ padding: "1.5rem" })}
  ${ScreenWith1200px({ padding: "1rem" })}
  ${ScreenWith960px({ padding: "2rem" })}
  ${ScreenWith670px({ padding: "1.75rem" })}
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: ${(p) => (p.fc ? "space-between" : "space-around")};
  background-color: #${(props) => props.bg};
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: 400;
  ${ScreenWith1470px({ fontSize: "35px" })}
  ${ScreenWith1200px({ fontSize: "25px" })}
  ${ScreenWith1080px({ fontSize: "30px" })}
  ${ScreenWith960px({ fontSize: "40px" })}
  ${ScreenWith670px({ fontSize: "30px" })}
  ${mobile({ fontSize: "30px" })}
`;

const Desc = styled.p`
  margin-top: 45px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.6;

  ${ScreenWith1670px({ marginTop: "20px" })}
  ${ScreenWith1470px({ fontSize: "12px" })}
  ${ScreenWith1200px({ fontSize: "12px", marginTop: "15px" })}
  ${ScreenWith1080px({ fontSize: "8px" })}
  ${ScreenWith960px({ fontSize: "18px" })}
  ${ScreenWith670px({ fontSize: "18px" })}
  ${mobile({ fontSize: "12px" })}
`;

export { Container, ImgContainer, Image, ChildContainer, InfoContainer, Slide, Title, Desc };
