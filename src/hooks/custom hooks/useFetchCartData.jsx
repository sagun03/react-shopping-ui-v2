import { useEffect, useState } from "react";
import { useCart } from "../useCart";

const useFetchCartData = (user) => {
  const [dataFetched, setDataFetched] = useState(null);
  const { data: cartItemsData, isLoading } = useCart(user);

  useEffect(() => {
    if (!isLoading && cartItemsData) {
      setDataFetched(cartItemsData);
    }
  }, [cartItemsData, isLoading]);

  return dataFetched;
};

export default useFetchCartData;
