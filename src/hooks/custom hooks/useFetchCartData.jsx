import { useEffect, useState } from "react";
import { useCart } from "../useCart";
import { useCartContext } from "../../context/cartContext";
import { clearCart, setCart } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";

const useFetchCartData = (user) => {
  const dispatch = useDispatch();
  const [dataFetched, setDataFetched] = useState(null);
  const cartData = useSelector((state) => state.cart);

  // Only call useCart if cartData is not available
  const shouldFetchCart = cartData.length === 0;

  // Conditionally call useCart if cartData is empty
  const { data: cartItemsData, isLoading } = useCart(user, shouldFetchCart);

  useEffect(() => {
    // dispatch(clearCart())

    console.log("Setting cart items data:", cartItemsData, cartData);
    console.log(cartItemsData?.products?.length !== cartData?.cartResponse?.products?.length)
    dispatch(setCart(cartItemsData))
  }, [cartItemsData, isLoading, cartData.length]);

  return dataFetched;
};

export default useFetchCartData;
