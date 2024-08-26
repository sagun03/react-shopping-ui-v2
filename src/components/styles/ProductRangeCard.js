import { ScreenWith1080px, ScreenWith670px, ScreenWith960px, mobile } from "../../responsive";
import styled from "styled-components";
import { Button } from "@mui/material";
import { AddShoppingCart, SearchOutlined } from "@mui/icons-material";

const Info = styled.div`
  width: 100%;
  z-index: 3;
  display: flex;
  transition: all 0.5s ease;
  margin-top: 10px;
`;
const WrapperContainer = styled.div`
  height: 550px;
  margin: 5px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor:  ${({ isOutOfStock }) => (isOutOfStock ? "not-allowed" : "pointer")};
  transition: all 0.5s ease;
  ${ScreenWith670px({
    margin: 0,
    height: "450px"
  })}
  ${mobile({
    margin: 0,
    height: "400px"
  })}
    ${ScreenWith1080px({
    height: "500px"
  })}

  
  &:hover {
    background-color: #f0f0f0;
  }
  border-left: 1px solid #f0f0f0;
  border-right: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
`;

const AddToCartIcon = styled(AddShoppingCart)`
  font-size: medium !important;
`;

const SearchIcon = styled(SearchOutlined)`
  font-size: medium !important;
`;

const ContentContainer = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin: 10px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: center;
  position: relative;
  height: 60%;

  ${mobile({
    height: "50%"
  })}
  ${ScreenWith670px({
    height: "52%"
  })}
  ${ScreenWith1080px({
    height: "53%"
  })}

  background-color: #F6F6F6;
  transition: all 0.5s ease;
  &:hover {
    background-color: #dddddd;
  }
`;

const Image = styled.img`
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: ${({ isOutOfStock }) => (isOutOfStock ? "blur(2.5px)" : "none")};
`;

const Icon = styled.div`
  width: 30px;
  height: 20px;
  // border-radius: 50%;
  // background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  // margin: 5px;
  transition: all 0.4s ease;
  opacity: 1;
  padding: 0;
  background-color: rgb(255,178,2) 
   &:hover {
     background-color: rgb(255,178,2);;
    transform: scale(1.2);
   }
`;

const ProductName = styled.p`
  font-weight: 500;
  font-size: 1.3rem;
  align-items: left;

  ${mobile({
    fontSize: ".8rem"
  })}
  ${ScreenWith670px({
    fontSize: "1rem"
  })}
`;

const ProductSize = styled.span`
  margin-top: 3px;
  font-size: 1.3rem;
  font-weight: 400;

  ${mobile({
    fontSize: ".8rem"
  })}
  ${ScreenWith670px({
    fontSize: "1rem"
  })}
`;

const PriceContainer = styled.div`
  display: flex;
  font-size: 1rem;
  margin-top: 10px;
  font-weight: 500;
  align-items: center;
`;

const OriginalPrice = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  text-decoration: line-through;
  display: flex;
  align-items: center;
  margin-right: 5px;
  color: #615f5f;

  ${mobile({
    fontSize: ".7rem"
  })}
  ${ScreenWith670px({
    fontSize: ".9rem"
  })}
`;

const DiscountedPrice = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  ${mobile({
    fontSize: ".8rem"
  })}
  ${ScreenWith670px({
    fontSize: "1rem"
  })}
`;

const AddToCartContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CustomButton = styled(Button)`
  &.MuiButton-root {
    transition: all 0.4s ease;
    font-size: 15px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    display: flex;
    justify-content: center;
    gap: 5px;
    ${mobile({
      fontSize: "10px !important"
    })}
    ${ScreenWith960px({
      fontSize: "13px"
    })}
    color: white;
    background-color: ${({ isOutOfStock }) =>
      isOutOfStock ? "blur(0px)" : "rgb(250,142,8)"};
  }
  &:hover {
    box-shadow: none;
    border-radius: 5px;
    color: black;
    background-color: rgb(255, 178, 2) !important;
    transform: scale(1.1);
  }
`;

const OutOfStockLabel = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  background-color: white;
  color: red;
  padding: 0px 20px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  border: 2px solid red; /* Red border */
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  width: 150px;
  height: 50px;
  text-align: center;
  ${mobile({
    fontSize: "0.7rem",
    height: "40px",
    padding: "0px 10px",
    width: "50%"
  })}
`;

const BannerText = styled.div`
  position: relative;
  z-index: 21;
  text-align: center;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  gap: 2px;
`;

const RatingStars = styled.div`
  display: flex;
  align-items: center;
  // margin-right: 8px;
`;

const SingleStar = styled.span`
  font-size: 16px;
  color: #f5c518;
  margin-right: 2px;
  ${mobile({
    fontSize: ".7rem"
  })}
`;

const FilledStars = styled.div`
  display: flex;
  align-items: center;

  .star {
    font-size: 16px;
    color: #ccc;
    margin-right: 2px;
  }

  .star.filled {
    color: #f5c518;
  }
`;

const RatingText = styled.span`
  font-size: 0.85rem;
  font-weight: 200;
  color: #615f5f;
  ${mobile({
    fontSize: ".7rem"
  })}
`;

const DiscountText = styled.span`
  ${mobile({
    fontSize: ".8rem",
    padding: "2px 5px",
    width: "fit-content",
    marginLeft: "5px"
  })}
  ${ScreenWith670px({
    fontSize: "1rem",
    marginLeft: "5px"
  })}
  font-size: 1.3rem;
  color: green;
  padding: 2px 5px;
  font-weight: bold;
  margin-left: 10px;
  border: 1px solid green;
`;

export {
  WrapperContainer,
  Container,
  Image,
  Info,
  Icon,
  OriginalPrice,
  ContentContainer,
  CustomButton,
  PriceContainer,
  AddToCartContainer,
  DiscountedPrice,
  ProductName,
  ProductSize,
  OutOfStockLabel,
  AddToCartIcon,
  SearchIcon,
  BannerText,
  RatingContainer,
  RatingStars,
  RatingText,
  SingleStar,
  FilledStars,
  DiscountText
};
