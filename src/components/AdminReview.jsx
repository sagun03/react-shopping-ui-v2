/* eslint-disable react/prop-types */
import React from "react";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledList = styled(List)(({ theme }) => ({
  width: "100%",
  border: "2px solid steelblue",
  height: "180px",
  overflowY: "scroll",
  [theme.breakpoints.down("sm")]: {
    height: "280px"
  }
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  border: "1px solid aliceblue",
  gap: "3rem",
  [theme.breakpoints.down("sm")]: {
    gap: "2rem"
  }
}));

const AdminReview = ({ products, order, updateOrderStatus }) => {
  return (
    <React.Fragment>
      <Typography variant="subtitle1" gutterBottom>
        Date: {order?.date}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        User Id: {order?.userId}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Name and Phone: {order?.name || "n/a"} {order?.phoneNumber || "n/a"}
      </Typography>
      <StyledList disablePadding>
        {products.map((product, index) => (
          <StyledListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={
                <>
                  {index + 1}. {product.title}
                  <> ({product?.quantity})</>
                </>
              }
              secondary={product.size}
            />
            <Typography variant="body2">
              {<> Rs. {product.price} </>}
            </Typography>
          </StyledListItem>
        ))}
        <StyledListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Rs. {order?.total}
          </Typography>
        </StyledListItem>
      </StyledList>
      <Divider />
      <Grid style={{ width: "100%" }}>
        <Grid item>
          <Typography variant="h6" gutterBottom style={{ marginTop: "20px" }}>
            Order Status:
          </Typography>
          <Typography gutterBottom>{order?.status || "Pending"}</Typography>
          <div style={{ display: "flex", gap: ".5rem", flexDirection: "column" }}>
            <Button variant="contained" disabled={order?.status === "Pending"} color="primary" onClick={() => updateOrderStatus(order?.id, "Pending")}>Change status to Pending</Button>
            <Button variant="contained" disabled={order?.status === "Confirmed"} color="primary" onClick={() => updateOrderStatus(order?.id, "Confirmed")}>Change status to Confirmed</Button>
            <Button variant="contained" disabled={order?.status === "Delivered"} color="primary" onClick={() => updateOrderStatus(order?.id, "Delivered")}>Change status to Delivered</Button>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AdminReview;
