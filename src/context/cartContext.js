import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  return useContext(CartContext);
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired // Validate that children is passed and is a valid React node
};
