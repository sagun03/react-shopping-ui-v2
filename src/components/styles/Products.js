/* eslint-disable import/export */
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
  position: relative;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  ${mobile({
    margin: "2rem auto",
    gap: "1.5rem"
  })}
`

const Heading = styled.h1`
  font-family: Roboto;
  font-size: 38px;
  padding-left: 3rem; /* Reduced padding-left */
  font-weight: 400;

  ${mobileS({
    fontSize: "30px",
    paddingLeft: "1.5rem"
  })}
  ${mobileSuperSmall({
    fontSize: "24px",
    paddingLeft: "1rem"
  })}
`

const ProductsWrapper = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 22% auto;
  gap: 1rem;

  ${ScreenWith960px({
    gridTemplateColumns: "none"
  })}
  ${mobile({
    gridTemplateColumns: "1fr",
    gap: "1rem"
  })}
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
  })}
  ${mobile({
    fontSize: "1rem",
    padding: "20px"
  })}
`

const ProductMenuListMobile = styled.div`
  display: none;

  ${ScreenWith960px({
    display: "flex",
    justifyContent: "center"
  })}
  ${mobile({
    justifyContent: "space-around",
    padding: "1rem"
  })}
`

const CustomButton = styled(Button)`
  &.MuiButton-root {
    border-color: #0077cc;

    &:hover {
      box-shadow: none;
      border-color: #0396ff;
    }
    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5),
    }
  }

  ${mobile({
    fontSize: "0.8rem",
    padding: "0.5rem 1rem"
  })}
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

  ${mobile({
    fontSize: "1rem"
  })}
`

const ProductImageContainer = styled.div`
  display: grid;
  margin-top: 1rem; /* Reduced margin-top */
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  height: fit-content;
  gap: 0.7rem;

  ${ScreenWith960px({
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"
  })}
  ${mobile({
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "0.5rem"
  })}
`

const ProductHeader = styled.div`
  padding: 20px 60px;
  border-bottom: 1px solid #d8d8d8;

  ${ScreenWith670px({
    marginTop: "80px"
  })}
  ${mobile({
    padding: "10px 20px",
    textAlign: "center"
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
  display: flex;
  margin-top: 60px;
  padding: 90px 0px;

  ${ScreenWith670px({
    display: "none"
  })}
  ${mobile({
    padding: "50px 0px"
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
