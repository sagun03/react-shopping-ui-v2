/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { CustomButton } from "./OrderSummary";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useUserAuth } from "../context/UserAuthContext";
import { clearCart } from "../redux/cartRedux";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

const LocationDialogBox = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const ordersCollectionRef = collection(db, "order");

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") return;
    setPincode("");
    setOpen(false);
  };
  const { user } = useUserAuth();
  const cart = useSelector((state) => state.cart);

  const push = async () => {
    if (user) {
      await addDoc(ordersCollectionRef, {
        date: new Date().toLocaleDateString("en-GB"),
        name: user[0]?.displayName || "",
        userId: user[0]?.uid || "",
        emailId: user[0]?.email || "",
        phoneNumber: user[0]?.phoneNumber || "",
        status: "Pending",
        products: cart?.products?.map((item) => ({ title: item?.title, quantity: item?.quantity, size: item?.size, price: item?.price })) || [],
        total: cart?.total < 200
          ? cart?.total
          : cart?.total -
        ((20 / 100) * cart?.total + 0.0).toFixed(2)
      });
    }
  }
  const navigate = useNavigate();

  const handleClick = async () => {
    await push()
    dispatch(clearCart());
    navigate("/orders")
  };
  const [pincode, setPincode] = useState("");

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableEscapeKeyDown
      >
        <DialogTitle id="alert-dialog-title">
          <>
            {"Please Enter your Location Pin code"}:{" "}
            <TextField
              required
              id="pin code"
              name="pin code"
              label="Enter Pin Code here"
              fullWidth
              autoComplete="Pin Code"
              variant="standard"
              onChange={(e) => setPincode(e.target.value)}
            />
          </>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Right now, we`&apos;`re operating exclusive in Dhampur dist. Bijnor
            UP (Pin code: 246761)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "20px"
            }}
          >
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            {pincode === "246761" && (
              <a
                target="_blank"
                href={`https://wa.me/917017932528?text=${encodeURIComponent(
                  `Hi I want to order these items from your website userId: ${
                    (Array.isArray(user) && user[0]?.uid) || ""
                  }, these are the following: \n ${cart?.products?.map(
                    (item, index) =>
                      `${index + 1}: Name: ${item?.title}, Quantity: ${
                        item?.quantity
                      }, Size: ${item?.size}.\n`
                  )}\n Your Final Total Amount is Rs. ${
                    cart?.total < 200
                      ? cart?.total
                      : cart?.total -
                        ((20 / 100) * cart?.total + 0.0).toFixed(2)
                  } ${cart?.total > 200 ? ", with discount of 20%" : ""}
                  `
                )}`}
                rel="noreferrer"
              >
                <CustomButton
                  onClick={() => handleClick()}
                  variant="contained"
                  startIcon={<WhatsAppIcon />}
                >
                  Send Order
                </CustomButton>
              </a>
            )}
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LocationDialogBox;
