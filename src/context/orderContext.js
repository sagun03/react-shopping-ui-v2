import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState([]);

  return (
    <OrderContext.Provider value={{ orderData, setOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};
export const useOrderContext = () => {
  return useContext(OrderContext);
};
OrderProvider.propTypes = {
  children: PropTypes.node.isRequired
};
