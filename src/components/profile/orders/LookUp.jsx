import { collection, getDocs } from "firebase/firestore";
import React, { useState, useCallback, useEffect } from "react";
import { db } from "@/firebase";
import OrderPage from "./Fulfilled";
import useFetchOrderData from "@/hooks/custom/useFetchCartData";
import { useSelector, useDispatch } from "react-redux";
import { setOrderData } from "@/store/slices/orderSlice";
import { Wrapper, Title } from "./styles";

const OrdersComponent = () => {
  const ordersCollectionRef = collection(db, "order");
  const user = useSelector((state) => state.user.currentUser);
  // const [ loading , setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);
  const dataFetched = useFetchOrderData(user);
  const orderData = useSelector((state) => state.order.orderData);
  useEffect(() => {
    if (orderData.length === 0 && dataFetched && user) {
      dispatch(setOrderData(dataFetched));
    }
  }, [orderData, dataFetched, setOrderData]);

  const [userOrders, setUserOrders] = useState(undefined);
  const getOrders = useCallback(async () => {
    try {
      const data = await getDocs(ordersCollectionRef);
      const orders = data?.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const userOrder = orders?.filter(
        (order) => order?.userId === user[0]?.uid
      );
      // setLoading(false);
      setUserOrders(userOrder);
    } catch (err) {
      // setLoading(false);
      console.log(err);
    }
  }, [ordersCollectionRef, user]);
  useEffect(() => {
    if (!userOrders) {
      getOrders();
    }
  });
  return (
    <>
      <Title>Your Orders</Title>
      {orderData ? <OrderPage/> : <Wrapper>No orders yet... but I can smell them coming!</Wrapper>}
    </>
  );
};

export default OrdersComponent;
