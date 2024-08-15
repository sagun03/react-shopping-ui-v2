import { useEffect, useState } from "react";
import { useOrder } from "../useOrder";

const useFetchOrderData = (user) => {
  console.log("innnnnn")
  const [dataFetched, setDataFetched] = useState(null);
  const { data: orderItems, isLoading } = useOrder(user);

  useEffect(() => {
    if (!isLoading && orderItems) {
      setDataFetched(orderItems);
    }
  }, [orderItems, isLoading]);

  return dataFetched;
};

export default useFetchOrderData;
