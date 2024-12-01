import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/nav/NavBar";
import NewsLetter from "../components/NewsLetter";
import OrdersComponent from "../components/OrdersComponent";
import BottomNav from "../components/BottomNav";
import { Helmet } from "react-helmet-async";

const Orders = () => {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  return (
    <>
     <Helmet>
        <title>Orders</title>
        <link rel="canonical" href="/orders" />
      </Helmet>
      <Announcement />
      <NavBar />
      <OrdersComponent />
      <NewsLetter />
      <Footer />
      <BottomNav />
    </>
  );
};

export default Orders;
