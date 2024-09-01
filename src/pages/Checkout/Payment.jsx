import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styled from "styled-components";
import Layout from "../../components/checkout/Layout";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [emailInput, setEmailInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    const amount = Math.round(2000.94 * 100);
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js or clientSecret has not loaded yet
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // setErrorMessage(submitError);
      return;
    }

    const res = await fetch("http://localhost:4000/jk/payment/createPayment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount // Pass the amount here
      })
    });
    const data = await res.json();
    const clientSecret = data.data.clientSecret
    // Use the clientSecret and Elements instance to confirm the setup
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "http://localhost:3000/dev1/cart"
      }
    });

    if (error) {
      setErrorMessage(error.message);
      console.log("[error]", error);
    } else {
      setErrorMessage("");
      // Payment succeeded, handle accordingly
      console.log("Payment confirmed");
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email-input">Email</Label>
          <InputWrapper>
            <Input
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              type="email"
              id="email-input"
              placeholder="johndoe@gmail.com"
              required
            />
          </InputWrapper>
        </FormGroup>
        <PaymentElement/>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button type="submit" disabled={!stripe || !elements || !emailInput }>
          Pay
        </Button>
      </Form>
    </Layout>
  );
};

// Styled Components
const Form = styled.form`
  padding: 2rem;
  width: 100%;
  max-width: 600px; /* Restrict width on larger screens */
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 600;
  color: #212529;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 14px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #ced4da;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  padding: 14px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 18px;
  width: 100%;
  margin-top: 1rem; /* Adjust spacing */
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #e9ecef;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  margin-top: 1rem;
  font-size: 14px;
`;

export default Payment;
