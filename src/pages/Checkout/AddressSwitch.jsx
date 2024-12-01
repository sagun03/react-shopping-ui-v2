import React from "react";
import CheckoutSwitcher from "./CheckoutSwitcher";
import Address from "./Address"
const AddressSwitch = () => {
  return (
    <CheckoutSwitcher>
      <Address />
    </CheckoutSwitcher>
  );
}

export default AddressSwitch;
