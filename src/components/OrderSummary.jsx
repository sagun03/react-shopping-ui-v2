import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useCartContext } from "../context/cartContext";
import { useStepperContext } from "../context/StepperContext";
import { usePointsContext } from "../context/PointsContext";
import { StyledButton } from "./styles/Product";
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import {
  Summary,
  SummaryTitle,
  SummaryItem,
  PriceText,
  DiscountLink,
  CouponBadge,
  CustomButton
} from "./styles/orderSummary";

const OrderSummary = () => {
  // const { cartData } = useCartContext();
  const { points, setPoints, pointsToCash } = usePointsContext();
  const { activeStep, handleStep } = useStepperContext();
  const [pointsDiscount, setPointsDiscount] = useState(0);
  const [totalMRP, setTotalMRP] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showCouponField, setShowCouponField] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const banners = useSelector((state) => state.promotions.banners) || [];
  const [discount] = useState(500);

  useEffect(() => {
    const savedCouponCode = localStorage.getItem("appliedCouponCode");
    const savedDiscount = localStorage.getItem("appliedCouponDiscount");

    if (savedCouponCode && savedDiscount) {
      setCouponCode(savedCouponCode);
      setAppliedCoupon(parseFloat(savedDiscount));
    }
  }, []);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const totalPrice = cartData?.total;
    setTotalMRP(totalPrice || 0);
    if (appliedCoupon) {
      setTotalAmount(
        totalPrice - totalPrice * (1 - appliedCoupon / 100)
      );
    } else {
      setTotalAmount(totalPrice);
    }
  };

  const useMaxPoints = () => {
    const pointsDiscount = Math.round(totalAmount * 0.2);
    console.log(pointsDiscount);
    const cashedPoints = pointsToCash;
    if (cashedPoints >= pointsDiscount) {
      setPointsDiscount(pointsDiscount);
      setTotalAmount((totalAmount) => totalAmount - pointsDiscount);
      setPoints((points) => points - pointsDiscount * 10);
    } else {
      setPointsDiscount(points * 0.1);
      setTotalAmount((totalAmount) => totalAmount - cashedPoints);
      setPoints(0);
    }
  };

  // Function to handle coupon code validation
  const handleCouponValidation = (banners) => {
    const banner = banners.find((b) => b.couponCode === couponCode);
    const discountValue = validateCouponCode(couponCode, banner);
    if (discountValue) {
      setAppliedCoupon(discountValue);
      localStorage.setItem("appliedCouponCode", couponCode);
      localStorage.setItem("appliedCouponDiscount", discountValue);
      setTotalAmount(
        (totalAmount) => totalAmount - totalAmount * (discountValue / 100)
      );
      setShowCouponField(false);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid or expired coupon code.");
    }
  };

  // Function to clear applied coupon
  const clearCoupon = () => {
    setTotalAmount(totalAmount => totalMRP * (appliedCoupon / 100) + totalAmount);
    setAppliedCoupon(null);
    setCouponCode("");
    setShowCouponField(true);
    localStorage.removeItem("appliedCouponCode");
    localStorage.removeItem("appliedCouponDiscount");
    calculateTotalPrice();
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartData, appliedCoupon]);

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

      {totalMRP > 0 && (
        <>
          {" "}
          <SummaryItem>
            <span>Points</span>
            <PriceText>{points}</PriceText>
            {pointsDiscount !== 0 && (
              <PriceText discount>- Rs. {pointsDiscount}</PriceText>
            )}
            {totalAmount && (
              <StyledButton onClick={useMaxPoints}>Redeem Points</StyledButton>
            )}
          </SummaryItem>
          {/* will revisit this later */}
          {/* <SummaryItem>
            <span>Discount</span>
            <PriceText discount>- Rs. {discount}</PriceText>
            <DiscountLink>See Details</DiscountLink>
          </SummaryItem> */}
          <SummaryItem>
            <span>Coupon Discount</span>
            {appliedCoupon ? (
              <>
                <PriceText discount>
                  - Rs. {totalMRP * (appliedCoupon / 100)}
                </PriceText>
              </>
            ) : (
              <DiscountLink
                onClick={() => setShowCouponField(!showCouponField)}
              >
                {showCouponField ? "Hide Coupon" : "Have a Coupon?"}
              </DiscountLink>
            )}
          </SummaryItem>
          {appliedCoupon && (
            <SummaryItem>
              <CouponBadge>
                <CheckIcon /> Coupon Applied: {couponCode}
                <ClearIcon
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                  onClick={clearCoupon}
                />
              </CouponBadge>
            </SummaryItem>
          )}
          {showCouponField && (
            <SummaryItem>
              <TextField
                variant="outlined"
                label="Enter Coupon"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                size="small"
                error={!!errorMessage}
                helperText={errorMessage}
              />
              <StyledButton onClick={() => handleCouponValidation(banners)}>
                Apply
              </StyledButton>
            </SummaryItem>
          )}
        </>
      )}

      <SummaryItem type="total">
        <span>Total Amount</span>
        <PriceText type="total">Rs. {totalAmount}</PriceText>
      </SummaryItem>

      {activeStep === 0 ? (
        <CustomButton variant="contained" onClick={handlePlaceOrder(0)} disabled={totalMRP === 0}>
          Place Order
        </CustomButton>
      ) : activeStep === 1 ? (
        <CustomButton variant="contained" onClick={handlePlaceOrder(1)}>
          Go to Checkout
        </CustomButton>
      ) : null}
    </Summary>
  );
};

// Coupon validation function
export const validateCouponCode = (couponCode, banner) => {
  const currentDate = moment();
  const startDate = moment(banner?.startDate);
  const endDate = moment(banner?.endDate);

  if (
    couponCode === banner?.couponCode &&
    currentDate.isBetween(startDate, endDate)
  ) {
    return banner.discount;
  }
  return null;
};

export default OrderSummary;
