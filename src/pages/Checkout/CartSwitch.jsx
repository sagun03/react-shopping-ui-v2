import React from "react";
import CheckoutSwitcher from "./CheckoutSwitcher";
import CartComponent from "./Cart";
const CartSwitch = () => {
  return (
    <CheckoutSwitcher>
      <CartComponent />
    </CheckoutSwitcher>
  );
}

export default CartSwitch;
