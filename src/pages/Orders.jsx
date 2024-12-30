import React, { useEffect } from "react";
import Announcement from "@/components/common/annoucements/Index";
import Footer from "@/components/common/layouts/Footer";
import NavBar from "@/components/common/navigation/Top/Index";
import NewsLetter from "@/components/common/newsletter/Index";
import OrdersComponent from "@/components/profile/orders/LookUp";
import BottomNav from "@/components/common/navigation/Bottom";
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
      <NavBar />
      <Announcement />
      <OrdersComponent />
      <NewsLetter />
      <Footer />
      <BottomNav />
    </>
  );
};

export default Orders;
