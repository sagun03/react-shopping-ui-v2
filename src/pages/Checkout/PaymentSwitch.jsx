import React from "react";
import CheckoutSwitcher from "./CheckoutSwitcher";
import Payment from "./Payment";
const PaymentSwitch = () => {
  return (
    <CheckoutSwitcher>
      <Payment />
    </CheckoutSwitcher>
  );
}

export default PaymentSwitch;
