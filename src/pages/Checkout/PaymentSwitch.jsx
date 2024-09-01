import React from "react";
import CheckoutSwitcher from "./CheckoutSwitcher";
import PaymentWithElements from "./PaymentWithElements";
const PaymentSwitch = () => {
  return (
    <CheckoutSwitcher>
      <PaymentWithElements />
    </CheckoutSwitcher>
  );
}

export default PaymentSwitch;
