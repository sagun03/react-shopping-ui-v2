import React, { useState } from "react";
import { PaymentElement, useElements } from "@stripe/react-stripe-js";
import { PanelContainer } from "../../components/address/styles";
import {
  Form,
  FormGroup,
  Label,
  InputWrapper,
  Input,
  Button,
  ErrorMessage
} from "../../components/styles/Payment";
import { usePayment } from "../../hooks/usePayment";
import { useSelector } from "react-redux";
import { useUserContext } from "../../context/UserContext";
import { useAddressContext } from "../../components/address/DataProvider";
import { Backdrop, CircularProgress } from "@mui/material";

const PaymentComponent = () => {
  const { total: amount, products } = useSelector((state) => state.cart);
  const { user } = useUserContext();
  const { selectedAddress = 0, address } = useAddressContext();
  const pointsUsed = 0; // need to take care when points are implemented
  console.log("user", user, "total", amount, selectedAddress, address);
  const [emailInput, setEmailInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const elements = useElements();
  const addresId = address[selectedAddress]?._id;
  const formattedProducts = products.map((product) => ({
    productID: product.productId,
    Quantity: product.quantity,
    UnitPrice: product.unitPrice,
    subTotal: (product.unitPrice * product.quantity).toFixed(2),
    size: product.size
  }));
  const {
    createPaymentIntent,
    isInitializingPayment,
    isPaymentInitiated,
    isError,
    error
  } = usePayment(amount, user, formattedProducts, pointsUsed, addresId);

  const handleEmailChange = (e) => setEmailInput(e.target.value);

  const handlePaymentClick = async (e) => {
    e.preventDefault();

    if (!emailInput) {
      setErrorMessage("Please enter your email.");
      return;
    }

    setErrorMessage("");
    // Only initiate payment if it hasn't already been initiated
    if (!isPaymentInitiated) {
      try {
        // Submit the PaymentElement
        const { error } = await elements.submit();

        if (error) {
          console.error("Error submitting payment element:", error);
          setErrorMessage(
            "Payment method submission failed. Please try again."
          );
          return;
        }

        // Proceed to create the payment intent
        createPaymentIntent();
      } catch (err) {
        console.error("Unexpected error:", err);
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <>
      <PanelContainer>
        <Form onSubmit={handlePaymentClick}>
          <FormGroup>
            <Label htmlFor="email-input">Email</Label>
            <InputWrapper>
              <Input
                value={emailInput}
                onChange={handleEmailChange}
                type="email"
                id="email-input"
                placeholder="johndoe@gmail.com"
                required
              />
            </InputWrapper>
          </FormGroup>

          <PaymentElement />

          {isError && <ErrorMessage>{error?.message}</ErrorMessage>}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button
            type="submit"
            disabled={isInitializingPayment || isPaymentInitiated}
          >
            {isInitializingPayment ? "Processing..." : "Pay"}
          </Button>
        </Form>
      </PanelContainer>
      <Backdrop open={isPaymentInitiated} sx={{ zIndex: 999999 }}>
        <CircularProgress sx={{ color: "#022E70" }} />
      </Backdrop>
    </>
  );
};

export default PaymentComponent;
