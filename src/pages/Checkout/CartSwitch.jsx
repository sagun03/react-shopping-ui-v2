import React from "react";
import CheckoutSwitcher from "./CheckoutSwitcher";
import Cart from "./Cart";
const CartSwitch = () => {
  return (
    <CheckoutSwitcher>
      <Cart />
    </CheckoutSwitcher>
  );
}

export default CartSwitch;
