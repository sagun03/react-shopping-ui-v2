import styled from "styled-components";
import { mobile } from "@/responsive";

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;
const Image = styled.img`
  transition: transform 2s;
  &:hover {
    transform: scale(1.15);
  }
  cursor: pointer;
  ${mobile({
    width: "300px"
  })}
`;
const Heading = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 400;
`;
const Wrapper = styled.div`
  // background: linear-gradient(
  //   rgba(243, 251, 255, 0) 7.46%,
  //   rgb(214, 237, 255) 56.5%
  // );
  // background: linear-gradient(
  //     0deg,
  //     rgba(242, 246, 255, 0) 0%,
  //     rgb(242, 246, 255) 100%
  //   ),
  //   rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  padding: 0px 0px 50px;
  text-align: center;
`;

export { ImgContainer, Image, Heading, Wrapper };
