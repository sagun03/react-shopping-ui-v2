import React from "react";
import CheckoutSwitcher from "./Checkout/CheckoutSwitcher";
import { Helmet } from "react-helmet-async";

const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>Checkout</title>
        <link rel="canonical" href="/checkout" />
      </Helmet>
      <CheckoutSwitcher />
    </>
  );
};

export default Checkout;
