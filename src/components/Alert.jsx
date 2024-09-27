import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import PropTypes from "prop-types";
const Alert = ({ type, message, open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <MuiAlert elevation={10} variant="filled" onClose={handleClose} severity={type}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

// Define prop types for the component
Alert.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]).isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Alert;
