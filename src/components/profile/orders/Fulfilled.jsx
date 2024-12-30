import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Refresh } from "@mui/icons-material";
import {
  Container,
  Body,
  OrderCard,
  Header,
  BodyContent,
  Footer,
  ButtonStyled,
  StatusIcon,
  ErrorIcon,
  Sidebar,
  SidebarItem,
  OrderDetails,
  ItemImage,
  ItemContainer
} from "./styles";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const orderData = useSelector((state) => state.order.orderData);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (orderData && orders.length === 0) {
      console.log("insideeeeeee", orderData);
      setOrders(Array.isArray(orderData) ? orderData : [orderData]);
    }
  }, [orderData]);

  return (
    <Container>
      <Body>
        <OrderDetails>
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <OrderCard key={order.orderID}>
                <Header>
                  <Typography variant="h6">Order #{order.orderID}</Typography>
                  <Typography variant="body2">Order Date: {order.orderDate}</Typography>
                  <Typography variant="body2">Total Amount: ${order.totalAmount}</Typography>
                  <ButtonStyled variant="outlined">View Order Details</ButtonStyled>
                  <ButtonStyled variant="outlined">Invoice</ButtonStyled>
                </Header>
                <BodyContent>
                  <div>
                    <Typography variant="body1">
                      Status: {order.status}{" "}
                      {order.status === "Delivered" ? <StatusIcon /> : <ErrorIcon />}
                    </Typography>
                    {order.products.map((product, index) => (
                      <Box key={index} mb={2}>
                        {product.productDetails.sizes.map((size, sizeIndex) => (
                          <ItemContainer key={sizeIndex}>
                            <ItemImage src={size.images[0]} alt={product.productDetails.name} />
                            <Box>
                              <Typography variant="body2">{product.productDetails.name}</Typography>
                              <Typography variant="body2">Quantity: {product.quantity}</Typography>
                              <Typography variant="body2">Subtotal: ${product.subTotal}</Typography>
                              <Typography variant="body2">
                                Return or Replace Items: Eligible through {size.returnBy || "N/A"}
                              </Typography>
                              <ButtonStyled variant="outlined">View Item</ButtonStyled>
                              <ButtonStyled variant="outlined">Buy Again</ButtonStyled>
                            </Box>
                          </ItemContainer>
                        ))}
                      </Box>
                    ))}
                  </div>
                  <Sidebar>
                    <SidebarItem variant="outlined">Track Package</SidebarItem>
                    <SidebarItem variant="outlined">Return Items</SidebarItem>
                    <SidebarItem variant="outlined">Write a Product Review</SidebarItem>
                  </Sidebar>
                </BodyContent>
                <Footer>
                  <ButtonStyled variant="outlined" startIcon={<Refresh />}>
                    Refresh
                  </ButtonStyled>
                  <ButtonStyled variant="outlined">Share Gift Receipt</ButtonStyled>
                </Footer>
              </OrderCard>
            ))
          ) : (
            <Typography>No orders available</Typography>
          )}
        </OrderDetails>
      </Body>
    </Container>
  );
};

export default OrderPage;
