import styled from "styled-components";
import { mobile, ScreenWith670px } from "../../responsive";
import { Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const Container = styled.div``;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px; /* Space between checkbox and label */
  width: 20px;
  height: 20px;
  appearance: none;
  background-color: #eee;
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: teal; /* Color when checked */
    border-color: teal;
  }

  &:checked::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2px;
    width: 8px;
    height: 14px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

const Wrapper = styled.div`
  padding: 2.5rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: whitesmoke;
  margin: 20px;
  position: relative; /* Ensure relative positioning for child elements */
  ${mobile({ flexDirection: "column", gap: "2rem" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${ScreenWith670px({ flexDirection: "column" })}
`;

const Info = styled.div`
  position: relative; /* Ensure relative positioning for child elements */
`;

const CartImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CartImage = styled.img`
  max-width: 100%;
`;

const SelectAllContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const CheckboxesWrapper = styled.div`
  display: flex;
  gap: 20px; // Adjust the spacing between checkboxes
  align-items: center;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  position: relative;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 -4px 6px rgba(0, 0, 0, 0.05),
    4px 0 6px rgba(0, 0, 0, 0.05), -4px 0 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  border-radius: 8px;
`;

const CloseIcon = styled(Close)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #ff4d4d;
  &:hover {
    color: #ff1a1a;
  }
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductName = styled(Typography)`
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

const ProductSize = styled(Typography)`
  font-size: 14px;
  color: #333;
`;

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

const ProductAmount = styled.div`
  font-size: 20px;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductPrice = styled(Typography)`
  font-size: 16px;
  font-weight: 200;
  text-decoration: line-through;
  color: #777;
`;

const ProductPrice2 = styled(Typography)`
  font-size: 18px;
  font-weight: 800;
  color: #333;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0;
`;

export {
  Container,
  Checkbox,
  Wrapper,
  Title,
  Top,
  TopButton,
  Bottom,
  Info,
  CartImageContainer,
  CartImage,
  SelectAllContainer,
  CheckboxesWrapper,
  Product,
  CloseIcon,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  ProductPrice2,
  Hr
};
