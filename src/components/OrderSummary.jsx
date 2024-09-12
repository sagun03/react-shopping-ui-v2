import React, { useState, useEffect, act } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useCartContext } from "../context/cartContext";
import { useStepperContext } from "../context/StepperContext";
import PropTypes from "prop-types";
import { usePointsContext } from "../context/PointsContext";
import { StyledButton } from "./styles/Product";

// Styled components with modern design
const Summary = styled.div`
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  padding: 30px;
  background-color: #ffffff;
  max-width: 400px;
  // position: ${(props) => (props.isFixed ? "fixed" : "none")};
  margin: 0px auto 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  flex:1;

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 25px;
  }
`;

const SummaryTitle = styled.h1`
  font-weight: 600;
  font-size: 1.8rem;
  color: #111;
  text-align: center;
  margin-bottom: 25px;
  border-bottom: 1px solid #e3e3e3;
  padding-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  /* Vertically align text */
  margin: 20px 0;
  padding: 10px 0;
  border-bottom: ${(props) => (props.type === "total" ? "none" : "1px solid #e3e3e3")};
  font-weight: ${(props) => (props.type === "total" ? "700" : "400")};
  font-size: ${(props) => (props.type === "total" ? "1.4rem" : "1.1rem")};
  color: ${(props) => (props.type === "total" ? "#B12704" : "#565959")};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.type === "total" ? "1.2rem" : "1rem")};
    margin: 15px 0;
  }
`;

const PriceText = styled.span`
  color: ${(props) => (props.discount ? "#B12704" : "#111")};
  margin-left: 15px; /* Provides spacing between text and price */
  font-size: ${(props) => (props.type === "total" ? "1.4rem" : "1.1rem")};

  @media (max-width: 768px) {
    font-size: ${(props) => (props.type === "total" ? "1.2rem" : "1rem")};
  }
`;

const DiscountLink = styled.span`
  color: #007185;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
  background-color: #f0c14b !important;
  color: #111 !important;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
  margin-top: 30px;
  padding: 12px !important;

  &:hover {
    background-color: #e7b32e !important;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 10px !important;
    font-size: 1rem !important;
  }
`;

// Main Component
const OrderSummary = () => {
  const { cartData } = useCartContext();
  const { points, setPoints, pointsToCash } = usePointsContext();
  const [pointsDiscount, setPointsDiscount] = useState(0);
  const [discount] = useState(500);
  const [couponDiscount] = useState(300);
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const { activeStep, handleStep } = useStepperContext();

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const totalPrice = cartData?.products?.reduce((acc, item) => {
      const price = item.productDetails.sizes[0].price; // Get the price of the first available size
      return acc + price * item.quantity; // Calculate for each product based on quantity
    }, 0);
    setTotalMRP(totalPrice);
    setTotalAmount(totalPrice); // Assuming no discount for now
  };

  const useMaxPoints = () => {
    const pointsDiscount = Math.round(totalAmount * 0.2);
    console.log(pointsDiscount)
    const cashedPoints = pointsToCash;
    if (cashedPoints >= pointsDiscount) {
      setPointsDiscount(pointsDiscount);
      setTotalAmount(totalAmount => totalAmount - pointsDiscount);
      setPoints(points => points - pointsDiscount * 10);
    } else {
      setPointsDiscount(points * 0.1);
      setTotalAmount(totalAmount => totalAmount - cashedPoints);
      setPoints(0);
    }
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [cartData]);

  const handlePlaceOrder = (step) => () => {
    handleStep(step)();
  };

  return (
    <Summary>
      <SummaryTitle>Price Details</SummaryTitle>

      <SummaryItem>
        <span>Total MRP</span>
        <PriceText>Rs. {totalMRP}</PriceText>
      </SummaryItem>

      <SummaryItem>
        <span>Points</span>
        <PriceText>{points}</PriceText>
        {
          pointsDiscount !== 0 && <PriceText discount>
            - Rs. {pointsDiscount}
          </PriceText>
        }
        {
          totalAmount && <StyledButton onClick={useMaxPoints}>Redeem</StyledButton>
        }
      </SummaryItem>

      <SummaryItem>
        <span>Discount</span>
        <PriceText discount>- Rs. {discount}</PriceText>
        <DiscountLink>See Details</DiscountLink>
      </SummaryItem>

      <SummaryItem>
        <span>Coupon Discount</span>
        <PriceText discount>- Rs. {couponDiscount}</PriceText>
        <DiscountLink>Apply Coupon</DiscountLink>
      </SummaryItem>

      <SummaryItem type="total">
        <span>Total Amount</span>
        <PriceText type="total">Rs. {totalAmount}</PriceText>
      </SummaryItem>

      {
        activeStep === 0 ? <CustomButton variant="contained" onClick={handlePlaceOrder(0)}>
          Place Order
        </CustomButton> : activeStep === 1 ? <CustomButton variant="contained" onClick={handlePlaceOrder(1)}>
          Go to Checkout
        </CustomButton> : null
      }
    </Summary>
  );
};

export default OrderSummary;
