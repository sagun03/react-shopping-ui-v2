import { collection, getDocs } from "firebase/firestore";
import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useUserAuth } from "../context/UserAuthContext";
import Review from "./Review";
import { mobile } from "../responsive";
import Loader from "./Loader";
import OrderPage from "../pages/OrderPage";
import useFetchOrderData from "../hooks/custom hooks/useFetchOrderData";
import { useOrderContext } from "../context/orderContext";
import { useUserContext } from "../context/UserContext";

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: fit-content;
  flex-wrap: wrap;
  margin: 30px 40px 60px;
  padding: 20px;
  gap: 2rem;
  background: #bde0ff;
  // width: 90%;
  // display: grid;
  // grid-template-columns: 25% auto;
  ${mobile({
    flexDirection: "column",
    margin: "30px 5px 10px"
  })}
`;

const OrderWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 350px;
  margin-top: 20px;
  padding: 20px;
  background: #e2eaff;
  ${mobile({
    height: "450px"
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-top: 100px;
`;

const OrdersComponent = () => {
  const ordersCollectionRef = collection(db, "order");
  const user = useUserContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);
  const dataFetched = useFetchOrderData(user);
  const { setOrderData, orderData } = useOrderContext();
  useEffect(() => {
    if (orderData.length === 0 && dataFetched && user) {
      setOrderData(dataFetched);
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
      setLoading(false);
      setUserOrders(userOrder);
    } catch (err) {
      setLoading(false);
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
