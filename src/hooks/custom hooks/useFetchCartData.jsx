import { useEffect, useState } from "react";
import { useCart } from "../useCart";
import { useCartContext } from "../../context/cartContext";

const useFetchCartData = (user) => {
  const [dataFetched, setDataFetched] = useState(null);
  const { cartData, setCartData, setIsCartData } = useCartContext();

  // Only call useCart if cartData is not available
  const shouldFetchCart = cartData.length === 0;

  // Conditionally call useCart if cartData is empty
  const { data: cartItemsData, isLoading } = useCart(user, shouldFetchCart);

  useEffect(() => {
    if (!isLoading && cartItemsData && cartData.length === 0) {
      console.log("Setting cart items data:", cartItemsData);
      setDataFetched(cartItemsData);
      setIsCartData(true)
      setCartData(cartItemsData); // Update the context with the fetched data
    }
  }, [cartItemsData, isLoading, cartData.length, setCartData]);

  return dataFetched;
};

export default useFetchCartData;
