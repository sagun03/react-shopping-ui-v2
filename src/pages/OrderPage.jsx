import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Box, Typography, Card, CardContent, CardActions } from "@mui/material";
import { CheckCircle, Error, Refresh } from "@mui/icons-material";
import { useOrderContext } from "../context/orderContext";
// Styled Components
const Container = styled("div")({
  padding: "20px",
  maxWidth: "1200px",
  margin: "auto",
  display: "flex", // Added
  justifyContent: "center" // Added
});

const Body = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "200%",
  "@media (min-width:600px)": {
    flexDirection: "row"
  }
});

const OrderCard = styled(Card)({
  display: "contents",
  marginBottom: "20px",
  borderRadius: "8px",
  "@media (min-width:600px)": {
    marginRight: "20px",
    width: "calc(100% - 270px)" // Adjust width to leave space for the sidebar
  }
});

const Header = styled(CardContent)({
  backgroundColor: "#f4f4f4",
  borderBottom: "1px solid #ddd",
  padding: "15px"
});

const BodyContent = styled(CardContent)({
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  "@media (min-width:600px)": {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

const Footer = styled(CardActions)({
  padding: "15px",
  borderTop: "1px solid #ddd"
});

const ButtonStyled = styled(Button)({
  margin: "5px"
});

const StatusIcon = styled(CheckCircle)({
  color: "green"
});

const ErrorIcon = styled(Error)({
  color: "red"
});

const Sidebar = styled(Box)({
  width: "100%",
  borderRadius: "8px",
  "@media (min-width:600px)": {
    width: "250px",
    position: "sticky",
    top: "20px"
  }
});

const SidebarItem = styled(Button)({
  margin: "10px 0",
  width: "100%"
});

const OrderDetails = styled(Box)({
  flex: 2
});

const ItemImage = styled("img")({
  width: "100px",
  height: "200px",
  borderRadius: "4px",
  marginRight: "15px",
  "@media (max-width:600px)": {
    width: "80px"
  }
});

const ItemContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px"
});

const OrderPage = () => {
  const { orderData } = useOrderContext();
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
