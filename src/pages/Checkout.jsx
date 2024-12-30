import React from "react";//, { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router";
import AddressPanel from "@/components/checkout/address/Index";
import PaymentWithElements from "@/components/checkout/payment/Index";
import Cart from "@/components/checkout/cart/Index";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/checkout/Layout";
import { PanelContainer } from "@/components/checkout/address/styles";

const Checkout = () => {
  // Select activeStep and stepLinks from Redux store
  const { activeStep, steps } = useSelector((state) => state.stepper);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (steps[activeStep]?.link) {
  //     navigate(steps[activeStep].link, { replace: true });
  //   }
  // }, [activeStep, navigate, steps]);

  return (
    <>
      <Helmet>
        <title>Checkout</title>
        <link rel="canonical" href="/checkout" />
      </Helmet>

      <Layout>
        {
          activeStep === 0 ? <Cart />
            : activeStep === 1 ? <PanelContainer>
              <AddressPanel />
            </PanelContainer> : <PanelContainer>
              <PaymentWithElements />
            </PanelContainer>
        }
      </Layout>
    </>
  );
};

export default Checkout;
