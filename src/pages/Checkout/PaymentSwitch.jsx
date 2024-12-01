import React from "react";
import CheckoutSwitcher from "./CheckoutSwitcher";
import PaymentWithElements from "./PaymentWithElements";
import Layout from "../../components/checkout/Layout";
const PaymentSwitch = () => {
  return (
    <CheckoutSwitcher>
      <Layout>
      <PaymentWithElements />
      </Layout>
    </CheckoutSwitcher>
  );
}

export default PaymentSwitch;
