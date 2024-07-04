import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const setProductsData = (newProducts) => {
    setProducts(newProducts);
  };
console.log("products", products)
  return (
    <ProductContext.Provider value={{ products, setProductsData }}>
      {children}
    </ProductContext.Provider>
  );
};
