import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment"; // Adjust the path as necessary
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51PpleTJa3sSyG0AeHRsVn49bUxpxWuSjfYFziblhOdAi4V007AVBsudO9HM67IKo9nmS5ADtJYSzlozCnJGpCPGh00oy3FW9SN");

const PaymentWithElements = () => {
  const options = {
    mode: "payment",
    currency: "cad",
    amount: 2000
  };
  return (
      <Elements stripe={stripePromise} options={options}>
        <Payment />
      </Elements>

  )
};

export default PaymentWithElements;
