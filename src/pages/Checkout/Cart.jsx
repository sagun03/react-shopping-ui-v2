import React from "react";
import Layout from "../../components/checkout/Layout";
import { PanelContainer } from "../../components/address/styles";
import Cart from "../Cart";

const CartComponent = () => {
  return (
    <Layout>
      <PanelContainer>
        <Cart/>
      </PanelContainer>
    </Layout>
  );
}

export default CartComponent;
