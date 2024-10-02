import { Button, Link } from "@mui/material";
import { mobile, tablet, ScreenWith670px, ScreenWith960px } from "../../responsive";
import styled from "styled-components";
import { AddShoppingCart, Margin } from "@mui/icons-material";

const Container = styled.div`
  margin-top: 75px;
  ${mobile({ marginTop: "85px" })}
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  min-height: 85vh;
  height: 85vh;
  gap: 4rem;
  ${mobile({ padding: "10px", flexDirection: "column", gap: "2rem" })}
  ${ScreenWith960px({ padding: "10px", minHeight: "100vh", flexDirection: "column", height: "auto" })}
`;

const Image = styled.img`
  width: 60%;
  max-height: 150px;
  object-fit: contain;
  ${mobile({ maxHeight: "200px", width: "90%", paddingTop: "30px" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding-top: 40px;
  margin-right: 50px;
  ${ScreenWith670px({ padding: "0px 10px 0px 20px" })} /* Reduced padding */
  ${mobile({ padding: "10px", marginBottom: "20px" })} /* Reduced padding and margin */
  position: relative;
  ${ScreenWith960px({ height: "600px" })}
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  ${tablet({ fontSize: "2.5rem" })}
  color: #333;
`;

const Desc = styled.p`
  margin: 10px 0;
  line-height: 1.5;
  font-size: 1.2rem;
  ${mobile({ fontSize: "1rem" })}
`;

const Price = styled.div`
  font-size: 1.75rem;
  font-weight: 400;
  color: #333;
  text-decoration: line-through;
  margin-right: 10px;
  ${mobile({ fontSize: "1.5rem" })}
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", alignItems: "flex-start" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: #444;
  margin-right: 10px;
  ${mobile({ fontSize: "1.5rem" })}
`;

const FilterSize = styled.select`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1.2rem;
  background-color: rgb(250,142,8);
  color: white;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #D74E00;
  }

  &:focus {
    border-color: #D74E00;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
  ${mobile({ fontSize: ".8rem" })}
`;

const FilterSizeOption = styled.option`
  padding: 8px;
  font-size: 1.5rem;
  color: #333;
  background-color: rgb(250,142,8) !important;

  &:hover {
    background-color: rgb(250,142,8);
  }

  &:active {
    background-color: rgb(250,142,8);
  }
`;

const OverallRatingContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RatingStars = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 1.5rem;
`;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  ${mobile({ flexDirection: "column", width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgb(250,142,8);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const CustomButton = styled(Button)`
  &.MuiButton-root {
    transition: all 0.4s ease;
    font-size: 1.3rem;
    border-radius: 5px;
    flex: 0.5;
    height: 4.5rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 10px;
    text-decoration: none;
    color: ${({ variant }) => (variant === "border" ? "black" : "white")};
    background-color: ${({ isOutOfStock, variant }) =>
      isOutOfStock
        ? "blur(0px)"
        : variant === "border"
        ? "transparent"
        : "#EF5700"};
    border: ${({ variant }) =>
      variant === "border" ? "4px solid #EF5700" : "none"};
    ${mobile({
      height: "2.5rem",
      flex: "none"
    })}
    ${ScreenWith960px({
      fontSize: "13px"
    })}
  }
  &:hover {
    box-shadow: none;
    border-radius: 5px;
    background-color: ${({ variant }) =>
      variant === "border" ? "transparent" : "#D74E00"} !important;
    color: ${({ variant }) => (variant === "border" ? "black" : "white")};
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  flex: 0.5;
  width: 100%;
  ${mobile({ height: "2rem", flex: "none" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 0px;
  margin-left: 30px;
  gap: 2rem; /* Reduced gap for mobile */
  align-items: center;
  ${ScreenWith960px({ flexDirection: "column-reverse", gap: "1.5rem" })} /* Adjust gap */
  ${mobile({ height: "400px", paddingTop: "20px", gap: "1rem" })} /* Further reduced gap for mobile */
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
  ${ScreenWith960px({ height: "600px", width: "100%" })}
  ${mobile({ height: "550px" })}
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 10px 0;
  max-width: 100%;
  ${ScreenWith960px({ flexDirection: "row", gap: "2rem" })}
  ${tablet({ overflowX: "scroll", gap: "1rem", paddingLeft: "20px", width: "95%" })}
`;

const Thumbnail = styled.img`
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border: 2px solid #EF5700;
  }

  &:active {
    transform: scale(1.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  transform: ${({ active }) =>
    active ? "scale(1.1)" : "scale(1)"};
  border: ${({ active }) =>
    active ? "2px solid #EF5700" : "2px solid transparent"};
`;

const ZoomImage = styled.img`
  width: 95%;
  height: auto;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
  ${ScreenWith960px({ height: "90%", boxShadow: "none" })}
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-top: 2rem;
  ${tablet({ flexDirection: "column", gap: "2rem", alignItems: "flex-start" })}
  ${mobile({ gap: "1rem" })}
`;

const DiscountedPrice = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  // color: #e53935;
  margin-right: 10px;
  ${mobile({ fontSize: "1.8rem" })}
`;

const DiscountText = styled.span`
  font-size: 2.0rem;
  color: green;
  padding: 2px 15px;
  font-weight: bold;
  margin-left: 15px;
  border: 1px solid green;
  ${mobile({ fontSize: "1.3rem", marginLeft: "0" })}
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  ${ScreenWith960px({ position: "unset" })}
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1;
  gap: 3rem;
  align-items: center;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", justifyContent: "center", gap: "2rem" })}
`;

const AddToCartIcon = styled(AddShoppingCart)`
  font-size: 1.8rem !important;
`;

const LeftInfoContainer = styled.div`
  overflow-y: scroll;
  height: 100%;
  ${ScreenWith960px({ height: "650px" })}
  ${tablet({ height: "750px" })}
  ${mobile({ height: "fit-content", overflowY: "unset", marginBottom: "20px" })}
`;

const DiscountPercentageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  CustomButton,
  CarouselContainer,
  ZoomImage,
  StyledLink,
  ThumbnailContainer,
  Thumbnail,
  DiscountPercentageContainer,
  OverallRatingContainer,
  RatingStars,
  PriceContainer,
  DiscountedPrice,
  DiscountText,
  StyledButton,
  ButtonContainer,
  ButtonWrapper,
  AddToCartIcon,
  LeftInfoContainer
};
