import React from "react";
import { ErrorBoxContainer } from "./styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PropTypes from "prop-types";

const ErrorBox = ({ children }) => {
  return (
    <ErrorBoxContainer>
      <ErrorOutlineIcon sx={{ fontSize: "2rem" }} />
      {children}
    </ErrorBoxContainer>
  )
}

ErrorBox.propTypes = {
  children: PropTypes.node.isRequired
}

export default ErrorBox;
