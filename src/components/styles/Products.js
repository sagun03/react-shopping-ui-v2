/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  mobile,
  mobileS,
  mobileSuperSmall,
  ScreenWith670px,
  ScreenWith960px
} from "../../responsive"
import styled from "styled-components"
import Button from "@mui/material/Button"
import productBackground from "../../pages/images/productBackground.jpg"

const Container = styled.div`
  display: flex;
  margin: 3rem auto;
  padding: 0rem 0.5rem;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
// const Image = styled.img`
//   position: relative;
//   left: 50%;
// `;
const Heading = styled.h1`
  font-family: Roboto;
  font-size: 38px;
  padding-left: 4rem;
  font-weight: 400;
  ${mobileS({
    fontSize: "38px"
    // paddingLeft: "30px",
  })}
  ${mobileSuperSmall({
    fontSize: "1.5rem"
    // paddingLeft: "20px",
  })}
`

const ProductsWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 22% auto;

  ${ScreenWith960px({ gridTemplateColumns: "none", gap: "2rem" })}
`
const ProductMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 2rem;
  border: 1px solid #e9e8e8;
  border-radius: 10px;
  padding: 30px;
  height: fit-content;
  ${ScreenWith960px({
    display: "none"
  })};
`
const ProductMenuListMobile = styled.div`
  display: none;

  ${ScreenWith960px({
    display: "flex",
    justifyContent: "center"
  })}
`
const CustomButton = styled(Button)`
  &.MuiButton-root {
    // background-color: #0077CC;
    border-color: #0077CC;
    // color: white;
    &:hover {
      box-shadow: none;
      // background-color: #0062cc;
      border-color: #0396ff;
    }
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.5),
    },
  }
`
const ProductMenu = styled.li`
  &:hover {
    color: #0396ff;
    cursor: pointer;
  }
  font-family: Roboto;
  font-size: ${(props) => (props?.title ? "22px" : "18px")};
  font-weight: 400;
  color: ${(props) => props.selected && "#0396ff"};
`
const ProductImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  height: fit-content;
  gap: 1.5rem;
  // overflow-y: scroll;

  ${ScreenWith960px({
    // height: "70rem",
    gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))"
  })}
  ${ScreenWith670px({
    // height: "auto",
    // overflowY: "unset",
    // display: "block",
  })}
`

const ProductHeader = styled.div`
  padding: 20px 60px;
  border-bottom: 1px solid #d8d8d8;
  ${ScreenWith670px({
    marginTop: "80px"
  })}
`

const ProductHeaderContainer = styled.div`
  max-width: 1300px;
`

const ProductHeaderContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    gap: "1rem"
  })}
`
const ProductHeaderCount = styled.div`
  flex: 1;
  text-align: left;
  padding: 0 1rem;
`
const ProductHeaderLeft = styled.div`
  flex: 1;
  padding: 0 1rem;
`
const ProductHeaderLeftContent = styled.div`
  display: flex;
  justify-content: space-around;
  ${mobile({
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center"
  })}
`
const HeaderLeftSelect = styled.div``
const ProductImageWrapper = styled.div``
const HeaderLeftSearch = styled.div``
const Wrapper = styled.div`
  background-image: url(${productBackground});
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
  // justify-content: center;
  margin-top: 60px;
  padding: 90px 0px;
  // text-align: center;
  ${ScreenWith670px({
    display: "none"
  })}
`

const CircularContainer = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 65%;
  ${mobile({
    top: "250px",
    left: "48.5%"
  })}
`

export {
  Container,
  Heading,
  ProductsWrapper,
  ProductMenuList,
  ProductMenuListMobile,
  ProductMenu,
  ProductImageContainer,
  ProductHeader,
  ProductHeaderContainer,
  ProductHeaderContent,
  ProductHeaderCount,
  ProductHeaderLeft,
  ProductHeaderLeftContent,
  HeaderLeftSelect,
  ProductImageWrapper,
  HeaderLeftSearch,
  Wrapper,
  CircularContainer,
  CustomButton
}
