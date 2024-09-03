import React from "react";
import Layout from "../../components/checkout/Layout";
import { PanelContainer } from "../../components/address/styles";
import CartMockup from "./CartMockup";

const CartComponent = () => {
  return (
    <Layout>
      <PanelContainer>
        <CartMockup />
      </PanelContainer>
    </Layout>
  );
}

export default CartComponent;
